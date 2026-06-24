import Head from "next/head";
import Link from "next/link";
import { allProjects } from "@/components/work/workData";

const detailByCategory = {
 "Brand Strategy": {
    challenge: "The short-term rental market suffers from a deep crisis of institutional trust, surveillance anxieties, and systemic fragmentation. The existing brand identity was too generic to carry the heavy compliance and security reassurances required by modern users.",
    approach: "We architected a transparent brand strategy that anchors Simple Plek as a digital sanctuary. We implemented modular communication structures and sharp visual markers that signal ironclad data privacy and uncompromising user protection across all digital touchpoints.",
    outcome: "The brand evolved from a basic booking tool into an authoritative trust network, establishing deep credibility and user alignment before a single interaction takes place."
  },
  "Brand Identity": {
    challenge: "The brand possessed massive institutional momentum, but explaining a complex, highly regulated insurance product in a saturated market led to scattered product narratives and friction for sales teams.",
    approach: "We rebuilt the positioning system around transparency, defining clear category language, data privacy proof points, and a unified narrative hierarchy designed to establish immediate customer trust.",
    outcome: "The new strategy unified the brand message across campaigns and products, making the insurance offering easily understandable, highly authoritative, and simple to scale without message dilution."
  },
  "Product Design": {
    challenge: "Managing guest access and rental compliance carries immense regulatory and operational risk. High-friction onboarding loops and ambiguous data entry paths were leading to severe drop-offs among security-conscious property owners.",
    approach: "We redesigned the host portal around the ultimate 'golden path.' By utilizing rock-solid UI patterns, seamless tenant validation flows, and clear, gated access control structures, we isolated operational complexity without sacrificing interface clarity or user delight.",
    outcome: "The interface became an intuitive, highly resilient product ecosystem that streamlines secure CRUD execution and automatically maintains compliance integrity across every user interaction."
  },
"Web Design": {
    challenge: "The digital web interface was bringing in significant traffic, but users were dropping off due to an over-complicated narrative structure and a lack of sequential, trust-building user flows.",
    approach: "We mapped out the ideal 'golden path' for conversion, relying on clean editorial layouts, explicit data safety indicators, and friction-free interaction patterns that effortlessly guided visitors from curiosity to secure action.",
    outcome: "The redesigned digital experience radically optimized conversion rates, elevated perceived trust, and provided the client with a modular web framework that scales safely over time."
  },
  "Design System": {
    challenge: "Updating critical documentation, notifications, and client-facing interfaces across siloed product lines created massive design fragmentation, manual bottlenecks, and compliance vulnerabilities.",
    approach: "We implemented an immutable, code-driven design system wrapped in a 'build once, deploy many times' philosophy. We integrated programmatic testing gates into the CI/CD pipeline and deployed dynamic CSS print/digital style sheets controlled directly via the CMS.",
    outcome: "This removed manual intervention from the workflow entirely, ensuring that every automated mailer, dashboard view, and printed summary instantly inherited the latest secure design patterns and compliant layouts with zero UX degradation."
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
                  {project.summary || `${project.title} generic fallback heading ${project.category.toLowerCase()} ,generic fallback body.`}
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
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-none">{project.quote} </h2>
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
