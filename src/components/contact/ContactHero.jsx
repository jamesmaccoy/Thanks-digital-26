import { useEffect, useRef } from "react";
import gsap from "gsap";
import { contactMethods } from "@/components/contact/contactData";

export default function ContactHero() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline()
        .to(".contact-hero-text span", {
          y: "0%",
          duration: 1.1,
          ease: "power4.out",
          stagger: 0.08,
          delay: 0.15,
        })
        .to(
          ".contact-hero-copy",
          { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
          "-=0.7"
        )
        .to(
          ".contact-hero-method",
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.08 },
          "-=0.55"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="pt-28 md:pt-36 lg:pt-44 pb-16 lg:pb-24 px-6 md:px-10 3xl:max-w-[1400px] 3xl:mx-auto"
    >
      <div className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr] lg:items-end">
        <div>
          <div className="text-xs uppercase tracking-[0.28em] text-textGray mb-6">
            Get in touch
          </div>
          <div className="space-y-1 md:space-y-0">
            <h1 className="text-[17vw] md:text-[13vw] lg:text-[8.8vw] leading-none font-bold uppercase tracking-[-0.06em] contact-hero-text clip-text">
              <span className="block translate-y-[100%]">Let&apos;s</span>
            </h1>
            <h1 className="text-[17vw] md:text-[13vw] lg:text-[8.8vw] leading-none font-bold uppercase tracking-[-0.06em] text-textGray contact-hero-text clip-text">
              <span className="block translate-y-[100%]">Start</span>
            </h1>
            <h1 className="text-[17vw] md:text-[13vw] lg:text-[8.8vw] leading-none font-bold uppercase tracking-[-0.06em] contact-hero-text clip-text">
              <span className="block translate-y-[100%]">Talking</span>
            </h1>
          </div>
        </div>

        <div className="contact-hero-copy opacity-0 translate-y-8">
          <p className="text-base md:text-lg lg:text-xl text-textGray leading-relaxed max-w-xl">
            Your next project deserves world-class design. Whether you have a
            clear brief or just a spark of an idea, we&apos;re here to listen
            and help you figure out the best path forward.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-14 lg:mt-20">
        {contactMethods.map((method) => (
          <a
            key={method.label}
            href={method.href}
            className="contact-hero-method opacity-0 translate-y-8 rounded-2xl border border-[#222] bg-[#0a0a0a] p-5 lg:p-6 hover:border-[#444] transition-colors group block"
          >
            <div className="text-xs uppercase tracking-[0.2em] text-textGray mb-3">
              {method.label}
            </div>
            <div className="text-lg lg:text-xl font-medium mb-2 group-hover:text-white transition-colors break-all">
              {method.value}
            </div>
            <p className="text-sm text-textGray">
              {method.description}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
