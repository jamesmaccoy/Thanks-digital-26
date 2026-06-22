import { useState } from "react";
import { toolStack } from "@/components/services/servicesData";

const stackCategories = ["All", "Design", "Motion", "Development", "Animation", "Collaboration"];

export default function ServicesStack() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? toolStack
      : toolStack.filter((t) => t.category === active);

  return (
    <section className="py-16 lg:py-24 px-6 md:px-10 border-t border-[#222] 3xl:max-w-[1400px] 3xl:mx-auto">
      <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6 mb-12 lg:mb-16">
        <div>
          <div className="text-xs uppercase tracking-[0.28em] text-textGray mb-4">
            Tools & tech
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter">
            Our design stack.
          </h2>
        </div>
        <p className="text-textGray text-sm md:text-base max-w-sm leading-relaxed">
          Industry-leading tools we use daily. We adapt to your existing
          toolchain when it makes sense.
        </p>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        {stackCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
              active === cat
                ? "bg-white text-black border-white"
                : "bg-transparent text-textGray border-[#333] hover:border-white hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
        {filtered.map((tool) => (
          <div
            key={tool.name}
            className="rounded-2xl border border-[#222] bg-[#111] p-4 lg:p-5 text-center hover:border-[#444] hover:bg-[#1a1a1a] transition-colors group"
          >
            <div className="text-lg font-medium mb-1 group-hover:text-white transition-colors">
              {tool.name}
            </div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-textGray">
              {tool.category}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
