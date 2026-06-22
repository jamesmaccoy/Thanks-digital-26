import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { offices } from "@/components/contact/contactData";

gsap.registerPlugin(ScrollTrigger);

export default function ContactInfo() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".office-card").forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            scrollTrigger: { trigger: el, start: "top 88%" },
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            delay: i * 0.1,
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
            Offices
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter">
            Find us worldwide.
          </h2>
        </div>
        <p className="text-textGray text-sm md:text-base max-w-sm leading-relaxed">
          Three offices, one integrated team. We optimise for timezone overlap
          no matter where you are.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
        {offices.map((office) => (
          <div
            key={office.city}
            className={`office-card rounded-2xl border p-6 lg:p-8 transition-colors group ${
              office.primary
                ? "border-[#333] bg-[#111]"
                : "border-[#222] bg-black hover:border-[#444]"
            }`}
          >
            {office.primary && (
              <div className="text-[10px] uppercase tracking-[0.2em] text-textGray bg-[#0a0a0a] px-2.5 py-1 rounded-full border border-[#222] w-fit mb-4">
                HQ
              </div>
            )}
            <h3 className="text-2xl md:text-3xl font-bold mb-1">
              {office.city}
            </h3>
            <p className="text-sm text-textGray mb-6">{office.country}</p>

            <div className="space-y-4 text-sm">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-textGray mb-1">
                  Address
                </div>
                <p className="text-white whitespace-pre-line leading-relaxed">
                  {office.address}
                </p>
              </div>
              <div className="flex gap-8">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-textGray mb-1">
                    Timezone
                  </div>
                  <p className="text-white">{office.timezone}</p>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-textGray mb-1">
                    Hours
                  </div>
                  <p className="text-white">{office.hours}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
