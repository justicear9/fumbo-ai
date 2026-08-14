import Link from "next/link";
import { SiteShell } from "@/components/site/shell";
import { Hero } from "@/components/site/hero";
import { Reveal } from "@/components/site/reveal";
import { CtaBand, SectionIntro } from "@/components/site/page-hero";
import { FaqList } from "@/components/site/faq-list";
import { ProductShowcase } from "@/components/site/product-showcase";
import { ChannelsSection } from "@/components/site/trust-sections";
import { company, industries, services } from "@/lib/content";

export default function HomePage() {
  return (
    <SiteShell>
      <Hero />

      <section className="relative overflow-hidden bg-[#050a08] px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-fumbo-mint/90">
              Accra · Ghana
            </p>
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
              <h2 className="max-w-[18ch] text-3xl font-semibold tracking-tight text-white md:text-5xl">
                Built for the conversations people here already have
              </h2>
              <div className="space-y-5 text-base leading-relaxed text-white/60 md:text-lg">
                <p>{company.enigma}</p>
                <p>{company.summary}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#06110d] px-4 py-20 md:px-8 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_0%,rgba(0,150,246,0.1),transparent_45%)]" />
        <div className="relative mx-auto max-w-[1400px]">
          <Reveal>
            <SectionIntro
              title="What we do"
              body="Two things, tightly connected: the conversation with your customer, and the work that conversation creates inside your team."
            />
          </Reveal>

          <div className="mt-14 grid gap-4 lg:grid-cols-2">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 0.06} className="h-full min-w-0">
                <article className="group flex h-full min-h-[280px] flex-col rounded-[1.75rem] border border-white/10 bg-[#0a1511] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-fumbo-mint/30 md:p-10">
                  <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-fumbo-mint/85">
                    Service 0{index + 1}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/60 md:text-base">
                    {service.body}
                  </p>
                  <ul className="mt-auto space-y-3 border-t border-white/10 pt-6">
                    {service.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm text-white/70">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-fumbo-mint" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-8">
              <Link
                href="/product"
                className="inline-flex items-center gap-2 text-sm font-medium text-fumbo-mint transition-colors hover:text-[#5ff0b8]"
              >
                Full services overview
                <span aria-hidden>→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <ProductShowcase />
      <ChannelsSection />

      <section className="bg-[#050a08] px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <SectionIntro
              title="Built for the industries you serve"
              body="From retail floors to citizen desks—tuned to how each sector actually works."
            />
          </Reveal>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry, index) => (
              <Reveal key={industry.slug} delay={index * 0.03} className="h-full min-w-0">
                <Link
                  href={`/industries#${industry.slug}`}
                  className="group flex h-full min-h-[168px] cursor-pointer flex-col justify-between rounded-[1.35rem] border border-white/10 bg-[#0a1511] p-6 transition-[border-color,transform,background-color] duration-300 hover:-translate-y-1 hover:border-fumbo-mint/30 hover:bg-[#0c1a14]"
                >
                  <h3 className="text-lg font-semibold text-white group-hover:text-fumbo-mint">
                    {industry.name}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/50">
                    {industry.summary}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#06110d] px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <SectionIntro title="Questions teams ask first" />
            </Reveal>
            <Reveal>
              <Link
                href="/faq"
                className="inline-flex items-center gap-2 text-sm font-medium text-fumbo-mint transition-colors hover:text-[#5ff0b8]"
              >
                View all FAQs
                <span aria-hidden>→</span>
              </Link>
            </Reveal>
          </div>
          <FaqList limit={4} />
        </div>
      </section>

      <CtaBand
        title="Ready to see it on your channels?"
        body="Tell us how customers reach you today. We’ll show a focused path to a live assistant—and the automations behind it."
      />
    </SiteShell>
  );
}
