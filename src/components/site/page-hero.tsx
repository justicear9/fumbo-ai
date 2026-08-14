"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { AmbientField } from "@/components/site/ambient-field";
import { cn } from "@/lib/utils";

const CompanionRobot = dynamic(
  () => import("@/components/site/companion-robot").then((mod) => mod.CompanionRobot),
  {
    ssr: false,
    loading: () => <div className="h-full w-full" aria-hidden />,
  },
);

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  className?: string;
  actions?: ReactNode;
  showRobot?: boolean;
};

export function PageHero({
  eyebrow,
  title,
  description,
  className,
  actions,
  showRobot = true,
}: PageHeroProps) {
  const reduce = useReducedMotion();

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-[#050a08] px-4 pb-10 pt-32 md:px-8 md:pb-12 md:pt-36",
        className,
      )}
    >
      <AmbientField intensity="soft" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(36,237,164,0.1),transparent_45%),radial-gradient(ellipse_at_90%_10%,rgba(0,150,246,0.08),transparent_40%)]" />
      <div
        className={cn(
          "relative mx-auto grid max-w-[1400px] items-center gap-6",
          showRobot && "lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-8",
        )}
      >
        <div>
          {eyebrow ? (
            <motion.p
              className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-fumbo-mint/90"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              {eyebrow}
            </motion.p>
          ) : null}
          <motion.h1
            className="max-w-[16ch] text-balance text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-[3.25rem] lg:leading-[1.08]"
            initial={reduce ? false : { opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          >
            {title}
          </motion.h1>
          <motion.p
            className="mt-5 max-w-[52ch] text-base leading-relaxed text-white/60 md:text-lg"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {description}
          </motion.p>
          {actions ? (
            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            >
              {actions}
            </motion.div>
          ) : null}
        </div>

        {showRobot ? (
          <motion.div
            className="relative h-[260px] w-full overflow-hidden sm:h-[320px] lg:h-[400px] xl:h-[440px]"
            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            <CompanionRobot />
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}

type CtaBandProps = {
  title: string;
  body: string;
  href?: string;
  label?: string;
};

export function CtaBand({
  title,
  body,
  href = "/contact",
  label = "Book a demo",
}: CtaBandProps) {
  return (
    <section className="relative overflow-hidden bg-[#050a08] px-4 py-20 md:px-8 md:py-28">
      <AmbientField intensity="soft" />
      <div className="relative mx-auto max-w-[1400px]">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(ellipse_at_top_left,rgba(36,237,164,0.18),transparent_42%),radial-gradient(ellipse_at_bottom_right,rgba(0,150,246,0.16),transparent_42%),#08140f] p-1.5">
          <div className="flex flex-col gap-8 rounded-[calc(2rem-0.375rem)] border border-white/8 bg-[#07110d]/75 px-6 py-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:px-8 sm:py-10 md:flex-row md:items-end md:justify-between md:px-12 md:py-14">
            <div>
              <h2 className="max-w-[14ch] text-3xl font-semibold tracking-tight text-white md:text-4xl">
                {title}
              </h2>
              <p className="mt-4 max-w-[42ch] text-base leading-relaxed text-white/60">
                {body}
              </p>
            </div>
            <Link
              href={href}
              className="group relative inline-flex shrink-0 items-center gap-2 overflow-hidden rounded-full bg-fumbo-mint px-5 py-3 text-sm font-semibold text-[#04110c] transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#5ff0b8] active:scale-[0.98]"
            >
              <span className="absolute inset-0 -translate-x-full bg-white/25 transition-transform duration-700 ease-out group-hover:translate-x-full" />
              {label}
              <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-[#04110c]/12 transition-transform duration-300 group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionIntro({
  title,
  body,
  className,
}: {
  title: string;
  body?: string;
  className?: string;
}) {
  return (
    <div className={cn(className)}>
      <h2 className="max-w-[16ch] text-3xl font-semibold tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      {body ? (
        <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-white/60 md:text-lg">
          {body}
        </p>
      ) : null}
    </div>
  );
}
