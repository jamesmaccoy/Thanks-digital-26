import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      window.location.reload();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tlLoad = gsap.timeline();

      tlLoad
        .to(".hero-text span", {
          y: "0%",
          duration: 1.2,
          ease: "power4.out",
          stagger: 0.1,
          delay: 0.2,
        })
        .to(
          ".profile-card",
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "back.out(1.5)",
          },
          "-=0.8"
        )
        .to(
          ".hero-desc",
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.8"
        );

      // Profile card subtle float animation
      gsap.to(".profile-card", {
        y: "-=15",
        rotation: 2,
        duration: 4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center items-center py-[80px] lg:py-[40px] px-6"
    >
      <div className="w-full relative z-0 flex flex-col items-center">
        <h1 className="text-[19vw] md:text-[18vw] leading-none lg:leading-[0.85] lg:tracking-[-0.05em] font-bold w-full text-center uppercase m-0 hero-text clip-text">
          <span className="block translate-y-[100%]">OPTIMA</span>
        </h1>
        <h1 className="text-[19vw] md:text-[18vw] leading-none lg:leading-[0.85] lg:tracking-[-0.05em] font-bold w-full text-center uppercase m-0 hero-text clip-text -mt-2 md:-mt-6">
          <span className="block translate-y-[100%] text-textGray">AGENCY</span>
        </h1>
      </div>



      <div className="w-full lg:w-1/3 md:ml-auto mt-3 text-center lg:text-left text-sm md:text-xl text-textGray hero-desc opacity-0 px-2 md:px-0 mb-6 lg:mb-0">
        We&apos;ve reimagined how great design happens. No pitches. No proposals.
        Just exceptional work from senior designers who become an extension of
        your team.
      </div>

      {/* Floating Profile Card */}
      <div className="lg:absolute top-[80%] left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 w-[250px] md:w-64 bg-[#111] p-3 md:p-4 rounded-2xl border border-[#222] z-30 shadow-[0_25px_60px_-12px_rgba(0,0,0,0.8)] profile-card opacity-0 scale-90 block">
        <img
          src="/images/avatars/sarah-park-lg.webp"
          alt=""
          className="w-full h-36 md:h-48 object-cover rounded-xl mb-3 md:mb-4 filter grayscale hover:grayscale-0 transition duration-500"
        />
        <div className="text-xs text-textGray mb-2 flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>{" "}
          2 slots open May 10
        </div>
        <h3 className="text-lg font-medium">Sarah Park</h3>
        <p className="text-sm text-textGray mb-4">Project manager</p>
        <div className="flex justify-between items-center border-t border-[#333] pt-3 mb-3 text-sm">
          <span className="text-textGray">Plans start at</span>
          <span>$7,500 / m</span>
        </div>
        <button className="w-full bg-white text-black py-2 rounded-lg font-medium text-sm hover:bg-gray-200 transition-colors">
          Book a 15-Min Call
        </button>
      </div>
    </section>
  );
}
