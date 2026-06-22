import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { deliverables } from "@/components/services/servicesData";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesDeliverables() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".deliv-card").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
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
      className="py-16 lg:py-24 px-6 md:px-10 border-t border-[#222] 3xl:max-w-[1400px] 3xl:mx-auto"
    >
      <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6 mb-12 lg:mb-16">
        <div>
          <div className="text-xs uppercase tracking-[0.28em] text-textGray mb-4">
            Deliverables
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter">
            What you actually get.
          </h2>
        </div>
        <p className="text-textGray text-sm md:text-base max-w-sm leading-relaxed">
          Every engagement includes tangible, production-ready outputs — not
          just decks and mood boards.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {deliverables.map((item) => (
          <div
            key={item.title}
            className="deliv-card rounded-2xl border border-[#222] bg-[#0a0a0a] p-6 lg:p-8 hover:border-[#444] transition-colors group"
          >
            <div className="text-3xl mb-5 opacity-40 group-hover:opacity-100 transition-opacity">
              {item.icon}
            </div>
            <h3 className="text-lg md:text-xl font-medium mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-textGray leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
