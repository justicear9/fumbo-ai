const WINDOW_MS = 15 * 60 * 1000;
const MAX_HITS = 5;
const EMAIL_WINDOW_MS = 24 * 60 * 60 * 1000;
const MAX_EMAIL_HITS = 3;
const hits = new Map<string, number[]>();
const emailHits = new Map<string, number[]>();

export const fieldLimits = {
  name: 80,
  email: 120,
  company: 120,
  message: 4000,
} as const;

const DISPOSABLE_DOMAINS = new Set([
  "mailinator.com",
  "guerrillamail.com",
  "guerrillamailblock.com",
  "sharklasers.com",
  "grr.la",
  "10minutemail.com",
  "tempmail.com",
  "temp-mail.org",
  "yopmail.com",
  "trashmail.com",
  "discard.email",
  "getnada.com",
  "moakt.com",
  "fakeinbox.com",
  "mailnesia.com",
  "maildrop.cc",
  "throwawaymail.com",
  "dispostable.com",
]);

export function getClientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }
  return request.headers.get("x-real-ip")?.trim() || "unknown";
}

function bump(map: Map<string, number[]>, key: string, windowMs: number, max: number) {
  const now = Date.now();
  const recent = (map.get(key) ?? []).filter((stamp) => now - stamp < windowMs);
  if (recent.length >= max) {
    map.set(key, recent);
    return true;
  }
  recent.push(now);
  map.set(key, recent);
  return false;
}

export function isRateLimited(ip: string) {
  return bump(hits, ip, WINDOW_MS, MAX_HITS);
}

export function isEmailRateLimited(email: string) {
  return bump(emailHits, email.toLowerCase(), EMAIL_WINDOW_MS, MAX_EMAIL_HITS);
}

export function isAllowedOrigin(request: Request) {
  const host = request.headers.get("host");
  if (!host) return false;

  const matchesHost = (value: string | null) => {
    if (!value) return false;
    try {
      return new URL(value).host === host;
    } catch {
      return false;
    }
  };

  const origin = request.headers.get("origin");
  if (origin) return matchesHost(origin);

  const referer = request.headers.get("referer");
  if (referer) return matchesHost(referer);

  return false;
}

export function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && !value.includes("..") && value.length <= fieldLimits.email;
}

export function isDisposableEmail(value: string) {
  const domain = value.split("@")[1]?.toLowerCase() ?? "";
  return DISPOSABLE_DOMAINS.has(domain);
}

export function looksLikeSpam(input: {
  honeypot: string;
  startedAt: number;
  name: string;
  email: string;
  message: string;
}) {
  if (input.honeypot.trim()) return "honeypot" as const;

  const elapsed = Date.now() - input.startedAt;
  if (!Number.isFinite(input.startedAt) || elapsed < 2500) return "too-fast" as const;
  if (elapsed > 1000 * 60 * 60 * 6) return "stale" as const;

  const urlCount = (input.message.match(/https?:\/\//gi) ?? []).length;
  if (urlCount >= 2) return "links" as const;
  if (/https?:\/\//i.test(input.name)) return "name" as const;
  if (isDisposableEmail(input.email)) return "disposable" as const;

  return null;
}

export function clampField(value: unknown, max: number) {
  return String(value ?? "").trim().slice(0, max);
}

export function honeypotValue(payload: Record<string, unknown>) {
  return `${clampField(payload.website, 200)}${clampField(payload.fax, 200)}`;
}
