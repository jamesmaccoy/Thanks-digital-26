export default function ContactBooking() {
  const steps = [
    { num: "01", title: "Pick a time", desc: "Choose a 30-minute slot that works for your schedule." },
    { num: "02", title: "Quick intro", desc: "We learn about your project, team, and goals — no pitch decks." },
    { num: "03", title: "Proposal in 48h", desc: "Custom proposal with scope, timeline, team, and investment." },
  ];

  return (
    <section className="py-16 lg:py-24 px-6 md:px-10 border-t border-[#222] bg-[#0a0a0a] 3xl:max-w-[1400px] 3xl:mx-auto">
      <div className="rounded-[32px] border border-[#222] bg-gradient-to-br from-[#111] to-[#080808] p-8 md:p-10 lg:p-14">
        <div className="flex flex-col xl:flex-row gap-10 xl:items-start xl:justify-between">
          <div className="max-w-xl">
            <div className="text-xs uppercase tracking-[0.28em] text-textGray mb-4">
              Discovery call
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              Prefer to talk live?
            </h2>
            <p className="mt-5 text-textGray text-base md:text-lg leading-relaxed">
              Book a free 30-minute discovery call. No commitments, no pressure
              — just an honest conversation about whether we&apos;re the right
              fit for your project.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black hover:bg-gray-200 transition-colors"
              >
                Schedule a call
              </a>
              <a
                href="mailto:hello@thanks.digital"
                className="inline-flex items-center justify-center rounded-full border border-[#333] px-6 py-3 text-sm font-medium text-textGray hover:border-white hover:text-white transition-colors"
              >
                Email instead
              </a>
            </div>
          </div>

          <div className="xl:min-w-[380px] space-y-4">
            {steps.map((step) => (
              <div
                key={step.num}
                className="flex gap-4 items-start"
              >
                <div className="w-10 h-10 rounded-full border border-[#333] flex items-center justify-center text-xs font-medium text-textGray shrink-0">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-base font-medium mb-1">{step.title}</h3>
                  <p className="text-sm text-textGray leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
