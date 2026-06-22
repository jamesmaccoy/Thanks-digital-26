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
        We deliver more than design. <span className="text-textGray">We deliver momentum.</span>
      </h2>
      <p className="text-lg lg:text-xl text-textGray max-w-2xl mb-12 lg:mb-20 fade-up">
        Great design accelerates everything. It shortens sales cycles, increases
        conversions, and builds trust before you say a word. We&apos;re not just
        making things pretty—we&apos;re creating competitive advantages that
        compound over time.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 border-t border-[#222] pt-8 lg:pt-10">
        <div className="stat-card fade-up">
          <div className="text-4xl md:text-5xl lg:text-7xl font-bold mb-3 lg:mb-4">
            $43M<span className="text-green-500">+</span>
          </div>
          <div className="text-textGray text-sm">
            Revenue generated for our clients across various campaigns.
          </div>
        </div>
        <div className="stat-card md:border-l md:border-[#222] md:pl-10 fade-up">
          <div className="text-4xl md:text-5xl lg:text-7xl font-bold mb-3 lg:mb-4">
            172<span className="text-blue-500">+</span>
          </div>
          <div className="text-textGray text-sm">
            Projects shipped worldwide, helping our clients achieve their goals.
          </div>
        </div>
        <div className="stat-card md:border-l md:border-[#222] md:pl-10 fade-up">
          <div className="text-4xl md:text-5xl lg:text-7xl font-bold mb-3 lg:mb-4">
            85<span className="text-purple-500">+</span>
          </div>
          <div className="text-textGray text-sm">
            Happy clients and counting, building long-term partnerships.
          </div>
        </div>
      </div>
    </section>
  );
}
