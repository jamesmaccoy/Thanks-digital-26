export default function ArticlesNewsletter() {
  return (
    <section className="py-16 lg:py-24 px-6 md:px-10 border-t border-[#222] 3xl:max-w-[1400px] 3xl:mx-auto">
      <div className="rounded-[32px] border border-[#222] bg-gradient-to-br from-[#111] to-[#080808] p-8 md:p-10 lg:p-14 flex flex-col xl:flex-row gap-10 xl:items-center xl:justify-between">
        <div className="max-w-xl">
          <div className="text-xs uppercase tracking-[0.28em] text-textGray mb-4">
            Newsletter
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
            Design insights, monthly.
          </h2>
          <p className="mt-5 text-textGray text-base md:text-lg leading-relaxed">
            Curated essays on design strategy, process, and culture. Join
            2,400+ designers and founders who read us every month. No spam,
            unsubscribe anytime.
          </p>
        </div>

        <div className="xl:min-w-[400px]">
          <div className="bg-[#0a0a0a] rounded-2xl border border-[#222] p-6">
            <div className="flex border-b border-[#333] pb-3 mb-4">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-transparent border-none outline-none w-full text-white text-lg placeholder:text-[#333] focus:placeholder:text-[#555] transition-colors"
              />
            </div>
            <button className="w-full py-3 bg-white text-black font-medium rounded-xl hover:bg-gray-200 transition-colors text-sm">
              Subscribe
            </button>
            <p className="mt-3 text-xs text-textGray text-center">
              Join 2,400+ readers • No spam • Unsubscribe anytime
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="text-xs text-textGray bg-[#111] px-3 py-1.5 rounded-full border border-[#222]">
              Design strategy
            </span>
            <span className="text-xs text-textGray bg-[#111] px-3 py-1.5 rounded-full border border-[#222]">
              Process insights
            </span>
            <span className="text-xs text-textGray bg-[#111] px-3 py-1.5 rounded-full border border-[#222]">
              Industry trends
            </span>
            <span className="text-xs text-textGray bg-[#111] px-3 py-1.5 rounded-full border border-[#222]">
              Studio updates
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
