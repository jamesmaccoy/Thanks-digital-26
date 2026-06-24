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
    "The brand that gets you to R1M will strangle you at R100M. Learn how to build flexible brand systems that grow with your business without losing the soul that made them special.",
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
    slug: "Short-term-renting-in-South-Africa",
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
    body: [
      {
        paragraphs: [
          "SimplePlek allows its guest to Join a Stay for free, but in order to create a booking the user needs to have an active membership. Only customers with an active membership can create bookings, and have access to view entitled packages with the privileges a membership provides.",
        ],
      },
      {
        heading: "😍 Invite someone",
        paragraphs: [
          "After the host creates a Plek with a Pro membership, a customer can invite someone, by checking the availability of that plek. A package is then suggested after selecting the duration and they can then book now or invite someone else to book, while creating analytics for that plek",
          "Membership allows access to view sensitive information, such as Lockbox code, or WIFI passwords. The details of the Plek are extended to guest that have accepted the invite to the booking.",
        ],
        image: {
          images:"/images/work/james/PAGE 1.jpg", 
          caption: "Off plan package Ad, funding a new build, combined with a repeat payment serves as a home loan monthly premium X period remaining seen on the SimplePlek dashboard",
        },
      },
      {
        heading: "📦 Drafting a New Plek",
        paragraphs: [
          "If a customer has a Pro Membership the navigation will show a Manage link. This allows a member to add a Plek either using the dashboard or to Draft a New Plek using the assistant prompt suggestion </br>The assistant suggests packages including the Category and Entitlement, where you can adjust the duration and then save the package for customers to consume. The customer sees this as an availability for exisiting bookings that can be synced with your external .ics calendar",
          "Example: Luxury Night inc wine sommelier - 3 Nights, Weekly & Monthly package, and perhaps a add on Bottle of wine package.",
        ],
      },
      {
        heading: "🥖 Access Control",
        paragraphs: [
          "As an Admin of the platform you can publish and remove Pleks while members see a LLM assistant with Checkpoints that they can return to anytime. The sessions resumes at each saved duration start date serving the relevant package drafted by the admin with their entitlement.",
          "SimplePlek makes lease agreements easily available and lets you know where you stand as a tenant / mortgagor allowing you to choose rent & bond repayments options with the remaining total displayed realtime.",
          "These programming roles allow customers to design their agreement and payment terms with an annual statement of all activity of transactions",
        ],
      },
      {
        heading: "🏦 Payment gateway",
        paragraphs: [
          "There is no fintech company in South Africa allowed to use repeat payments due to our legislation that protects us against unlawful deductions that frustratingly come off our account each month without our permission.",
          "The app store facilitates pausing these reoccurring payments natively putting an end to FSP's convenient debit orders process but I am yet to build this automated reoccurring payment process inside SimplePlek, and currently use Yoco as a payment gateway",
          "An addon package is displayed inside the booking for repeat payment until a convenient debit order process is built and permitted but id like to point out our failure at realising the ease at which a queuing system can be established leveraging the app store, and i would like to invite collaborators on this project for their own short term rentals platform",
        ],
      },
    ],
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
    body: [
      {
        paragraphs: [
          "In a world where digital threats are ever-present, we provide the strategies and tools to protect your assets, transforming risk into security and ensuring a prosperous future for generations to come.",
        ],
      },

      {
        heading: "The &quot;Nothing New Under the Sun&quot; Approach to Modern UX",
        paragraphs: [
          "Ecclesiastes 1:9 tells us, There is &quot;nothing new under the sun.&quot; While King Solomon wasn't talking about software, this timeless wisdom is a powerful guide for product development today. We spend countless hours reinventing the wheel, fighting against legacy systems, and building complex solutions for problems that have, in many ways, already been solved.",
          "What if we stopped? What if we embraced this truth and built a system designed to leverage proven patterns instead of starting from scratch?",
        ],
      },
      {
        heading: "Phase 1: Designing the Ideal Experience, Unimpeded by Legacy",
        paragraphs: [
          "Before a single line of code is written, our first step is to design the ideal user experience. This means ignoring the limitations of our existing legacy framework and focusing purely on the user.",
          "Empathy Mapping with FigJam: We kick off the process with a collaborative empathy mapping session. Using a tool like FigJam, we get shareholders and stakeholders in a room to identify key pain points. What are their frustrations? What do they truly need to accomplish? We capture these insights to form a clear, human-centered foundation for our design.",
          "The &quot;golden path&quot; — the blueprint for the entire project.",
        ],
        image:{
          images:"/images/work/james/capitecapp.png", 
          caption: "The Capitec app",
        },
      },
      {
        heading: "Phase 2: Programmatic Testing for Consistent UX",
        paragraphs: [
          "Once we have our ideal design, how do we ensure it's implemented correctly? This is where we bridge the gap between design and development with a powerful, automated process.",
          "We create a programmatic test that assumes our &quot;golden&quot; UX patterns. This test becomes a digital gatekeeper. When a developer submits a new pull request (PR), this test automatically runs, validating that the new code adheres to the established design patterns and principles.",
          "This isn't about catching bugs; it's about enforcing design consistency. By making this a mandatory part of our CI/CD pipeline, we can confidently assume a better user experience with every new release. We get automated reports confirming the work is well-executed, eliminating manual checks and ensuring that our product remains true to the original design vision.",
        ],
        image: {
          images:"/images/work/james/capitec_questions.jpg", 
          caption: "Pre qualifying questions template to deduce the cover amount",
        },
      },
      {
        heading: "The &quot;Solomon's Patterns&quot; Framework",
        paragraphs: [
          "This entire process can be packaged into a valuable service. Imagine a platform, accessible behind a paywall, that provides this exact design framework.",
          "The Dashboard: After payment, users get access to a dashboard filled with custom, drag-and-drop components. These aren't just pretty pictures; they are pre-validated, modular building blocks of a great user experience.",
          "No-Code Product Assembly: With these components, users can assemble new products or features in a fraction of the time it would take to code them from scratch. The entire interface is a no-code canvas, allowing teams to rapidly prototype and build, all while adhering to proven design patterns.",
          "By using these methods, we're not just improving a coded framework; we're fundamentally changing our approach to product development. We're embracing the idea that some patterns are universal and that the most effective path forward is often to leverage, not reinvent, what works.",
        ],
        image: {
          images:"/images/work/james/capitec_flow.jpg", 
          caption: "Maintaining the Policy object using a design framework to communicate the state of the policy",
        },
      },
      {
        heading: "The difference between single /once off and reoccurring payments",
        paragraphs: [
          "",
        ],
        image: {
          images:"/images/work/james/capitec.jpg", 
          caption: "Responsive stateful dashboard articulating where the user stands in the policy",
        },
      },
    ],
  },
  {
    slug: "beyond-minimalism-whats-next-in-web-design",
    title: "sharing a database object using permissions 2",
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
    body: [
      {
        paragraphs: [
          "In a world where digital threats are ever-present, we provide the strategies and tools to protect your assets, transforming risk into security and ensuring a prosperous future for generations to come.",
        ],
      },
    ],
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
