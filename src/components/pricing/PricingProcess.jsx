import { onboardingSteps } from "@/components/pricing/pricingData";

export default function PricingProcess() {
  return (
    <section className="py-16 lg:py-24 px-6 md:px-10 border-t border-[#222] bg-[#0a0a0a] 3xl:max-w-[1400px] 3xl:mx-auto">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
        <div className="lg:w-1/3">
          <div className="sticky top-28">
            <div className="text-xs uppercase tracking-[0.28em] text-textGray mb-4">
              Onboarding
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter">
              Start shipping in a week.
            </h2>
            <p className="mt-4 text-textGray text-base leading-relaxed">
              From first call to first deliverable — our onboarding is designed
              for speed without cutting corners.
            </p>
          </div>
        </div>

        <div className="lg:w-2/3">
          <div className="relative">
            {/* Vertical connector */}
            <div className="absolute left-6 lg:left-[27px] top-0 bottom-0 w-[1px] bg-[#222] hidden lg:block" />

            <div className="space-y-4">
              {onboardingSteps.map((item) => (
                <div key={item.step} className="relative flex gap-5 lg:gap-8">
                  {/* Step dot */}
                  <div className="hidden lg:flex flex-col items-center z-10 shrink-0">
                    <div className="w-12 h-12 rounded-full border border-[#333] bg-[#0a0a0a] flex items-center justify-center text-sm font-medium text-textGray">
                      {item.step}
                    </div>
                  </div>

                  {/* Card */}
                  <div className="flex-1 rounded-2xl border border-[#222] bg-black p-6 lg:p-8 hover:border-[#444] transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <h3 className="text-xl md:text-2xl font-medium">
                        <span className="lg:hidden text-textGray mr-2">{item.step}.</span>
                        {item.title}
                      </h3>
                      <span className="text-xs uppercase tracking-[0.2em] text-textGray bg-[#111] px-3 py-1 rounded-full border border-[#222] w-fit shrink-0">
                        {item.duration}
                      </span>
                    </div>
                    <p className="text-sm text-textGray leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
