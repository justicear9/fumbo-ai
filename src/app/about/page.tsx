import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/site/shell";
import { PageHero, CtaBand, SectionIntro } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { company, values, whyFumbo } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Fumbo Ai is a Ghanaian company that builds AI chatbots and automation for teams worldwide.",
};

const facts = [
  { label: "Based in", value: "Accra, Ghana" },
  { label: "Channels", value: "Web, social, email, WhatsApp" },
  { label: "Focus", value: "AI chatbots and automation" },
] as const;

export default function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="About Fumbo Ai Ltd"
        title="Who we are"
        description={company.summary}
      />

      <section className="bg-[#050a08] px-4 pb-20 md:px-8 md:pb-28">
        <div className="mx-auto grid max-w-[1400px] items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <div className="grid gap-3">
              {facts.map((fact) => (
                <article
                  key={fact.label}
                  className="rounded-[1.35rem] border border-white/10 bg-[#0a1511] px-6 py-5"
                >
                  <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-fumbo-mint/80">
                    {fact.label}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">{fact.value}</p>
                </article>
              ))}
            </div>
          </Reveal>

          <div>
            <Reveal>
              <h2 className="max-w-[16ch] text-3xl font-semibold tracking-tight text-white md:text-5xl">
                A Ghanaian company, built for global teams
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/60 md:text-lg">
                {company.summary}
              </p>
              <p className="mt-5 text-base leading-relaxed text-white/60 md:text-lg">
                {company.mission}
              </p>
              <p className="mt-5 text-base leading-relaxed text-white/60 md:text-lg">
                {company.focus}
              </p>
              <Link
                href="/product"
                className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-fumbo-mint hover:text-[#5ff0b8]"
              >
                See services
                <span aria-hidden>→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="why" className="scroll-mt-28 bg-[#06110d] px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <SectionIntro
              title="Why teams work with us"
              body="Software shaped around the channels, languages, and operations you already have."
            />
          </Reveal>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {whyFumbo.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.04} className="h-full min-w-0">
                <article className="group flex h-full min-h-[220px] flex-col rounded-[1.5rem] border border-white/10 bg-[#0a1511] p-7 transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-fumbo-mint/25">
                  <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-fumbo-blue">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/55">{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="values" className="scroll-mt-28 bg-[#050a08] px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <SectionIntro
              title="How we show up"
              body="The standards we hold when we design a flow, sit with a client, or ship a change."
            />
          </Reveal>

          <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={Math.min(index * 0.03, 0.2)} className="h-full min-w-0">
                <article className="flex h-full min-h-[180px] flex-col justify-between rounded-[1.25rem] border border-white/10 bg-[#0a1511] p-5 transition-[border-color] duration-300 hover:border-white/20">
                  <h3 className="text-base font-semibold text-white">{value.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/50">{value.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Start with how customers already reach you"
        body="We start with your channels and the operational work those threads create."
      />
    </SiteShell>
  );
}
