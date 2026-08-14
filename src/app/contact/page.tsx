import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/site/shell";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { ContactForm } from "@/components/site/contact-form";
import { ProcessSection } from "@/components/site/trust-sections";
import { contactInfo } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a demo with Fumbo Ai Ltd—tell us about your channels, markets, and goals.",
};

export default function ContactPage() {
  const whatsappHref = contactInfo.whatsapp
    ? `https://wa.me/${contactInfo.whatsapp}`
    : null;

  return (
    <SiteShell>
      <PageHero
        eyebrow="Contact"
        title="Tell us how customers reach you"
        description="WhatsApp, web, social, email—and the work those threads create inside your team. We’ll map a focused path to a live assistant."
      />

      <section className="bg-[#050a08] px-4 pb-16 md:px-8 md:pb-20">
        <div className="mx-auto max-w-[1400px]">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(ellipse_at_top_left,rgba(36,237,164,0.16),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(0,150,246,0.14),transparent_40%),#08140f] p-1.5">
            <div className="grid items-stretch gap-10 rounded-[calc(2rem-0.375rem)] border border-white/8 bg-[#07110d]/70 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:p-8 md:grid-cols-2 md:p-12 lg:p-14">
              <Reveal className="min-w-0">
                <div className="flex h-full flex-col">
                  <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                    Book a demo
                  </h2>
                  <p className="mt-4 max-w-[40ch] text-sm leading-relaxed text-white/60 md:text-base">
                    Based in {contactInfo.location}, serving {contactInfo.serving}. We start with
                    one channel or one workflow so you can see it live.
                  </p>

                  <div className="mt-8 space-y-3 text-sm">
                    <p>
                      <span className="text-white/40">Location </span>
                      <span className="text-white/75">{contactInfo.location}</span>
                    </p>
                    {whatsappHref ? (
                      <p>
                        <span className="text-white/40">WhatsApp </span>
                        <a
                          href={whatsappHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-fumbo-mint hover:text-[#5ff0b8]"
                        >
                          Message us
                        </a>
                      </p>
                    ) : null}
                  </div>

                  <ul className="mt-8 space-y-4 text-sm text-white/55">
                    <li className="flex gap-3">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-fumbo-mint" />
                      Omnichannel mapping for your stack
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-fumbo-mint" />
                      Localization and cultural tone review
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-fumbo-mint" />
                      Discover → design → pilot → optimize
                    </li>
                  </ul>
                  <p className="mt-auto pt-10 text-sm text-white/40">
                    Prefer to browse first?{" "}
                    <Link href="/faq" className="text-fumbo-mint hover:text-[#5ff0b8]">
                      Read the FAQ
                    </Link>{" "}
                    or{" "}
                    <Link href="/product" className="text-fumbo-mint hover:text-[#5ff0b8]">
                      explore services
                    </Link>
                    .
                  </p>
                </div>
              </Reveal>

              <div className="relative min-w-0">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProcessSection />
    </SiteShell>
  );
}
