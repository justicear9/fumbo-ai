import type { Metadata, Viewport } from "next";
import { Poppins, Geist_Mono } from "next/font/google";
import { JsonLd } from "@/components/site/json-ld";
import { organizationGraph, SITE_URL, siteConfig } from "@/lib/seo";
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

export const viewport: Viewport = {
  themeColor: "#050a08",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AI Chatbots and Automation for Your Market | Fumbo Ai",
    template: "%s | Fumbo Ai",
  },
  description:
    "AI chatbots and automation that understand your market. Answer customers on web, WhatsApp, social, and email, then clear the work behind each chat. Book a demo.",
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.legalName, url: SITE_URL }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  keywords: [
    "AI chatbots",
    "automation services",
    "operations AI",
    "customer service automation",
    "CRM automation",
    "omnichannel chatbot",
  ],
  category: "technology",
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "AI Chatbots and Automation for Your Market | Fumbo Ai",
    description:
      "Answer customers on every channel, then clear the work behind each chat. We design, ship, and stay.",
    url: SITE_URL,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name}: ${siteConfig.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Chatbots and Automation for Your Market | Fumbo Ai",
    description:
      "Answer customers on every channel, then clear the work behind each chat. We design, ship, and stay.",
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icons/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.webmanifest",
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
        <JsonLd data={organizationGraph()} />
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
