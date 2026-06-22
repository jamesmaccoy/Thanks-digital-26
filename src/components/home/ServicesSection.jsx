import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    name: "Brand Identity",
    title: "[01] Brand Identity",
    description: "Complete brand systems that capture your essence and stand out in market. From strategy to execution, we build identities that resonate and scale.",
    image: "/images/services/brand-identity.webp",
    categories: ["Logo Design", "Visual Identity", "Brand Guidelines", "Positioning"],
  },
  {
    name: "Digital Design",
    title: "[02] Digital Design",
    description: "Websites and digital experiences that convert. We design with purpose, creating user journeys that turn visitors into customers.",
    image: "/images/services/digital-design.webp",
    categories: ["Web Design", "Landing Pages", "E-commerce", "UI/UX"],
  },
  {
    name: "Product Design",
    title: "[03] Product Design",
    description: "End-to-end product design from concept to launch. We craft intuitive interfaces and seamless experiences that users love and businesses rely on.",
    image: "/images/services/product-design.webp",
    categories: ["Mobile Apps", "SaaS Platforms", "Design Systems", "Prototyping"],
  },
  {
    name: "Marketing & Growth",
    title: "[04] Marketing & Growth",
    description: "Strategic creative that drives measurable results. From campaign design to conversion optimization, we help you grow faster with design that performs.",
    image: "/images/services/marketing-growth.webp",
    categories: ["Campaign Design", "Social Media", "Email Design", "Ad Creatives"],
  },
  {
    name: "Development",
    title: "[05] Development",
    description: "Pixel-perfect implementation that brings designs to life. Clean, performant code built with modern frameworks and best practices.",
    image: "/images/services/development.webp",
    categories: ["Front-end Dev", "React / Next.js", "CMS Integration", "Performance"],
  },
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
            Full-spectrum design capabilities under one roof. Whether you need a complete brand overhaul or ongoing creative support, we have the expertise to deliver. No outsourcing, no excuses, just exceptional work from our senior team.
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
