import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

export default function LegalHero({ title, subtitle, lastUpdated, variant = "terms" }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline()
        .to(".legal-hero-text span", {
          y: "0%",
          duration: 1.1,
          ease: "power4.out",
          stagger: 0.08,
          delay: 0.15,
        })
        .to(
          ".legal-hero-meta",
          { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
          "-=0.7"
        )
        .to(
          ".legal-hero-highlights",
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.1 },
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
          <div className="flex items-center gap-3 mb-6">
            <div className="text-xs uppercase tracking-[0.28em] text-textGray">
              Legal
            </div>
            <div className="w-8 h-px bg-[#333]"></div>
            <div className="text-xs uppercase tracking-[0.28em] text-textGray">
              {variant === "terms" ? "Terms" : "Privacy"}
            </div>
          </div>
          <div className="space-y-1 md:space-y-0">
            <h1 className="text-[17vw] md:text-[13vw] lg:text-[8.8vw] leading-none font-bold uppercase tracking-[-0.06em] legal-hero-text clip-text">
              <span className="block translate-y-[100%]">{title.split(" ")[0]}</span>
            </h1>
            <h1 className="text-[17vw] md:text-[13vw] lg:text-[8.8vw] leading-none font-bold uppercase tracking-[-0.06em] text-textGray legal-hero-text clip-text">
              <span className="block translate-y-[100%]">{title.split(" ")[1] || ""}</span>
            </h1>
          </div>
        </div>

        <div className="legal-hero-meta opacity-0 translate-y-8">
          <p className="text-base md:text-lg lg:text-xl text-textGray leading-relaxed max-w-xl">
            {subtitle}
          </p>
          <div className="mt-6 flex items-center gap-2 text-sm text-textGray">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Last updated: {lastUpdated}</span>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white px-6 py-3 text-sm font-medium hover:bg-white hover:text-black transition-colors"
            >
              Contact us
            </Link>
            <a
              href="#content"
              className="inline-flex items-center justify-center rounded-full border border-[#333] px-6 py-3 text-sm font-medium text-textGray hover:border-white hover:text-white transition-colors"
            >
              Read full document
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
