// Shared data for the Contact page

export const contactMethods = [
  {
    label: "Email",
    value: "contact@optima.agency",
    href: "mailto:contact@optima.agency",
    description: "For project inquiries and general questions.",
  },
  {
    label: "Phone",
    value: "+1 (212) 555-0147",
    href: "tel:+12125550147",
    description: "Mon — Fri, 9 AM – 6 PM EST.",
  },
  {
    label: "WhatsApp",
    value: "+1 (212) 555-0147",
    href: "https://wa.me/12125550147",
    description: "Quick questions and async updates.",
  },
];

export const offices = [
  {
    city: "New York",
    country: "United States",
    address: "401 Broadway, Suite 2100\nNew York, NY 10013",
    timezone: "EST (UTC-5)",
    hours: "Mon — Fri, 9 AM – 6 PM",
    primary: true,
  },
  {
    city: "London",
    country: "United Kingdom",
    address: "71 Rivington Street\nLondon EC2A 3AY",
    timezone: "GMT (UTC+0)",
    hours: "Mon — Fri, 9 AM – 6 PM",
    primary: false,
  },
  {
    city: "Singapore",
    country: "Singapore",
    address: "71 Robinson Road, #14-01\nSingapore 068895",
    timezone: "SGT (UTC+8)",
    hours: "Mon — Fri, 9 AM – 6 PM",
    primary: false,
  },
];

export const teamContacts = [
  {
    name: "Sarah Park",
    role: "Project Manager",
    desc: "Your first point of contact. Sarah handles scoping, scheduling, and making sure everything runs smoothly.",
    avatar: "/images/avatars/sarah-park-lg.webp",
    available: true,
    slots: "2 slots open May 10",
  },
  {
    name: "Alex West",
    role: "Creative Director",
    desc: "For strategic conversations about brand, creative direction, and long-term design partnerships.",
    avatar: "/images/avatars/alex-west.webp",
    available: true,
    slots: "By appointment",
  },
  {
    name: "Jordan Lee",
    role: "Head of Partnerships",
    desc: "Enterprise enquiries, agency partnerships, and custom engagement models.",
    avatar: "/images/avatars/jordan-lee.webp",
    available: true,
    slots: "Open availability",
  },
];

export const socials = [
  { name: "X (Twitter)", handle: "@optima", href: "#", followers: "24K" },
  { name: "Instagram", handle: "@optima.agency", href: "#", followers: "18K" },
  { name: "LinkedIn", handle: "OPTIMA Agency", href: "#", followers: "12K" },
  { name: "Dribbble", handle: "optima", href: "#", followers: "8K" },
  { name: "Behance", handle: "OPTIMA", href: "#", followers: "6K" },
];

export const contactFaqs = [
  {
    question: "How quickly will I hear back?",
    answer: "We respond to all inquiries within 24 hours on business days. Most messages get a reply within 4-6 hours during EST business hours.",
  },
  {
    question: "What should I include in my inquiry?",
    answer: "A brief overview of your project, timeline, and budget range helps us route your inquiry to the right person and prepare a meaningful response.",
  },
  {
    question: "Can I schedule a call before committing?",
    answer: "Absolutely. Every engagement starts with a free 30-minute discovery call. No pitch decks, no pressure — just an honest conversation about your needs.",
  },
  {
    question: "Do you take on small projects?",
    answer: "We offer monthly retainers starting at $7,500/month and fixed-scope projects starting at $10,000. For smaller needs, we're happy to recommend trusted partners.",
  },
  {
    question: "I'm an agency — do you white-label?",
    answer: "Yes. We partner with select agencies on overflow and specialised work. Reach out to Jordan Lee via the partnerships channel for details.",
  },
];
