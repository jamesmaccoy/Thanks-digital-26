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
        I perfected a "build once, deploy many times" philosophy. By leveraging immutable architectural patterns, I ensure ironclad data privacy and secure design never come at the expense of user delight.
        </RevealText>
      </section>

      <section className="py-16 lg:py-20 px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-start border-t border-[#222] 3xl:max-w-[1400px] 3xl:mx-auto">
        <RevealText className="text-xl md:text-2xl lg:text-4xl max-w-lg">
        In an era of omnipresent digital surveillance, you need a partner who builds digital sanctuaries. To care as much as your users do means fiercely protecting both their autonomy and their experience.
        </RevealText>
        <div className="space-y-10 text-textGray text-lg max-w-md">
          <p className="fade-up">
          I rely on rock-solid design patterns—from seamless authentication hooks to gated access control—to turn corporate overreach into elegant security. To guarantee this vision survives engineering, I utilize programmatic testing gates in the CI/CD pipeline to automatically enforce UX consistency across every single release.
          </p>
          <p className="fade-up">
          I create design that solves high-stakes problems, protecting the humans on the other side of the screen from default tracking.
          </p>
          <p className="text-white font-medium fade-up">
          That's the Thanks Digital way. Simple to experience, but not easy to build.
          </p>
          <div className="pt-10 border-t border-[#222] flex items-center gap-4 fade-up">
            <img
              src="/images/avatars/james-mac.jpg"
              alt=""
              className="w-12 h-12 rounded-full object-cover grayscale"
            />
            <div>
              <div className="font-medium text-white">James Mac</div>
              <div className="text-sm">Designer & Software Engineer</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
