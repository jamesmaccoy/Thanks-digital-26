import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StatsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const fadeUpEls = sectionRef.current.querySelectorAll(".fade-up");
      fadeUpEls.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
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
      className="py-20 lg:py-32 px-6 md:px-20 border-t border-[#222] 3xl:max-w-[1400px] 3xl:mx-auto"
    >
      <h2 className="text-3xl md:text-4xl lg:text-7xl font-bold tracking-tight mb-4 lg:mb-6 max-w-4xl leading-tight">
      I deliver more than design.<span className="text-textGray">I deliver sanctuary.</span>
      </h2>
      <p className="text-lg lg:text-xl text-textGray max-w-2xl mb-12 lg:mb-20 fade-up">
      In a world driven by predatory tracking, true momentum is born from trust. Great design accelerates everything because it respects the user's boundaries, turning privacy into a distinct competitive advantage. By mapping out the user’s autonomy first through high-fidelity prototyping, I establish a flawless, uncompromised "golden path" before a single line of production code is written.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 border-t border-[#222] pt-8 lg:pt-10">
        <div className="stat-card fade-up">
          <div className="text-4xl md:text-5xl lg:text-7xl font-bold mb-3 lg:mb-4">
            10M<span className="text-green-500">+</span>
          </div>
          <div className="text-textGray text-sm">
              Stabilised daily active users on a single product
          </div>
        </div>
        <div className="stat-card md:border-l md:border-[#222] md:pl-10 fade-up">
          <div className="text-4xl md:text-5xl lg:text-7xl font-bold mb-3 lg:mb-4">
            30%<span className="text-blue-500">+</span>
          </div>
          <div className="text-textGray text-sm">
            Of an FSP's driven income protected by design architecture
          </div>
        </div>
        <div className="stat-card md:border-l md:border-[#222] md:pl-10 fade-up">
          <div className="text-4xl md:text-5xl lg:text-7xl font-bold mb-3 lg:mb-4">
            10<span className="text-purple-500">+</span>
          </div>
          <div className="text-textGray text-sm">
            International and local awards for campaign-driven growth
          </div>
        </div>
      </div>
    </section>
  );
}
