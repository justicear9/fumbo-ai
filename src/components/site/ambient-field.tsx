"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type AmbientFieldProps = {
  className?: string;
  intensity?: "soft" | "medium";
};

export function AmbientField({ className, intensity = "soft" }: AmbientFieldProps) {
  const reduce = useReducedMotion();
  const strong = intensity === "medium";

  if (reduce) {
    return (
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 overflow-hidden",
          className,
        )}
      >
        <div className="absolute -left-[10%] top-[-20%] h-[55%] w-[55%] rounded-full bg-fumbo-mint/[0.07] blur-[100px]" />
        <div className="absolute -right-[5%] top-[10%] h-[45%] w-[45%] rounded-full bg-fumbo-blue/[0.08] blur-[90px]" />
      </div>
    );
  }

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <motion.div
        className={cn(
          "absolute -left-[12%] top-[-18%] rounded-full bg-fumbo-mint blur-[110px]",
          strong ? "h-[58%] w-[58%] opacity-[0.14]" : "h-[52%] w-[52%] opacity-[0.09]",
        )}
        animate={{ x: [0, 40, -20, 0], y: [0, 30, 10, 0], scale: [1, 1.08, 0.96, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={cn(
          "absolute -right-[8%] top-[8%] rounded-full bg-fumbo-blue blur-[100px]",
          strong ? "h-[48%] w-[48%] opacity-[0.16]" : "h-[42%] w-[42%] opacity-[0.1]",
        )}
        animate={{ x: [0, -35, 15, 0], y: [0, 25, -15, 0], scale: [1, 0.94, 1.06, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
      />
      <motion.div
        className="absolute bottom-[-10%] left-[30%] h-[40%] w-[40%] rounded-full bg-fumbo-mint/10 blur-[120px]"
        animate={{ x: [0, 25, -10, 0], y: [0, -20, 15, 0], opacity: [0.08, 0.14, 0.06, 0.08] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      />
    </div>
  );
}
