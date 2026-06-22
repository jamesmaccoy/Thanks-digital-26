import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { journeySteps } from "@/components/process/processData";

gsap.registerPlugin(ScrollTrigger);

export default function ProcessJourney() {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".journey-card").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            scrollTrigger: { trigger: el, start: "top 88%" },
            opacity: 1,
            y: 0,
            duration: 0.7,
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
      id="journey"
      className="py-16 lg:py-24 px-6 md:px-10 border-t border-[#222] 3xl:max-w-[1400px] 3xl:mx-auto"
    >
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
        {/* Sticky sidebar */}
        <div className="lg:w-1/3">
          <div className="sticky top-32">
            <div className="text-xs uppercase tracking-[0.28em] text-textGray mb-4">
              The journey
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-6">
              Five phases. Zero unknowns.
            </h2>
            <p className="text-textGray text-base leading-relaxed hidden lg:block">
              Each phase has clear inputs, outputs, and checkpoints. You always
              know where we are and what&apos;s coming next.
            </p>
          </div>
        </div>

        {/* Step cards — style from home ProcessSection */}
        <div className="lg:w-2/3 space-y-4">
          {journeySteps.map((step, i) => {
            const isOpen = expandedIndex === i;
            return (
              <div
                key={step.num}
                className="journey-card rounded-2xl border border-[#222] bg-[#111] overflow-hidden hover:border-[#444] transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setExpandedIndex(isOpen ? -1 : i)}
                  className="w-full text-left p-6 lg:p-8 flex items-start gap-5"
                >
                  <div className="text-3xl lg:text-5xl text-[#333] font-bold shrink-0 leading-none">
                    {step.num}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <h3 className="text-xl lg:text-2xl font-medium">
                        {step.title}
                      </h3>
                      <span className="text-xs uppercase tracking-[0.2em] text-textGray bg-[#0a0a0a] px-3 py-1 rounded-full border border-[#222] w-fit shrink-0">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-sm text-textGray mt-1 italic">
                      {step.tagline}
                    </p>
                  </div>
                  <span
                    className={`text-2xl text-textGray shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className="overflow-hidden transition-all duration-500 ease-in-out"
                  style={{ maxHeight: isOpen ? "500px" : "0" }}
                >
                  <div className="px-6 lg:px-8 pb-6 lg:pb-8 ml-[52px] lg:ml-[68px]">
                    <p className="text-textGray leading-relaxed mb-5">
                      {step.desc}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {step.details.map((detail) => (
                        <div
                          key={detail}
                          className="flex items-start gap-2 text-sm text-textGray"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white shrink-0" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
