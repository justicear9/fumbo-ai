import type { Metadata } from "next";
import { SiteShell } from "@/components/site/shell";
import { PageHero, CtaBand } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { JsonLd } from "@/components/site/json-ld";
import { industries } from "@/lib/content";
import { breadcrumbList, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "AI Chatbots for Your Industry",
  description:
    "AI chatbots and automation for enterprise, e-commerce, finance, telecom, travel, healthcare, education, and government. See how Fumbo fits your sector.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <SiteShell>
      <JsonLd data={breadcrumbList("/industries")} />
      <PageHero
        eyebrow="Industries"
        title="Built for how your sector already talks to people"
        description="Each engagement follows that industry's workflows, tone, and trust rules."
      />

      <section className="bg-[#050a08] px-4 pb-20 md:px-8 md:pb-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="space-y-4">
            {industries.map((industry, index) => (
              <Reveal key={industry.slug} delay={Math.min(index * 0.04, 0.24)} className="min-w-0">
                <article
                  id={industry.slug}
                  className="group scroll-mt-28 overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0a1511] transition-[border-color] duration-300 hover:border-fumbo-mint/25"
                >
                  <div className="grid items-stretch gap-0 lg:grid-cols-[0.85fr_1.15fr]">
                    <div className="flex flex-col justify-center border-b border-white/10 p-7 md:p-10 lg:border-b-0 lg:border-r">
                      <p className="font-mono text-sm text-fumbo-mint/85">
                        {String(index + 1).padStart(2, "0")}
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
                            className="flex min-h-[3.25rem] items-center rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/75"
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
        </div>
      </section>

      <CtaBand
        title="Tell us how your sector talks to customers"
        body="Share the channels, languages, and the work those threads create. We will map a first engagement."
        label="Book a demo"
      />
    </SiteShell>
  );
}
