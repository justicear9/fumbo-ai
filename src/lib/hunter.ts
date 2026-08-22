export function isHunterConfigured() {
  return Boolean(process.env.HUNTER_LEAD_URL && process.env.HUNTER_LEAD_SECRET);
}

export async function sendHunterLead(input: {
  name: string;
  email: string;
  company: string;
  message: string;
  ip: string;
}): Promise<boolean> {
  const url = (process.env.HUNTER_LEAD_URL || "").trim();
  const secret = (process.env.HUNTER_LEAD_SECRET || "").trim();
  if (!url || !secret) return false;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${secret}`,
    },
    body: JSON.stringify(input),
    signal: AbortSignal.timeout(12_000),
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    throw new Error(`Hunter ${response.status} ${detail.slice(0, 200)}`);
  }
  return true;
}
