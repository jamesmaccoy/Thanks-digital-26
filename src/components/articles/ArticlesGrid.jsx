import { useState } from "react";
import Link from "next/link";
import { articles } from "@/components/articles/articlesData";

const filterOptions = ["All", "Trends", "Process", "Business", "Design"];

export default function ArticlesGrid() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? articles
      : articles.filter((a) => a.category === activeFilter);

  return (
    <section className="py-16 lg:py-24 px-6 md:px-10 border-t border-[#222] bg-[#0a0a0a] 3xl:max-w-[1400px] 3xl:mx-auto">
      <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-10 lg:mb-16">
        <div>
          <div className="text-xs uppercase tracking-[0.28em] text-textGray mb-4">
            All articles
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter">
            Browse by topic.
          </h2>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2">
          {filterOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => setActiveFilter(opt)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                activeFilter === opt
                  ? "bg-white text-black border-white"
                  : "bg-transparent text-textGray border-[#333] hover:border-white hover:text-white"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* Article cards — matches home BlogSection card style exactly */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {filtered.map((article, idx) => (
          <Link
            key={idx}
            href={`/articles/${article.slug}`}
            className="group bg-[#111] border border-[#222] rounded-2xl overflow-hidden flex flex-col hover:border-[#444] transition-colors"
          >
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
              <p className="text-textGray text-sm mb-6 flex-1">
                {article.description}
              </p>
              <div className="flex items-center gap-3 border-t border-[#222] pt-6 mt-auto">
                <img
                  src={article.author.avatar}
                  className="w-8 h-8 rounded-full object-cover grayscale"
                  alt=""
                />
                <div className="text-sm">
                  <div className="font-medium">{article.author.name}</div>
                  <div className="text-xs text-textGray">
                    {article.author.role}
                  </div>
                </div>
                <div className="ml-auto w-8 h-8 rounded-full bg-[#222] flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors text-sm">
                  ↗
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
