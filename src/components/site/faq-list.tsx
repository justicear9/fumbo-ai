"use client";

import { useState } from "react";
import { CaretDown } from "@phosphor-icons/react";
import { Reveal } from "@/components/site/reveal";
import { faqs } from "@/lib/content";
import { cn } from "@/lib/utils";

export function FaqList({ limit }: { limit?: number }) {
  const items = limit ? faqs.slice(0, limit) : faqs;
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="grid gap-3">
      {items.map((faq, index) => {
        const open = openIndex === index;
        return (
          <Reveal key={faq.question} delay={index * 0.04} className="min-w-0">
            <div className="rounded-[1.25rem] border border-white/10 bg-[#0a1511]/80">
              <button
                type="button"
                className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-5 text-left md:px-7"
                aria-expanded={open}
                onClick={() => setOpenIndex(open ? -1 : index)}
              >
                <span className="min-w-0 flex-1 text-base font-medium text-white md:text-lg">
                  {faq.question}
                </span>
                <CaretDown
                  size={18}
                  className={cn(
                    "shrink-0 text-fumbo-mint transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]",
                    open && "rotate-180",
                  )}
                />
              </button>
              <div
                className={cn(
                  "grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]",
                  open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                )}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-sm leading-relaxed text-white/60 md:px-7 md:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
