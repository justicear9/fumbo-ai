import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/site/shell";
import { PageHero, CtaBand, SectionIntro } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { industries } from "@/lib/content";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Fumbo Ai chatbots and automation for enterprise, e-commerce, finance, telecom, travel, healthcare, education, and government.",
};

export default function IndustriesPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Industries"
        title="Assistants shaped for how your sector actually works"
        description="Ideal customers span multichannel enterprises to public agencies. Each engagement is tailored to the workflows, tone, and trust expectations of that industry."
      />

      <section className="bg-[#050a08] px-4 pb-24 md:px-8 md:pb-32">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <SectionIntro
              title="Who we build for"
              body="Identifying the right customers means marketing that lands and products that fit. These are the sectors Fumbo is designed to serve."
            />
          </Reveal>

          <div className="mt-16 space-y-6">
            {industries.map((industry, index) => (
              <Reveal key={industry.slug} delay={Math.min(index * 0.04, 0.24)}>
                <article
                  id={industry.slug}
                  className="scroll-mt-28 overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0a1511]"
                >
                  <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
                    <div className="border-b border-white/10 p-7 md:p-10 lg:border-b-0 lg:border-r">
                      <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-fumbo-mint/85">
                        Sector {String(index + 1).padStart(2, "0")}
                      </p>
                      <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                        {industry.name}
                      </h2>
                      <p className="mt-4 text-sm leading-relaxed text-white/55 md:text-base">
                        {industry.summary}
                      </p>
                    </div>
                    <div className="p-7 md:p-10">
                      <p className="text-sm leading-relaxed text-white/65 md:text-base">
                        {industry.detail}
                      </p>
                      <ul className="mt-8 grid gap-3 sm:grid-cols-3">
                        {industry.outcomes.map((outcome) => (
                          <li
                            key={outcome}
                            className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/75"
                          >
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mt-12 max-w-[56ch] text-sm leading-relaxed text-white/45">
              These are starting points. We refine segments with your market research and industry
              trends so strategy and product stay aligned.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Bring us your industry brief"
        body="Share the channels, languages, and service goals that matter—we’ll map a Fumbo engagement around them."
        label="Talk to us"
      />
    </SiteShell>
  );
}
