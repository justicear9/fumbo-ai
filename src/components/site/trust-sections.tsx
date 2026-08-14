"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { Reveal } from "@/components/site/reveal";
import { SectionIntro } from "@/components/site/page-hero";
import { AmbientField } from "@/components/site/ambient-field";
import {
  automationPackages,
  channels,
  engagementSteps,
  proofStories,
} from "@/lib/content";

function HoverCard({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <Reveal delay={delay} className={className}>
      <motion.div
        className="h-full"
        whileHover={reduce ? undefined : { y: -4 }}
        transition={{ type: "spring", stiffness: 380, damping: 28 }}
      >
        {children}
      </motion.div>
    </Reveal>
  );
}

export function ChannelsSection() {
  return (
    <section className="relative overflow-hidden bg-[#06110d] px-4 py-20 md:px-8 md:py-24">
      <AmbientField />
      <div className="relative mx-auto max-w-[1400px]">
        <Reveal>
          <SectionIntro
            title="Meet customers where they already are"
            body="In Ghana and across West Africa, messaging often beats a website form. Fumbo covers the channels that matter."
          />
        </Reveal>
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((channel, index) => (
            <HoverCard key={channel.name} delay={index * 0.04}>
              <article className="group h-full rounded-[1.35rem] border border-white/10 bg-[#0a1511] p-6 transition-colors duration-300 hover:border-fumbo-mint/30 hover:bg-[#0c1a14]">
                <p className="text-lg font-semibold text-white transition-colors group-hover:text-fumbo-mint">
                  {channel.name}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/55">{channel.body}</p>
              </article>
            </HoverCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AutomationPackagesSection() {
  return (
    <section className="relative overflow-hidden bg-[#050a08] px-4 py-24 md:px-8 md:py-32">
      <AmbientField />
      <div className="relative mx-auto max-w-[1400px]">
        <Reveal>
          <SectionIntro
            title="Automation packages with names"
            body="Not vague “workflow magic”—specific plays we design, connect, and pilot with your team."
          />
        </Reveal>
        <div className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {automationPackages.map((item, index) => (
            <HoverCard key={item.title} delay={index * 0.04}>
              <article className="flex h-full flex-col rounded-[1.35rem] border border-white/10 bg-[#0a1511] p-6 transition-colors duration-300 hover:border-fumbo-blue/35 md:p-7">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-fumbo-blue">
                  Package 0{index + 1}
                </p>
                <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">{item.body}</p>
              </article>
            </HoverCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProofSection() {
  return (
    <section className="relative overflow-hidden bg-[#06110d] px-4 py-24 md:px-8 md:py-32">
      <AmbientField />
      <div className="relative mx-auto max-w-[1400px]">
        <Reveal>
          <SectionIntro
            title="How engagements typically land"
            body="Illustrative patterns from the sectors we serve—problem, approach, and the outcome teams care about."
          />
        </Reveal>
        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {proofStories.map((story, index) => (
            <HoverCard key={story.title} delay={index * 0.05}>
              <article className="flex h-full flex-col rounded-[1.5rem] border border-white/10 bg-[#0a1511] p-7 transition-colors duration-300 hover:border-white/20">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-fumbo-mint/85">
                  {story.sector}
                </p>
                <h3 className="mt-4 text-xl font-semibold text-white">{story.title}</h3>
                <dl className="mt-6 space-y-4 text-sm leading-relaxed">
                  <div>
                    <dt className="text-white/40">Problem</dt>
                    <dd className="mt-1 text-white/70">{story.problem}</dd>
                  </div>
                  <div>
                    <dt className="text-white/40">Approach</dt>
                    <dd className="mt-1 text-white/70">{story.approach}</dd>
                  </div>
                  <div>
                    <dt className="text-white/40">Outcome</dt>
                    <dd className="mt-1 text-white/70">{story.outcome}</dd>
                  </div>
                </dl>
              </article>
            </HoverCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-[#050a08] px-4 py-24 md:px-8 md:py-32">
      <AmbientField />
      <div className="relative mx-auto max-w-[1400px]">
        <Reveal>
          <SectionIntro
            title="How we work with you"
            body="A clear path from first conversation to a live pilot—and ongoing optimization."
          />
        </Reveal>
        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {engagementSteps.map((item, index) => (
            <HoverCard key={item.step} delay={index * 0.04}>
              <article className="group relative h-full overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#0a1511] p-6">
                <motion.span
                  className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-fumbo-mint/10 blur-2xl"
                  animate={{ opacity: [0.35, 0.7, 0.35], scale: [1, 1.15, 1] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.5,
                    ease: "easeInOut",
                  }}
                />
                <p className="relative font-mono text-sm text-fumbo-mint">{item.step}</p>
                <h3 className="relative mt-4 text-xl font-semibold text-white">{item.title}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-white/55">{item.body}</p>
              </article>
            </HoverCard>
          ))}
        </div>
      </div>
    </section>
  );
}
