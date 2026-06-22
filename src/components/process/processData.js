// Shared data for the Process page

export const heroStats = [
  { value: "97%", label: "On-time delivery rate across every engagement" },
  { value: "4.2", label: "Average weeks from kickoff to first milestone" },
  { value: "172+", label: "Projects shipped using this exact methodology" },
];

export const journeySteps = [
  {
    num: "01",
    title: "Listen & Learn",
    tagline: "Understand before we act.",
    desc: "Every engagement starts with understanding. We dive deep into your business, your audience, and your goals. No assumptions, just research and active listening.",
    details: [
      "Stakeholder interviews & workshops",
      "Competitor & market landscape audit",
      "User research & persona mapping",
      "Technical & brand constraint review",
    ],
    duration: "3-5 days",
  },
  {
    num: "02",
    title: "Strategy First",
    tagline: "Direction before decoration.",
    desc: "Before any pixels are pushed, we align on direction. We define what success looks like and chart the most efficient path to get there.",
    details: [
      "Creative brief & positioning statement",
      "Success metrics & KPI definition",
      "Mood boards & direction decks",
      "Scope, timeline & milestone planning",
    ],
    duration: "3-5 days",
  },
  {
    num: "03",
    title: "Iterative Design",
    tagline: "Show early, show often.",
    desc: "We work in tight feedback loops. Showing progress early and often ensures we stay on track and avoid big surprises at the end of a sprint.",
    details: [
      "Wireframes & information architecture",
      "Hi-fi concept explorations (2-3 directions)",
      "Weekly design reviews via Figma",
      "Rapid iteration based on live feedback",
    ],
    duration: "2-4 weeks",
  },
  {
    num: "04",
    title: "Refine Until Right",
    tagline: "Every pixel earns its place.",
    desc: "Your feedback shapes the work. We iterate based on what's working and what isn't, refining until we're all genuinely excited about the result.",
    details: [
      "Structured revision rounds (2-3 per phase)",
      "Micro-interaction & animation polish",
      "Responsive breakpoint refinement",
      "Accessibility & performance checks",
    ],
    duration: "1-2 weeks",
  },
  {
    num: "05",
    title: "Launch & Learn",
    tagline: "Ship it, measure it, improve it.",
    desc: "We stick around for implementation and measure what matters. Every project teaches us something that makes the next one even better.",
    details: [
      "Developer handoff with annotated specs",
      "QA review & implementation support",
      "30-day post-launch support included",
      "Performance tracking & optimisation recs",
    ],
    duration: "1-2 weeks",
  },
];

export const timelinePhases = [
  { phase: "Week 0", label: "Intro call", description: "30-minute discovery call. We learn about your project, answer questions, and determine mutual fit." },
  { phase: "Week 1", label: "Kickoff & discovery", description: "Contracts signed, onboarding complete. Deep research and stakeholder workshops begin." },
  { phase: "Week 2", label: "Strategy & direction", description: "Creative brief finalised. 2-3 design directions presented for alignment." },
  { phase: "Week 3-5", label: "Design sprints", description: "Iterative design cycles with weekly reviews. Your Figma file stays live and accessible." },
  { phase: "Week 6-7", label: "Refinement", description: "Final polish, responsive QA, animation specs, and design system documentation." },
  { phase: "Week 8", label: "Handoff & launch", description: "Production assets delivered, developer specs annotated, implementation support begins." },
  { phase: "Week 9-12", label: "Post-launch", description: "30-day support window. Bug fixes, minor iterations, and performance monitoring." },
];

export const teamMembers = [
  {
    role: "Creative Director",
    name: "James Mac",
    desc: "Sets the creative vision and ensures every deliverable meets our quality bar. Reviews all work before it reaches you.",
    avatar: "/images/avatars/alex-west.webp",
  },
  {
    role: "Lead Designer",
    name: "Sarah Park",
    desc: "Your day-to-day design partner. 10+ years of experience, assigned from kickoff to delivery. No hand-offs to juniors.",
    avatar: "/images/avatars/sarah-park.webp",
  },
  {
    role: "Project Manager",
    name: "Jordan Lee",
    desc: "Keeps timelines, scope, and communication on track. Your single point of contact for status, scheduling, and logistics.",
    avatar: "/images/avatars/jordan-lee.webp",
  },
  {
    role: "Strategist",
    name: "Maya Chen",
    desc: "Leads discovery, research, and positioning. Ensures design decisions are grounded in data and aligned with business goals.",
    avatar: "/images/avatars/maya-chen.webp",
  },
];

export const collaborationTools = [
  { name: "Figma", purpose: "Live design files with real-time commenting", category: "Design" },
  { name: "Slack", purpose: "Direct channel with your project team", category: "Communication" },
  { name: "Loom", purpose: "Async video walkthroughs for design reviews", category: "Communication" },
  { name: "Linear", purpose: "Task tracking & sprint management", category: "Management" },
  { name: "Notion", purpose: "Shared knowledge base & meeting notes", category: "Management" },
  { name: "Google Meet", purpose: "Weekly sync calls & workshops", category: "Communication" },
];

export const principles = [
  {
    num: "01",
    title: "Transparency by default",
    description: "Live Figma access, shared task boards, and no black-box phases. You see everything as it happens.",
  },
  {
    num: "02",
    title: "Deadlines are sacred",
    description: "97% on-time delivery since 2016. If scope shifts, we flag it immediately and re-align together.",
  },
  {
    num: "03",
    title: "Feedback shapes the work",
    description: "We bring strong opinions, but your context matters most. Structured revision rounds ensure the output is yours.",
  },
  {
    num: "04",
    title: "Senior talent, always",
    description: "The designer you meet on the intro call is the one doing the work. No bait-and-switch with junior staff.",
  },
  {
    num: "05",
    title: "Ship-ready, not concept-ready",
    description: "Every deliverable includes production specs, responsive breakpoints, and developer annotations.",
  },
  {
    num: "06",
    title: "Continuous improvement",
    description: "Post-project retros, NPS surveys, and process tweaks. Every engagement makes the next one better.",
  },
];

export const processFaqs = [
  {
    question: "How involved do I need to be during the project?",
    answer: "We need about 2-3 hours per week from your side — one 30-min sync call and async feedback via Figma comments. We handle everything else.",
  },
  {
    question: "What if our project scope changes midway?",
    answer: "Scope changes happen. We flag impact on timeline and budget immediately, get alignment, and adjust the plan. No surprises, no hidden costs.",
  },
  {
    question: "Can I access design files during the project?",
    answer: "Yes. From day one you have live Figma access. You can watch progress in real-time, leave comments, and invite your own team members.",
  },
  {
    question: "How do you handle feedback and revisions?",
    answer: "Each phase includes 2-3 structured revision rounds. We consolidate feedback in one place, prioritise changes, and turn them around within 24-48 hours.",
  },
  {
    question: "What's included in post-launch support?",
    answer: "30 days of bug fixes, minor design tweaks, and implementation support. If you need ongoing design, we offer monthly retainer plans.",
  },
  {
    question: "Do you work in our timezone?",
    answer: "We optimise overlap for at least 4 hours of shared working time. For async-heavy teams, we use Loom walkthroughs and detailed Figma annotations.",
  },
];
