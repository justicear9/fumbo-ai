<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['ok' => false, 'error' => 'Method not allowed.']);
  exit;
}

$configFile = __DIR__ . '/contact.config.php';
if (!is_file($configFile)) {
  http_response_code(503);
  echo json_encode(['ok' => false, 'error' => 'Email is not configured yet. Add contact.config.php.']);
  exit;
}

$config = require $configFile;

$host = $_SERVER['HTTP_HOST'] ?? '';
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$referer = $_SERVER['HTTP_REFERER'] ?? '';

$matchesHost = static function (string $url, string $host): bool {
  $parsed = parse_url($url);
  return isset($parsed['host']) && strcasecmp((string) $parsed['host'], $host) === 0;
};

if ($origin !== '') {
  if ($host === '' || !$matchesHost($origin, $host)) {
    http_response_code(403);
    echo json_encode(['ok' => false, 'error' => 'Forbidden.']);
    exit;
  }
} elseif ($referer !== '') {
  if ($host === '' || !$matchesHost($referer, $host)) {
    http_response_code(403);
    echo json_encode(['ok' => false, 'error' => 'Forbidden.']);
    exit;
  }
} else {
  http_response_code(403);
  echo json_encode(['ok' => false, 'error' => 'Forbidden.']);
  exit;
}

$ip = $_SERVER['HTTP_CF_CONNECTING_IP']
  ?? (isset($_SERVER['HTTP_X_FORWARDED_FOR']) ? trim(explode(',', (string) $_SERVER['HTTP_X_FORWARDED_FOR'])[0]) : null)
  ?? ($_SERVER['REMOTE_ADDR'] ?? 'unknown');

$rateFile = rtrim(sys_get_temp_dir(), DIRECTORY_SEPARATOR) . '/fumbo-contact-rate.json';
$now = time();
$window = 15 * 60;
$maxHits = 5;
$hits = [];

if (is_file($rateFile)) {
  $raw = file_get_contents($rateFile);
  $decoded = json_decode($raw ?: '', true);
  if (is_array($decoded)) {
    $hits = $decoded;
  }
}

$recent = array_values(array_filter(
  $hits[$ip] ?? [],
  static fn ($stamp) => is_int($stamp) && ($now - $stamp) < $window
));

if (count($recent) >= $maxHits) {
  $hits[$ip] = $recent;
  file_put_contents($rateFile, json_encode($hits), LOCK_EX);
  http_response_code(429);
  echo json_encode(['ok' => false, 'error' => 'Too many requests. Please wait a few minutes and try again.']);
  exit;
}

$recent[] = $now;
$hits[$ip] = $recent;
file_put_contents($rateFile, json_encode($hits), LOCK_EX);

$rawBody = file_get_contents('php://input') ?: '';
$payload = json_decode($rawBody, true);
if (!is_array($payload)) {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'Invalid request.']);
  exit;
}

$clamp = static function ($value, int $max): string {
  $text = trim((string) $value);
  if (function_exists('mb_substr')) {
    return mb_substr($text, 0, $max);
  }
  return substr($text, 0, $max);
};

$name = $clamp($payload['name'] ?? '', 80);
$email = strtolower($clamp($payload['email'] ?? '', 120));
$company = $clamp($payload['company'] ?? '', 120);
$message = $clamp($payload['message'] ?? '', 4000);
$honeypot = $clamp($payload['website'] ?? '', 200);
$startedAt = (int) ($payload['startedAt'] ?? 0);

if ($honeypot !== '') {
  echo json_encode(['ok' => true]);
  exit;
}

$elapsedMs = (int) round(microtime(true) * 1000) - $startedAt;
if ($startedAt <= 0 || $elapsedMs < 2500 || $elapsedMs > 6 * 60 * 60 * 1000) {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'Please try again.']);
  exit;
}

if (preg_match_all('#https?://#i', $message) >= 4) {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'Please try again.']);
  exit;
}

if ($name === '' || !filter_var($email, FILTER_VALIDATE_EMAIL) || str_contains($email, '..')) {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'Please enter a name and a valid work email.']);
  exit;
}

$smtpHost = (string) ($config['smtp_host'] ?? '');
$smtpPort = (int) ($config['smtp_port'] ?? 587);
$smtpUser = (string) ($config['smtp_user'] ?? '');
$smtpPass = (string) ($config['smtp_pass'] ?? '');
$smtpFrom = (string) ($config['smtp_from'] ?? $smtpUser);
$contactTo = (string) ($config['contact_to'] ?? $smtpUser);

if ($smtpHost === '' || $smtpUser === '' || $smtpPass === '' || $contactTo === '') {
  http_response_code(503);
  echo json_encode(['ok' => false, 'error' => 'Email is not configured yet.']);
  exit;
}

$notes = $message !== '' ? $message : '(No additional notes)';
$subject = 'Demo request — ' . ($company !== '' ? $company : $name);
$text = "Name: {$name}\nEmail: {$email}\nCompany: " . ($company !== '' ? $company : '—') . "\n\n{$notes}";

try {
  fumbo_smtp_send(
    $smtpHost,
    $smtpPort,
    $smtpUser,
    $smtpPass,
    $smtpFrom,
    $contactTo,
    $email,
    $subject,
    $text,
  );
} catch (Throwable $error) {
  error_log('Fumbo contact mail failed: ' . $error->getMessage());
  http_response_code(502);
  echo json_encode(['ok' => false, 'error' => 'Could not send the message. Please try again shortly.']);
  exit;
}

echo json_encode(['ok' => true]);

function fumbo_expect($fp, string $prefix): void {
  $response = '';
  while (!feof($fp)) {
    $line = fgets($fp, 2048);
    if ($line === false) {
      break;
    }
    $response .= $line;
    if (isset($line[3]) && $line[3] === ' ') {
      break;
    }
  }
  if (!str_starts_with($response, $prefix)) {
    throw new RuntimeException('SMTP error: ' . trim($response));
  }
}

function fumbo_cmd($fp, string $command, string $expect): void {
  fwrite($fp, $command . "\r\n");
  fumbo_expect($fp, $expect);
}

function fumbo_smtp_send(
  string $host,
  int $port,
  string $user,
  string $pass,
  string $fromHeader,
  string $to,
  string $replyTo,
  string $subject,
  string $text,
): void {
  $remote = ($port === 465 ? 'ssl://' : '') . $host . ':' . $port;
  $fp = @stream_socket_client($remote, $errno, $errstr, 20, STREAM_CLIENT_CONNECT);
  if ($fp === false) {
    throw new RuntimeException("Could not connect to SMTP ({$errno}): {$errstr}");
  }
  stream_set_timeout($fp, 20);
  fumbo_expect($fp, '220');
  fumbo_cmd($fp, 'EHLO fumbo.ai', '250');

  if ($port === 587) {
    fwrite($fp, "STARTTLS\r\n");
    fumbo_expect($fp, '220');
    $crypto = stream_socket_enable_crypto($fp, true, STREAM_CRYPTO_METHOD_TLS_CLIENT);
    if ($crypto !== true) {
      throw new RuntimeException('STARTTLS failed.');
    }
    fumbo_cmd($fp, 'EHLO fumbo.ai', '250');
  }

  fumbo_cmd($fp, 'AUTH LOGIN', '334');
  fumbo_cmd($fp, base64_encode($user), '334');
  fumbo_cmd($fp, base64_encode($pass), '235');

  $fromEmail = $user;
  if (preg_match('/<([^>]+)>/', $fromHeader, $match) === 1) {
    $fromEmail = $match[1];
  }

  fumbo_cmd($fp, 'MAIL FROM:<' . $fromEmail . '>', '250');
  fumbo_cmd($fp, 'RCPT TO:<' . $to . '>', '250');
  fumbo_cmd($fp, 'DATA', '354');

  $encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
  $headers = [
    'From: ' . $fromHeader,
    'To: ' . $to,
    'Reply-To: ' . $replyTo,
    'Subject: ' . $encodedSubject,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
  ];

  fwrite($fp, implode("\r\n", $headers) . "\r\n\r\n" . $text . "\r\n.\r\n");
  fumbo_expect($fp, '250');
  fwrite($fp, "QUIT\r\n");
  fclose($fp);
}
