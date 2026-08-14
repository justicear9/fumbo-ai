import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteShell } from "@/components/site/shell";
import { PageHero, CtaBand, SectionIntro } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { company, values, whyFumbo } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Fumbo Ai Ltd—named from the Swahili word for enigma—builds culturally sensitive AI chatbots and automation services.",
};

export default function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="About Fumbo Ai Ltd"
        title="Technology company. Cultural enigma."
        description={company.summary}
      />

      <section className="bg-[#050a08] px-4 pb-24 md:px-8 md:pb-32">
        <div className="mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#08140f] p-1.5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[calc(2rem-0.375rem)] md:aspect-[5/6]">
                <Image
                  src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=1400&q=80"
                  alt="Professional working with digital tools"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050a08] via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-[#07110d]/80 p-5 backdrop-blur-xl">
                  <p className="text-sm leading-relaxed text-white/80">{company.enigma}</p>
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <h2 className="max-w-[14ch] text-3xl font-semibold tracking-tight text-white md:text-5xl">
                Our mission
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/60 md:text-lg">
                {company.mission}
              </p>
              <p className="mt-5 text-base leading-relaxed text-white/60 md:text-lg">
                {company.focus}
              </p>
              <p className="mt-5 text-base leading-relaxed text-white/60 md:text-lg">
                We specialize in AI chatbots and automation services that integrate with
                omnichannels—offering personalized, culturally sensitive interactions and workflows
                tailored to clients and their customers.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="why" className="scroll-mt-28 bg-[#06110d] px-4 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <SectionIntro
              title="Why choose Fumbo Ai"
              body="Partner with a team dedicated to AI chatbots and automation that drive engagement, efficiency, and growth."
            />
          </Reveal>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {whyFumbo.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.04}>
                <article className="flex h-full flex-col rounded-[1.5rem] border border-white/10 bg-[#0a1511] p-7">
                  <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-fumbo-blue">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/55">{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="values" className="scroll-mt-28 bg-[#050a08] px-4 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <SectionIntro
              title="Brand values"
              body="These values guide how we design products, partner with clients, and show up in the communities we serve."
            />
          </Reveal>

          <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={Math.min(index * 0.03, 0.2)}>
                <article className="flex h-full min-h-[160px] flex-col justify-between rounded-[1.25rem] border border-white/10 bg-[#0a1511] p-5">
                  <h3 className="text-base font-semibold text-white">{value.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/50">{value.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#06110d] px-4 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <div className="max-w-[720px]">
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                How we work with you
              </h2>
              <div className="mt-8 space-y-6 text-base leading-relaxed text-white/60">
                <p>
                  What sets Fumbo apart is commitment to customization and localization—solutions
                  that are technologically advanced and culturally effective in diverse markets.
                </p>
                <p>
                  We collaborate closely to understand your unique business goals and challenges.
                  From discovery through ongoing optimization, we stay beside your team.
                </p>
                <p>
                  We differentiate on cultural depth, flexible customization, and true omnichannel
                  cohesion—especially where generic bots break trust.
                </p>
              </div>
              <Link
                href="/product"
                className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-fumbo-mint hover:text-[#5ff0b8]"
              >
                Explore services
                <span aria-hidden>→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Let’s shape what comes next"
        body="Whether you’re modernizing support or launching a new channel strategy, we’re ready to build with you."
      />
    </SiteShell>
  );
}
