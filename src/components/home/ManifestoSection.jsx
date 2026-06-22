import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function RevealText({ children, className }) {
  const ref = useRef(null);
  const text = typeof children === "string" ? children : children.toString();
  const words = text.split(" ").filter((w) => w.length > 0);

  useEffect(() => {
    if (!ref.current) return;
    const wordInners = ref.current.querySelectorAll(".word-inner");
    const ctx = gsap.context(() => {
      gsap.to(wordInners, {
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
        },
        y: "0%",
        duration: 0.8,
        stagger: 0.02,
        ease: "power3.out",
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={i} className="word-wrap">
          <span className="word-inner">{word}&nbsp;</span>
        </span>
      ))}
    </div>
  );
}

export default function ManifestoSection() {
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
    <div ref={sectionRef}>
      <section className="py-20 lg:py-32 px-6 md:px-20 flex items-center min-h-[50vh] lg:min-h-[70vh] 3xl:max-w-[1400px] 3xl:mx-auto">
        <RevealText className="text-2xl md:text-4xl lg:text-6xl font-medium leading-tight">
          Traditional agencies perfected the art of the pitch. We perfected the art of the work. When you need design that moves at the speed of your ambition, you need a different kind of studio.
        </RevealText>
      </section>

      <section className="py-16 lg:py-20 px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-start border-t border-[#222] 3xl:max-w-[1400px] 3xl:mx-auto">
        <RevealText className="text-xl md:text-2xl lg:text-4xl max-w-lg">
          Clients paying for process instead of progress. Great ideas dying in revision purgatory.
        </RevealText>
        <div className="space-y-10 text-textGray text-lg max-w-md">
          <p className="fade-up">
            So I built Optima differently. No endless meetings, no office
            politics, no pitches that promise everything. Just talented designers
            doing what they do best.
          </p>
          <p className="fade-up">
            We create design that actually solves problems. We&apos;re obsessive
            about the details because that&apos;s what our clients pay us for. To
            care as much as they do.
          </p>
          <p className="text-white font-medium fade-up">
            That&apos;s the Optima way. Simple, but not easy.
          </p>
          <div className="pt-10 border-t border-[#222] flex items-center gap-4 fade-up">
            <img
              src="/images/avatars/alex-west.webp"
              alt=""
              className="w-12 h-12 rounded-full object-cover grayscale"
            />
            <div>
              <div className="font-medium text-white">Alex West</div>
              <div className="text-sm">Founder &amp; Creative Director</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
