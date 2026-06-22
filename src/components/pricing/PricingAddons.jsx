import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { addons } from "@/components/pricing/pricingData";

gsap.registerPlugin(ScrollTrigger);

export default function PricingAddons() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".addon-card").forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
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
      className="py-16 lg:py-24 px-6 md:px-10 border-t border-[#222] 3xl:max-w-[1400px] 3xl:mx-auto"
    >
      <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6 mb-12 lg:mb-16">
        <div>
          <div className="text-xs uppercase tracking-[0.28em] text-textGray mb-4">
            Add-ons
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter">
            Extend your engagement.
          </h2>
        </div>
        <p className="text-textGray text-sm md:text-base max-w-sm leading-relaxed">
          Layer these onto any plan for specialised capabilities your project needs.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {addons.map((item) => (
          <div
            key={item.name}
            className="addon-card rounded-2xl border border-[#222] bg-[#111] p-6 lg:p-8 hover:border-[#444] transition-colors group"
          >
            <h3 className="text-lg md:text-xl font-medium mb-2 group-hover:text-white transition-colors">
              {item.name}
            </h3>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-2xl font-bold">{item.price}</span>
              <span className="text-xs text-textGray">{item.period}</span>
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
