import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ClientsMarquee() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Clone items for seamless loop
    track.innerHTML += track.innerHTML;

    const anim = gsap.to(track, {
      xPercent: -50,
      ease: "none",
      duration: 20,
      repeat: -1,
    });

    return () => anim.kill();
  }, []);

  return (
    <section className="py-10 border-t border-b border-[#222] overflow-hidden bg-dark">
      <div
        ref={trackRef}
        className="marquee-track flex gap-16 items-center text-xl md:text-3xl font-bold text-[#444] uppercase tracking-wider"
      >
        <span>GlobalBank</span> <span>•</span>
        <span>AlphaWave</span> <span>•</span>
        <span>Biosynthetix</span> <span>•</span>
        <span>Clandestine</span> <span>•</span>
        <span>Codecraft</span> <span>•</span>
        <span>Boltshift</span> <span>•</span>
        <span>GlobalBank</span> <span>•</span>
        <span>AlphaWave</span> <span>•</span>
        <span>Biosynthetix</span> <span>•</span>
      </div>
    </section>
  );
}
