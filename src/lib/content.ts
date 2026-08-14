export const company = {
  name: "Fumbo Ai Ltd",
  shortName: "Fumbo Ai",
  tagline: "AI chatbots and automation that understand your market",
  offering: "AI chatbots and automation",
  heroLead:
    "Intelligent conversations on web, WhatsApp, social, and email, plus automations that clear routine work: tickets, orders, CRM, and a clean handoff to your team. We design, ship, and stay.",
  summary:
    "We build AI chatbots and automations that answer customers on every channel, then finish the work those conversations create inside your team.",
  mission:
    "Help teams answer customers at volume without sounding like a template, and without burying staff in the same ten questions every day.",
  focus: "Headquartered in Accra. We work with teams in Ghana, West Africa, and around the world.",
} as const;

export const contactInfo = {
  email: "hello@fumbo.ai",
  location: "Accra, Ghana",
  serving: "Worldwide",
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
    body: "Support, sales, and updates in the thread your customer already opened.",
  },
  {
    id: "web",
    name: "Web chat",
    body: "On-site help that matches your brand, then hands the chat to a person.",
  },
  {
    id: "facebook",
    name: "Facebook",
    body: "The same assistant in Messenger. Same answers, same handoff.",
  },
  {
    id: "instagram",
    name: "Instagram",
    body: "DMs that can close a request, not just collect a screenshot.",
  },
  {
    id: "email",
    name: "Email",
    body: "Longer requests, still on-brand, still tied to the same systems.",
  },
] as const;

export const engagementSteps = [
  {
    step: "01",
    title: "Discover",
    body: "The channels, languages, and the work eating your team's week.",
  },
  {
    step: "02",
    title: "Design",
    body: "The flows, the handoff rules, and how we will know it is working.",
  },
  {
    step: "03",
    title: "Pilot",
    body: "One channel or one workflow, live, so you can see it with real customers.",
  },
  {
    step: "04",
    title: "Optimize",
    body: "Widen coverage and keep tuning with your team.",
  },
] as const;

export const services = [
  {
    slug: "automation",
    title: "Automation",
    body: "The systems that finish the work after a customer reaches you: tickets, orders, CRM, approvals, alerts. Routine work stops sitting in a queue waiting for someone to copy and paste.",
    points: [
      "Lead capture and ticket routing",
      "Order updates, approvals, and alerts",
      "Wired into the tools you already run",
    ],
  },
  {
    slug: "chatbots",
    title: "AI chatbots",
    body: "An assistant on web, social, email, and WhatsApp. It answers in your tone, and it hands the thread to a person when judgment is required.",
    points: [
      "Web, social, email, and WhatsApp",
      "Tone that fits your brand and market",
      "Handoff with the chat intact",
    ],
  },
] as const;

export const whyFumbo = [
  {
    title: "Every channel, one system",
    body: "Web, social, email, WhatsApp: customers bounce between them. We put one assistant on those channels so the answer and the handoff stay consistent.",
  },
  {
    title: "Language is the product",
    body: "Tone and context go into the first flow. Your market's phrasing is the brief.",
  },
  {
    title: "Handoff with the thread",
    body: "The assistant answers the daily questions. Anything that needs a person goes to your team with the chat intact.",
  },
  {
    title: "Tied to your tools",
    body: "A chat that cannot check an order or open a ticket is a brochure. We connect the conversation to the system of record.",
  },
  {
    title: "One slice, then more",
    body: "We start with one channel or one workflow so you can see it live. Then we expand with your team.",
  },
  {
    title: "We stay",
    body: "Products change. We keep tuning the assistant and the automations as yours does.",
  },
] as const;

export const values = [
  {
    title: "Plain language",
    body: "If a sentence would not survive a real customer conversation, it does not ship.",
  },
  {
    title: "Headquartered in Accra",
    body: "HQ is in Accra. The work is for teams whose customers span more than one channel.",
  },
  {
    title: "Handoff with the thread",
    body: "Routine questions stay with the assistant. Judgment goes to your people with the chat intact.",
  },
  {
    title: "Stay after launch",
    body: "Flows drift. Products change. We keep tuning after the first go-live.",
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
    name: "Multi-channel enterprises",
    summary: "One assistant across web, social, messaging, and email.",
    detail:
      "If you run a website, a social inbox, WhatsApp, and email, customers bounce between them. We put one assistant on those channels so the answer and the handoff stay consistent.",
    outcomes: [
      "One conversation across channels",
      "Routine work off the queue",
      "The same tone everywhere",
    ],
  },
  {
    slug: "ecommerce",
    name: "E-commerce",
    summary: "Stock questions, order status, and the busywork behind a sale.",
    detail:
      "Shoppers ask where an order is, what fits, and what is in stock. The assistant answers those, then writes the ticket or the CRM note so your team is not copying chats into a spreadsheet.",
    outcomes: [
      "Faster product answers",
      "Self-serve order status",
      "Fewer copy-paste tickets",
    ],
  },
  {
    slug: "finance",
    name: "Financial institutions",
    summary: "Balances, transactions, and a clean path to a person.",
    detail:
      "Banks, insurers, and finance teams get the same ten questions every day. The assistant handles those, with a clear path to a person for anything that needs judgment or verification.",
    outcomes: [
      "Routine account help after hours",
      "Guided transaction questions",
      "Cleaner escalation",
    ],
  },
  {
    slug: "telecom",
    name: "Telecommunications",
    summary: "Bundles, billing, and troubleshooting without the call queue.",
    detail:
      "Subscribers want airtime, a bundle, or a line that works. The assistant handles the daily asks on WhatsApp and web, then routes the rest to an agent with the thread intact.",
    outcomes: [
      "Fewer calls for the same questions",
      "Faster activations",
      "Quicker answers, fewer drop-offs",
    ],
  },
  {
    slug: "travel",
    name: "Travel and hospitality",
    summary: "Bookings, itineraries, and help while people are in motion.",
    detail:
      "Airlines, hotels, and booking desks get questions at odd hours. The assistant covers itinerary updates and common asks, then hands off when a change needs a person.",
    outcomes: [
      "Clearer booking help",
      "Itinerary updates in-thread",
      "Help when the desk is closed",
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare providers",
    summary: "Scheduling, FAQs, and a careful handoff. Never a diagnosis.",
    detail:
      "Clinics and hospitals get booking requests and the same service questions. The assistant handles those and escalates anything clinical. It does not replace a clinician.",
    outcomes: [
      "Easier appointment booking",
      "Clear service FAQs",
      "Human escalation when it matters",
    ],
  },
  {
    slug: "education",
    name: "Education",
    summary: "Enrollment, campus questions, and student FAQs.",
    detail:
      "Schools and universities field the same enrollment and campus questions. The assistant answers those, then routes advising and exceptions to staff.",
    outcomes: [
      "Simpler enrollment questions",
      "Student answers after hours",
      "Staff time saved for advising",
    ],
  },
  {
    slug: "government",
    name: "Government agencies",
    summary: "Permits, taxes, and citizen questions without the queue.",
    detail:
      "Citizens want a permit status, a tax answer, or a form. The assistant covers the common paths and sends the rest to a desk with the thread attached.",
    outcomes: [
      "Faster access to answers",
      "Guided permit and service paths",
      "Shorter counter and call queues",
    ],
  },
];

export const faqs = [
  {
    question: "What does Fumbo Ai do?",
    answer:
      "We build AI for operations: automations that finish the work, and chatbots on web, social, email, and WhatsApp. One partner for the conversation and the work behind it.",
  },
  {
    question: "What is an AI chatbot?",
    answer:
      "Software that reads a customer's message and replies in natural language. Fumbo's work is the tone, the context, and the handoff across the channels you already use.",
  },
  {
    question: "What do your automations cover?",
    answer:
      "Lead capture into a CRM, ticket routing, order-status replies, approvals, alerts, and onboarding checklists. Connected to the tools you already use.",
  },
  {
    question: "How do engagements work?",
    answer:
      "Discover, design, pilot, then widen. We start with one live slice so you can see it with real customers, then expand coverage with your team.",
  },
  {
    question: "How does Fumbo work with our channels and tools?",
    answer:
      "Chatbots sit on web, social, email, and WhatsApp. Automations connect those conversations to CRM, helpdesk, and ops systems so work moves without copy-paste.",
  },
  {
    question: "What makes Fumbo different?",
    answer:
      "We design, ship, and stay. One partner for the customer conversation and the work behind it, wired into the tools you already run.",
  },
  {
    question: "Can a chatbot replace human agents?",
    answer:
      "No. Fumbo handles the daily questions and escalates anything that needs judgment, with the thread intact.",
  },
  {
    question: "Which industries do you serve?",
    answer:
      "Enterprises, e-commerce, finance, telecom, travel, healthcare, education, and government. Each engagement follows that sector's workflows and trust rules.",
  },
  {
    question: "How do you handle data security?",
    answer:
      "Encryption, access controls, and deployment practices sit in every rollout. Controls follow your industry and the agreement we sign.",
  },
  {
    question: "Do you support local languages?",
    answer:
      "Yes. Multilingual replies and phrasing that fits the market. We write the first flow for how your customers talk.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We stay on for maintenance and tuning. Flows drift as products change. The assistant should keep matching your goals.",
  },
] as const;

export const useCases = [
  {
    title: "Product recommendations",
    body: "Guide shoppers with what they asked for, in the thread they already opened.",
  },
  {
    title: "FAQs and self-service",
    body: "Answer the questions your team hears every day, in your tone, without waiting for a shift.",
  },
  {
    title: "Customer support",
    body: "Resolve the daily issues. Route the rest to people with the full chat.",
  },
  {
    title: "Workflow automation",
    body: "Approvals, alerts, data syncs, and back-office steps that currently sit in a queue.",
  },
] as const;
