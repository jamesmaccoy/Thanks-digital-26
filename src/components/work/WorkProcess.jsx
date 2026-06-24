import { workProcess } from "@/components/work/workData";

export default function WorkProcess() {
  return (
    <section className="py-16 lg:py-24 px-6 md:px-10 border-t border-[#222] 3xl:max-w-[1400px] 3xl:mx-auto">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
        <div className="lg:w-1/3">
          <div className="sticky top-28">
            <div className="text-xs uppercase tracking-[0.28em] text-textGray mb-4">
              Our approach
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter">
              How every project unfolds.
            </h2>
            <p className="mt-4 text-textGray text-base md:text-lg leading-relaxed">
            A proven, immutable rhythm that protects quality, respects boundaries, and keeps your digital architecture secure at every step.
            </p>
          </div>
        </div>

        <div className="lg:w-2/3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {workProcess.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-[#222] bg-[#0a0a0a] p-6 lg:p-8 hover:border-[#444] transition-colors group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full border border-[#333] flex items-center justify-center text-sm font-medium text-textGray group-hover:border-white group-hover:text-white transition-colors">
                    {item.step}
                  </div>
                  <h3 className="text-xl md:text-2xl font-medium">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-textGray leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Timeline connector — visual flourish */}
          <div className="hidden lg:flex items-center justify-center mt-8 gap-3">
            {workProcess.map((_, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#333]" />
                {i < workProcess.length - 1 && (
                  <div className="w-16 h-[1px] bg-[#222]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
