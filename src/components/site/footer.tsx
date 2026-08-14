import Image from "next/image";
import Link from "next/link";
import { navItems } from "@/lib/content";

const links = [
  ...navItems,
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#040806] px-4 py-12 md:px-8">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <Image
            src="/brand/logo_white.png"
            alt="Fumbo"
            width={160}
            height={48}
            className="h-8 w-auto"
          />
          <p className="mt-4 max-w-[40ch] text-sm leading-relaxed text-white/45">
            AI chatbots and automation services with cultural sensitivity—named from the Swahili
            word for enigma.
          </p>
          <p className="mt-3 text-sm text-white/35">Accra, Ghana · West Africa and beyond</p>
        </div>

        <nav className="flex flex-wrap gap-x-5 gap-y-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-white/55 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="mx-auto mt-10 flex max-w-[1400px] flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Fumbo Ai Ltd. All rights reserved.</p>
        <p className="text-white/30">Ghana · West Africa · Global markets</p>
      </div>
    </footer>
  );
}
