// Shared data for the Pricing page

export const heroStats = [
  { value: "3", label: "Flexible plans to fit any team size" },
  { value: "97%", label: "Client retention rate year over year" },
  { value: "0", label: "Hidden fees — pricing is fully transparent" },
];

export const plans = [
  {
    name: "Growth",
    description: "Perfect for growing businesses needing steady design needs.",
    monthlyPrice: 7500,
    quarterlyPrice: 6500,
    cta: "Start Now",
    ctaStyle: "filled",
    popular: false,
    features: [
      "45 hours of dedicated design time",
      "Two active projects at a time",
      "Twice-weekly syncs",
      "24-hour response time",
      "Unused hours roll over",
      "Dedicated senior designer",
      "Figma source files included",
    ],
  },
  {
    name: "Scale",
    description: "For teams that need to move fast and ship often.",
    monthlyPrice: 15000,
    quarterlyPrice: 12500,
    cta: "Start Now",
    ctaStyle: "filled",
    popular: true,
    features: [
      "100 hours of dedicated design time",
      "Unlimited active projects",
      "Daily syncs available",
      "Same-day response time",
      "Unused hours roll over",
      "Dedicated design team (2-3)",
      "Design system maintenance",
      "Priority support channel",
    ],
  },
  {
    name: "Enterprise",
    description: "Full embedded design team for large-scale operations.",
    monthlyPrice: 25000,
    quarterlyPrice: 21000,
    cta: "Contact Sales",
    ctaStyle: "outline",
    popular: false,
    features: [
      "Unlimited design hours",
      "Unlimited active projects",
      "Dedicated Slack channel",
      "1-hour response time",
      "Custom onboarding & workshops",
      "Embedded team (3-5 designers)",
      "Executive design reviews",
      "Quarterly strategy sessions",
    ],
  },
];

export const comparisonFeatures = [
  { feature: "Dedicated design hours", growth: "45h", scale: "100h", enterprise: "Unlimited" },
  { feature: "Active projects", growth: "2", scale: "Unlimited", enterprise: "Unlimited" },
  { feature: "Response time", growth: "24h", scale: "Same day", enterprise: "1 hour" },
  { feature: "Sync frequency", growth: "2× / week", scale: "Daily", enterprise: "On demand" },
  { feature: "Unused hours rollover", growth: true, scale: true, enterprise: true },
  { feature: "Figma source files", growth: true, scale: true, enterprise: true },
  { feature: "Design system maintenance", growth: false, scale: true, enterprise: true },
  { feature: "Priority support", growth: false, scale: true, enterprise: true },
  { feature: "Custom workshops", growth: false, scale: false, enterprise: true },
  { feature: "Quarterly strategy sessions", growth: false, scale: false, enterprise: true },
  { feature: "Dedicated Slack channel", growth: false, scale: false, enterprise: true },
  { feature: "Executive design reviews", growth: false, scale: false, enterprise: true },
];

export const addons = [
  {
    name: "Motion & Animation",
    price: "$2,500",
    period: "per project",
    description: "Lottie animations, micro-interactions, page transitions, and video assets.",
  },
  {
    name: "Front-end Development",
    price: "$5,000",
    period: "per project",
    description: "React / Next.js implementation of your designs with pixel-perfect fidelity.",
  },
  {
    name: "Content Strategy",
    price: "$3,000",
    period: "per engagement",
    description: "Copywriting, messaging frameworks, and content architecture.",
  },
  {
    name: "User Research",
    price: "$4,000",
    period: "per study",
    description: "Interviews, usability testing, heatmap analysis, and actionable insights.",
  },
  {
    name: "Brand Photography",
    price: "$3,500",
    period: "per session",
    description: "Art-directed photo shoots for team, product, and lifestyle imagery.",
  },
  {
    name: "Design System Audit",
    price: "$2,000",
    period: "one-time",
    description: "Comprehensive review of your existing design system with improvement roadmap.",
  },
];

export const onboardingSteps = [
  {
    step: "01",
    title: "Discovery call",
    duration: "30 min",
    description: "We learn about your project, team, and goals. No pitches — just conversation.",
  },
  {
    step: "02",
    title: "Proposal & plan selection",
    duration: "48 hours",
    description: "Custom proposal with recommended plan, scope, timeline, and team allocation.",
  },
  {
    step: "03",
    title: "Onboarding",
    duration: "Day 1-2",
    description: "Contracts signed, tools configured, Slack channel created, kickoff meeting scheduled.",
  },
  {
    step: "04",
    title: "First deliverable",
    duration: "Week 1",
    description: "Your first design output ships within the first week. Momentum from day one.",
  },
];

export const pricingTestimonials = [
  {
    quote: "The retainer model is a game-changer. We get senior-level design without the overhead of a full-time hire. The ROI has been incredible.",
    name: "Marcus Chen",
    role: "VP of Product, Cubekit",
    avatar: "/images/avatars/jordan-lee.webp",
    plan: "Scale",
  },
  {
    quote: "We started on Growth and upgraded to Scale within two months. The quality is consistent and the process is seamless. Best design investment we've made.",
    name: "Priya Sharma",
    role: "CEO, Novalux",
    avatar: "/images/avatars/maya-chen.webp",
    plan: "Growth → Scale",
  },
  {
    quote: "Having an embedded design team that actually understands our product has been transformative. They feel like part of our company, not an outside vendor.",
    name: "James Wright",
    role: "CTO, Global Bank",
    avatar: "/images/avatars/alex-west.webp",
    plan: "Enterprise",
  },
];

export const pricingFaqs = [
  {
    question: "Can I switch plans mid-engagement?",
    answer: "Yes. You can upgrade or downgrade at the start of any billing cycle. We'll prorate the difference and adjust your team allocation accordingly.",
  },
  {
    question: "What happens if I need more hours than my plan includes?",
    answer: "Additional hours are billed at your plan's hourly rate. We always flag when you're approaching your limit so there are no surprises.",
  },
  {
    question: "Is there a minimum commitment?",
    answer: "Monthly plans have a 3-month minimum. Quarterly plans are billed upfront with a 10-15% discount. After the initial term, you can cancel with 30 days notice.",
  },
  {
    question: "Do unused hours really roll over?",
    answer: "Yes, up to 20% of your monthly allocation carries forward. So on the Growth plan, you can bank up to 9 extra hours per month.",
  },
  {
    question: "What's included in the quarterly discount?",
    answer: "Quarterly billing saves you 10-15% compared to monthly. You get the same features, same team, same quality — just a better rate for committing ahead.",
  },
  {
    question: "Can I pause my subscription?",
    answer: "Yes, you can pause once per 12-month period for up to 30 days. Your team allocation is held, and you resume exactly where you left off.",
  },
];
