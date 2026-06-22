import { authors } from "@/components/articles/articlesData";

export default function ArticlesAuthors() {
  return (
    <section className="py-16 lg:py-24 px-6 md:px-10 border-t border-[#222] bg-[#0a0a0a] 3xl:max-w-[1400px] 3xl:mx-auto">
      <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6 mb-12 lg:mb-16">
        <div>
          <div className="text-xs uppercase tracking-[0.28em] text-textGray mb-4">
            Contributors
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter">
            Meet the writers.
          </h2>
        </div>
        <p className="text-textGray text-sm md:text-base max-w-sm leading-relaxed">
          Every article is written by someone who does the work daily — no
          ghostwriters, no outside contributors.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {authors.map((author) => (
          <div
            key={author.name}
            className="rounded-2xl border border-[#222] bg-black p-6 lg:p-8 hover:border-[#444] transition-colors group"
          >
            <div className="flex items-center gap-4 mb-5">
              <img
                src={author.avatar}
                alt=""
                className="w-14 h-14 rounded-full object-cover grayscale group-hover:grayscale-0 transition duration-500"
              />
              <div>
                <h3 className="text-lg font-medium">{author.name}</h3>
                <p className="text-xs text-textGray">{author.role}</p>
              </div>
            </div>
            <p className="text-sm text-textGray leading-relaxed mb-4">
              {author.bio}
            </p>
            <div className="text-xs text-textGray bg-[#111] px-3 py-1.5 rounded-full border border-[#222] w-fit">
              {author.articleCount} articles
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
