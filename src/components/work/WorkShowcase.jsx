import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { featuredProjects } from "@/components/work/workData";

gsap.registerPlugin(ScrollTrigger);

export default function WorkShowcase() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".showcase-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60 },
          {
            scrollTrigger: { trigger: card, start: "top 90%" },
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            delay: i * 0.12,
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="showcase"
      className="py-16 lg:py-24 px-6 md:px-10 border-t border-[#222] 3xl:max-w-[1400px] 3xl:mx-auto"
    >
      <div className="flex flex-col md:flex-row justify-between md:items-end gap-4 mb-10 lg:mb-16">
        <div>
          <div className="text-xs uppercase tracking-[0.28em] text-textGray mb-4">
            Featured
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter">
            Spotlight projects.
          </h2>
        </div>
        <p className="text-textGray text-sm md:text-base max-w-sm">
        Deep dives into our most impactful engagements—the strategy, the architectural craft, and the measurable results of building digital sanctuaries.
        </p>
      </div>

      <div className="space-y-6">
        {featuredProjects.map((project, idx) => (
          <Link
            key={project.num}
            href={`/work/${project.slug}`}
            className="showcase-card group block rounded-2xl border border-[#222] bg-[#0a0a0a] overflow-hidden hover:border-[#444] transition-colors"
          >
            <div className="flex flex-col lg:flex-row">
              {/* Image */}
              <div
                className={`relative w-full lg:w-1/2 aspect-[16/10] lg:aspect-auto overflow-hidden ${
                  idx % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full absolute inset-0 transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/30" />
                <div className="absolute top-5 left-5 text-xs text-white/70 font-medium">
                  [{project.num}]
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                <div className="text-xs uppercase tracking-[0.24em] text-textGray mb-3">
                  {project.category} — {project.year}
                </div>
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm md:text-base text-textGray leading-relaxed mb-6 max-w-md">
                  {project.summary}
                </p>
                <div className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:gap-3 transition-all">
                  View case study
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
