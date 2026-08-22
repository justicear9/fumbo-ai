"use client";

import { useEffect, useState, type FormEvent } from "react";
import { Reveal } from "@/components/site/reveal";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [startedAt, setStartedAt] = useState(0);

  useEffect(() => {
    setStartedAt(Date.now());
  }, []);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    setError("");

    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_CONTACT_ENDPOINT || "/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: String(data.get("name") || ""),
            email: String(data.get("email") || ""),
            company: String(data.get("company") || ""),
            message: String(data.get("message") || ""),
            website: String(data.get("website") || ""),
            fax: String(data.get("fax") || ""),
            startedAt,
          }),
        },
      );

      const payload = (await response.json().catch(() => null)) as
        | { ok?: boolean; error?: string }
        | null;

      if (!response.ok || !payload?.ok) {
        setStatus("error");
        setError(payload?.error || "Please enter a name and a valid work email.");
        return;
      }

      setStatus("sent");
      form.reset();
      setStartedAt(Date.now());
    } catch {
      setStatus("error");
      setError("Network error. Please try again.");
    }
  }

  return (
    <Reveal delay={compact ? 0 : 0.08} className="h-full">
      <form onSubmit={onSubmit} className="relative flex h-full flex-col space-y-4" noValidate>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-[10000px] h-0 w-0 overflow-hidden"
        >
          <label htmlFor="website">Website</label>
          <input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
          <label htmlFor="fax">Fax</label>
          <input
            id="fax"
            name="fax"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="name" className="text-sm text-white/70">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            maxLength={80}
            autoComplete="name"
            className="w-full min-w-0 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-[border-color,box-shadow] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] placeholder:text-white/30 focus:border-fumbo-mint/50 focus:shadow-[0_0_0_3px_rgba(36,237,164,0.15)]"
            placeholder="Ama Mensah"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm text-white/70">
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={120}
            autoComplete="email"
            className="w-full min-w-0 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-[border-color,box-shadow] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] placeholder:text-white/30 focus:border-fumbo-mint/50 focus:shadow-[0_0_0_3px_rgba(36,237,164,0.15)]"
            placeholder="you@company.com"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="company" className="text-sm text-white/70">
            Company
          </label>
          <input
            id="company"
            name="company"
            maxLength={120}
            autoComplete="organization"
            className="w-full min-w-0 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-[border-color,box-shadow] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] placeholder:text-white/30 focus:border-fumbo-mint/50 focus:shadow-[0_0_0_3px_rgba(36,237,164,0.15)]"
            placeholder="Your organization"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm text-white/70">
            What should we know?
          </label>
          <textarea
            id="message"
            name="message"
            rows={compact ? 3 : 5}
            maxLength={4000}
            className="w-full min-w-0 resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-[border-color,box-shadow] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] placeholder:text-white/30 focus:border-fumbo-mint/50 focus:shadow-[0_0_0_3px_rgba(36,237,164,0.15)]"
            placeholder="Channels, languages, and what the assistant should handle first"
          />
        </div>
        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-fumbo-mint px-5 py-3 text-sm font-semibold text-[#04110c] transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#5ff0b8] active:scale-[0.98] disabled:cursor-wait disabled:opacity-70"
        >
          {status === "sending" ? "Sending…" : "Request a demo"}
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#04110c]/12">
            →
          </span>
        </button>
        {status === "sent" ? (
          <p className="text-sm text-fumbo-mint" role="status">
            Received. We will get back to you shortly.
          </p>
        ) : null}
        {status === "error" ? (
          <p className="text-sm text-red-300" role="alert">
            {error}
          </p>
        ) : null}
      </form>
    </Reveal>
  );
}
