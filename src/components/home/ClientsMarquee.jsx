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
        <span>Santam</span> <span>•</span>
        <span>Sanlam</span> <span>•</span>
        <span>Capitec</span> <span>•</span>
        <span>Standard Bank</span> <span>•</span>
        <span>Old Mutal</span> <span>•</span>
        <span>Nokia</span> <span>•</span>
        <span>Virgin</span> <span>•</span>
        <span>Skype</span> <span>•</span>
        <span>Sterkinikor</span> <span>•</span>
      </div>
    </section>
  );
}
