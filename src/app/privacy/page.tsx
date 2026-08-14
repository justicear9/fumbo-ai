import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/site/shell";
import { PageHero } from "@/components/site/page-hero";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy information for Fumbo Ai Ltd.",
};

export default function PrivacyPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Legal"
        title="Privacy"
        description="We take privacy seriously. This page outlines how Fumbo Ai Ltd approaches personal data in the context of our website and product engagements."
        showRobot={false}
      />
      <section className="bg-[#050a08] px-4 pb-24 md:px-8 md:pb-32">
        <div className="mx-auto max-w-[720px] space-y-8 text-sm leading-relaxed text-white/60 md:text-base">
          <p>
            When you contact us through this site, we use the information you provide—such as name,
            work email, company, and message—to respond to your inquiry and schedule demos. We do
            not sell this information.
          </p>
          <p>
            For deployed chatbots and automations, data handling is defined in your commercial
            agreement
            and aligned with your industry and compliance requirements. Encryption, access
            controls, and privacy-minded deployment practices are part of every rollout.
          </p>
          <p>
            If you have privacy questions, email us through the{" "}
            <Link href="/contact" className="text-fumbo-mint hover:text-[#5ff0b8]">
              contact page
            </Link>
            .
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
