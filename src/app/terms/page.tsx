import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/site/shell";
import { PageHero } from "@/components/site/page-hero";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use for the Fumbo Ai Ltd website.",
};

export default function TermsPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Legal"
        title="Terms of use"
        description="By using this website, you agree to these terms. Product engagements are governed by separate commercial agreements."
      />
      <section className="bg-[#050a08] px-4 pb-24 md:px-8 md:pb-32">
        <div className="mx-auto max-w-[720px] space-y-8 text-sm leading-relaxed text-white/60 md:text-base">
          <p>
            Content on this site is provided for general information about Fumbo Ai Ltd and our
            chatbot and automation solutions. We may update copy, features, and offerings without
            notice.
          </p>
          <p>
            All trademarks, logos, and brand assets remain the property of Fumbo Ai Ltd. You may
            not copy or redistribute site materials for commercial use without written permission.
          </p>
          <p>
            Demo requests and conversations started through this site do not create a binding
            contract until a signed agreement is in place.
          </p>
          <p>
            Questions? Reach us via the{" "}
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
