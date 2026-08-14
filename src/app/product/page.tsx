import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/site/shell";
import { PageHero, CtaBand, SectionIntro } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { ProductShowcase } from "@/components/site/product-showcase";
import { ChannelsSection } from "@/components/site/trust-sections";
import { JsonLd } from "@/components/site/json-ld";
import { services, useCases } from "@/lib/content";
import { breadcrumbList, pageMetadata, servicePageSchema } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "AI Chatbot and Automation Services",
  description:
    "AI chatbots on web, social, email, and WhatsApp, plus automations that finish tickets, orders, and CRM updates. See Fumbo Ai chatbot and automation services.",
  path: "/product",
});

export default function ProductPage() {
  return (
    <SiteShell>
      <JsonLd data={breadcrumbList("/product")} />
      <JsonLd data={servicePageSchema()} />
      <PageHero
        eyebrow="Services"
        title="Chatbots for the reply. Automation for the work behind it."
        description="Automations finish the ticket, the order check, the CRM update. Chatbots on web, social, email, and WhatsApp are how customers reach that system."
        actions={
          <>
            <Link
              href="/contact"
              className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-fumbo-mint px-5 py-3 text-sm font-semibold text-[#04110c] transition-transform hover:bg-[#5ff0b8] active:scale-[0.98]"
            >
              Book a demo
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#04110c]/12">
                →
              </span>
            </Link>
            <Link
              href="/industries"
              className="inline-flex cursor-pointer items-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/85 hover:bg-white/10"
            >
              See industries
            </Link>
          </>
        }
      />

      <section className="bg-[#050a08] px-4 pb-20 md:px-8 md:pb-28">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <SectionIntro
              title="Two services. One partner."
              body="The chatbot handles the reply. Automation handles the busywork. Your people keep the work that needs judgment."
            />
          </Reveal>

          <div className="mt-14 grid gap-4 lg:grid-cols-2">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 0.06} className="h-full min-w-0">
                <article
                  id={service.slug}
                  className="scroll-mt-28 flex h-full min-h-[280px] flex-col rounded-[1.75rem] border border-white/10 bg-[#0a1511] p-8 md:p-10"
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
        </div>
      </section>

      <ProductShowcase />
      <ChannelsSection />

      <section className="bg-[#050a08] px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <SectionIntro
              title="Where the work gets done"
              body="Recommendations, FAQs, support, and the automations that keep those threads moving."
            />
          </Reveal>
          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {useCases.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05} className="h-full min-w-0">
                <article className="group flex h-full min-h-[180px] flex-col rounded-[1.5rem] border border-white/10 bg-[#0a1511] p-7 transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-fumbo-mint/25 md:p-8">
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

      <CtaBand
        title="See Fumbo on your channels"
        body="We will walk through chatbots and automation against your brand, languages, and tools."
      />
    </SiteShell>
  );
}
