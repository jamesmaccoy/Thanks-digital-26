import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import gsap from "gsap";

const menuItems = [
  { label: "Home", href: "/", section: null },
  { label: "Work", href: "/work", section: "work", count: 12 },
  { label: "Services", href: "/services", section: "services" },
  { label: "Process", href: "/process", section: "process" },
  { label: "Pricing", href: "/pricing", section: "pricing" },
  { label: "Contact", href: "/contact", section: "contact" },
];

export default function Navbar() {
  const menuBtnRef = useRef(null);
  const closeBtnRef = useRef(null);
  const fullMenuRef = useRef(null);
  const menuLinksRef = useRef(null);
  const clockRef = useRef(null);
  const [, setActiveSection] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [newYorkTime, setNewYorkTime] = useState("10:00 AM");
  const router = useRouter();

  useEffect(() => {
    // Real-time Clock
    function updateClock() {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "America/New_York",
      });
      setNewYorkTime(timeString);
      if (clockRef.current) {
        clockRef.current.textContent = timeString;
      }
    }
    const interval = setInterval(updateClock, 1000);
    updateClock();

    // Track scroll for navbar bg
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    // Track active section via IntersectionObserver
    const sectionIds = ["work", "services", "process", "pricing", "contact"];
    const observers = [];

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Menu animation
    const menuLinks = menuLinksRef.current?.querySelectorAll("a");
    if (menuLinks) {
      gsap.set(menuLinks, { y: 60, opacity: 0 });
    }

    const menuTl = gsap.timeline({ paused: true });
    menuTl
      .to(fullMenuRef.current, {
        autoAlpha: 1,
        duration: 0.5,
        ease: "power3.inOut",
      })
      .to(
        menuLinks,
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.06,
          ease: "power3.out",
        },
        "-=0.3"
      );

    const openMenu = () => {
      if (window.__lenis) window.__lenis.stop();
      menuTl.play();
    };

    const closeMenu = () => {
      menuTl.reverse();
      setTimeout(() => {
        if (window.__lenis) window.__lenis.start();
      }, 600);
    };

    const menuBtn = menuBtnRef.current;
    const closeBtn = closeBtnRef.current;

    menuBtn?.addEventListener("click", openMenu);
    closeBtn?.addEventListener("click", closeMenu);
    menuLinks?.forEach((link) => link.addEventListener("click", closeMenu));

    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
      menuBtn?.removeEventListener("click", openMenu);
      closeBtn?.removeEventListener("click", closeMenu);
      menuLinks?.forEach((link) => link.removeEventListener("click", closeMenu));
    };
  }, []);

  const isActive = (item) => {
    if (item.href === "/") return router.pathname === "/";
    if (item.href === "/work") return router.pathname === "/work" || router.pathname.startsWith("/work/");
    if (item.href === "/articles") return router.pathname === "/articles" || router.pathname.startsWith("/articles/");
    return router.pathname === item.href;
  };

  return (
    <>
      {/* Fullscreen Menu Overlay */}
      <div
        ref={fullMenuRef}
        className="fixed inset-0 bg-dark z-[60] flex flex-col justify-center items-center invisible opacity-0"
      >
        <button
          ref={closeBtnRef}
          className="absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 flex items-center justify-center text-white hover:rotate-90 transition-transform duration-300"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="4" y1="4" x2="20" y2="20" />
            <line x1="20" y1="4" x2="4" y2="20" />
          </svg>
        </button>

        {/* Menu number indicator */}
        <div className="absolute top-10 left-10 text-xs text-textGray tracking-widest uppercase hidden md:block">
          Navigation
        </div>

        <nav
          ref={menuLinksRef}
          className="flex flex-col gap-4 md:gap-6 text-center"
        >
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`text-4xl md:text-7xl font-medium transition-colors duration-300 relative group ${
                isActive(item) ? "text-white" : "text-[#444] hover:text-white"
              }`}
            >
              <span>{item.label}</span>
              {item.count && (
                <span className="text-base md:text-xl ml-2 text-textGray font-normal align-top">
                  [{item.count}]
                </span>
              )}
              {isActive(item) && (
                <span className="absolute -left-8 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white hidden md:block"></span>
              )}
            </Link>
          ))}
        </nav>

        {/* Bottom info */}
        <div className="absolute bottom-10 left-10 right-10 hidden md:flex justify-between items-end text-xs text-textGray">
          <div>
            <div className="mb-1">Johannesburg (ZA)</div>
            <div ref={clockRef}>10:00 AM</div>
          </div>
          <div className="text-right">
            <div className="mb-1">hello@thanks.digital</div>
            <div>&copy; 2026 THANKS</div>
          </div>
        </div>
      </div>

      {/* Header / Navbar */}
      <header className={`fixed top-0 left-0 w-full z-50 px-6 flex justify-between items-center transition-all duration-300 text-light ${
        scrolled
          ? "py-4 bg-dark/80 backdrop-blur-xl border-b border-[#222]"
          : "py-6 bg-transparent"
      }`}>
        <Link href="/" className="text-sm font-semibold tracking-wider hover:text-white transition-colors">
          THANKS
        </Link>
        <div className="hidden md:block text-sm text-textGray">
          New York (US) | <span>{newYorkTime}</span>
        </div>
        <div className="flex items-center gap-6">
          <Link
            href="/work"
            className="text-sm hover:text-white transition-colors"
          >
            Our Work [12]
          </Link>
          <button
            ref={menuBtnRef}
            className="w-8 h-2 flex flex-col justify-between items-end group cursor-pointer p-0 border-none bg-transparent"
          >
            <span className="w-full h-[1px] bg-white group-hover:w-3/4 transition-all"></span>
            <span className="w-3/4 h-[1px] bg-white group-hover:w-full transition-all"></span>
          </button>
        </div>
      </header>
    </>
  );
}
