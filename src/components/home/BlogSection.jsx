import Link from "next/link";
import { allArticles } from "@/components/articles/articlesData";

export default function BlogSection() {
  const articles = allArticles.slice(0, 3).map((article, index) => ({
    ...article,
    featured: index === 0,
  }));

  return (
    <section className="py-20 lg:py-32 px-6 md:px-20 bg-[#0a0a0a] border-t border-[#222] 3xl:max-w-[1400px] 3xl:mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-4 lg:mb-6">
          Strategies &amp; insights
          <br />
          <span className="text-[#333] italic font-serif">from the team</span>
        </h2>
        <p className="text-xl text-textGray max-w-2xl">
          We share what we&apos;ve learned building brands that matter. Deep dives
          into design thinking, creative process, and the intersection of business
          and aesthetics. No fluff, just honest perspectives from the trenches of
          client work.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {articles.map((article, idx) => (
          <Link
            key={idx}
            href={`/articles/${article.slug}`}
            className={`group bg-[#111] border rounded-2xl overflow-hidden flex flex-col hover:border-[#444] transition-colors ${
              article.featured ? "border-[#333] relative" : "border-[#222]"
            }`}
          >
            {article.featured && (
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 z-10"></div>
            )}
            <div className="overflow-hidden aspect-video">
              <img
                src={article.image}
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition duration-700"
                alt=""
              />
            </div>
            <div className="p-5 lg:p-8 flex flex-col flex-1">
              <div className="flex gap-4 text-xs text-textGray mb-3 uppercase tracking-wider font-semibold">
                <span>{article.category}</span>
                <span>•</span>
                <span>{article.date}</span>
              </div>
              <h3 className="text-xl lg:text-2xl font-medium mb-3 group-hover:text-blue-400 transition-colors">
                {article.title}
              </h3>
              {article.description && (
                <p className="text-textGray text-sm mb-6 flex-1">{article.description}</p>
              )}
              {article.author && (
                <div className="flex items-center gap-3 border-t border-[#222] pt-6 mt-auto">
                  <img
                    src={article.author.avatar}
                    className="w-8 h-8 rounded-full object-cover grayscale"
                    alt=""
                  />
                  <div className="text-sm">
                    <div className="font-medium">{article.author.name}</div>
                    <div className="text-xs text-textGray">{article.author.role}</div>
                  </div>
                  <div className="ml-auto w-8 h-8 rounded-full bg-[#222] flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors text-sm">
                    ↗
                  </div>
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
