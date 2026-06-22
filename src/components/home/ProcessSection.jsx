import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { num: "01", title: "Listen & Learn", desc: "Every engagement starts with understanding. We dive deep into your business, your audience, and your goals. No assumptions, just research and active listening." },
  { num: "02", title: "Strategy First", desc: "Before any pixels are pushed, we align on direction. We define what success looks like and chart the most efficient path to get there." },
  { num: "03", title: "Iterative Design", desc: "We work in tight feedback loops. Showing progress early and often ensures we stay on track and avoid big surprises at the end of a sprint." },
  { num: "04", title: "Refine Until Right", desc: "Your feedback shapes the work. We iterate based on what's working and what isn't, refining until we're all genuinely excited about the result." },
  { num: "05", title: "Launch & Learn", desc: "We stick around for implementation and measure what matters. Every project teaches us something that makes the next one even better." },
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
          Our process delivers<br />results, not surprises.
        </h2>
        <p className="text-base lg:text-xl text-textGray max-w-2xl">
          We&apos;ve refined our approach over hundreds of projects. Every step is
          designed to minimize friction and maximize impact. From first call to
          final delivery, you&apos;ll know exactly where we are.
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
