"use client";

import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/site/reveal";
import { contactInfo } from "@/lib/content";

type ContactFormProps = {
  compact?: boolean;
};

export function ContactForm({ compact = false }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") || "").trim();
    const name = String(data.get("name") || "").trim();
    const company = String(data.get("company") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !email.includes("@")) {
      setStatus("error");
      return;
    }

    const subject = encodeURIComponent(`Demo request — ${company || name}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || "—"}`,
        "",
        message || "(No additional notes)",
      ].join("\n"),
    );

    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
    form.reset();
  }

  return (
    <Reveal delay={compact ? 0 : 0.08}>
      <form onSubmit={onSubmit} className="space-y-4" noValidate>
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm text-white/70">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-[border-color,box-shadow] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] placeholder:text-white/30 focus:border-fumbo-mint/50 focus:shadow-[0_0_0_3px_rgba(36,237,164,0.15)]"
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
            autoComplete="email"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-[border-color,box-shadow] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] placeholder:text-white/30 focus:border-fumbo-mint/50 focus:shadow-[0_0_0_3px_rgba(36,237,164,0.15)]"
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
            autoComplete="organization"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-[border-color,box-shadow] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] placeholder:text-white/30 focus:border-fumbo-mint/50 focus:shadow-[0_0_0_3px_rgba(36,237,164,0.15)]"
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
            className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-[border-color,box-shadow] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] placeholder:text-white/30 focus:border-fumbo-mint/50 focus:shadow-[0_0_0_3px_rgba(36,237,164,0.15)]"
            placeholder="Channels, languages, industry, and the problems you want solved"
          />
        </div>
        <button
          type="submit"
          className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-fumbo-mint px-5 py-3 text-sm font-semibold text-[#04110c] transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#5ff0b8] active:scale-[0.98]"
        >
          Email {contactInfo.email}
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#04110c]/12">
            →
          </span>
        </button>
        {status === "sent" && (
          <p className="text-sm text-fumbo-mint" role="status">
            Opening your email client with the details filled in…
          </p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-300" role="alert">
            Please enter a name and a valid work email.
          </p>
        )}
      </form>
    </Reveal>
  );
}
