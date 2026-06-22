import { useEffect, useRef } from "react";
import gsap from "gsap";
import { heroStats } from "@/components/articles/articlesData";

export default function ArticlesHero() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline()
        .to(".art-hero-text span", {
          y: "0%",
          duration: 1.1,
          ease: "power4.out",
          stagger: 0.08,
          delay: 0.15,
        })
        .to(
          ".art-hero-copy",
          { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
          "-=0.7"
        )
        .to(
          ".art-hero-card",
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.08 },
          "-=0.55"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="pt-28 md:pt-36 lg:pt-44 pb-16 lg:pb-24 px-6 md:px-10 3xl:max-w-[1400px] 3xl:mx-auto"
    >
      <div className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr] lg:items-end">
        <div>
          <div className="text-xs uppercase tracking-[0.28em] text-textGray mb-6">
            Articles
          </div>
          <div className="space-y-1 md:space-y-0">
            <h1 className="text-[17vw] md:text-[13vw] lg:text-[8.8vw] leading-none font-bold uppercase tracking-[-0.06em] art-hero-text clip-text">
              <span className="block translate-y-[100%]">Strategies</span>
            </h1>
            <h1 className="text-[17vw] md:text-[13vw] lg:text-[8.8vw] leading-none font-bold uppercase tracking-[-0.06em] text-textGray art-hero-text clip-text">
              <span className="block translate-y-[100%]">&amp;</span>
            </h1>
            <h1 className="text-[17vw] md:text-[13vw] lg:text-[8.8vw] leading-none font-bold uppercase tracking-[-0.06em] art-hero-text clip-text">
              <span className="block translate-y-[100%]">Insights</span>
            </h1>
          </div>
        </div>

        <div className="art-hero-copy opacity-0 translate-y-8">
          <p className="text-base md:text-lg lg:text-xl text-textGray leading-relaxed max-w-xl">
            We share what we&apos;ve learned building brands that matter. Deep
            dives into design thinking, creative process, and the intersection
            of business and aesthetics. No fluff, just honest perspectives.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-14 lg:mt-20">
        {heroStats.map((stat) => (
          <div
            key={stat.label}
            className="art-hero-card opacity-0 translate-y-8 rounded-2xl border border-[#222] bg-[#0a0a0a] p-5 lg:p-6"
          >
            <div className="text-3xl lg:text-4xl font-semibold tracking-tight">
              {stat.value}
            </div>
            <p className="mt-3 text-sm lg:text-base text-textGray leading-relaxed max-w-xs">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
