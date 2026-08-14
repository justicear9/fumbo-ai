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
    "Answers about Fumbo Ai chatbots, automation, channels, languages, security, and how a first engagement works. Book a demo if you need a specific path.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <SiteShell>
      <JsonLd data={breadcrumbList("/faq")} />
      <JsonLd data={faqPageSchema()} />
      <PageHero
        eyebrow="FAQ"
        title="Questions teams ask first"
        description="How Fumbo works, who we serve, and what a first engagement looks like."
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
