import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/site/shell";
import { PageHero, CtaBand } from "@/components/site/page-hero";
import { FaqList } from "@/components/site/faq-list";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers about Fumbo Ai chatbots, automation services, omnichannel integration, localization, and partnership.",
};

export default function FaqPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="FAQ"
        title="Questions teams ask first"
        description="Straight answers about how Fumbo works, who we serve, and what partnership looks like."
      />

      <section className="bg-[#050a08] px-4 pb-24 md:px-8 md:pb-32">
        <div className="mx-auto max-w-[900px]">
          <FaqList />
          <p className="mt-10 text-sm text-white/45">
            Still looking for something specific?{" "}
            <Link href="/contact" className="text-fumbo-mint hover:text-[#5ff0b8]">
              Reach out
            </Link>{" "}
            and we’ll help.
          </p>
        </div>
      </section>

      <CtaBand
        title="Let’s get specific to your stack"
        body="A short conversation beats a long FAQ when you’re mapping real channels and languages."
      />
    </SiteShell>
  );
}
