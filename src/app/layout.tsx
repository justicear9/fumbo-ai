import type { Metadata } from "next";
import { Poppins, Geist_Mono } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Fumbo Ai | AI chatbots and automation",
    template: "%s | Fumbo Ai",
  },
  description:
    "AI chatbots and automation that understand your market. Conversations on web, WhatsApp, social, and email, plus automations that clear routine work. A Ghanaian company serving teams worldwide.",
  metadataBase: new URL("https://fumbo.ai"),
  openGraph: {
    title: "Fumbo Ai",
    description:
      "AI chatbots and automation that understand your market. We design, ship, and stay.",
    url: "https://fumbo.ai",
    siteName: "Fumbo Ai",
    type: "website",
  },
  icons: {
    icon: "/brand/logo_icon.png",
    apple: "/brand/logo_icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#050a08] text-foreground">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-fumbo-mint focus:px-4 focus:py-2 focus:text-[#04110c]"
        >
          Skip to content
        </a>
        {children}
        <div className="grain-overlay" aria-hidden="true" />
      </body>
    </html>
  );
}
