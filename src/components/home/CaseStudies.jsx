import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { allProjects } from "@/components/work/workData";

gsap.registerPlugin(ScrollTrigger);

const projects = allProjects.slice(0, 6);

export default function CaseStudies() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Card fade in
      gsap.utils.toArray(".case-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60 },
          {
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
            },
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            delay: (i % 3) * 0.15,
          }
        );
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="py-20 lg:py-32 px-6 md:px-10 bg-[#0a0a0a] 3xl:max-w-[1400px] 3xl:mx-auto"
    >
      <div className="flex justify-between items-end mb-10 lg:mb-20">
        <h2 className="text-4xl md:text-5xl lg:text-8xl font-bold tracking-tighter">
          Case studies
        </h2>
        <p className="text-textGray hidden md:block">&copy; 2016 - 2026</p>
      </div>

      {/* 3-column masonry-like grid matching reference image */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Column 1 */}
        <div className="flex flex-col gap-6">
          <CaseCard project={projects[0]} aspect="aspect-[4/5]" />
          <CaseCard project={projects[3]} aspect="aspect-[5/6]" />
        </div>
        {/* Column 2 — offset down */}
        <div className="flex flex-col gap-6 lg:mt-16">
          <CaseCard project={projects[1]} aspect="aspect-[5/6]" />
          <CaseCard project={projects[4]} aspect="aspect-[4/5]" />
        </div>
        {/* Column 3 */}
        <div className="flex flex-col gap-6">
          <CaseCard project={projects[2]} aspect="aspect-[4/5]" />
          <CaseCard project={projects[5]} aspect="aspect-square" />
        </div>
      </div>

      <div className="mt-16 text-center">
        <a
          href="/work"
          className="inline-block border border-[#333] rounded-full px-8 py-3 hover:bg-white hover:text-black transition-colors"
        >
          View All Case Studies
        </a>
      </div>
    </section>
  );
}

function CaseCard({ project, aspect }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className={`group relative block overflow-hidden rounded-2xl ${aspect} bg-[#111] case-card`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="object-cover w-full h-full absolute inset-0 transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
      <div className="absolute top-5 left-5 text-xs text-white/70 font-medium">
        [{project.num}]
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <div className="flex justify-between items-end">
          <div>
            <h3 className="text-xl font-medium mb-1">{project.title}</h3>
            <p className="text-xs text-gray-400">{project.desc}</p>
          </div>
          <div className="text-xs text-gray-500">{project.year}</div>
        </div>
      </div>
    </Link>
  );
}
