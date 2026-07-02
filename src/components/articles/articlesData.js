// Shared data for the Articles page

export const heroStats = [
  { value: "10", label: "In-depth articles from our senior team" },
  { value: "4", label: "Topic categories across design & strategy" },
  { value: "2×", label: "New articles published every month" },
];

// Main Article Data - Fully updated with the complete paid-to-booking conversion, sharing flows, and pricing corrections
export const featuredArticle = {
  slug: "share-database-object",
  title: "Sharing a database object using permissions",
  category: "Strategy",
  date: "Apr 16, 2026",
  readTime: "28 min read",
  image: "/images/articles/james/spaceA.gif",
  description:
    "Think of your database like a group chat: the message represents the data object, and the users represent permissions. Learn how to architect a creator-versus-guest model with a #UserAdmin override, guest preservation, and live estimate sharing in Firebase and Next.js.",
  githubUrl: "https://github.com/jamesmaccoy/llandudnoNext/blob/main/lib/firebase.ts",
  author: {
    name: "James Mac",
    role: "Creative Director",
    avatar: "/images/avatars/james-mac.jpg",
  },
  body: [
    {
      heading: "The Group Chat Metaphor: Creators vs. Guests",
      paragraphs: [
        "In modern web applications, sharing secure assets shouldn't require complex, heavy multi-tenant architecture. Think of a database entry—like an estimate or booking—as a message in a group chat, and the associated users as members of that chat.",
        "Under this paradigm, the user who initiates the record is designated the Creator. The Creator holds full read and write privileges over the document. Conversely, invited co-travelers or colleagues are treated as Guests. This clear hierarchy isolates tenant data naturally, ensuring that only authorized participants can join the 'chat' and access the shared database record."
      ],
      image: {
        images: "https://www.thanks.digital/images/articles/james/sp_flow.png",
        caption: "A logical metaphor of the group-chat security and sharing flow schematic",
      },
      code: `
// Standard data structure for a shared booking object
const bookingData = {
  id: "bk_99f2a9c",
  propertyId: "llandudno-villa-1",
  packageId: "gold-stay-pkg",
  customerName: "James Mac",
  customerEmail: "jmac@thanks.digital",
  fromDate: "2026-07-10",
  toDate: "2026-07-17",
  total: 4500,
  paymentStatus: "pending",
};
`
    },
    {
      heading: "The Role of customerName as Identity Anchor",
      paragraphs: [
        "Inside lib/firebase.ts, when a reservation starts, the initial owner's identity is defined using fields like customerName and customerEmail alongside customerId.",
        "While flat ID tokens are excellent for indexing queries, customerName acts as the human-readable anchor. It represents the original creator of the stay, which we use on the dashboard to build the administrative 'Owner' badge, personalize communications, and distinguish host privileges from guest behaviors."
      ],
      code: `
// Extracting creator identity on the client-side
const creatorLabel = booking.customerName; // "James Mac"
const creatorEmail = booking.customerEmail; // "jmac@thanks.digital"
`
    },
    {
      heading: "The Need for addGuestToEstimate: Collaborative Stay Planning",
      paragraphs: [
        "The addGuestToEstimate function addresses a key workflow in your booking system: enabling collaborative stay planning. When a user creates a stay estimate, they need the ability to invite other people (friends, family, co-travelers) to view, review, and contribute to the estimate before payment.",
        "addGuestToEstimate allows you to add guests to an unpaid estimate by storing their UID, name, and email in a guestsDetails dictionary. This supports your 'Booking Sharing Flow' requirement, where multiple people can review the estimated cost, selected package, and stay dates before one person commits to payment.",
        "The function preserves guest details (not just raw UIDs) so the dashboard can display readable guest information like 'robgt2 (robgt2@icloud.com)' instead of a cryptic Firebase identifier."
      ],
      code: `
/**
 * Adds an invited guest to an existing stay estimate to support collaborative planning.
 * Stores comprehensive user profiles within the guestsDetails dictionary.
 * Located in: /lib/firebase.ts
 */
export async function addGuestToEstimate(
  estimateId: string, 
  guestUid: string, 
  guestName: string, 
  guestEmail: string
): Promise<void> {
  const db = getFirestore();
  const estimateRef = db.collection("estimates").doc(estimateId);
  
  await db.runTransaction(async (transaction) => {
    const docSnap = await transaction.get(estimateRef);
    if (!docSnap.exists) throw new Error("Estimate does not exist!");
    
    const guestsDetails = docSnap.data().guestsDetails || {};
    const allowedGuests = docSnap.data().allowedGuests || [];
    
    // Preserve rich profiles instead of raw ID strings
    guestsDetails[guestUid] = { 
      name: guestName, 
      email: guestEmail,
      invitedAt: new Date().toISOString()
    };
    
    if (!allowedGuests.includes(guestUid)) {
      allowedGuests.push(guestUid);
    }
    
    transaction.update(estimateRef, { guestsDetails, allowedGuests });
  });
}
`
    },
    {
      heading: "Handling Safe Invitations: The accept-invite API Route",
      paragraphs: [
        "To allow guests to claim their spot on a collaborative stay estimate, a dedicated Next.js App Router endpoint is set up at app/api/estimates/accept-invite/route.ts.",
        "This POST endpoint acts as a secure server-side coordinator. It extracts the estimateId, guestUid, name, and email parameters from incoming client payloads, verifies session logic, and securely invokes the backend transaction library's addGuestToEstimate helper. Keeping invitation acceptances on the server isolates Firestore configurations, shielding sensitive keys while preserving high-fidelity guest profiles."
      ],
      image: {
        images: "https://www.thanks.digital/images/articles/james/invite.png",
        caption: "Collaborative invitations and visual interface layout acceptance mechanics",
      },
      code: `
import { NextResponse } from "next/server";
import { addGuestToEstimate } from "@/lib/firebase";

/**
 * Next.js App Router API Endpoint: accept-invite
 * Path: app/api/estimates/accept-invite/route.ts
 */
export async function POST(request: Request) {
  try {
    const { estimateId, guestUid, name, email } = await request.json();

    if (!estimateId || !guestUid || !name || !email) {
      return NextResponse.json(
        { error: "Missing required parameters: estimateId, guestUid, name, or email" },
        { status: 400 }
      );
    }

    // Securely invoke our Firebase helper to attach guest details to the estimate
    await addGuestToEstimate(estimateId, guestUid, name, email);

    return NextResponse.json({ 
      success: true, 
      message: \`Successfully accepted invitation to estimate \${estimateId}\` 
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Failed to accept invite" },
      { status: 500 }
    );
  }
}
`
    },
    {
      heading: "The Need for createBooking with Guest Preservation",
      paragraphs: [
        "createBooking must accept and initialize a guestsDetails parameter to ensure that when a paid estimate is converted into a confirmed booking, all invited guests are carried over automatically.",
        "This is critical for your paid-to-booking conversion flow: after payment completes (via Yoco webhook or the confirm endpoint), the system creates a booking and needs to preserve the entire guest list and their contact details.",
        "Without this, guests who were invited to the estimate would be lost when the booking was created, breaking the continuous sharing experience. By passing guestsDetails: estimate.guestsDetails || {} during booking creation, you maintain the full guest roster and allow additional guests to be invited post-payment via addGuestToBooking."
      ],
      code: `
/**
 * Creates a confirmed booking and automatically preserves previously negotiated guestsDetails.
 * Transitioning seamlessly from an Estimate state to a Confirmed Booking.
 * Reference: https://github.com/jamesmaccoy/llandudnoNext/blob/main/lib/firebase.ts
 */
export async function createBooking(data: {
  propertyId: string;
  packageId: string | null;
  customerName: string;
  customerEmail: string;
  fromDate: string;
  toDate: string;
  total: number;
  paymentStatus?: string;
  guestsDetails?: Record<string, { name: string; email: string }>;
  allowedGuests?: string[];
}): Promise<any> {
  const db = getFirestore();
  const id = \`bk_\${Math.random().toString(36).substring(2, 11)}\`;
  
  const bookingRecord = {
    id,
    paymentStatus: data.paymentStatus || "pending",
    token: Math.random().toString(36).substring(2, 15),
    guestsDetails: data.guestsDetails || {}, // Automated preservation payload
    allowedGuests: data.allowedGuests || [],
    ...data,
  };

  await db.collection("bookings").doc(id).set(bookingRecord);
  return bookingRecord;
}
`
    },
    {
      heading: "Correcting the Stay Package Calculations (Math Model)",
      paragraphs: [
        "A key requirement in collaborative stays is ensuring pricing is absolute and robust. The platform introduces a default 'No Package' option where calculations are bound strictly to nightly durations (nights multiplied by base nightly pricing).",
        "If a specific package is selected, flat pricing is merged into duration variables, and a multiplier is applied to output the corrected final checkout fee: finalTotal = (baseCost + packagePrice) * multiplier.",
        "This formula correctly scales staying rates for bundled premium inclusions without breaking standard multi-guest calculations."
      ],
      code: `
/**
 * Resolves standard stay & package calculation logic safely on the server or checkout page.
 */
export function calculateStayPrice(
  nightsCount: number,
  basePricePerNight: number,
  selectedPackage: { price: number; multiplier: number } | null
): number {
  const baseCost = basePricePerNight * nightsCount;
  
  if (!selectedPackage) {
    return baseCost; // "No Package" selected by default
  }
  
  // Package math model: finalTotal = (baseCost + packagePrice) * multiplier
  const finalTotal = (baseCost + selectedPackage.price) * selectedPackage.multiplier;
  return Math.round(finalTotal);
}
`
    },
    {
      heading: "Mock Data Representation (db-mock.json)",
      paragraphs: [
        "In your db-mock.json, this structure is reflected in booking and estimate records that include a guestsDetails object mapping guest UIDs to { name, email } objects.",
        "For example, a booking might contain \"guestsDetails\": { \"jLOrG13Wv1W2gloWW3kMezbD3WJ3\": { \"name\": \"jmaclachlan\", \"email\": \"jmaclachlan@gmail.com\" } }.",
        "This mock data enables local testing and demonstrates how the system will track and display multiple people invited to a single stay, supporting your vision of a collaborative, shareable booking experience where any invited guest can view the details and continue inviting others."
      ],
      code: `
{
  "estimates": [
    {
      "id": "est_9921a",
      "propertyId": "p1",
      "customerId": "usr_james_mac",
      "customerName": "James Mac",
      "customerEmail": "jmac@thanks.digital",
      "guestsDetails": {
        "jLOrG13Wv1W2gloWW3kMezbD3WJ3": {
          "name": "jmaclachlan",
          "email": "jmaclachlan@gmail.com"
        },
        "robgt2": {
          "name": "robgt2",
          "email": "robgt2@icloud.com"
        }
      },
      "allowedGuests": ["jLOrG13Wv1W2gloWW3kMezbD3WJ3", "robgt2"],
      "paymentStatus": "pending"
    }
  ]
}
`
    },
    {
      heading: "Defining the #UserAdmin Super-User Privilege",
      paragraphs: [
        "In enterprise database systems, there are cases where a tenant or a customer support agent needs administrative oversight across multiple booking chats without being explicitly invited. This is where we define the #UserAdmin role inside app/lib/firebase.ts.",
        "A user flagged with #UserAdmin bypasses individual guest lists during evaluation, obtaining immediate clearance. This hierarchy keeps the local client permission chains simple while giving backend administrators complete query capabilities."
      ],
      code: `
/**
 * Resolves permissions for a single booking object.
 * Evaluates #UserAdmin status first, then checks Creator and Guest lists.
 */
export async function checkBookingPermission(bookingId: string, userId: string): Promise<boolean> {
  const db = getFirestore();
  
  // 1. Check if user is a designated #UserAdmin super-user
  const userSnap = await db.collection("users").doc(userId).get();
  if (userSnap.exists && userSnap.data()?.role === "UserAdmin") {
    return true; // Bypass evaluation, grant permission
  }

  // 2. Fetch the target booking object
  const bookingSnap = await db.collection("bookings").doc(bookingId).get();
  if (!bookingSnap.exists) return false;
  const booking = bookingSnap.data();

  // 3. Resolve Creator vs Guest mapping
  const isCreator = booking.customerId === userId || booking.creatorId === userId;
  const isGuest = booking.allowedGuests?.includes(userId);

  return isCreator || isGuest;
}
`
    },
    {
      heading: "Project Directory Structure",
      paragraphs: [
        "To keep your API routing layer, frontend components, and security schemas completely isolated, structure your next-gen directory as follows:",
        "|_ 📁 app", "| |_ 📁 api", "| | |_ 📁 bookings","| | | |_ 📄 route.ts","| | |_ 📁 estimates","| | | |_ 📄 route.ts","| | | |_ 📁 accept-invite","| | | | |_ 📄 route.ts","| |_ 📁 components","| | |_ 📄 CalendarPicker.tsx","| | |_ 📄 SmartEstimateBlock.tsx","| | |_ 📁 ui","| | | |_ 📄 card.tsx","| | | |_ 📄 calendar.tsx","|_ 📁 lib","| |_ 📄 firebase.ts"
      ]
    }
  ],
  takeaways: [
    "Differentiate access control explicitly between the document Creator (associated with customerName) and invited Guests.",
    "Implement checkBookingPermission to securely handle roles and evaluate admin bypasses.",
    "Utilize addGuestToEstimate to build high-fidelity profiles within guestsDetails for collaborative planning.",
    "Handle safe guest invitation responses securely using the backend accept-invite API endpoint to validate payloads before modification.",
    "Preserve guestsDetails when calling createBooking to prevent losing invited co-travelers at conversion.",
    "Correct stayed packages calculation using the: finalTotal = (baseCost + packagePrice) * multiplier format.",
    "Mock user data in db-mock.json to accurately test multi-guest permissions locally."
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
          images: "/images/work/james/PAGE 1.jpg",
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
          "Ecclesiastes 1:9 tells us, There is &quot;nothing new under the sun. While King Solomon wasn't talking about software, this timeless wisdom is a powerful guide for product development today. We spend countless hours reinventing the wheel, fighting against legacy systems, and building complex solutions for problems that have, in many ways, already been solved.",
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
        image: {
          images: "/images/work/james/capitecapp.png",
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
          images: "/images/work/james/capitec_questions.jpg",
          caption: "Pre qualifying questions template to deduce the cover amount",
        },
      },
      {
        heading: "The Solomon's Patterns Framework",
        paragraphs: [
          "This entire process can be packaged into a valuable service. Imagine a platform, accessible behind a paywall, that provides this exact design framework.",
          "The Dashboard: After payment, users get access to a dashboard filled with custom, drag-and-drop components. These aren't just pretty pictures; they are pre-validated, modular building blocks of a great user experience.",
          "No-Code Product Assembly: With these components, users can assemble new products or features in a fraction of the time it would take to code them from scratch. The entire interface is a no-code canvas, allowing teams to rapidly prototype and build, all while adhering to proven design patterns.",
          "By using these methods, we're not just improving a coded framework; we're fundamentally changing our approach to product development. We're embracing the idea that some patterns are universal and that the most effective path forward is often to leverage, not reinvent, what works.",
        ],
        image: {
          images: "/images/work/james/capitec_flow.jpg",
          caption: "Maintaining the Policy object using a design framework to communicate the state of the policy",
        },
      },
      {
        heading: "The difference between single /once off and reoccurring payments",
        paragraphs: [
          "",
        ],
        image: {
          images: "/images/work/james/capitec.jpg",
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
    slug: "scaling-up-multi-tenant-architecture-property-management",
    title: "Scaling Up: Implementing Multi-Tenant Architecture for Property Management",
    category: "Process",
    date: "Jul 2, 2026",
    readTime: "8 min read",
    image: "/images/articles/AA.jpg",
    description:
      "Transitioning from a monolithic, single-tenant property model to a robust multi-tenant architecture is a critical step for scaling any property management platform. This evolution enables individual hosts to maintain data isolation while enjoying the benefits of custom descriptions and high-resolution media uploads—all powered by modern cloud infrastructure like Cloudflare R2.",
    author: {
      name: "James Mac",
      role: "Designer & Software Engineer",
      avatar: "/images/avatars/james-mac.jpg",
    },
    body: [
      {
        heading: "The Core Concept: Absolute Data Isolation",
        paragraphs: [
          "In this post, we’ll walk through the architectural transition, database modifications, and the secure media upload strategy required to achieve this.",
          "The foundation of our multi-tenant model is simple: hostId. By binding every property record to a unique hostId (typically a Firebase Auth UID), we ensure that queries against the properties collection are always explicitly scoped.",
          "Data Isolation: Hosts can only see, create, edit, and delete their own properties.",
          "API Enforcement: Our backend routes enforce this scoping by verifying the active host's context on every request.",
        ],
        code: `// Example: Querying Firestore properties collection scoped by hostId
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';

export async function getPropertiesForHost(hostId) {
  const db = getFirestore();
  const q = query(
    collection(db, "properties"),
    where("hostId", "==", hostId)
  );
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}`,
      },
      {
        heading: "Database Schema Extensions",
        paragraphs: [
          "To support this model, we’ve extended our Firestore PropertyDocument structure to include the tenant identifier and dynamic host-managed fields.",
        ],
        code: `// Extending the Firestore PropertyDocument interface
interface PropertyDocument {
  id: string;
  name: string;
  hostId: string;       // Tenant partition key
  description: string;  // Custom host-managed field
  mediaUrls: string[];  // Cloudflare R2 media paths
  createdAt: string;
  updatedAt?: string;
}`,
      },
      {
        heading: "Mastering Media with Cloudflare R2",
        paragraphs: [
          "High-resolution imagery is essential, but it can be a bottleneck. Instead of piping massive files through our API, we’ve implemented a Presigned URL pattern.",
          "Secure Presigning: The client requests a secure, temporary upload URL from our app/api/media/presign endpoint.",
          "Direct Upload: The browser uploads the image directly to the Cloudflare R2 bucket.",
          "Structured Pathing: Files are organized under hosts/{hostId}/properties/{propertyId}/{timestamp}_{filename}, ensuring that even in a multi-tenant environment, file collisions are non-existent and cleanup is straightforward.",
        ],
        code: `// Generating pre-signed upload URLs with S3 Client (Cloudflare R2)
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const r2 = new S3Client({
  region: 'auto',
  endpoint: process.env.R2_ENDPOINT,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  },
});

export async function getPresignedUploadUrl(hostId, propertyId, filename) {
  const timestamp = Date.now();
  const key = \`hosts/\${hostId}/properties/\${propertyId}/\${timestamp}_\${filename}\`;
  
  const command = new PutObjectCommand({
    Bucket: process.env.R2_BUCKET_NAME,
    Key: key,
  });
  
  const url = await getSignedUrl(r2, command, { expiresIn: 3600 });
  return { url, key };
}`,
      },
      {
        heading: "Developer Tip: The Offline Mock Fallback",
        paragraphs: [
          "For local development, we’ve introduced an offline fallback. If Cloudflare R2 credentials aren't configured, the system routes uploads to /api/media/mock-upload, writing files directly to the local /public/uploads directory. This allows for seamless, 100% offline testing of the image pipeline.",
        ],
        code: `// Offline local fallback route inside Next.js API
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (process.env.NODE_ENV !== 'production' && !process.env.R2_ACCESS_KEY_ID) {
    // Route to local mock upload
    const uploadDir = path.join(process.cwd(), 'public', 'uploads');
    // Save file locally...
  }
}`,
      },
      {
        heading: "API & Frontend Integration Flow",
        paragraphs: [
          "Transitioning to this model required updates across the full stack:",
          "API Routing: Our GET /api/posts endpoint is now context-aware. If no hostId is provided, it intelligently falls back to a default admin host ID, ensuring our public-facing guest pages (homepage/bookings) remain fully functional without breaking backwards compatibility.",
        ],
      },
      {
        heading: "Monetizing & Empowering Hosts",
        paragraphs: [
          "Growth requires a sustainable business model. We have successfully integrated Yoco Subscriptions, allowing users to upgrade to Standard (R150/mo) or Pro (R299/mo) plans via our new /subscribe page. This system is fully automated; a webhook callback from Yoco triggers a serverless function that promotes the user to host status in real-time, instantly unlocking their property management dashboard.",
          "The Host Portal & Storefront: Inside the admin portal, the frontend now passes the hostId parameter with every request. We've introduced a \"Become Host\" navigation link for seamless onboarding and overhauled the storefront homepage. The guest experience now supports dynamic host-based filtering and high-performance public-facing property thumbnails.",
        ],
      },
      {
        heading: "Ensuring Quality and Security",
        paragraphs: [
          "Our verification plan is three-pronged:",
          "Data Isolation Testing: Verifying that host1 cannot access host2's properties.",
          "Asset Management: Confirming files land in the correct paths and load efficiently in our new gallery component.",
          "Booking Continuity: Ensuring that even with the new isolation layer, the core booking flows and calendar integrations remain uninterrupted for the end guest.",
          "Production Stability: Our recent deployment report confirms a successful production build using Next.js 16.2.9 and Turbopack, with all strict TypeScript and linting checks passed.",
          "This transition is more than just a code update—it’s an architectural shift that sets the stage for platform growth. By focusing on isolation, secure asset handling, and developer-friendly local testing, we’ve created a more secure and scalable foundation for all our hosts.",
        ],
      },
    ],
    takeaways: [
      "Bind all property records to a unique hostId for absolute data isolation.",
      "Use presigned URLs to upload high-resolution media directly to Cloudflare R2.",
      "Provide an offline mock fallback for local testing of the upload pipeline.",
    ],
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
