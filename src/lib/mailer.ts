import nodemailer, { type Transporter } from "nodemailer";

function env(name: string) {
  return (process.env[name] || "").trim().replace(/^['"]|['"]$/g, "");
}

export function isMailConfigured() {
  return Boolean(env("SMTP_HOST") && env("SMTP_USER") && env("SMTP_PASS"));
}

function smtpTransport(options: { host: string; port: number; secure: boolean }): Transporter {
  const user = env("SMTP_USER");
  const pass = env("SMTP_PASS");
  const local = options.host === "localhost" || options.host === "127.0.0.1";
  return nodemailer.createTransport({
    host: options.host,
    port: options.port,
    secure: options.secure,
    requireTLS: options.port === 587,
    auth: !local && user && pass ? { user, pass } : undefined,
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
    tls: {
      servername: options.host,
      rejectUnauthorized: false,
    },
    name: "fumbo.ai",
  });
}

export function getContactInbox() {
  return env("CONTACT_TO") || env("SMTP_USER") || "hello@fumbo.ai";
}

export function getFromAddress() {
  return env("SMTP_FROM") || env("SMTP_USER") || "hello@fumbo.ai";
}

async function trySend(
  transport: Transporter,
  input: Parameters<Transporter["sendMail"]>[0],
  label: string,
) {
  await transport.sendMail(input);
  console.info("Contact mail sent via", label);
}

export async function sendContactMail(input: {
  from: string;
  to: string;
  replyTo: string;
  subject: string;
  text: string;
  html: string;
}) {
  const errors: string[] = [];
  const host = env("SMTP_HOST");
  const configuredPort = Number(env("SMTP_PORT") || 587);
  const configuredSecure = env("SMTP_SECURE") === "true" || configuredPort === 465;

  const smtpAttempts: Array<{ host: string; port: number; secure: boolean; label: string }> = [];
  if (host) {
    smtpAttempts.push({
      host,
      port: configuredPort,
      secure: configuredSecure,
      label: `${host}:${configuredPort}`,
    });
    if (configuredPort === 587 && !configuredSecure) {
      smtpAttempts.push({ host, port: 465, secure: true, label: `${host}:465` });
    }
  }
  smtpAttempts.push({ host: "localhost", port: 25, secure: false, label: "localhost:25" });
  smtpAttempts.push({ host: "127.0.0.1", port: 25, secure: false, label: "127.0.0.1:25" });

  for (const attempt of smtpAttempts) {
    try {
      await trySend(smtpTransport(attempt), input, attempt.label);
      return;
    } catch (error) {
      const message = error instanceof Error ? error.message : "unknown";
      errors.push(`${attempt.label}: ${message}`);
      console.error("Contact mail failed", attempt.label, message);
    }
  }

  try {
    await trySend(
      nodemailer.createTransport({
        sendmail: true,
        newline: "unix",
        path: process.env.SENDMAIL_PATH || "/usr/sbin/sendmail",
      }),
      input,
      "sendmail",
    );
    return;
  } catch (error) {
    errors.push(`sendmail: ${error instanceof Error ? error.message : "unknown"}`);
  }

  throw new Error(errors.join(" | "));
}
