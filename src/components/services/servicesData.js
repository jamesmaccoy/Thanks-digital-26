// Shared data for the Services page
// Also importable by home ServicesSection for consistency

export const heroStats = [
  { value: "5", label: "Core disciplines under one roof" },
  { value: "172+", label: "Projects shipped across every service line" },
  { value: "10yr", label: "Avg senior designer experience on the team" },
];

export const services = [
  {
    num: "01",
    name: "Brand Identity",
    tagline: "Make your mark unmistakable.",
    description:
      "Complete brand systems that capture your essence and stand out in market. From strategy to execution, we build identities that resonate with your audience and scale with your ambition.",
    image: "/images/services/blog/hero_blacksheep.jpg",
    categories: ["Logo Design", "Visual Identity", "Brand Guidelines", "Positioning", "Naming", "Tone of Voice"],
    deliverables: ["Logo suite (primary, icon, lockups)", "Colour palette & type system", "Brand guidelines (40-80 pages)", "Asset library for digital & print"],
  },
  {
    num: "02",
    name: "Digital Design",
    tagline: "Websites that convert, not just impress.",
    description:
      "Websites and digital experiences that convert. We design with purpose, creating user journeys that turn visitors into customers while looking world-class.",
    image: "/images/services/blog/simpleplek2.png",
    categories: ["Web Design", "Landing Pages", "E-commerce", "UI/UX", "Interaction Design", "Responsive Design"],
    deliverables: ["Figma prototypes (desktop + mobile)", "Design system components", "Developer-ready specs", "Motion & micro-interaction specs"],
  },
  {
    num: "03",
    name: "Product Design",
    tagline: "Ship products people can't put down.",
    description:
      "End-to-end product design from concept to launch. We craft intuitive interfaces and seamless experiences that users love and businesses rely on for growth.",
    image: "/images/services/blog/KV.jpg",
    categories: ["Mobile Apps", "SaaS Platforms", "Design Systems", "Prototyping", "User Research", "Usability Testing"],
    deliverables: ["User flows & wireframes", "High-fidelity UI screens", "Interactive prototypes", "Component library in Figma"],
  },
  {
    num: "04",
    name: "Marketing & Growth",
    tagline: "Creative that drives measurable growth.",
    description:
      "Strategic creative that drives measurable results. From campaign design to conversion optimization, we help you grow faster with design that performs across every channel.",
    image: "/images/services/blog/hero_ACBA.jpg",
    categories: ["Campaign Design", "Social Media", "Email Design", "Ad Creatives", "Pitch Decks", "Infographics"],
    deliverables: ["Multi-channel campaign assets", "Social media template system", "Email templates (responsive HTML)", "Performance-optimised ad creatives"],
  },
  {
    num: "05",
    name: "Development",
    tagline: "Pixel-perfect code, production-ready.",
    description:
      "Pixel-perfect implementation that brings designs to life. Clean, performant code built with modern frameworks and best practices — no shortcuts, no tech debt.",
    image: "/images/services/blog/santam-6.jpg",
    categories: ["Front-end Dev", "React / Next.js", "CMS Integration", "Performance", "Webflow", "Animation"],
    deliverables: ["Production-ready codebase", "CMS setup & content modeling", "Performance audit & optimisation", "Deployment & handoff docs"],
  },
];

export const deliverables = [
  {
    icon: "◎",
    title: "Strategy & research",
    description: "Competitor audit, user research, brand positioning, creative brief.",
  },
  {
    icon: "◈",
    title: "Visual design",
    description: "High-fidelity mockups, style explorations, interaction design.",
  },
  {
    icon: "◇",
    title: "Design systems",
    description: "Token-based component libraries with variants and documentation.",
  },
  {
    icon: "▸",
    title: "Prototypes",
    description: "Interactive Figma prototypes for user testing and stakeholder alignment.",
  },
  {
    icon: "◫",
    title: "Production assets",
    description: "Export-ready files, developer specs, responsive breakpoints.",
  },
  {
    icon: "⬡",
    title: "Documentation",
    description: "Brand guidelines, design rationale, implementation notes.",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Discovery",
    duration: "Week 1",
    description: "Deep-dive into your product, market, users, and goals. We leave this phase speaking your language fluently.",
  },
  {
    step: "02",
    title: "Strategy",
    duration: "Week 2",
    description: "Distil research into a clear creative brief — goals, constraints, success metrics, and design direction.",
  },
  {
    step: "03",
    title: "Exploration",
    duration: "Week 3-4",
    description: "Divergent creative exploration. Multiple directions, honest critique, and rapid iteration until we find the one.",
  },
  {
    step: "04",
    title: "Refinement",
    duration: "Week 5-6",
    description: "Obsessive polish on the chosen direction. Every pixel, every interaction, every edge case.",
  },
  {
    step: "05",
    title: "Delivery",
    duration: "Week 7-8",
    description: "Production-ready assets, developer handoff, documentation, and 30-day post-launch support.",
  },
];

export const toolStack = [
  { name: "Figma", category: "Design" },
  { name: "Framer", category: "Design" },
  { name: "After Effects", category: "Motion" },
  { name: "Lottie", category: "Motion" },
  { name: "React", category: "Development" },
  { name: "Next.js", category: "Development" },
  { name: "Webflow", category: "Development" },
  { name: "TailwindCSS", category: "Development" },
  { name: "GSAP", category: "Animation" },
  { name: "Three.js", category: "Animation" },
  { name: "Notion", category: "Collaboration" },
  { name: "Slack", category: "Collaboration" },
  { name: "Linear", category: "Collaboration" },
  { name: "Loom", category: "Collaboration" },
];

export const principles = [
  {
    num: "01",
    title: "Senior talent only",
    description: "Every designer on our team has 8+ years of experience. No juniors, no bait-and-switch. The people you meet are the people doing the work.",
  },
  {
    num: "02",
    title: "Outcomes over output",
    description: "We measure success by business impact, not deliverable count. Every design decision is tied to a strategic goal.",
  },
  {
    num: "03",
    title: "Transparent process",
    description: "Real-time Figma access, structured review checkpoints, and async updates. You're never in the dark about where things stand.",
  },
  {
    num: "04",
    title: "Opinionated, not precious",
    description: "We bring strong creative convictions but stay open to feedback. The best work happens when expertise meets context.",
  },
  {
    num: "05",
    title: "Ship-ready quality",
    description: "We don't hand off concepts — we hand off production-ready assets with developer specs and documentation.",
  },
  {
    num: "06",
    title: "Long-term partnership",
    description: "97% client retention. We build relationships, not transactions. Most clients stay for years, not months.",
  },
];

export const servicesFaqs = [
  {
    question: "Can I combine multiple services in one engagement?",
    answer: "Absolutely. Most clients blend 2-3 services — for example, Brand Identity + Digital Design for a full rebrand and website launch, or Product Design + Development for end-to-end app creation.",
  },
  {
    question: "How do you scope a project?",
    answer: "Every engagement starts with a free 30-minute discovery call. From there, we deliver a detailed proposal within 48 hours covering scope, timeline, investment, and team allocation.",
  },
  {
    question: "Do you work on retainer or project basis?",
    answer: "Both. We offer monthly retainer plans (Growth, Scale, Enterprise) for ongoing needs, and fixed-scope project engagements for defined deliverables with clear timelines.",
  },
  {
    question: "What's your typical turnaround time?",
    answer: "Brand identity: 4-8 weeks. Website design: 3-6 weeks. Product design: 6-12 weeks. We always agree on timelines upfront and hit 97% on-time delivery.",
  },
  {
    question: "Who owns the final designs?",
    answer: "You do. Upon final payment, all intellectual property transfers to you — source files, fonts, assets, everything. No licensing fees, no strings attached.",
  },
  {
    question: "What if I'm not happy with the direction?",
    answer: "We include structured revision rounds at every milestone. If we haven't nailed it after the exploration phase, we'll pivot direction at no extra cost. We also offer a 14-day satisfaction guarantee.",
  },
];
