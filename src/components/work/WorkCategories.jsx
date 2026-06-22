import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { allProjects, categories } from "@/components/work/workData";

gsap.registerPlugin(ScrollTrigger);

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
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
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

const aspects = [
  "aspect-[4/5]",
  "aspect-[5/6]",
  "aspect-[4/5]",
  "aspect-square",
  "aspect-[5/6]",
  "aspect-[4/5]",
  "aspect-[4/5]",
  "aspect-[5/6]",
  "aspect-square",
  "aspect-[4/5]",
  "aspect-[5/6]",
  "aspect-[4/5]",
];

export default function WorkCategories() {
  const [active, setActive] = useState("All");
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  const filtered =
    active === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === active);

  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll(".case-card");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power3.out", stagger: 0.06 }
    );
  }, [active]);

  return (
    <section
      ref={sectionRef}
      className="py-16 lg:py-24 px-6 md:px-10 border-t border-[#222] bg-[#0a0a0a] 3xl:max-w-[1400px] 3xl:mx-auto"
    >
      <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-10 lg:mb-16">
        <div>
          <div className="text-xs uppercase tracking-[0.28em] text-textGray mb-4">
            All projects
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter">
            Case studies.
          </h2>
        </div>
        <p className="text-textGray hidden md:block">&copy; 2016 — 2026</p>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
              active === cat
                ? "bg-white text-black border-white"
                : "bg-transparent text-textGray border-[#333] hover:border-white hover:text-white"
            }`}
          >
            {cat}
            <span className="ml-1.5 text-xs opacity-60">
              [{cat === "All" ? allProjects.length : allProjects.filter((p) => p.category === cat).length}]
            </span>
          </button>
        ))}
      </div>

      {/* Masonry-like grid — same style as home CaseStudies */}
      <div
        ref={gridRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filtered.map((project, i) => {
          const col = i % 3;
          const isOffset = col === 1;
          return (
            <div key={project.num} className={isOffset && i < 3 ? "lg:mt-16" : ""}>
              <CaseCard project={project} aspect={aspects[i % aspects.length]} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
