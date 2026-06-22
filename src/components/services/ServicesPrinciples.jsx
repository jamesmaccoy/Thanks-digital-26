import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { principles } from "@/components/services/servicesData";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesPrinciples() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".principle-card").forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            scrollTrigger: { trigger: el, start: "top 88%" },
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            delay: (i % 3) * 0.1,
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 lg:py-24 px-6 md:px-10 border-t border-[#222] bg-[#0a0a0a] 3xl:max-w-[1400px] 3xl:mx-auto"
    >
      <div className="mb-12 lg:mb-16">
        <div className="text-xs uppercase tracking-[0.28em] text-textGray mb-4">
          How we operate
        </div>
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter max-w-3xl">
          Principles that protect quality.
        </h2>
        <p className="mt-4 text-textGray text-base md:text-lg max-w-2xl leading-relaxed">
          These aren&apos;t aspirations — they&apos;re non-negotiable standards
          that govern every engagement.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {principles.map((item) => (
          <div
            key={item.num}
            className="principle-card rounded-2xl border border-[#222] bg-black p-6 lg:p-8 hover:border-[#444] transition-colors group"
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="w-10 h-10 rounded-full border border-[#333] flex items-center justify-center text-xs font-medium text-textGray group-hover:border-white group-hover:text-white transition-colors shrink-0">
                {item.num}
              </div>
              <h3 className="text-lg md:text-xl font-medium">
                {item.title}
              </h3>
            </div>
            <p className="text-sm text-textGray leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
