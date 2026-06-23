// Shared data for the Articles page

export const heroStats = [
  { value: "10", label: "In-depth articles from our senior team" },
  { value: "4", label: "Topic categories across design & strategy" },
  { value: "2×", label: "New articles published every month" },
];

export const featuredArticle = {
  slug: "building-brands-that-scale",
  title: "Sharing a database object using permissions",
  category: "Strategy",
  date: "Apr 16, 2026",
  readTime: "12 min read",
  image: "/images/articles/james/spaceA.gif",
  description:
    "The brand that gets you to $1M will strangle you at $100M. Learn how to build flexible brand systems that grow with your business without losing the soul that made them special.",
  author: {
    name: "James Mac",
    role: "Creative Director",
    avatar: "/images/avatars/james-mac.jpg",
  },
  body: [
    {
      heading: "Scale changes what a brand needs to do.",
      paragraphs: [
        "Early brands often win because they are intimate, opinionated, and easy to recognise. As the business grows, the same brand has to support more channels, teams, product lines, markets, and customer expectations without becoming generic.",
        "The goal is not to make a brand bigger for the sake of looking bigger. The goal is to create a system that protects what made the company magnetic while giving every team enough structure to move faster.",
      ],
    },
    {
      heading: "A scalable brand is a decision-making system.",
      paragraphs: [
        "Logos, type, colours, and templates matter, but they are only the visible layer. The deeper value is a shared language for making choices: what we say yes to, what we avoid, how we show up, and how we stay consistent when the team is no longer in the same room.",
        "When that system is clear, teams stop reinventing the brand every week. Marketing becomes sharper, product moments feel connected, and leadership can expand the story without losing credibility.",
      ],
    },
    {
      heading: "Build flexibility into the rules.",
      paragraphs: [
        "Rigid guidelines break under real growth. Flexible systems define ranges, principles, and examples so the brand can adapt across campaigns, landing pages, pitch decks, social content, and product surfaces.",
        "The best brand systems give teams confidence. They reduce ambiguity without removing taste, creativity, or the small details that make the brand feel alive.",
      ],
    },
  ],
  takeaways: [
    "Define the brand as principles before assets.",
    "Create repeatable patterns for every high-frequency touchpoint.",
    "Document what should never change as the company grows.",
  ],
};

export const articles = [
  {
    slug: "beyond-minimalism-whats-next-in-web-design",
    title: "sharing a database object using permissions",
    category: "Trends",
    date: "Feb 3, 2026",
    readTime: "8 min read",
    image: "/images/articles/james/spaceA.gif",
    description:
      "Minimalism dominated the last decade. But the pendulum is swinging—discover the emerging trends reshaping digital design in 2026.",
    author: {
      name: "James Mac",
      role: "Designer & Software Engineer",
      avatar: "/images/avatars/james-mac.jpg",
    },
  },
  {
    slug: "designing-for-human-connection-in-the-ai-era",
    title: "Short term renting in South Africa",
    category: "Trends",
    date: "Apr 1, 2026",
    readTime: "10 min read",
    image: "/images/articles/james/sp_flow.png",
    description:
      "Lets cover 3 proven design patterns: CRUD using List & Details view. Authentication leveraging a API hook from the humble HTML form. Bundle those together and call it SASS and assign a payment gateway, and you have your own short term legally binding property user agreement",
    author: {
      name: "James Mac",
      role: "Designer & Software Engineer",
      avatar: "/images/avatars/james-mac.jpg",
    },
  },
  {
    slug: "the-case-for-design-systems-at-every-scale",
    title: "Build once. Deploy many times",
    category: "Process",
    date: "Mar 20, 2026",
    readTime: "7 min read",
    image: "/images/articles/capitec.jpg",
    description:
      "Financial databases often run on legacy systems. Understanding the limitations of these systems is key. When you replace them with a new microservice, the original legacy artifact quickly becomes redundant, and a new project lifecycle begins.",
    author: {
      name: "James Mac",
      role: "Designer & Software Engineer",
      avatar: "/images/avatars/james-mac.jpg",
    },
  },
  {
    slug: "pricing-creative-work-without-undervaluing-it",
    title: "Creating a calendar component using Payload CMS.",
    category: "Business",
    date: "Mar 5, 2026",
    readTime: "9 min read",
    image: "/images/articles/james/spaceB.gif",
    description:
      "The uncomfortable truth about creative pricing and how to charge what you're worth without losing clients.",
    author: {
      name: "James Mac",
      role: "Designer & Software Engineer",
      avatar: "/images/avatars/james-mac.jpg",
    },
  },
  {
    slug: "how-we-run-design-critiques-that-actually-work",
    title: "Authentication using Payload CMS.",
    category: "Process",
    date: "Feb 18, 2026",
    readTime: "6 min read",
    image: "/images/articles/james/spaceC.gif",
    description:
      "Most design critiques are broken. Here's the framework we use to give actionable feedback without killing creativity.",
    author: {
      name: "Maya Chen",
      role: "Design Lead",
      avatar: "/images/avatars/james-mac.jpg",
    },
  },
  {
    slug: "why-we-ditched-proposals-for-paid-discovery",
    title: "Creating an agentic chatbot using Payload CMS.",
    category: "Business",
    date: "Jan 28, 2026",
    readTime: "5 min read",
    image: "/images/articles/james/spaceD.gif",
    description:
      "Free proposals are a race to the bottom. We switched to paid discovery phases and both our work and client relationships got dramatically better.",
    author: {
      name: "Jordan Lee",
      role: "Product Designer",
      avatar: "/images/avatars/james-mac.jpg",
    },
  },
  {
    slug: "motion-design-as-a-competitive-advantage",
    title: "Using a hook to handle form submissions in Next.js.",
    category: "Design",
    date: "Jan 15, 2026",
    readTime: "7 min read",
    image: "/images/articles/motion-design.webp",
    description:
      "Forms are easily the most overlooked / misunderstood chapters in UX. With little action and knowledge of the DOM, you can perform surgery on a database if executed correctly. Done incorrectly it can cost millions for a humble form.Simplified we are adding a pre made component to our site and displaying it on the front end to clients in order to request a booking",
    body: [
      {
        heading: "Step 2 Form submissions",
        paragraphs: [
          " Add the Shadcn premade component to your site in order to display it on front end",
          "|_ 📁 app",
          "|_ 📁 components",
          "|_ 📁 ui",
          "|_ 📄 card.tsx",
          "|_ 📄 calendar.tsx",
          "|_ 📁 collections",
          "|_ 📁 fields",
          "|_ 📄 paylaod types.ts",
          "|_ 📄 payload.config.ts",
          "Step 3 Handle the form submission",
          "Step 4 Validate the form data",
          "Step 5 Submit the form data to the database",
        ],
      },
      {
        heading: "Step 3 Handle the form submission",
        paragraphs: [
          "Step 4 Validate the form data",
          "Step 5 Submit the form data to the database",
        ],
      },
    ],
    author: {
      name: "James Mac",
      role: "Designer & Software Engineer",
      avatar: "/images/avatars/james-mac.jpg",
    },
  },
  {
    slug: "navigating-client-feedback-like-a-pro",
    title: "Navigating client feedback like a pro.",
    category: "Process",
    date: "Jan 2, 2026",
    readTime: "8 min read",
    image: "/images/articles/client-feedback.webp",
    description:
      "Not all feedback is created equal. Learn how to decode what clients really mean and turn vague notes into actionable design changes.",
    author: {
      name: "James Mac",
      role: "Designer & Software Engineer",
      avatar: "/images/avatars/james-mac.jpg",
    },
  },
  {
    slug: "the-anatomy-of-a-high-converting-landing-page",
    title: "The anatomy of a high-converting landing page.",
    category: "Design",
    date: "Dec 12, 2025",
    readTime: "11 min read",
    image: "/images/articles/landing-page.webp",
    description:
      "We've designed 200+ landing pages. These are the patterns, principles, and psychology tricks that consistently convert.",
    author: {
      name: "James Mac",
      role: "Designer & Software Engineer",
      avatar: "/images/avatars/alex-west.webp",
    },
    body: [
      {
        heading: "Conversion starts with clarity.",
        paragraphs: [
          "A landing page has seconds to answer three questions: what is this, why should I care, and what should I do next. Strong pages remove friction from that sequence.",
          "The hero, proof, offer, objections, and call-to-action all need to work together. If one section creates confusion, the entire page loses momentum.",
        ],
      },
      {
        heading: "Design the page as a guided argument.",
        paragraphs: [
          "High-converting pages do not simply stack sections. They build belief. Each block should answer the next question in the visitor's mind and move them closer to action.",
          "Visual hierarchy, social proof, focused copy, and repeated CTAs help the page feel effortless while still doing strategic work.",
        ],
      },
    ],
    takeaways: [
      "Make the offer obvious above the fold.",
      "Use proof close to claims.",
      "Repeat the CTA after every major objection is resolved.",
    ],
  },
];

export const allArticles = [featuredArticle, ...articles];

export const categories = [
  {
    name: "Trends",
    count: 2,
    description: "Emerging patterns in design, technology, and culture.",
  },
  {
    name: "Process",
    count: 3,
    description: "How we work — critiques, feedback, systems, and rituals.",
  },
  {
    name: "Business",
    count: 2,
    description: "Pricing, proposals, client relationships, and studio operations.",
  },
  {
    name: "Design",
    count: 2,
    description: "Deep dives into visual design, motion, and conversion.",
  },
];

export const authors = [
  {
    name: "James Mac",
    role: "Creative Director",
    avatar: "/images/avatars/james-mac.jpg",
    articleCount: 3,
    bio: "Designer & Software Engineer. Writes about design, development, and the business side of creative work.",
  },
  {
    name: "Maya Chen",
    role: "Design Lead",
    avatar: "/images/avatars/maya-chen-2.webp",
    articleCount: 3,
    bio: "Specialises in visual systems and motion. Covers trends, critique culture, and the craft of design.",
  },
  {
    name: "Jordan Lee",
    role: "Product Designer",
    avatar: "/images/avatars/jordan-lee.webp",
    articleCount: 2,
    bio: "Full-stack product thinker. Writes about AI, discovery phases, and the intersection of design and technology.",
  },
  {
    name: "Sarah Park",
    role: "Project Manager",
    avatar: "/images/avatars/sarah-park.webp",
    articleCount: 2,
    bio: "Operations and process nerd. Covers design systems, client feedback, and project management.",
  },
];
