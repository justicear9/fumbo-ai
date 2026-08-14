"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { Reveal } from "@/components/site/reveal";
import { SectionIntro } from "@/components/site/page-hero";
import { AmbientField } from "@/components/site/ambient-field";
import { ChannelNetwork } from "@/components/site/channel-network";
import { engagementSteps } from "@/lib/content";

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
    <Reveal delay={delay} className={className ?? "h-full"}>
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
            title="Meet customers on the channels they already use"
            body="Web, social, email, WhatsApp: one assistant, connected across the inboxes you already run."
          />
        </Reveal>
        <ChannelNetwork />
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-[#050a08] px-4 py-16 md:px-8 md:py-20">
      <AmbientField intensity="soft" />
      <div className="relative mx-auto max-w-[1400px]">
        <Reveal>
          <SectionIntro
            title="How we start"
            body="One live slice first. Then we widen coverage with your team."
          />
        </Reveal>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {engagementSteps.map((item, index) => (
            <HoverCard key={item.step} delay={index * 0.04}>
              <article className="group relative h-full min-h-[180px] overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#0a1511] p-6">
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
