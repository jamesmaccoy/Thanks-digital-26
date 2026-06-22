import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { timelinePhases } from "@/components/process/processData";

gsap.registerPlugin(ScrollTrigger);

export default function ProcessTimeline() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".tl-row").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: -30 },
          {
            scrollTrigger: { trigger: el, start: "top 88%" },
            opacity: 1,
            x: 0,
            duration: 0.6,
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
      className="py-16 lg:py-24 px-6 md:px-10 border-t border-[#222] bg-[#0a0a0a] 3xl:max-w-[1400px] 3xl:mx-auto"
    >
      <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6 mb-12 lg:mb-16">
        <div>
          <div className="text-xs uppercase tracking-[0.28em] text-textGray mb-4">
            Timeline
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter">
            A typical engagement.
          </h2>
        </div>
        <p className="text-textGray text-sm md:text-base max-w-sm leading-relaxed">
          Most projects follow this 8-12 week rhythm. Timelines flex based on
          scope, but the structure stays consistent.
        </p>
      </div>

      <div className="relative">
        {/* Vertical connector */}
        <div className="absolute left-[23px] lg:left-[27px] top-0 bottom-0 w-[1px] bg-[#222]" />

        <div className="space-y-0">
          {timelinePhases.map((item, idx) => (
            <div key={item.phase} className="tl-row relative flex gap-5 lg:gap-8">
              {/* Dot */}
              <div className="flex flex-col items-center z-10 shrink-0">
                <div
                  className={`w-[12px] h-[12px] lg:w-[14px] lg:h-[14px] rounded-full border-2 mt-6 ${
                    idx === 0
                      ? "border-white bg-white"
                      : "border-[#444] bg-[#0a0a0a]"
                  }`}
                />
              </div>

              {/* Content */}
              <div className="flex-1 border-b border-[#222] py-6 flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-8">
                <div className="shrink-0 w-28">
                  <span className="text-xs uppercase tracking-[0.2em] text-textGray bg-[#111] px-3 py-1 rounded-full border border-[#222] inline-block">
                    {item.phase}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-medium mb-1">
                    {item.label}
                  </h3>
                  <p className="text-sm text-textGray leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
