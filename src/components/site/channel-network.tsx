"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Browser,
  EnvelopeSimple,
  FacebookLogo,
  InstagramLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";
import { channels } from "@/lib/content";
import { cn } from "@/lib/utils";

type ChannelId = (typeof channels)[number]["id"];

const brand = {
  whatsapp: { color: "#25D366", Icon: WhatsappLogo },
  web: { color: "#0096f6", Icon: Browser },
  facebook: { color: "#1877F2", Icon: FacebookLogo },
  instagram: { color: "#E4405F", Icon: InstagramLogo },
  email: { color: "#24eda4", Icon: EnvelopeSimple },
} satisfies Record<ChannelId, { color: string; Icon: typeof WhatsappLogo }>;

const layout: Record<ChannelId, { x: number; y: number }> = {
  whatsapp: { x: 16, y: 54 },
  web: { x: 34, y: 22 },
  facebook: { x: 50, y: 70 },
  instagram: { x: 66, y: 22 },
  email: { x: 84, y: 54 },
};

const hub = { x: 50, y: 42 };

const links: Array<[ChannelId, ChannelId] | ["hub", ChannelId]> = [
  ["hub", "whatsapp"],
  ["hub", "web"],
  ["hub", "facebook"],
  ["hub", "instagram"],
  ["hub", "email"],
  ["whatsapp", "web"],
  ["web", "instagram"],
  ["instagram", "email"],
  ["facebook", "email"],
  ["whatsapp", "facebook"],
];

function pointOf(id: ChannelId | "hub") {
  return id === "hub" ? hub : layout[id];
}

function ChannelLogo({ id, size = 26 }: { id: ChannelId; size?: number }) {
  switch (id) {
    case "whatsapp":
    case "web":
    case "facebook":
    case "instagram":
    case "email": {
      const { Icon, color } = brand[id];
      return <Icon size={size} weight="fill" style={{ color }} />;
    }
    default: {
      const _exhaustive: never = id;
      return _exhaustive;
    }
  }
}

export function ChannelNetwork() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState<ChannelId>("whatsapp");
  const current = channels.find((channel) => channel.id === active) ?? channels[0];

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => {
      setActive((prev) => {
        const index = channels.findIndex((channel) => channel.id === prev);
        return channels[(index + 1) % channels.length].id;
      });
    }, 2800);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <div className="mt-12">
      <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0a1511]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(36,237,164,0.08),transparent_55%)]" />

        <div className="relative min-h-[320px] overflow-hidden px-3 py-10 sm:min-h-[380px] sm:px-6 sm:py-12 lg:min-h-[420px] lg:px-10">
          <div className="relative mx-auto h-[260px] w-full max-w-[1080px] sm:h-[300px] lg:h-[340px]">
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden
          >
            {links.map((link, index) => {
              const from = pointOf(link[0]);
              const to = pointOf(link[1]);
              const midX = (from.x + to.x) / 2;
              const midY = (from.y + to.y) / 2 - 6;
              const d = `M ${from.x} ${from.y} Q ${midX} ${midY} ${to.x} ${to.y}`;
              const lit =
                link[0] === "hub"
                  ? link[1] === active
                  : link[0] === active || link[1] === active;

              return (
                <g key={`${link[0]}-${link[1]}`}>
                  <path
                    d={d}
                    fill="none"
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth="0.45"
                    vectorEffect="non-scaling-stroke"
                  />
                  <motion.path
                    d={d}
                    fill="none"
                    stroke={lit ? "rgba(36,237,164,0.85)" : "rgba(0,150,246,0.35)"}
                    strokeWidth={lit ? 0.7 : 0.4}
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                    initial={reduce ? false : { pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.1, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  />
                  {!reduce ? (
                    <circle r="0.9" fill={lit ? "#24eda4" : "#0096f6"}>
                      <animateMotion dur={`${3.6 + (index % 3) * 0.5}s`} repeatCount="indefinite" path={d} />
                    </circle>
                  ) : null}
                </g>
              );
            })}
          </svg>

          <div
            className="absolute z-10 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-fumbo-mint/35 bg-[#07110d] shadow-[0_0_40px_rgba(36,237,164,0.18)] sm:h-[4.5rem] sm:w-[4.5rem]"
            style={{ left: `${hub.x}%`, top: `${hub.y}%` }}
          >
            <Image
              src="/brand/logo_icon.png"
              alt=""
              width={36}
              height={36}
              className="h-8 w-8 object-contain sm:h-9 sm:w-9"
            />
          </div>

          {channels.map((channel) => {
            const pos = layout[channel.id];
            const on = channel.id === active;
            return (
              <button
                key={channel.id}
                type="button"
                onMouseEnter={() => setActive(channel.id)}
                onFocus={() => setActive(channel.id)}
                className={cn(
                  "absolute z-10 flex max-w-[min(100%,11.5rem)] -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center gap-2.5 rounded-full border px-2.5 py-2 transition-all duration-300 sm:px-3",
                  on
                    ? "border-white/20 bg-[#0d1c16] shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
                    : "border-white/10 bg-[#08140f]/90 hover:border-white/20",
                )}
                style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                aria-pressed={on}
              >
                <span
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-black/30 sm:h-9 sm:w-9",
                    on && "ring-2 ring-fumbo-mint/50",
                  )}
                >
                  <ChannelLogo id={channel.id} />
                </span>
                <span className="hidden truncate pr-1 text-sm font-medium text-white sm:inline">
                  {channel.name}
                </span>
              </button>
            );
          })}
          </div>
        </div>
      </div>

      <motion.div
        key={current.id}
        initial={reduce ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto mt-6 max-w-[46ch] text-center"
      >
        <p className="text-sm font-medium text-white">{current.name}</p>
        <p className="mt-2 text-sm leading-relaxed text-white/55 md:text-base">{current.body}</p>
      </motion.div>
    </div>
  );
}
