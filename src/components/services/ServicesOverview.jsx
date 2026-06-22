import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { services } from "@/components/services/servicesData";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesOverview() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const panelRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      panelRefs.current.forEach((panel, i) => {
        if (!panel) return;
        ScrollTrigger.create({
          trigger: panel,
          start: "top 50%",
          end: "bottom 50%",
          onEnter: () => setActiveIndex(i),
          onEnterBack: () => setActiveIndex(i),
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="overview"
      className="py-16 lg:py-24 px-6 md:px-10 border-t border-[#222] relative flex flex-col lg:flex-row gap-10 lg:gap-20 3xl:max-w-[1400px] 3xl:mx-auto"
    >
      {/* Sticky sidebar — matches home ServicesSection */}
      <div className="lg:w-1/3">
        <div className="sticky top-32">
          <div className="text-xs uppercase tracking-[0.28em] text-textGray mb-4">
            Services
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-6">
            What we do best.
          </h2>
          <p className="text-textGray text-base mb-10 leading-relaxed hidden lg:block">
            Five core disciplines. One integrated team. Every engagement is led
            by seniors who stay from kickoff to delivery.
          </p>
          <ul className="hidden lg:block space-y-4 text-xl lg:text-2xl font-medium text-textGray">
            {services.map((service, i) => (
              <li
                key={service.name}
                className={`cursor-pointer transition-colors duration-300 ${
                  activeIndex === i ? "text-white" : "hover:text-white"
                }`}
                onClick={() => {
                  const panel = panelRefs.current[i];
                  if (panel) panel.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
              >
                {service.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Service panels — same visual pattern as home */}
      <div className="lg:w-2/3 space-y-16 lg:space-y-32">
        {services.map((service, i) => (
          <div
            key={service.name}
            ref={(el) => (panelRefs.current[i] = el)}
            className="service-panel"
          >
            <img
              src={service.image}
              alt=""
              className="w-full h-52 md:h-64 lg:h-80 object-cover rounded-2xl mb-6 lg:mb-8"
            />
            <div className="flex flex-col md:flex-row gap-6 lg:gap-10">
              <div className="md:w-1/2">
                <h3 className="text-xl lg:text-2xl font-medium mb-1">
                  [{service.num}] {service.name}
                </h3>
                <p className="text-sm text-textGray italic mb-3">
                  {service.tagline}
                </p>
                <p className="text-textGray leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="md:w-1/2">
                <h4 className="text-sm font-semibold mb-3 lg:mb-4 uppercase tracking-wider text-textGray">
                  Categories
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.categories.map((cat) => (
                    <span
                      key={cat}
                      className="px-4 py-2 bg-[#111] rounded-full text-sm border border-[#333]"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
