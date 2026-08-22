import { NextResponse } from "next/server";
import {
  clampField,
  fieldLimits,
  getClientIp,
  honeypotValue,
  isAllowedOrigin,
  isEmailRateLimited,
  isRateLimited,
  isValidEmail,
  looksLikeSpam,
} from "@/lib/contact-guard";
import { isHunterConfigured, sendHunterLead } from "@/lib/hunter";
import { getContactInbox, getFromAddress, sendContactMail } from "@/lib/mailer";

export const runtime = "nodejs";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function silentOk() {
  return NextResponse.json({ ok: true });
}

export async function POST(request: Request) {
  if (!isAllowedOrigin(request)) {
    return NextResponse.json({ ok: false, error: "Forbidden." }, { status: 403 });
  }

  const ip = getClientIp(request);
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please wait a few minutes and try again." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const payload = body as Record<string, unknown>;
  const name = clampField(payload.name, fieldLimits.name);
  const email = clampField(payload.email, fieldLimits.email).toLowerCase();
  const company = clampField(payload.company, fieldLimits.company);
  const message = clampField(payload.message, fieldLimits.message);
  const honeypot = honeypotValue(payload);
  const startedAt = Number(payload.startedAt);

  const spam = looksLikeSpam({ honeypot, startedAt, name, email, message });
  if (spam === "honeypot") {
    return silentOk();
  }
  if (spam) {
    return NextResponse.json({ ok: false, error: "Please try again." }, { status: 400 });
  }

  if (!name || !isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a name and a valid work email." },
      { status: 400 },
    );
  }

  if (isEmailRateLimited(email)) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please wait a few minutes and try again." },
      { status: 429 },
    );
  }

  const hunterReady = isHunterConfigured();
  const notes = message || "(No additional notes)";
  const to = getContactInbox();
  const from = getFromAddress();
  let hunterOk = false;
  let mailOk = false;

  if (hunterReady) {
    try {
      await sendHunterLead({ name, email, company, message: notes, ip });
      hunterOk = true;
    } catch (error) {
      console.error("Hunter lead failed", error instanceof Error ? error.message : "unknown");
      hunterOk = false;
    }
  }

  try {
    await sendContactMail({
      from,
      to,
      replyTo: email,
      subject: `Demo request — ${company || name}`,
      text: [`Name: ${name}`, `Email: ${email}`, `Company: ${company || "—"}`, "", notes].join("\n"),
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.5;color:#111">
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Company:</strong> ${escapeHtml(company || "—")}</p>
          <p style="white-space:pre-wrap">${escapeHtml(notes)}</p>
        </div>
      `,
    });
    mailOk = true;
  } catch (error) {
    console.error("Contact mail failed", error instanceof Error ? error.message : "unknown");
    mailOk = false;
  }

  if (!hunterOk && !mailOk) {
    return NextResponse.json(
      { ok: false, error: "Could not send the message. Please try again shortly." },
      { status: 502 },
    );
  }

  return silentOk();
}
