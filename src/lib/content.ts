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

export type Client = {
  name: string;
  sector: string;
  logo?: string;
  stat: string;
  result: string;
};

/** Named logos live in /public/clients. Stats are outcome lifts. */
export const clients: Client[] = [
  {
    name: "Bedita Pharmaceuticals",
    sector: "Pharma",
    logo: "/clients/bedita-pharmaceuticals.png",
    stat: "52%",
    result: "Higher transaction volume. Requests and supply close faster.",
  },
  {
    name: "Mews",
    sector: "News",
    logo: "/clients/Mews-AI.png",
    stat: "80%",
    result: "Faster response. Higher accuracy.",
  },
  {
    name: "Comrade AI",
    sector: "Politics",
    logo: "/clients/comrade.png",
    stat: "75%",
    result: "Clearer briefs. Faster reach to the field.",
  },
  {
    name: "Admissions Checker",
    sector: "Education",
    logo: "/clients/admissions-checker.png",
    stat: "60%",
    result: "Faster signup. Scholarships in the same flow.",
  },
  {
    name: "The Game of Politics",
    sector: "Gaming",
    logo: "/clients/the-game-of-politics.png",
    stat: "65%",
    result: "Longer sessions. Matches that finish.",
  },
  {
    name: "How Ghanaian Are You",
    sector: "Culture",
    logo: "/clients/how-ghanaian-are-you.png",
    stat: "70%",
    result: "More orders from the site. Buy without walking in.",
  },
];

export const faqs = [
  {
    question: "How soon can this be live?",
    answer:
      "A first slice can be live in weeks, not a six-month programme. We pick one channel or one workflow, ship it to real customers, then widen with your team.",
  },
  {
    question: "Does it work with WhatsApp and the tools we already have?",
    answer:
      "Yes. Chat sits on web, WhatsApp, social, and email. Automations connect those threads to the CRM, helpdesk, and ops tools you already run, so staff are not copying chats into another system.",
  },
  {
    question: "What do we need to give you to start?",
    answer:
      "How customers reach you today, the ten questions your team answers every day, and access to the systems those chats already create work in. We do not need a full data science team on your side.",
  },
  {
    question: "Will this replace our staff?",
    answer:
      "No. Fumbo takes the repeat questions and the copy-paste work. Anything that needs judgment goes to a person, with the full thread attached.",
  },
  {
    question: "What if the assistant gets an answer wrong?",
    answer:
      "It should hand off. We set the topics it is allowed to handle, the tone, and when a human takes over. After launch we tune from real chats so the misses shrink.",
  },
  {
    question: "How do we know it is working?",
    answer:
      "We agree the measure before we ship: faster replies, fewer tickets, more completed orders, or fewer dropped WhatsApp threads. You see that on live traffic, not a slide.",
  },
  {
    question: "Who owns the conversations and our data?",
    answer:
      "You do. Access, retention, and where the system runs sit in the agreement. We do not train a public model on your customer chats.",
  },
  {
    question: "How do you charge?",
    answer:
      "We scope after we see your channels and volume. A demo maps a first slice and a price for that slice. There is no public rate card because a pharmacy WhatsApp bot and a newsroom desk are not the same job.",
  },
  {
    question: "Do you disappear after launch?",
    answer:
      "No. Products change, new questions show up, and flows drift. We stay on for maintenance and tuning so the assistant still matches how you sell and support.",
  },
  {
    question: "Can we start on one channel?",
    answer:
      "Yes. Most teams start on WhatsApp or the website, prove it with real customers, then add the rest. That is the engagement, not a full rebuild on day one.",
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
