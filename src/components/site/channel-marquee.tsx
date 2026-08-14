"use client";

import { motion, useReducedMotion } from "framer-motion";
import { channels } from "@/lib/content";
import { cn } from "@/lib/utils";

export function ChannelMarquee({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  const items = [...channels, ...channels];

  return (
    <div
      className={cn(
        "relative overflow-hidden border-y border-white/10 bg-[#06110d]/80 py-4",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#06110d] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#06110d] to-transparent" />
      <motion.div
        className="flex w-max gap-10 whitespace-nowrap px-6"
        animate={reduce ? undefined : { x: ["0%", "-50%"] }}
        transition={
          reduce
            ? undefined
            : { duration: 28, repeat: Infinity, ease: "linear" }
        }
      >
        {items.map((channel, index) => (
          <span
            key={`${channel.name}-${index}`}
            className="inline-flex items-center gap-3 text-sm text-white/55"
          >
            <span className="h-1 w-1 rounded-full bg-fumbo-mint/70" />
            <span className="font-medium text-white/80">{channel.name}</span>
            <span className="hidden text-white/35 sm:inline">{channel.body}</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
