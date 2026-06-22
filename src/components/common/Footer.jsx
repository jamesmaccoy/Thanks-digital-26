import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".footer-text span", {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 60%",
        },
        y: "0%",
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.1,
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      id="contact"
      className="pt-20 lg:pt-32 pb-10 px-6 md:px-20 border-t border-[#222] relative overflow-hidden bg-black 3xl:max-w-[1400px] 3xl:mx-auto"
    >
      <div className="flex flex-col lg:flex-row justify-between mb-16 lg:mb-32 gap-12 lg:gap-20">
        <div className="lg:w-1/2">
          <a
            href="mailto:hello@thanks.digital"
            className="text-2xl sm:text-3xl md:text-5xl font-medium mb-8 inline-block hover:text-gray-400 transition-colors underline decoration-[#333] underline-offset-8 break-all"
          >
            hello@thanks.digital +
          </a>
          <p className="text-lg md:text-2xl text-textGray max-w-md leading-relaxed mt-6 md:mt-10">
            Your next project deserves world-class design. Stop settling for
            mediocre and start working with designers who care as much as you do.
          </p>

          <div className="mt-12 md:mt-20 flex items-center gap-4">
            <img
              src="/images/avatars/james-mac.jpg"
              className="w-12 h-12 rounded-full grayscale"
              alt=""
            />
            <div>
              <div className="font-medium text-white">James Mac</div>
              <div className="text-sm text-textGray">Creative Director</div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/3 flex flex-col lg:items-end text-left lg:text-right">
          <div className="mb-10 w-full max-w-sm">
            <p className="text-sm text-textGray mb-4">
              Subscribe to our newsletter.
            </p>
            <div className="flex border-b border-[#333] pb-2">
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent border-none outline-none w-full text-white placeholder:text-[#555]"
              />
              <button className="text-xl hover:text-gray-400">+</button>
            </div>
          </div>

          <nav className="flex flex-col gap-3 lg:gap-4 text-xl md:text-2xl lg:text-4xl font-medium">
            <Link href="/" className="hover:text-gray-400 transition-colors">
              Home
            </Link>
            <Link href="/services" className="hover:text-gray-400 transition-colors">
              Services
            </Link>
            <Link href="/process" className="hover:text-gray-400 transition-colors">
              Process
            </Link>
            <Link href="/work" className="hover:text-gray-400 transition-colors">
              Work [12]
            </Link>
            <Link href="/articles" className="hover:text-gray-400 transition-colors">
              Articles [10]
            </Link>
            <Link href="/pricing" className="hover:text-gray-400 transition-colors">
              Pricing
            </Link>
            <Link href="/contact" className="hover:text-gray-400 transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-textGray mb-10 gap-6 border-t border-[#222] pt-10">
        <div className="flex gap-6">
          <Link href="/terms" className="hover:text-white transition-colors">
            Terms of Service ↗
          </Link>
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy Policy ↗
          </Link>
        </div>
        <div className="flex gap-6 text-xl">
          <a href="#" className="hover:text-white transition-colors">
            𝕏
          </a>
          <a href="#" className="hover:text-white transition-colors">
            IG
          </a>
          <a href="#" className="hover:text-white transition-colors">
            IN
          </a>
        </div>
      </div>

      {/* Giant Footer Text */}
      <div className="w-full relative flex flex-col items-center justify-center mt-20 select-none">
        <h1 className="text-[18vw] leading-[0.8] font-bold tracking-tighter m-0 text-center footer-text clip-text w-full">
          <span className="block translate-y-[100%]">THANKS</span>
        </h1>
        <h1 className="text-[18vw] leading-[0.8] font-bold tracking-tighter m-0 text-center footer-text clip-text text-textGray w-full">
          <span className="block translate-y-[100%]">DIGITAL</span>
        </h1>
      </div>
    </footer>
  );
}
