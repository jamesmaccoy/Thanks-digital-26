import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LegalCTA({ variant = "terms" }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".legal-cta-content",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const otherPage = variant === "terms" 
    ? { href: "/privacy", label: "Privacy Policy" }
    : { href: "/terms", label: "Terms of Service" };

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-32 px-6 md:px-10 border-t border-[#222] 3xl:max-w-[1400px] 3xl:mx-auto"
    >
      <div className="legal-cta-content text-center max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4">
          Questions about our policies?
        </h2>
        <p className="text-base md:text-lg text-textGray leading-relaxed mb-8">
          We&apos;re here to help. Reach out to our team for clarification on any aspect of our {variant === "terms" ? "terms" : "privacy practices"}.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-white text-black px-8 py-4 text-sm font-medium hover:bg-gray-200 transition-colors"
          >
            Contact us
          </Link>
          <Link
            href={otherPage.href}
            className="inline-flex items-center justify-center rounded-full border border-[#333] px-8 py-4 text-sm font-medium text-textGray hover:border-white hover:text-white transition-colors"
          >
            Read {otherPage.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
