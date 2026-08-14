import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
