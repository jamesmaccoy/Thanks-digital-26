import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { categories } from "@/components/articles/articlesData";

gsap.registerPlugin(ScrollTrigger);

export default function ArticlesCategories() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".cat-card").forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            scrollTrigger: { trigger: el, start: "top 88%" },
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            delay: i * 0.1,
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 lg:py-24 px-6 md:px-10 border-t border-[#222] 3xl:max-w-[1400px] 3xl:mx-auto"
    >
      <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6 mb-12 lg:mb-16">
        <div>
          <div className="text-xs uppercase tracking-[0.28em] text-textGray mb-4">
            Topics
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter">
            Explore by category.
          </h2>
        </div>
        <p className="text-textGray text-sm md:text-base max-w-sm leading-relaxed">
          Four pillars of thinking that shape how we design, build, and run a
          creative studio.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="cat-card rounded-2xl border border-[#222] bg-[#111] p-6 lg:p-8 hover:border-[#444] transition-colors group cursor-pointer"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold group-hover:text-white transition-colors">
                {cat.name}
              </h3>
              <span className="text-xs text-textGray bg-[#0a0a0a] px-2.5 py-1 rounded-full border border-[#222]">
                {cat.count} articles
              </span>
            </div>
            <p className="text-sm text-textGray leading-relaxed">
              {cat.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
