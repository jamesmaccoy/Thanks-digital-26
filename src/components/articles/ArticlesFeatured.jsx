import Link from "next/link";
import { featuredArticle } from "@/components/articles/articlesData";

export default function ArticlesFeatured() {
  const article = featuredArticle;

  return (
    <section className="py-16 lg:py-24 px-6 md:px-10 border-t border-[#222] 3xl:max-w-[1400px] 3xl:mx-auto">
      <div className="text-xs uppercase tracking-[0.28em] text-textGray mb-8">
        Featured
      </div>

      <Link href={`/articles/${article.slug}`} className="group block">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 rounded-2xl border border-[#222] bg-[#111] overflow-hidden hover:border-[#444] transition-colors relative">
          {/* Gradient bar — matches home BlogSection featured */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 z-10" />

          <div className="overflow-hidden">
            <img
              src={article.image}
              alt=""
              className="w-full h-64 lg:h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition duration-700"
            />
          </div>

          <div className="p-6 lg:p-10 flex flex-col justify-center">
            <div className="flex gap-4 text-xs text-textGray mb-4 uppercase tracking-wider font-semibold">
              <span>{article.category}</span>
              <span>•</span>
              <span>{article.date}</span>
              <span>•</span>
              <span>{article.readTime}</span>
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4 group-hover:text-blue-400 transition-colors">
              {article.title}
            </h2>

            <p className="text-textGray text-base leading-relaxed mb-8">
              {article.description}
            </p>

            <div className="flex items-center gap-3 border-t border-[#222] pt-6">
              <img
                src={article.author.avatar}
                className="w-10 h-10 rounded-full object-cover grayscale"
                alt=""
              />
              <div className="text-sm">
                <div className="font-medium">{article.author.name}</div>
                <div className="text-xs text-textGray">
                  {article.author.role}
                </div>
              </div>
              <div className="ml-auto w-10 h-10 rounded-full bg-[#222] flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors text-sm">
                ↗
              </div>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}
