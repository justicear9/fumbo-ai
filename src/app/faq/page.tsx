import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/site/shell";
import { PageHero, CtaBand } from "@/components/site/page-hero";
import { FaqList } from "@/components/site/faq-list";
import { JsonLd } from "@/components/site/json-ld";
import { breadcrumbList, faqPageSchema, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "AI Chatbot FAQ",
  description:
    "How soon Fumbo can go live, WhatsApp and your tools, staff, data, pricing, and what we need from you to start. Book a demo if you need a specific path.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <SiteShell>
      <JsonLd data={breadcrumbList("/faq")} />
      <JsonLd data={faqPageSchema()} />
      <PageHero
        eyebrow="FAQ"
        title="Before you book a demo"
        titleClassName="max-w-[26ch] lg:max-w-none lg:whitespace-nowrap"
        description="Time, tools, staff, and what we need from you. Straight answers."
      />

      <section className="bg-[#050a08] px-4 pb-24 md:px-8 md:pb-32">
        <div className="mx-auto max-w-[900px]">
          <FaqList />
          <p className="mt-10 text-sm text-white/45">
            Still looking for something specific?{" "}
            <Link href="/contact" className="text-fumbo-mint hover:text-[#5ff0b8]">
              Book a demo
            </Link>
            .
          </p>
        </div>
      </section>

      <CtaBand
        title="Bring your channels"
        body="A 20-minute call will tell you more than another FAQ."
      />
    </SiteShell>
  );
}
