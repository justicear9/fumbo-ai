"use client";

import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { clients } from "@/lib/content";
import { Reveal } from "@/components/site/reveal";
import { cn } from "@/lib/utils";

function ResultCopy({ stat, result }: { stat: string; result: string }) {
  return (
    <div className="flex flex-col items-center justify-center px-2 text-center">
      <p className="text-2xl font-semibold tracking-tight text-white md:text-[1.65rem]">{stat}</p>
      <p className="mt-1 max-w-[14rem] text-[11px] leading-snug text-white/55 md:text-xs">{result}</p>
    </div>
  );
}

export function ClientsSection() {
  const reduce = useReducedMotion();
  if (clients.length === 0) return null;

  return (
    <section className="relative overflow-hidden bg-[#050a08] px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-[1400px] items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-fumbo-mint/90">
            Clients
          </p>
          <h2 className="max-w-[16ch] text-3xl font-semibold tracking-tight text-white md:text-5xl">
          Built for impact. Proven in the real world.
          </h2>
          <p className="mt-5 max-w-[42ch] text-base leading-relaxed text-white/60 md:text-lg">
          From intelligent automation to AI-powered customer experiences, Fumbo helps businesses move faster, work smarter, and scale what matters.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="rounded-[1.75rem] border border-white/10 bg-[#0a1511] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
            <ul className="grid grid-cols-2 sm:grid-cols-3">
              {clients.map((client, index) => (
                <li
                  key={client.name}
                  className={cn(
                    "relative flex min-h-[10.5rem] items-center justify-center px-3 pb-5 pt-9 md:min-h-[11.5rem]",
                    index % 2 === 0 && "max-sm:border-r max-sm:border-dashed max-sm:border-white/12",
                    index < 4 && "max-sm:border-b max-sm:border-dashed max-sm:border-white/12",
                    index % 3 !== 2 && "sm:border-r sm:border-dashed sm:border-white/12",
                    index < 3 && "sm:border-b sm:border-dashed sm:border-white/12",
                  )}
                >
                  <div className="group relative h-[7.5rem] w-full max-w-[16rem] cursor-default">
                    <div
                      className={cn(
                        "flex h-full w-full items-center justify-center",
                        !reduce &&
                          "transition-all duration-300 ease-out group-hover:-translate-y-12 group-hover:opacity-0",
                      )}
                    >
                      {client.logo ? (
                        <Image
                          src={client.logo}
                          alt={client.name}
                          width={360}
                          height={120}
                          unoptimized
                          className="h-[4.25rem] w-auto max-w-[95%] object-contain md:h-[5.25rem]"
                        />
                      ) : (
                        <span className="text-center text-sm font-medium text-white/70">
                          {client.name}
                        </span>
                      )}
                    </div>
                    <div
                      className={cn(
                        "pointer-events-none absolute inset-0 flex items-center justify-center",
                        reduce
                          ? "hidden"
                          : "translate-y-8 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100",
                      )}
                    >
                      <ResultCopy stat={client.stat} result={client.result} />
                    </div>
                  </div>
                  <span className="pointer-events-none absolute left-3 top-3 rounded-full border border-fumbo-mint/20 bg-fumbo-mint/[0.07] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-fumbo-mint/90">
                    {client.sector}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
