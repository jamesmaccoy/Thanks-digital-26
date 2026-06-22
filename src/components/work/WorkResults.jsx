import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { projectResults } from "@/components/work/workData";

gsap.registerPlugin(ScrollTrigger);

export default function WorkResults() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".result-card").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            scrollTrigger: { trigger: el, start: "top 85%" },
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
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
      <div className="mb-12 lg:mb-16">
        <div className="text-xs uppercase tracking-[0.28em] text-textGray mb-4">
          Impact
        </div>
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter max-w-3xl">
          Design that moves the needle.
        </h2>
        <p className="mt-4 text-textGray text-base md:text-lg max-w-2xl leading-relaxed">
          We don&apos;t just ship pixels — we ship outcomes. Here&apos;s how our
          work translates into real business results.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {projectResults.map((item) => (
          <div
            key={item.client}
            className="result-card rounded-2xl border border-[#222] bg-[#0a0a0a] p-6 lg:p-8 hover:border-[#444] transition-colors"
          >
            <div className="text-xs uppercase tracking-[0.24em] text-textGray mb-6">
              {item.client}
            </div>
            <div className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-3 ${item.color}`}>
              {item.metric}
            </div>
            <p className="text-sm text-textGray leading-relaxed">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
