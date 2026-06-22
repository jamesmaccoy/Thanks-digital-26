import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { teamMembers } from "@/components/process/processData";

gsap.registerPlugin(ScrollTrigger);

export default function ProcessTeam() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".team-card").forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            scrollTrigger: { trigger: el, start: "top 88%" },
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            delay: (i % 4) * 0.1,
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
            Your team
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter">
            Who works on your project.
          </h2>
        </div>
        <p className="text-textGray text-sm md:text-base max-w-sm leading-relaxed">
          A dedicated, senior team assigned from day one. The people you meet
          are the people doing the work.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {teamMembers.map((member) => (
          <div
            key={member.role}
            className="team-card rounded-2xl border border-[#222] bg-[#111] p-6 lg:p-8 hover:border-[#444] transition-colors group"
          >
            <div className="w-16 h-16 rounded-full overflow-hidden mb-6 grayscale group-hover:grayscale-0 transition-all duration-500">
              <img
                src={member.avatar}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-xs uppercase tracking-[0.2em] text-textGray mb-2">
              {member.role}
            </div>
            <h3 className="text-xl font-medium mb-3">{member.name}</h3>
            <p className="text-sm text-textGray leading-relaxed">
              {member.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
