import Head from "next/head";
import Link from "next/link";
import { allProjects } from "@/components/work/workData";

const detailByCategory = {
  "Brand Strategy": {
    challenge: "The company had momentum, but the market could not clearly understand what made the offer different. Sales teams were explaining too much, product pages felt scattered, and the brand needed a sharper strategic foundation.",
    approach: "We rebuilt the positioning system from the inside out: audience segments, category language, proof points, narrative hierarchy, and a visual direction that could scale across launch campaigns, sales decks, and product touchpoints.",
    outcome: "The new strategy made the brand easier to sell, easier to remember, and easier for internal teams to use without diluting the message.",
  },
  "Brand Identity": {
    challenge: "The existing identity looked polished but generic. It did not carry enough emotion, distinction, or system logic to support a growing product and expanding marketing team.",
    approach: "We created a flexible identity system with sharper art direction, modular layouts, expressive typography, and brand behaviours that could move from product UI to campaigns without feeling disconnected.",
    outcome: "The brand gained a recognisable voice and a visual system that felt premium, memorable, and practical for daily execution.",
  },
  "Product Design": {
    challenge: "Users understood the value after onboarding, but too many people were dropping before the product had a chance to prove itself. The interface needed more clarity, hierarchy, and trust.",
    approach: "We mapped the highest-friction journeys, redesigned key flows, simplified decision points, and created reusable product patterns for the team to ship faster after handoff.",
    outcome: "The product became easier to navigate, faster to understand, and more consistent across screens and teams.",
  },
  "Web Design": {
    challenge: "The website was attracting visitors but not converting them. The story, proof, and calls-to-action were not sequenced in a way that helped people build confidence.",
    approach: "We designed a conversion-focused web experience with stronger messaging, editorial layouts, proof moments, responsive components, and a clear path from curiosity to action.",
    outcome: "The new experience improved perceived quality, reduced confusion, and gave the team a web system they could extend after launch.",
  },
  "Design System": {
    challenge: "As the telesales agent completes the call, it triggers an automatic appointment confirmation, and the user is notified via a responsive mailer with the appointment date and time, along with a summary of their current service provider.",
    approach: "Traditional print needs a designer to update content, then send to print house… what a luss! Now the CMS controls content, and with a print style sheet(css), anyone can print out thousands of brochures, with the latest services as they are created. Cutting out the need of a designer!",
    outcome: "Once we build this functionality beautiful site, we needed traffic. To gain exposure we created social posts. The visitors had a re-advertising program, that followed users around on the internet for a month after.",
  },
};

const resultByTitle = {
  SimplePlek: ["340%", "User engagement increase", "52%", "Churn reduction"],
  Capitec: ["$12M", "Series A raised", "3.8x", "Demo requests"],
  ACBA: ["2M+", "Daily active users", "4.6x", "Conversation frequency"],
  Powers: ["500x", "Github stars gained", "95%", "Developer approval"],
  Susu: ["2.1x", "Qualified leads", "41%", "Lower bounce rate"],
  "Global Bank": ["60%", "Faster handoff", "18", "Product teams aligned"],
  Santam: ["38%", "Retail lift", "7", "Markets launched"],
  "Helix Health": ["4.8", "App Store rating", "32%", "Task time reduction"],
  Arcadia: ["2.3x", "Conversion improvement", "29%", "Higher AOV"],
  Stellar: ["76%", "Campaign recall", "4", "Launch markets"],
  Prismify: ["44%", "Faster delivery", "120+", "Components documented"],
  "Zenith AI": ["68%", "Activation lift", "2.9x", "Workflow completion"],
};

export default function WorkDetailPage({ project, relatedProjects }) {
  const detail = detailByCategory[project.category];
  const results = resultByTitle[project.title] || ["3.2x", "Performance lift", "48%", "Workflow improvement"];

  return (
    <>
      <Head>
        <title>{project.title} Case Study | Thanks Digital Work</title>
        <meta name="description" content={`${project.title} - ${project.desc}. A detailed Thanks Digital case study covering challenge, strategy, execution, and measurable results.`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="selection:bg-white selection:text-black bg-black">
        <section className="relative min-h-[88vh] overflow-hidden border-b border-[#222] px-6 md:px-10 pt-28 pb-12 lg:pt-36 3xl:max-w-[1400px] 3xl:mx-auto">
          <div className="absolute inset-0">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-35" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/30" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(59,130,246,0.22),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(168,85,247,0.18),transparent_26%)]" />
          </div>

          <div className="relative min-h-[70vh] flex flex-col justify-between">
            <Link href="/work" className="inline-flex w-fit items-center gap-2 text-sm text-white/70 hover:text-white transition-colors">
              <span>Back to work</span>
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 items-end mt-20">
              <div>
                <div className="flex flex-wrap gap-3 text-xs text-white/60 uppercase tracking-[0.26em] font-semibold mb-6">
                  <span>[{project.num}]</span>
                  <span>{project.category}</span>
                  <span> - </span>
                  <span>{project.year}</span>
                </div>
                <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-[0.82]">
                  {project.title}
                </h1>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-md p-6 md:p-8">
                <div className="text-xs uppercase tracking-[0.26em] text-white/50 mb-4">Scope</div>
                <p className="text-xl md:text-2xl font-medium leading-tight mb-6">{project.desc}</p>
                <p className="text-sm md:text-base text-white/65 leading-7">
                  {project.summary || `${project.title} A wordpress build ${project.category.toLowerCase()} , linked with a CRM to create a sales funnel for the sales department. The site was up and running in 3 days, leaving me budget to cover all the other digital aspect I needed to address.`}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-10 py-14 lg:py-24 border-b border-[#222] 3xl:max-w-[1400px] 3xl:mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            <div className="rounded-2xl border border-[#222] bg-[#0f0f0f] p-5 md:p-7">
              <div className="text-textGray text-sm mb-2">Client</div>
              <div className="text-xl md:text-2xl font-semibold">{project.title}</div>
            </div>
            <div className="rounded-2xl border border-[#222] bg-[#0f0f0f] p-5 md:p-7">
              <div className="text-textGray text-sm mb-2">Year</div>
              <div className="text-xl md:text-2xl font-semibold">{project.year}</div>
            </div>
            <div className="rounded-2xl border border-[#222] bg-[#0f0f0f] p-5 md:p-7">
              <div className="text-textGray text-sm mb-2">Result</div>
              <div className="text-xl md:text-2xl font-semibold">{results[0]}</div>
            </div>
            <div className="rounded-2xl border border-[#222] bg-[#0f0f0f] p-5 md:p-7">
              <div className="text-textGray text-sm mb-2">Discipline</div>
              <div className="text-xl md:text-2xl font-semibold">{project.category}</div>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-10 py-16 lg:py-28 3xl:max-w-[1400px] 3xl:mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20">
            <div>
              <div className="text-xs uppercase tracking-[0.28em] text-textGray mb-5">Case study</div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-none">A utility company, selling energy contracts in the UK, utilizing digital engage with their customers</h2>
            </div>

            <div className="space-y-12">
              {[
                ["Challenge", detail.challenge],
                ["Approach", detail.approach],
                ["Outcome", detail.outcome],
              ].map(([title, text], index) => (
                <div key={title} className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-5 border-t border-[#222] pt-8">
                  <div className="text-blue-400 font-semibold">0{index + 1}</div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-semibold mb-4">{title}</h3>
                    <p className="text-textGray text-base md:text-lg leading-8">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 md:px-10 pb-16 lg:pb-28 3xl:max-w-[1400px] 3xl:mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-3xl overflow-hidden border border-[#222] bg-[#111] min-h-[360px]">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-85" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="rounded-3xl border border-[#222] bg-[#0f0f0f] p-8 flex flex-col justify-between min-h-[260px]">
                <div className="text-xs uppercase tracking-[0.26em] text-textGray">Primary result</div>
                <div>
                  <div className="text-5xl md:text-6xl font-bold tracking-tighter text-green-400">{results[0]}</div>
                  <div className="text-textGray mt-3">{results[1]}</div>
                </div>
              </div>
              <div className="rounded-3xl border border-[#222] bg-[#0f0f0f] p-8 flex flex-col justify-between min-h-[260px]">
                <div className="text-xs uppercase tracking-[0.26em] text-textGray">Secondary result</div>
                <div>
                  <div className="text-5xl md:text-6xl font-bold tracking-tighter text-blue-400">{results[2]}</div>
                  <div className="text-textGray mt-3">{results[3]}</div>
                </div>
              </div>
              <div className="sm:col-span-2 rounded-3xl border border-[#222] bg-gradient-to-br from-[#111] to-[#050505] p-8 md:p-10">
                <div className="text-xs uppercase tracking-[0.26em] text-textGray mb-5">What we delivered</div>
                <div className="flex flex-wrap gap-3">
                  {["Positioning", "Art direction", "Design system", "Responsive screens", "Launch assets", "Handoff specs"].map((item) => (
                    <span key={item} className="rounded-full border border-[#333] px-4 py-2 text-sm text-textGray">{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-10 py-16 lg:py-24 border-t border-[#222] bg-[#0a0a0a] 3xl:max-w-[1400px] 3xl:mx-auto">
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-10">
            <div>
              <div className="text-xs uppercase tracking-[0.28em] text-textGray mb-4">Next projects</div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">Explore more work.</h2>
            </div>
            <Link href="/work" className="text-sm text-textGray hover:text-white transition-colors">View all work</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProjects.map((item) => (
              <Link key={item.slug} href={`/work/${item.slug}`} className="group relative block overflow-hidden rounded-2xl aspect-[4/5] bg-[#111] border border-[#222] hover:border-[#444] transition-colors">
                <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:scale-105 group-hover:opacity-95 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-5 left-5 text-xs text-white/70">[{item.num}]</div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-2xl font-medium mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
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
    paths: allProjects.map((project) => ({ params: { slug: project.slug } })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const project = allProjects.find((item) => item.slug === params.slug);
  const relatedProjects = allProjects
    .filter((item) => item.slug !== project.slug)
    .filter((item) => item.category === project.category)
    .concat(allProjects.filter((item) => item.slug !== project.slug && item.category !== project.category))
    .slice(0, 3);

  return {
    props: {
      project,
      relatedProjects,
    },
  };
}
