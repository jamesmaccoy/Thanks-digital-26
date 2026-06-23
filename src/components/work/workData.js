// Shared data for the Work page

export const heroStats = [
  { value: "172+", label: "Projects shipped across 14 countries" },
  { value: "97%", label: "On-time delivery rate since 2016" },
  { value: "85+", label: "Long-term client partnerships" },
];

export const featuredProjects = [
  {
    num: "01",
    slug: "simpleplek",
    title: "Simple Plek",
    category: "Brand Strategy",
    desc: "Brand Strategy & Product Design",
    year: "2025",
    image: "/images/work/james/simpleplek.jpg",
    summary: "Complete brand overhaul and product redesign that increased user engagement by 340% and cut churn in half.",
  },
  {
    num: "02",
    slug: "capitec",
    title: "Capitec",
    category: "Product Design",
    desc: "Brand Identity & Product Design",
    year: "2024",
    image: "/images/work/james/capitec.jpg",
    summary: "End-to-end design system and product suite that helped raise a $12M Series A.",
  },
  {
    num: "03",
    slug: "ACBA",
    title: "ACBA",
    category: "Brand Identity",
    desc: "Brand Identity & Product Design",
    year: "2024",
    image: "/images/work/hero/2.jpg",
    summary: "Building a new venture & the role of digital in the exploding cannabis industry.",
  },
];

export const allProjects = [
  {
    num: "01",
    slug: "simpleplek-app",
    title: "Simple Plek App",
    category: "Brand Strategy",
    desc: "Brand Strategy & Product Design",
    year: "2025",
    image: "/images/work/hero/simpleplek.png",
  },
  {
    num: "02",
    slug: "simpleplek host",
    title: "simpleplek host",
    category: "Product Design",
    desc: "Brand Identity & Product Design",
    year: "2025",
    image: "/images/work/james/simpleplek.jpg",
  },
  {
    num: "03",
    slug: "capitec",
    title: "Capitec",
    category: "Product Design",
    desc: "Brand Identity & Product Design",
    year: "2024",
    image: "/images/work/hero/KV-1.jpg",
  },
  {
    num: "04",
    slug: "capitec-insure",
    title: "Capitec Insure",
    category: "Product Design",
    desc: "Brand Identity & Product Design",
    year: "2024",
    image: "/images/work/james/capitec.jpg",
  },
  {
    num: "05",
    slug: "capitec-app",
    title: "Capitec Insure",
    category: "Product Design",
    desc: "Brand Identity & Product Design",
    year: "2024",
    image: "/images/work/hero/7.jpg",
  },
  {
    num: "06",
    slug: "haze-club",
    title: "haze club membership",
    category: "Design System",
    desc: "Digital Transformation & Design System",
    year: "2024",
    image: "/images/work/james/portfolio-details-image.jpg",
  },
  {
    num: "07",
    slug: "ACBA",
    title: "Haze Club",
    category: "Brand Identity",
    desc: "Brand Identity & Product Design",
    year: "2024",
    image: "/images/work/hero/2.jpg",
  },

  {
    num: "08",
    slug: "blacksheep",
    title: "Black Sheep",
    category: "Design System",
    desc: "Digital Transformation & Design System",
    year: "2024",
    image: "/images/work/james/portfolio-details-image-half-1.jpg",
  },
  {
    num: "09",
    slug: "besafe",
    title: "be safe",
    category: "Web Design",
    desc: "Brand Strategy & Web Design",
    year: "2024",
    image: "/images/work/james/santam-2.jpg",
  },
  {
    num: "10",
    slug: "santam",
    title: "Santam",
    category: "Brand Identity",
    desc: "Brand Identity & Packaging",
    year: "2023",
    image: "/images/work/hero/6.jpg",
  },
  {
    num: "11",
    slug: "powers",
    title: "Powers",
    category: "Product Design",
    desc: "Brand Identity & Product Design",
    year: "2024",
    image: "/images/work/hero/3.jpg",
  },
  {
    num: "12",
    slug: "susu",
    title: "medical location",
    category: "Web Design",
    desc: "Brand Strategy & Web Design",
    year: "2024",
    image: "/images/work/hero/4.jpg",
  },
];

export const categories = [
  "All",
  "Brand Strategy",
  "Brand Identity",
  "Product Design",
  "Web Design",
  "Design System",
];

export const projectResults = [
  {
    client: "Simple Plek",
    metric: "340%",
    label: "Increase in user engagement",
    color: "text-green-500",
  },
  {
    client: "Capitec",
    metric: "$12M",
    label: "Series A raised post-rebrand",
    color: "text-blue-500",
  },
  {
    client: "Powers",
    metric: "500x",
    label: "Github stars gained post-rebrand",
    color: "text-purple-500",
  },
  {
    client: "Global Bank",
    metric: "60%",
    label: "Reduction in design-to-dev handoff time",
    color: "text-amber-500",
  },
  {
    client: "Helix Health",
    metric: "4.8★",
    label: "App Store rating after redesign",
    color: "text-rose-500",
  },
  {
    client: "Arcadia",
    metric: "2.3x",
    label: "Conversion rate improvement",
    color: "text-cyan-500",
  },
];

export const workProcess = [
  {
    step: "01",
    title: "Immerse",
    description:
      "We study your product, users, competitors, and market context until we can speak your language fluently.",
  },
  {
    step: "02",
    title: "Define",
    description:
      "We distill insights into a clear strategy brief — goals, constraints, success metrics, and creative direction.",
  },
  {
    step: "03",
    title: "Craft",
    description:
      "Senior designers build concepts, explore directions, and refine until every detail earns its place.",
  },
  {
    step: "04",
    title: "Deliver",
    description:
      "Production-ready assets, developer specs, and a smooth handoff. No loose ends, no second-guessing.",
  },
];

export const workTestimonials = [
  {
    quote:
      "Our product was always strong under the hood, but we struggled to express it clearly. Now, the platform feels sharp, modern, and incredibly intuitive.",
    name: "Julian Singh",
    role: "COO, Boltshift",
    avatar: "/images/avatars/alex-west.webp",
    stats: [
      { value: "40%", label: "Churn rate reduction" },
      { value: "$2.3M", label: "Annual efficiency savings" },
    ],
  },
  {
    quote:
      "We knew our tech was solid, but the brand didn't reflect that. After the redesign, sales calls got easier, and people finally 'got' what we do.",
    name: "Aisha Clark",
    role: "CEO, Powers",
    avatar: "/images/avatars/maya-chen.webp",
    stats: [
      { value: "500x", label: "Github stars post-rebrand" },
      { value: "95%", label: "Developer approval rate" },
    ],
  },
  {
    quote:
      "We came in with a fuzzy idea and left with a brand that feels completely aligned with our mission. Emotionally resonant and strategically sharp.",
    name: "Linh Tran",
    role: "VP of Product, ACBA",
    avatar: "/images/avatars/jordan-lee.webp",
    stats: [
      { value: "4.6x", label: "Conversation frequency" },
      { value: "0.8s", label: "Avg response time" },
    ],
  },
];

export const workFaqs = [
  {
    question: "What types of projects do you take on?",
    answer:
      "We specialise in brand strategy, brand identity, product design, web design, and design systems. From early-stage startups to enterprise transformations.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Brand identity projects run 4-8 weeks. Product design engagements typically span 6-12 weeks. Design systems can take 8-16 weeks depending on scope.",
  },
  {
    question: "Can I see work in progress?",
    answer:
      "Absolutely. We share work-in-progress via Figma with structured review checkpoints at every phase. You're never in the dark.",
  },
  {
    question: "Do you work with startups or only enterprises?",
    answer:
      "Both. About 40% of our clients are venture-backed startups and 60% are growth-stage or enterprise companies. The common thread is ambition.",
  },
  {
    question: "What happens after the project is delivered?",
    answer:
      "We provide 30 days of post-delivery support at no extra cost. Many clients transition into a monthly retainer for ongoing design needs.",
  },
  {
    question: "Do you handle development as well?",
    answer:
      "We focus on design and strategy. For development, we partner with trusted engineering studios or hand off pixel-perfect specs to your in-house team.",
  },
];
