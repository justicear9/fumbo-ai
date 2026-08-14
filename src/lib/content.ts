export const company = {
  name: "Fumbo Ai Ltd",
  shortName: "Fumbo Ai",
  tagline: "AI chatbots and automation that understand your market",
  offering: "AI chatbots and automation services",
  enigma:
    "In Swahili, fumbo means a riddle. We kept the name because the hard part is never the model—it’s the reply, the language, and the handoff that make someone trust you.",
  summary:
    "Fumbo Ai builds AI chatbots and automations for teams whose customers already live on WhatsApp, web, and social—not in a contact form.",
  mission:
    "Help businesses in Ghana and similar markets answer at scale without sounding like a template, and without burying staff in the same ten questions every day.",
  focus:
    "Based in Accra. Designed around how people here actually message, speak, and get things done.",
} as const;

export const contactInfo = {
  email: "hello@fumbo.ai",
  location: "Accra, Ghana",
  serving: "West Africa and global markets",
  /** Replace with your WhatsApp Business number in international format, digits only */
  whatsapp: "",
} as const;

export const navItems = [
  { href: "/product", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
] as const;

export const channels = [
  {
    id: "whatsapp",
    name: "WhatsApp",
    body: "Support, sales, and updates in the thread your customers already opened.",
  },
  {
    id: "web",
    name: "Web chat",
    body: "On-site help that matches your brand and hands off to a person cleanly.",
  },
  {
    id: "facebook",
    name: "Facebook",
    body: "The same assistant in Messenger—no second script, no second team.",
  },
  {
    id: "instagram",
    name: "Instagram",
    body: "DMs that can actually resolve something, not just collect a screenshot.",
  },
  {
    id: "email",
    name: "Email",
    body: "Longer requests, still on-brand, still connected to the same systems.",
  },
] as const;

export const engagementSteps = [
  {
    step: "01",
    title: "Discover",
    body: "Channels, languages, systems, and the work that burns your team’s time.",
  },
  {
    step: "02",
    title: "Design",
    body: "Conversation flows, automation maps, tone guidelines, and success metrics.",
  },
  {
    step: "03",
    title: "Pilot",
    body: "Ship a focused live slice—one channel or one workflow—so value shows up fast.",
  },
  {
    step: "04",
    title: "Optimize",
    body: "Expand coverage, tighten handoffs, and keep improving with your team.",
  },
] as const;

export const services = [
  {
    slug: "chatbots",
    title: "AI chatbots",
    body: "Assistants that meet customers on WhatsApp, web, social, and email—with tone that fits your market, and a clean handoff when a person should take over.",
    points: [
      "WhatsApp, web, social, and email",
      "Brand-aligned, localized conversations",
      "Human handoff when judgment matters",
    ],
  },
  {
    slug: "automation",
    title: "Automation services",
    body: "Connect chat to the tools you already run—CRM, helpdesk, billing—so routine work does not sit in a queue waiting for someone to copy and paste.",
    points: [
      "Lead capture and ticket routing",
      "Order updates, approvals, and alerts",
      "Pilot one workflow, then expand",
    ],
  },
] as const;

export const whyFumbo = [
  {
    title: "WhatsApp is the front door",
    body: "In Ghana, messaging often beats a website form. We treat WhatsApp as a primary channel—then keep the same quality on web, social, and email.",
  },
  {
    title: "Localization is the work",
    body: "Tone, language, and context are designed into the first flow. Not translated onto a generic English bot after the fact.",
  },
  {
    title: "Handoff without the dead end",
    body: "Routine questions get answered. Anything that needs judgment goes to your team with the thread intact.",
  },
  {
    title: "Wired into your stack",
    body: "Chat is only useful if it can check an order, open a ticket, or update a CRM. We connect the conversation to the system of record.",
  },
  {
    title: "Pilot, then widen",
    body: "We start with one channel or one workflow so you can see it live—then expand coverage with your team, not a 40-page rollout plan.",
  },
  {
    title: "We stay after launch",
    body: "Flows drift. Products change. We keep tuning the assistant and the automations as your operation does.",
  },
] as const;

export const values = [
  {
    title: "Innovation",
    body: "Pushing technology to redefine the customer experience.",
  },
  {
    title: "Cultural sensitivity",
    body: "Respecting diversity so solutions stay relevant to the communities we serve.",
  },
  {
    title: "Customer-centricity",
    body: "Your customers sit at the center of every decision we make.",
  },
  {
    title: "Collaboration",
    body: "Working beside your team to achieve more and drive greater impact.",
  },
  {
    title: "Integrity",
    body: "Honesty and ethical conduct in every interaction—internally and externally.",
  },
  {
    title: "Continuous improvement",
    body: "Always refining products, processes, and craft.",
  },
  {
    title: "Adaptability",
    body: "Embracing change and moving quickly when the landscape shifts.",
  },
  {
    title: "Empowerment",
    body: "Ownership, judgment, and meaningful change at every level.",
  },
  {
    title: "Excellence",
    body: "High standards—and the discipline to keep raising them.",
  },
  {
    title: "Community engagement",
    body: "Giving back to the communities we serve and fostering positive change.",
  },
] as const;

export type Industry = {
  slug: string;
  name: string;
  summary: string;
  detail: string;
  outcomes: string[];
};

export const industries: Industry[] = [
  {
    slug: "enterprise",
    name: "Enterprises with multichannel presence",
    summary: "Chatbots and automation across web, social, messaging, and email.",
    detail:
      "Large companies operating across websites, social platforms, messaging apps, and email need assistants and automations that keep interactions and internal handoffs seamless across every channel.",
    outcomes: [
      "Unified customer conversations",
      "Automated routine handoffs",
      "Consistent brand tone everywhere",
    ],
  },
  {
    slug: "ecommerce",
    name: "E-commerce",
    summary: "Recommendations, tracking, and ops automation that keep carts moving.",
    detail:
      "Online retailers use Fumbo to enhance support, streamline sales, and automate order updates—with recommendations, tracking, and real-time inquiry resolution.",
    outcomes: [
      "Faster product discovery",
      "Self-serve order updates",
      "Fewer manual support tickets",
    ],
  },
  {
    slug: "finance",
    name: "Financial institutions",
    summary: "Routine banking help with security-minded automation.",
    detail:
      "Banks, insurers, and financial services automate routine tasks and offer personalized assistance—balances, transactions, planning prompts—while strengthening service quality.",
    outcomes: [
      "24/7 routine account help",
      "Guided transaction support",
      "Cleaner escalation paths",
    ],
  },
  {
    slug: "telecom",
    name: "Telecommunications",
    summary: "Activation, billing, and troubleshooting at scale.",
    detail:
      "Telecom operators reduce call volumes and improve self-service with account management, service activation, troubleshooting, and billing assistance—backed by automation where it counts.",
    outcomes: [
      "Lower call-center load",
      "Faster activations",
      "Higher retention through quicker answers",
    ],
  },
  {
    slug: "travel",
    name: "Travel & hospitality",
    summary: "Bookings, itineraries, and travel help on demand.",
    detail:
      "Airlines, hotels, agencies, and booking platforms streamline interactions with flight and hotel help, itinerary updates, and personalized recommendations.",
    outcomes: [
      "Smoother booking journeys",
      "Live itinerary guidance",
      "Always-on travel assistance",
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare providers",
    summary: "Patient engagement with careful, clear handoffs.",
    detail:
      "Hospitals, clinics, telemedicine platforms, and insurers improve engagement with scheduling, FAQs, reminders, and guided information—never replacing clinical judgment.",
    outcomes: [
      "Easier appointment booking",
      "Clear service FAQs",
      "Thoughtful human escalation",
    ],
  },
  {
    slug: "education",
    name: "Education institutions",
    summary: "Enrollment, advisement, and campus answers anytime.",
    detail:
      "Schools, universities, and e-learning platforms enhance engagement with enrollment help, assignment guidance, academic advisement prompts, and student FAQs.",
    outcomes: [
      "Simpler enrollment flows",
      "Always-on student support",
      "Personalized learning guidance",
    ],
  },
  {
    slug: "government",
    name: "Government agencies",
    summary: "Citizen services that are clear, timely, and accessible.",
    detail:
      "Public-sector organizations improve citizen services with guidance on permits, tax inquiries, public resources, and administrative processes—plus automation for repetitive back-office steps.",
    outcomes: [
      "Faster access to information",
      "Guided permit and service flows",
      "Reduced counter and call queues",
    ],
  },
];

export const faqs = [
  {
    question: "What does Fumbo Ai do?",
    answer:
      "We deliver AI chatbots and automation services—intelligent conversations for your customers and workflows that remove repetitive operational work.",
  },
  {
    question: "What is an AI chatbot?",
    answer:
      "An AI chatbot uses language models to understand questions and respond in natural language. Fumbo focuses on context, brand tone, and culturally aware replies across channels.",
  },
  {
    question: "What do your automation services cover?",
    answer:
      "Concrete plays such as lead capture to CRM, ticket triage and routing, order-status replies, approvals and alerts, and onboarding checklists—connected to the tools you already use.",
  },
  {
    question: "How do engagements work?",
    answer:
      "Discover → design → pilot → optimize. We start with a focused live slice so you see value quickly, then expand coverage with your team.",
  },
  {
    question: "How does Fumbo work with our existing channels and tools?",
    answer:
      "Chatbots meet customers on WhatsApp, web, social messaging, and email. Automations connect those conversations to CRM, helpdesk, and ops systems so work moves without manual copy-paste.",
  },
  {
    question: "What makes Fumbo different?",
    answer:
      "Customization, localization, and collaboration. We build solutions that are technologically advanced and culturally relevant—especially for diverse markets like Ghana.",
  },
  {
    question: "Can a chatbot replace human agents?",
    answer:
      "It should not. Fumbo handles routine work and escalates complex or sensitive cases to your team, so people spend time where judgment matters.",
  },
  {
    question: "Which industries do you serve?",
    answer:
      "Enterprises, e-commerce, finance, telecom, travel and hospitality, healthcare, education, and government—each with flows tuned to that sector’s realities.",
  },
  {
    question: "How do you handle data security?",
    answer:
      "Encryption, access controls, and privacy-minded deployment practices are part of every rollout. We align controls with your industry and compliance needs.",
  },
  {
    question: "Do you support local languages and dialects?",
    answer:
      "Yes. Localization is core—multilingual conversations and culturally appropriate phrasing, not generic translated scripts.",
  },
  {
    question: "What does engagement look like after launch?",
    answer:
      "We stay with you through maintenance and optimization—continuous improvement so your chatbots and automations keep matching your goals as they evolve.",
  },
] as const;

export const useCases = [
  {
    title: "Product recommendations",
    body: "Guide shoppers with context-aware suggestions that feel personal, not pushy.",
  },
  {
    title: "FAQs & self-service",
    body: "Answer the questions your team hears every day—instantly, consistently, on-brand.",
  },
  {
    title: "Customer support",
    body: "Resolve routine issues and route the complex ones to people with full context.",
  },
  {
    title: "Workflow automation",
    body: "Automate approvals, alerts, data syncs, and back-office steps that slow teams down.",
  },
] as const;
