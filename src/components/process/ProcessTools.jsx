import { collaborationTools } from "@/components/process/processData";

export default function ProcessTools() {
  return (
    <section className="py-16 lg:py-24 px-6 md:px-10 border-t border-[#222] bg-[#0a0a0a] 3xl:max-w-[1400px] 3xl:mx-auto">
      <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6 mb-12 lg:mb-16">
        <div>
          <div className="text-xs uppercase tracking-[0.28em] text-textGray mb-4">
            Collaboration
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter">
            How we stay connected.
          </h2>
        </div>
        <p className="text-textGray text-sm md:text-base max-w-sm leading-relaxed">
          Real-time visibility, async-friendly workflows, and tools you already
          know. No onboarding overhead.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {collaborationTools.map((tool) => (
          <div
            key={tool.name}
            className="rounded-2xl border border-[#222] bg-black p-6 lg:p-8 hover:border-[#444] transition-colors group"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-medium group-hover:text-white transition-colors">
                {tool.name}
              </h3>
              <span className="text-[10px] uppercase tracking-[0.2em] text-textGray bg-[#111] px-2.5 py-1 rounded-full border border-[#222]">
                {tool.category}
              </span>
            </div>
            <p className="text-sm text-textGray leading-relaxed">
              {tool.purpose}
            </p>
          </div>
        ))}
      </div>

      {/* Collaboration promise */}
      <div className="mt-10 rounded-2xl border border-[#222] bg-[#111] p-6 lg:p-8 flex flex-col md:flex-row gap-6 md:items-center">
        <div className="text-3xl lg:text-4xl font-bold shrink-0">4h+</div>
        <div>
          <h4 className="text-lg font-medium mb-1">
            Guaranteed timezone overlap
          </h4>
          <p className="text-sm text-textGray leading-relaxed">
            Every project has at least 4 hours of shared working time per day.
            For async-heavy teams, we supplement with Loom walkthroughs and
            detailed Figma annotations.
          </p>
        </div>
      </div>
    </section>
  );
}
