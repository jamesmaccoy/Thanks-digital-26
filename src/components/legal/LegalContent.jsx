import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LegalContent({ sections }) {
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".legal-section").forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, contentRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={contentRef}
      id="content"
      className="py-16 lg:py-24 px-6 md:px-10 border-t border-[#222] 3xl:max-w-[1400px] 3xl:mx-auto"
    >
      <div className="grid gap-12 lg:grid-cols-[280px_1fr]">
        {/* Table of Contents - Sticky Sidebar */}
        <div className="hidden lg:block">
          <div className="sticky top-28">
            <div className="text-xs uppercase tracking-[0.28em] text-textGray mb-4">
              Contents
            </div>
            <nav className="space-y-2">
              {sections.map((section, index) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="block text-sm text-textGray hover:text-white transition-colors py-1"
                >
                  <span className="text-[#444] mr-2">{String(index + 1).padStart(2, "0")}</span>
                  {section.title.replace(/^\d+\.\s*/, "")}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-12 lg:space-y-16">
          {sections.map((section) => (
            <article
              key={section.id}
              id={section.id}
              className="legal-section"
            >
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight mb-4">
                {section.title}
              </h2>
              <div className="text-base md:text-lg text-textGray leading-relaxed whitespace-pre-line">
                {section.content}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Mobile Table of Contents */}
      <div className="lg:hidden mt-16 pt-8 border-t border-[#222]">
        <div className="text-xs uppercase tracking-[0.28em] text-textGray mb-4">
          Jump to section
        </div>
        <div className="flex flex-wrap gap-2">
          {sections.map((section, index) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="inline-flex items-center px-3 py-1.5 rounded-full text-xs border border-[#333] text-textGray hover:border-white hover:text-white transition-colors"
            >
              {String(index + 1).padStart(2, "0")}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
