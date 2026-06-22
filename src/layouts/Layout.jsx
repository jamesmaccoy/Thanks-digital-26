import { useEffect, useState } from "react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Layout({ children }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Initialize Lenis FIRST, then render children
    const lenis = new Lenis({
      duration: 0.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    window.__lenis = lenis;

    // Connect Lenis → GSAP ScrollTrigger on every frame
    lenis.on("scroll", ScrollTrigger.update);

    const tickerCallback = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    // Signal that Lenis is ready so children can mount
    setReady(true);

    return () => {
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return (
    <>
      <Navbar />
      <main>{ready ? children : null}</main>
      <Footer />
    </>
  );
}
