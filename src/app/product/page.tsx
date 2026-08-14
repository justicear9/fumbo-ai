import type { Metadata } from "next";
import Link from "next/link";
import {
  ChatsCircle,
  GearSix,
  GlobeHemisphereWest,
  Translate,
} from "@phosphor-icons/react/dist/ssr";
import { SiteShell } from "@/components/site/shell";
import { PageHero, CtaBand, SectionIntro } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { ProductShowcase } from "@/components/site/product-showcase";
import {
  AutomationPackagesSection,
  ChannelsSection,
  ProcessSection,
} from "@/components/site/trust-sections";
import { capabilities, services, useCases } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI chatbots and automation services from Fumbo Ai—culturally aware conversations and workflows that remove routine work.",
};

const icons = [ChatsCircle, GearSix, GlobeHemisphereWest, Translate];

export default function ProductPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Services"
        title="AI chatbots and automation services"
        description="Intelligent conversations for your customers—and named automation plays that keep operations moving. Personalized, culturally aware, and built for WhatsApp, web, social, and email."
        actions={
          <>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-fumbo-mint px-5 py-3 text-sm font-semibold text-[#04110c] transition-transform hover:bg-[#5ff0b8] active:scale-[0.98]"
            >
              Book a demo
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#04110c]/12">
                →
              </span>
            </Link>
            <Link
              href="/industries"
              className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/85 hover:bg-white/10"
            >
              See industries
            </Link>
          </>
        }
      />

      <section className="bg-[#050a08] px-4 pb-24 md:px-8 md:pb-32">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <SectionIntro
              title="Two pillars. One partner."
              body="Chatbots handle the conversation. Automation handles the busywork. Together they free your people for work that needs judgment."
            />
          </Reveal>

          <div className="mt-14 grid gap-4 lg:grid-cols-2">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 0.06}>
                <article
                  id={service.slug}
                  className="scroll-mt-28 flex h-full flex-col rounded-[1.75rem] border border-white/10 bg-[#0a1511] p-8 md:p-10"
                >
                  <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-fumbo-mint/85">
                    Service 0{index + 1}
                  </p>
                  <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-white/60 md:text-base">
                    {service.body}
                  </p>
                  <ul className="mt-8 space-y-3 border-t border-white/10 pt-6">
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
        </div>
      </section>

      <ProductShowcase />
      <ChannelsSection />
      <AutomationPackagesSection />

      <section className="bg-[#06110d] px-4 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <SectionIntro
              title="Capabilities that carry the work"
              body="From first message to completed workflow, Fumbo is built to feel native to your brand and your market."
            />
          </Reveal>

          <div className="mt-14 grid gap-4 lg:grid-cols-2">
            {capabilities.map((item, index) => {
              const Icon = icons[index] ?? ChatsCircle;
              const mint = item.tone === "mint";
              return (
                <Reveal key={item.title} delay={index * 0.05}>
                  <article
                    className={`group relative h-full overflow-hidden rounded-[1.75rem] border border-white/10 p-1.5 ${
                      mint ? "bg-fumbo-mint/5" : "bg-fumbo-blue/5"
                    }`}
                  >
                    <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[calc(1.75rem-0.375rem)] border border-white/8 bg-[#0a1511]/90 p-7 md:p-8">
                      <div
                        className={`mb-10 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 ${
                          mint
                            ? "bg-fumbo-mint/15 text-fumbo-mint"
                            : "bg-fumbo-blue/15 text-fumbo-blue"
                        }`}
                      >
                        <Icon size={22} weight="duotone" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold tracking-tight text-white md:text-2xl">
                          {item.title}
                        </h3>
                        <p className="mt-3 max-w-[44ch] text-sm leading-relaxed text-white/60 md:text-base">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#050a08] px-4 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <SectionIntro
              title="Where the work gets done"
              body="Recommendations, FAQs, support, bookings, and the automations that keep those journeys moving."
            />
          </Reveal>
          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {useCases.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <article className="rounded-[1.5rem] border border-white/10 bg-[#0a1511] p-7 md:p-8">
                  <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-fumbo-blue">
                    Use case
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/55 md:text-base">
                    {item.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />

      <CtaBand
        title="See Fumbo on your channels and workflows"
        body="We’ll walk through how chatbots and automation can fit your brand, languages, and stack."
      />
    </SiteShell>
  );
}
