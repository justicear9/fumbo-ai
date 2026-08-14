"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import { AmbientField } from "@/components/site/ambient-field";
import { ChannelMarquee } from "@/components/site/channel-marquee";
import { company } from "@/lib/content";

const chips = ["AI Chatbots", "Automation Services", "Operations AI"];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative flex flex-col overflow-hidden bg-[#050a08] lg:min-h-[100dvh]">
      <AmbientField intensity="medium" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_12%_18%,rgba(36,237,164,0.08),transparent_44%),radial-gradient(ellipse_at_88%_14%,rgba(0,150,246,0.08),transparent_42%)]" />

      <div className="relative mx-auto grid w-full flex-1 max-w-[1400px] grid-cols-1 items-center lg:grid-cols-[minmax(0,1.45fr)_minmax(0,0.55fr)]">
        <Spotlight size={380} />

        <div className="pointer-events-none relative z-20 flex flex-col justify-center px-4 pb-6 pt-28 md:px-8 lg:max-w-[46rem] lg:pb-8 lg:pt-24">
          <motion.p
            className="mb-5 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-fumbo-mint/90"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inset-0 animate-ping rounded-full bg-fumbo-mint/60" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-fumbo-mint" />
            </span>
            {company.shortName}
          </motion.p>

          <motion.h1
            className="max-w-[14em] text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-[3.35rem] lg:leading-[1.08]"
            initial={reduce ? false : { opacity: 0, y: 28, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            {company.tagline}
          </motion.h1>

          <motion.p
            className="mt-5 max-w-[38rem] text-base leading-relaxed text-white/65 md:text-lg"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {company.heroLead}
          </motion.p>

          <motion.div
            className="pointer-events-auto mt-6 flex flex-wrap gap-2"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {chips.map((chip, index) => (
              <motion.span
                key={chip}
                className="rounded-full border border-white/12 bg-white/5 px-3 py-1.5 text-xs text-white/70"
                animate={
                  reduce
                    ? undefined
                    : {
                        borderColor: [
                          "rgba(255,255,255,0.12)",
                          "rgba(36,237,164,0.35)",
                          "rgba(255,255,255,0.12)",
                        ],
                      }
                }
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  delay: index * 1.2,
                  ease: "easeInOut",
                }}
              >
                {chip}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            className="pointer-events-auto mt-8 flex flex-wrap items-center gap-3"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-fumbo-mint px-5 py-3 text-sm font-semibold text-[#04110c] transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#5ff0b8] active:scale-[0.98]"
            >
              <span className="absolute inset-0 -translate-x-full bg-white/30 transition-transform duration-700 ease-out group-hover:translate-x-full" />
              Book a demo
              <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-[#04110c]/12 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px">
                →
              </span>
            </Link>
            <Link
              href="/product"
              className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/85 backdrop-blur-sm transition-colors duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-white/25 hover:bg-white/10"
            >
              See services
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="relative z-10 h-[min(54vh,480px)] w-full lg:absolute lg:inset-y-0 lg:left-[42%] lg:right-0 lg:h-auto xl:left-[46%] 2xl:left-[50%] 2xl:right-[calc(50%-50vw)]"
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="absolute inset-0 origin-bottom scale-[1.06] lg:-translate-x-[6%] lg:scale-[1.02] xl:-translate-x-[3%] xl:scale-[0.96] 2xl:translate-x-0 2xl:scale-[0.9]">
            <SplineScene
              scene="/spline/robot.splinecode"
              className="absolute inset-0"
            />
          </div>
        </motion.div>
      </div>

      <ChannelMarquee className="relative z-20" />
    </section>
  );
}
