import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    name: "Brand Identity",
    title: "[01] Brand Identity",
    description: "Complete brand systems built on transparency and deep institutional trust. I design identities that capture your core ethos and build an unshakeable bond with users weary of default tracking.",
    image: "/images/services/blog/hero_blacksheep.jpg",
    categories: ["Brand Positioning", "Visual Systems", "Identity Guidelines", "Strategic Messaging"],
  },
  {
    name: "Digital Design",
    title: "[02] Digital Design",
    description: "Websites and digital experiences that delight without exploiting. I map out clean, intentional user journeys that respect user autonomy, proving that high conversion rates don't require dark patterns.",
    image: "/images/services/blog/simpleplek2.png",
    categories: ["Web Design", "Secure E-commerce", "Landing Pages", "Frictionless UI/UX"],
  },
  {
    name: "Product Design",
    title: "[03] Product Design",
    description: "End-to-end product design optimized for the 'golden path.' I craft intuitive, resilient interfaces that seamlessly handle complex user needs while keeping data private, protected, and localized by default.",
    image: "/images/services/blog/KV.jpg",
    categories: ["SaaS Platforms", "Secure Mobile Apps", "High-Fidelity Prototyping", "Immutable Design Systems"],
  },
  {
    name: "Dev & Automation",
    title: "[04] Dev & Automation",
    description: "Pixel-perfect, 'build once, deploy many times' implementation. Clean, performant code reinforced by programmatic testing gates in the CI/CD pipeline to ensure your design vision and UX security survive every release.",
    image: "/images/services/blog/santam-6.jpg",
    categories: ["Front-end Dev (React / Next.js)", "Automated UX Testing", "Secure CRUD Architecture", "CMS Integration"],
  },
  {
    name: "Trust & Growth",
    title: "[05] Trust & Growth",
    description: "Strategic creative that drives measurable momentum in high-stakes markets. I leverage rock-solid, compliant design patterns—from seamless authentication hooks to gated access control—to turn potential risk into a distinct competitive advantage.",
    image: "/images/services/blog/hero_ACBA.jpg",
    categories: ["Secure Paywalls", "Conversion Optimization", "Campaign Creative", "Compliance-First UX"],
  }

];

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const panelRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      panelRefs.current.forEach((panel, i) => {
        if (!panel) return;
        ScrollTrigger.create({
          trigger: panel,
          start: "top 50%",
          end: "bottom 50%",
          onEnter: () => setActiveIndex(i),
          onEnterBack: () => setActiveIndex(i),
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="py-20 lg:py-32 px-6 md:px-20 border-t border-[#222] relative flex flex-col lg:flex-row gap-10 lg:gap-20 3xl:max-w-[1400px] 3xl:mx-auto">
      <div className="lg:w-1/3">
        <div className="sticky top-32">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 lg:mb-6 tracking-tight">Services</h2>
          <p className="text-textGray text-lg mb-10">
          Full-spectrum design capabilities architected for digital autonomy. Whether you need a secure product ecosystem or a brand that stands as a sanctuary, I have the senior expertise to build it. No bloated agency overhead, no data-leaking outsourcing—just uncompromised, high-stakes execution.
          </p>
          <ul className="hidden lg:block space-y-4 text-xl lg:text-2xl font-medium text-textGray">
            {services.map((service, i) => (
              <li
                key={service.name}
                className={`cursor-pointer transition-colors duration-300 ${activeIndex === i ? "text-white" : "hover:text-white"}`}
                onClick={() => {
                  const panel = panelRefs.current[i];
                  if (panel) panel.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
              >
                {service.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="lg:w-2/3 space-y-16 lg:space-y-32">
        {services.map((service, i) => (
          <div
            key={service.name}
            ref={(el) => (panelRefs.current[i] = el)}
            className="service-panel"
          >
            <img
              src={service.image}
              alt=""
              className="w-full h-52 md:h-64 lg:h-80 object-cover rounded-2xl mb-6 lg:mb-8"
            />
            <div className="flex flex-col md:flex-row gap-6 lg:gap-10">
              <div className="md:w-1/2">
                <h3 className="text-xl lg:text-2xl font-medium mb-3 lg:mb-4">{service.title}</h3>
                <p className="text-textGray">{service.description}</p>
              </div>
              <div className="md:w-1/2">
                <h4 className="text-sm font-semibold mb-3 lg:mb-4 uppercase tracking-wider text-textGray">Categories</h4>
                <div className="flex flex-wrap gap-3">
                  {service.categories.map((cat, idx) => (
                    <span key={idx} className="px-4 py-2 bg-[#111] rounded-full text-sm border border-[#333]">{cat}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
