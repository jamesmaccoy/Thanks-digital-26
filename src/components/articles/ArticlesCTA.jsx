import Link from "next/link";

const bullets = [
  "New articles published twice monthly",
  "Written by practitioners, not marketers",
  "Deep dives with actionable takeaways",
  "Free — no paywall, no gated content",
];

export default function ArticlesCTA() {
  return (
    <section className="py-16 lg:py-24 px-6 md:px-10 border-t border-[#222] bg-[#0a0a0a] 3xl:max-w-[1400px] 3xl:mx-auto">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
        <div className="lg:w-1/2">
          <div className="text-xs uppercase tracking-[0.28em] text-textGray mb-4">
            Work with us
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter">
            Like what you read?
          </h2>
          <p className="mt-5 text-textGray text-base md:text-lg leading-relaxed max-w-lg">
            If our thinking resonates, imagine what we can do for your brand.
            Every insight we publish is born from real client work — and we bring
            the same rigour to every engagement.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black hover:bg-gray-200 transition-colors"
            >
              Start a project
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-[#333] px-6 py-3 text-sm font-medium text-textGray hover:border-white hover:text-white transition-colors"
            >
              Explore services
            </Link>
          </div>
        </div>

        <div className="lg:w-1/2 flex items-end">
          <div className="space-y-3 w-full">
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
        </div>
      </div>
    </section>
  );
}
