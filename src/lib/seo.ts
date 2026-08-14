import type { Metadata } from "next";
import { company, contactInfo, faqs } from "@/lib/content";

export const SITE_URL = "https://fumbo.ai";

export const siteConfig = {
  name: company.shortName,
  legalName: company.name,
  url: SITE_URL,
  tagline: company.tagline,
  locale: "en_US",
  ogImage: "/og.png",
  email: contactInfo.email,
  location: contactInfo.location,
} as const;

export const publicRoutes = [
  { path: "/", title: "Home", priority: 1, changeFrequency: "weekly" as const },
  { path: "/product", title: "Services", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/industries", title: "Industries", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/about", title: "About", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/faq", title: "FAQ", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/contact", title: "Contact", priority: 0.8, changeFrequency: "yearly" as const },
  { path: "/privacy", title: "Privacy", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/terms", title: "Terms", priority: 0.3, changeFrequency: "yearly" as const },
] as const;

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  index?: boolean;
};

export function absoluteUrl(path: string) {
  if (path === "/") return SITE_URL;
  return `${SITE_URL}${path}`;
}

export function pageMetadata({
  title,
  description,
  path,
  index = true,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = title.includes("Fumbo") ? title : `${title} | Fumbo Ai`;

  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: url },
    robots: {
      index,
      follow: true,
      googleBot: {
        index,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: absoluteUrl(siteConfig.ogImage),
          width: 1200,
          height: 630,
          alt: `${siteConfig.name}: ${siteConfig.tagline}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [absoluteUrl(siteConfig.ogImage)],
    },
  };
}

export function organizationGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": `${SITE_URL}/#organization`,
        name: siteConfig.legalName,
        alternateName: siteConfig.name,
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: absoluteUrl("/icons/icon-512.png"),
          width: 512,
          height: 512,
        },
        image: absoluteUrl(siteConfig.ogImage),
        description: company.summary,
        email: siteConfig.email,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Accra",
          addressCountry: "GH",
        },
        areaServed: "Worldwide",
        knowsAbout: [
          "AI chatbots",
          "Automation services",
          "Operations AI",
          "Customer service automation",
        ],
        makesOffer: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI chatbots",
              description:
                "Assistants on web, social, email, and WhatsApp that answer in your tone and hand off to a person when needed.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Automation services",
              description:
                "Automations that clear routine work: tickets, orders, CRM updates, approvals, and alerts.",
            },
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: siteConfig.name,
        description: siteConfig.tagline,
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "en",
      },
    ],
  };
}

export function breadcrumbList(path: string) {
  const crumbs = [{ name: "Home", path: "/" }];
  if (path !== "/") {
    const route = publicRoutes.find((item) => item.path === path);
    crumbs.push({ name: route?.title ?? path, path });
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

export function faqPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function servicePageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI chatbots and automation",
    serviceType: ["AI chatbot development", "Business process automation"],
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: "Worldwide",
    url: absoluteUrl("/product"),
    description: company.summary,
  };
}
