import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { 
    num: "01", 
    title: "Discovery & Autonomy Mapping", 
    desc: "We analyze your high-stakes requirements and identify the 'golden path.' This isn't just about business goals; it's about defining where user autonomy and data privacy take precedence." 
  },
  { 
    num: "02", 
    title: "Architectural Strategy", 
    desc: "Before a pixel is rendered, we define the immutable patterns. We map out secure CRUD structures and authentication hooks, ensuring the foundation is built for longevity, not just the next sprint." 
  },
  { 
    num: "03", 
    title: "Iterative Sanctuary Design", 
    desc: "We prototype high-fidelity experiences that prioritize user delight. By showing progress early and often, we ensure the UI remains intuitive while the backend security remains uncompromising." 
  },
  { 
    num: "04", 
    title: "Programmatic Validation", 
    desc: "Your feedback refines the experience, while automated CI/CD testing gates enforce consistency. We iterate to perfection, ensuring no design vision is diluted or security protocol bypassed during engineering." 
  },
  { 
    num: "05", 
    title: "Deploy Once, Scale Safely", 
    desc: "We move to launch with robust, 'deploy many times' architecture. We stick around to monitor the impact, ensuring the product evolves as a secure, performant, and delightful sanctuary for your users." 
  }
];

export default function ProcessSection() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const getDistance = () => -(track.scrollWidth - window.innerWidth);

    const tween = gsap.to(track, {
      x: getDistance,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => "+=" + (-getDistance()),
        pin: true,
        scrub: true,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} id="process" className="border-t border-[#222] bg-[#050505] overflow-hidden h-screen flex flex-col">
      {/* Fixed heading area */}
      <div className="px-6 md:px-20 pt-20 pb-10 flex-shrink-0">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight mb-4 lg:mb-6">
        Our process builds sanctuary, <br />not just software.
        </h2>
        <p className="text-base lg:text-xl text-textGray max-w-2xl">
        Refined over hundreds of projects, my methodology treats security as a fundamental creative constraint, not an afterthought. Every phase is engineered to eliminate friction, maximize trust, and ensure your digital experiences are built to be immutable.
        </p>
      </div>

      {/* Horizontal scrolling cards */}
      <div ref={trackRef} className="flex items-start flex-1 w-fit px-6 md:px-20 gap-8 pb-10">
        {steps.map((step) => (
          <div
            key={step.num}
            className="flex-shrink-0 w-[80vw] md:w-[50vw] lg:w-[30vw] h-full bg-[#111] p-6 lg:p-10 rounded-2xl border border-[#222] flex flex-col justify-between"
          >
            <div className="text-4xl lg:text-6xl text-[#333] font-bold">{step.num}</div>
            <div>
              <h3 className="text-2xl lg:text-3xl font-medium mb-3 lg:mb-4">{step.title}</h3>
              <p className="text-textGray text-base lg:text-lg">{step.desc}</p>
            </div>
          </div>
        ))}
        <div className="flex-shrink-0 w-[5vw]"></div>
      </div>
    </section>
  );
}
