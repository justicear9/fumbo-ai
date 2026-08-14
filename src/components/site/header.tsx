"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { navItems } from "@/lib/content";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-5">
      <div
        className={cn(
          "pointer-events-auto flex w-full max-w-5xl items-center justify-between gap-4 rounded-full border border-white/10 bg-[#07110d]/75 px-3 py-2 shadow-[0_18px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl",
          open && "rounded-[1.75rem]",
        )}
      >
        <Link href="/" className="relative z-10 flex shrink-0 items-center pl-2">
          <Image
            src="/brand/logo_green.png"
            alt="Fumbo"
            width={126}
            height={37}
            className="h-7 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-3.5 py-2 text-sm transition-colors duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]",
                  active
                    ? "bg-white/8 text-white"
                    : "text-white/70 hover:bg-white/5 hover:text-white",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="group hidden items-center gap-2 rounded-full bg-fumbo-mint px-4 py-2 text-sm font-medium text-[#04110c] transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#5ff0b8] active:scale-[0.98] sm:inline-flex"
          >
            Book a demo
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#04110c]/10 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px">
              →
            </span>
          </Link>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white md:hidden"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={18} weight="bold" /> : <List size={18} weight="bold" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "pointer-events-none absolute inset-x-4 top-[4.5rem] z-30 origin-top overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#07110d]/95 opacity-0 shadow-[0_24px_80px_rgba(0,0,0,0.55)] backdrop-blur-2xl transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] md:hidden",
          open && "pointer-events-auto translate-y-0 opacity-100",
          !open && "-translate-y-3",
        )}
      >
        <nav className="flex flex-col gap-1 p-4">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-lg text-white/85 transition-colors hover:bg-white/5"
              style={{ transitionDelay: open ? `${100 + index * 50}ms` : "0ms" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-fumbo-mint px-4 py-3 text-center text-sm font-medium text-[#04110c]"
          >
            Book a demo
          </Link>
        </nav>
      </div>
    </header>
  );
}
