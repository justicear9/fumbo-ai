export const company = {
  name: "Fumbo Ai Ltd",
  shortName: "Fumbo Ai",
  tagline: "AI chatbots and automation that understand your market",
  offering: "AI chatbots and automation services",
  enigma:
    'Derived from the Swahili word for "enigma," our name captures a blend of innovation and cultural richness.',
  summary:
    "Fumbo Ai builds AI chatbots and automation services that deliver personalized, culturally sensitive experiences—and take routine work off your team’s plate.",
  mission:
    "We reshape customer engagement and operations by combining technological innovation with cultural sensitivity, so businesses can redefine journeys, raise satisfaction, and grow.",
  focus:
    "Built with Ghana and diverse markets in mind—customization and localization first, not bolted on later.",
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
    name: "WhatsApp",
    body: "Where most customers already message you—support, sales, and updates in-thread.",
  },
  {
    name: "Web chat",
    body: "On-site assistance that matches your brand and hands off to people cleanly.",
  },
  {
    name: "Social messaging",
    body: "Facebook, Instagram, and other social inboxes without a second playbook.",
  },
  {
    name: "Email",
    body: "Structured replies for longer requests that still stay on-brand.",
  },
] as const;

export const automationPackages = [
  {
    title: "Lead capture → CRM",
    body: "Qualify inbound interest from web or WhatsApp and push clean records into your CRM with owner assignment.",
  },
  {
    title: "Ticket triage & routing",
    body: "Classify support requests, attach context, and route to the right queue—or resolve FAQs automatically.",
  },
  {
    title: "Order & status updates",
    body: "Pull status from your systems and reply to “Where is my order?” without a human opening a dashboard.",
  },
  {
    title: "Approvals & alerts",
    body: "Notify the right people, collect yes/no, and log decisions so ops doesn’t live in group chats.",
  },
  {
    title: "Onboarding checklists",
    body: "Guide new customers or staff through steps, chase missing info, and mark completion in your tools.",
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

/** Illustrative engagement patterns—not named client claims */
export const proofStories = [
  {
    sector: "Telecom · Ghana",
    title: "Self-serve billing and activation help",
    problem: "Call centers flooded with balance, data, and activation questions.",
    approach: "WhatsApp + web assistant with localized phrasing and ticket handoff.",
    outcome: "Routine queries answered in-channel; agents kept for exceptions.",
  },
  {
    sector: "E-commerce · West Africa",
    title: "Orders without the ticket pile-up",
    problem: "Shoppers asking the same tracking and returns questions every day.",
    approach: "Chatbot tied to order status plus automated update notifications.",
    outcome: "Faster answers for customers; fewer repetitive support tickets.",
  },
  {
    sector: "Financial services",
    title: "Routine account help, careful escalation",
    problem: "Balance and transaction FAQs crowding human queues.",
    approach: "Secure self-serve flows with clear escalation for sensitive cases.",
    outcome: "24/7 coverage for routine asks; people reserved for judgment calls.",
  },
] as const;

/** Primary service pillars */
export const services = [
  {
    slug: "chatbots",
    title: "AI chatbots",
    body: "Intelligent, omnichannel assistants that understand context, interpret intent, and respond in real time—with tone and culture that fit your market.",
    points: [
      "WhatsApp, web, social, and email",
      "Brand-aligned, localized conversations",
      "Human handoff when judgment matters",
    ],
  },
  {
    slug: "automation",
    title: "Automation services",
    body: "Named workflow plays that connect your tools, cut manual busywork, and keep operations moving while your people focus on higher-value work.",
    points: [
      "Lead capture, triage, and order updates",
      "Approvals, alerts, and CRM sync",
      "Pilot first, then scale to production",
    ],
  },
] as const;

export const capabilities = [
  {
    title: "Context-aware conversations",
    body: "AI and machine learning that understand context, interpret user intent, and deliver relevant responses in real time.",
    tone: "mint" as const,
  },
  {
    title: "Automation that sticks",
    body: "Design and ship automations that remove repetitive work—approvals, data handoffs, notifications, and back-office flows.",
    tone: "blue" as const,
  },
  {
    title: "Omnichannel by design",
    body: "One experience across websites, social platforms, messaging apps, and email—consistent at every touchpoint.",
    tone: "blue" as const,
  },
  {
    title: "Customization & localization",
    body: "Solutions shaped to your brand, tone, and market so interactions and workflows feel native to the communities you serve.",
    tone: "mint" as const,
  },
] as const;

export const whyFumbo = [
  {
    title: "Cutting-edge technology",
    body: "AI and machine learning that power personalized interactions and reliable automation across your channels and systems.",
  },
  {
    title: "Cultural sensitivity",
    body: "Especially critical in markets like Ghana—interactions that are respectful, relevant, and tuned to local preferences.",
  },
  {
    title: "Customization & flexibility",
    body: "Chatbots and automations tailored to your industry, brand identity, and business objectives.",
  },
  {
    title: "Seamless integration",
    body: "Engage customers and connect tools wherever work already happens—web, social, messaging, email, and your internal stack.",
  },
  {
    title: "Expertise & support",
    body: "From consultation and implementation through maintenance and optimization, we stay with you.",
  },
  {
    title: "Innovation & adaptability",
    body: "We keep advancing our stack so your assistants and automations stay ahead as expectations evolve.",
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
