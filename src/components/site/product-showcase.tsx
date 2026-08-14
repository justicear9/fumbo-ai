"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/site/reveal";
import { SectionIntro } from "@/components/site/page-hero";
import { AmbientField } from "@/components/site/ambient-field";

const messages = [
  {
    from: "customer" as const,
    text: "Please, my data finished. How do I buy more on this line?",
  },
  {
    from: "bot" as const,
    text: "Sure—I can help with that. Reply with 1 for daily, 2 for weekly, or 3 for monthly bundles.",
  },
  {
    from: "customer" as const,
    text: "2",
  },
  {
    from: "bot" as const,
    text: "Weekly bundles ready. Confirm with MoMo or airtime? If you need a human, say agent.",
  },
];

const flow = [
  "WhatsApp message",
  "Intent detected",
  "CRM / billing check",
  "Reply or route to agent",
];

function TypingDots() {
  return (
    <div className="flex items-center gap-1 rounded-2xl rounded-bl-md bg-white/8 px-4 py-3">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="h-1.5 w-1.5 rounded-full bg-white/55"
          animate={{ opacity: [0.3, 1, 0.3], y: [0, -2, 0] }}
          transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

function LiveChat() {
  const reduce = useReducedMotion();
  const [visibleCount, setVisibleCount] = useState(reduce ? messages.length : 0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (reduce) return;

    let cancelled = false;
    let timeout: ReturnType<typeof setTimeout>;

    const play = async () => {
      setVisibleCount(0);
      setTyping(false);

      for (let i = 0; i < messages.length; i++) {
        if (cancelled) return;
        const isBot = messages[i].from === "bot";
        if (isBot) {
          setTyping(true);
          await new Promise((r) => {
            timeout = setTimeout(r, 900);
          });
          if (cancelled) return;
          setTyping(false);
        } else {
          await new Promise((r) => {
            timeout = setTimeout(r, 500);
          });
        }
        if (cancelled) return;
        setVisibleCount(i + 1);
        await new Promise((r) => {
          timeout = setTimeout(r, isBot ? 1100 : 700);
        });
      }

      await new Promise((r) => {
        timeout = setTimeout(r, 2800);
      });
      if (!cancelled) play();
    };

    play();
    return () => {
      cancelled = true;
      clearTimeout(timeout);
    };
  }, [reduce]);

  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0a1511]/95 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inset-0 animate-ping rounded-full bg-fumbo-mint/50" />
            <span className="relative rounded-full bg-fumbo-mint h-2.5 w-2.5" />
          </span>
          <div>
            <p className="text-sm font-medium text-white">Fumbo assistant</p>
            <p className="text-xs text-fumbo-mint/80">WhatsApp · Online</p>
          </div>
        </div>
        <span className="rounded-full border border-fumbo-mint/25 bg-fumbo-mint/10 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-fumbo-mint">
          Live sample
        </span>
      </div>
      <div className="flex min-h-[320px] flex-col justify-end space-y-3 p-5 md:min-h-[360px] md:p-6">
        <AnimatePresence initial={false}>
          {messages.slice(0, visibleCount).map((message) => (
            <motion.div
              key={`${message.from}-${message.text}`}
              initial={reduce ? false : { opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className={`flex ${message.from === "customer" ? "justify-end" : "justify-start"}`}
            >
              <p
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  message.from === "customer"
                    ? "rounded-br-md bg-fumbo-blue/30 text-white"
                    : "rounded-bl-md bg-white/8 text-white/85"
                }`}
              >
                {message.text}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
        {typing ? (
          <div className="flex justify-start">
            <TypingDots />
          </div>
        ) : null}
      </div>
    </div>
  );
}

function LiveFlow() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % flow.length);
    }, 1600);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0a1511]/95 p-6 md:p-8">
      <AmbientField intensity="soft" className="opacity-80" />
      <div className="relative z-10">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-fumbo-blue">
          Automation path
        </p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
          From message to action
        </h3>
        <p className="mt-3 max-w-[40ch] text-sm leading-relaxed text-white/55">
          Chat captures intent. Automation checks systems, replies, or escalates—so people only
          jump in when judgment is needed.
        </p>
      </div>

      <ol className="relative z-10 mt-10 space-y-0">
        {flow.map((step, index) => {
          const on = reduce || index === active;
          const done = !reduce && index < active;
          return (
            <li key={step} className="relative flex gap-4 pb-8 last:pb-0">
              {index < flow.length - 1 ? (
                <span className="absolute left-[15px] top-8 h-[calc(100%-2rem)] w-px bg-white/10" />
              ) : null}
              <motion.span
                className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xs font-semibold"
                animate={{
                  borderColor: on
                    ? "rgba(36,237,164,0.7)"
                    : done
                      ? "rgba(36,237,164,0.35)"
                      : "rgba(255,255,255,0.12)",
                  backgroundColor: on
                    ? "rgba(36,237,164,0.22)"
                    : done
                      ? "rgba(36,237,164,0.1)"
                      : "rgba(255,255,255,0.03)",
                  color: on || done ? "#24eda4" : "rgba(255,255,255,0.45)",
                  scale: on ? 1.08 : 1,
                }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                {index + 1}
              </motion.span>
              <div className="pt-1">
                <motion.p
                  className="text-sm font-medium"
                  animate={{ color: on ? "#ffffff" : "rgba(255,255,255,0.45)" }}
                >
                  {step}
                </motion.p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export function ProductShowcase() {
  return (
    <section className="relative overflow-hidden bg-[#050a08] px-4 py-24 md:px-8 md:py-32">
      <AmbientField />
      <div className="relative mx-auto max-w-[1400px]">
        <Reveal>
          <SectionIntro
            title="What it looks like in practice"
            body="Not just a brand robot—real conversations on the channels your customers use, wired into the systems your team already runs."
          />
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-2">
          <Reveal>
            <LiveChat />
          </Reveal>
          <Reveal delay={0.08}>
            <LiveFlow />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
