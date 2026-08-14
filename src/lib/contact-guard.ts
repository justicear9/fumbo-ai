const WINDOW_MS = 15 * 60 * 1000;
const MAX_HITS = 5;
const hits = new Map<string, number[]>();

export const fieldLimits = {
  name: 80,
  email: 120,
  company: 120,
  message: 4000,
} as const;

export function getClientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }
  return request.headers.get("x-real-ip")?.trim() || "unknown";
}

export function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((stamp) => now - stamp < WINDOW_MS);
  if (recent.length >= MAX_HITS) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
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

export function looksLikeSpam(input: {
  honeypot: string;
  startedAt: number;
  message: string;
}) {
  if (input.honeypot.trim()) return "honeypot" as const;

  const elapsed = Date.now() - input.startedAt;
  if (!Number.isFinite(input.startedAt) || elapsed < 2500) return "too-fast" as const;
  if (elapsed > 1000 * 60 * 60 * 6) return "stale" as const;

  const urlCount = (input.message.match(/https?:\/\//gi) ?? []).length;
  if (urlCount >= 4) return "links" as const;

  return null;
}

export function clampField(value: unknown, max: number) {
  return String(value ?? "").trim().slice(0, max);
}
