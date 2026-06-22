import Link from "next/link";

const bullets = [
  "97% on-time delivery since 2016",
  "Live Figma access from day one",
  "30-day post-launch support included",
  "Structured revision rounds at every phase",
];

export default function ProcessCTA() {
  return (
    <section className="py-16 lg:py-24 px-6 md:px-10 border-t border-[#222] 3xl:max-w-[1400px] 3xl:mx-auto">
      <div className="rounded-[32px] border border-[#222] bg-gradient-to-br from-[#111] to-[#080808] p-8 md:p-10 lg:p-14 flex flex-col xl:flex-row gap-10 xl:items-end xl:justify-between">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.28em] text-textGray mb-4">
            Next step
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter">
            Ready to see the process in action?
          </h2>
          <p className="mt-5 text-textGray text-base md:text-lg leading-relaxed max-w-xl">
            Book a free 30-minute discovery call. We&apos;ll learn about your
            project, walk through the engagement, and determine if we&apos;re the
            right fit — no pitch decks, no pressure.
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
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-[#333] px-6 py-3 text-sm font-medium text-textGray hover:border-white hover:text-white transition-colors"
            >
              Explore services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
