import Image from "next/image";
import Link from "next/link";
import { company, contactInfo, services } from "@/lib/content";

const serviceLinks = services.map((service) => ({
  href: "/product",
  label: service.title,
}));

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/industries", label: "Industries" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

function FooterHeading({ children }: { children: string }) {
  return (
    <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-white/40">
      {children}
    </p>
  );
}

function FooterLink({ href, children }: { href: string; children: string }) {
  return (
    <Link
      href={href}
      className="cursor-pointer text-sm text-white/60 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fumbo-mint/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#040806]"
    >
      {children}
    </Link>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#040806]">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <div className="grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,0.7fr)] lg:gap-12">
          <div>
            <Link href="/" className="inline-flex cursor-pointer">
              <Image
                src="/brand/logo_white.png"
                alt="Fumbo"
                width={160}
                height={48}
                className="h-8 w-auto"
              />
            </Link>
            <p className="mt-5 max-w-[36ch] text-sm leading-relaxed text-white/45">
              AI chatbots and automation that understand your market. Headquartered in Accra,
              working with teams worldwide.
            </p>
            <p className="mt-4 text-sm text-white/35">
              {contactInfo.location}
              <span className="mx-2 text-white/20">·</span>
              {contactInfo.serving}
            </p>
          </div>

          <div>
            <FooterHeading>Services</FooterHeading>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
              <li>
                <FooterLink href="/product">All services</FooterLink>
              </li>
            </ul>
          </div>

          <div>
            <FooterHeading>Company</FooterHeading>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <FooterHeading>Legal</FooterHeading>
            <ul className="flex flex-col gap-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-xs text-white/35">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
