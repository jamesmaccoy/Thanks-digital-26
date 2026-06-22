import Link from "next/link";

const bullets = [
  "Senior-only team — no juniors, no bait-and-switch",
  "Full IP ownership transferred on completion",
  "30-day post-launch support included",
  "14-day satisfaction guarantee on every engagement",
];

export default function ServicesCTA() {
  return (
    <section className="py-16 lg:py-24 px-6 md:px-10 border-t border-[#222] 3xl:max-w-[1400px] 3xl:mx-auto">
      <div className="rounded-[32px] border border-[#222] bg-gradient-to-br from-[#111] to-[#080808] p-8 md:p-10 lg:p-14 flex flex-col xl:flex-row gap-10 xl:items-end xl:justify-between">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.28em] text-textGray mb-4">
            Next step
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter">
            Let&apos;s find the right service for you.
          </h2>
          <p className="mt-5 text-textGray text-base md:text-lg leading-relaxed max-w-xl">
            Not sure which service you need? Book a free 30-minute discovery
            call and we&apos;ll map the ideal engagement to your goals, timeline,
            and budget.
          </p>
        </div>

        <div className="xl:min-w-[360px]">
          <div className="space-y-3 mb-8">
            {bullets.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 text-sm md:text-base text-textGray"
              >
                <span className="mt-2 h-2 w-2 rounded-full bg-white shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black hover:bg-gray-200 transition-colors"
            >
              Book discovery call
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center justify-center rounded-full border border-[#333] px-6 py-3 text-sm font-medium text-textGray hover:border-white hover:text-white transition-colors"
            >
              See our work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
