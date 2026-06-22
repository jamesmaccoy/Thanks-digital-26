import Head from "next/head";
import Link from "next/link";
import { allArticles } from "@/components/articles/articlesData";

const fallbackBody = (article) => [
  {
    heading: `Short ${article.category.toLowerCase()} term renting in South Africa`,
    paragraphs: [
      `${article.description} SimplePlek allows its guest to Join a Stay for free, but in order to create a booking the user needs to have an active membership. Only customers with an active membership can create bookings, and have access to view entitled packages with the privileges a membership provides.`,
    ],
  },
  {
    heading: "😍 Invite someone",
    paragraphs: [
      "After the host creates a Plek with a Pro membership, a customer can invite someone, by checking the availability of that plek. A package is then suggested after selecting the duration and they can then book now or invite someone else to book, while creating analytics for that plek",
      "Membership allows access to view sensitive information, such as Lockbox code, or WIFI passwords. The details of the Plek are extended to guest that have accepted the invite to the booking.",
    ],
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
];

const fallbackTakeaways = [
  "Turn subjective taste into clear design principles.",
  "Focus on the business problem behind the visual decision.",
  "Create patterns that future teams can reuse with confidence.",
];

export default function ArticleDetailPage({ article, relatedArticles }) {
  const sections = article.body?.length ? article.body : fallbackBody(article);
  const takeaways = article.takeaways?.length ? article.takeaways : fallbackTakeaways;

  return (
    <>
      <Head>
        <title>{article.title} | Thanks Digital Articles</title>
        <meta name="description" content={article.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="selection:bg-white selection:text-black bg-black">
        <section className="relative overflow-hidden px-6 md:px-10 pt-28 pb-14 lg:pt-36 lg:pb-20 border-b border-[#222] 3xl:max-w-[1400px] 3xl:mx-auto">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.22),transparent_32%),radial-gradient(circle_at_82%_0%,rgba(168,85,247,0.16),transparent_28%)]" />
          <div className="relative grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-end">
            <div>
              <Link href="/articles" className="inline-flex items-center gap-2 text-sm text-textGray hover:text-white transition-colors mb-8">
                <span>Back to articles</span>
              </Link>
              <div className="flex flex-wrap gap-3 text-xs text-textGray uppercase tracking-[0.24em] font-semibold mb-6">
                <span>{article.category}</span>
                <span> - </span>
                <span>{article.date}</span>
                <span> - </span>
                <span>{article.readTime}</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.95] max-w-5xl">
                {article.title}
              </h1>
              <p className="text-lg md:text-xl text-textGray leading-relaxed mt-6 max-w-3xl">
                {article.description}
              </p>
            </div>

            <div className="rounded-3xl border border-[#222] bg-[#111] overflow-hidden shadow-2xl shadow-blue-950/20">
              <img src={article.image} alt={article.title} className="w-full h-[280px] md:h-[420px] lg:h-[520px] object-cover opacity-90" />
            </div>
          </div>
        </section>

        <section className="px-6 md:px-10 py-12 lg:py-20 3xl:max-w-[1400px] 3xl:mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-20">
            <aside className="lg:sticky lg:top-28 h-fit">
              <div className="rounded-2xl border border-[#222] bg-[#0f0f0f] p-6">
                <div className="flex items-center gap-4">
                  <img src={article.author.avatar} alt={article.author.name} className="w-14 h-14 rounded-full object-cover grayscale" />
                  <div>
                    <div className="font-medium">{article.author.name}</div>
                    <div className="text-sm text-textGray">{article.author.role}</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mt-6 pt-6 border-t border-[#222] text-sm">
                  <div>
                    <div className="text-textGray">Read time</div>
                    <div className="font-medium mt-1">{article.readTime}</div>
                  </div>
                  <div>
                    <div className="text-textGray">Topic</div>
                    <div className="font-medium mt-1">{article.category}</div>
                  </div>
                </div>
              </div>
            </aside>

            <article className="min-w-0">
              <div className="prose-none max-w-3xl">
                {sections.map((section, index) => (
                  <div key={section.heading} className="mb-12 lg:mb-16">
                    <div className="text-sm text-blue-400 font-semibold mb-4">0{index + 1}</div>
                    <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-5">{section.heading}</h2>
                    <div className="space-y-5">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph} className="text-base md:text-lg text-textGray leading-8">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="max-w-4xl rounded-3xl border border-[#222] bg-[#111] p-6 md:p-10 my-14 lg:my-20">
                <div className="text-xs uppercase tracking-[0.28em] text-textGray mb-5">Key takeaways</div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {takeaways.map((takeaway, index) => (
                    <div key={takeaway} className="rounded-2xl border border-[#252525] bg-black/40 p-5">
                      <div className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center text-sm font-bold mb-5">
                        {index + 1}
                      </div>
                      <p className="text-sm md:text-base leading-6 text-textGray">{takeaway}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="px-6 md:px-10 py-16 lg:py-24 border-t border-[#222] bg-[#0a0a0a] 3xl:max-w-[1400px] 3xl:mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="text-xs uppercase tracking-[0.28em] text-textGray mb-4">Read next</div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">Related insights.</h2>
            </div>
            <Link href="/articles" className="text-sm text-textGray hover:text-white transition-colors">
              View all articles
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {relatedArticles.map((item) => (
              <Link key={item.slug} href={`/articles/${item.slug}`} className="group bg-[#111] border border-[#222] rounded-2xl overflow-hidden flex flex-col hover:border-[#444] transition-colors">
                <div className="overflow-hidden aspect-video">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition duration-700" />
                </div>
                <div className="p-5 lg:p-7 flex flex-col flex-1">
                  <div className="flex gap-3 text-xs text-textGray mb-3 uppercase tracking-wider font-semibold">
                    <span>{item.category}</span>
                    <span> - </span>
                    <span>{item.readTime}</span>
                  </div>
                  <h3 className="text-xl font-medium mb-5 group-hover:text-blue-400 transition-colors">{item.title}</h3>
                  <div className="mt-auto text-sm text-textGray group-hover:text-white transition-colors">Read article</div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export function getStaticPaths() {
  return {
    paths: allArticles.map((article) => ({ params: { slug: article.slug } })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const article = allArticles.find((item) => item.slug === params.slug);
  const relatedArticles = allArticles
    .filter((item) => item.slug !== article.slug)
    .filter((item) => item.category === article.category)
    .concat(allArticles.filter((item) => item.slug !== article.slug && item.category !== article.category))
    .slice(0, 3);

  return {
    props: {
      article,
      relatedArticles,
    },
  };
}
