import { workTestimonials } from "@/components/work/workData";

export default function WorkTestimonials() {
  return (
    <section className="py-16 lg:py-24 px-6 md:px-10 border-t border-[#222] overflow-hidden 3xl:max-w-[1400px] 3xl:mx-auto">
      <div className="mb-10 lg:mb-16 flex flex-col md:flex-row justify-between md:items-end gap-6">
        <div>
          <div className="text-xs uppercase tracking-[0.28em] text-textGray mb-4">
            Client voices
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter max-w-2xl">
            Trusted by the most innovative teams.
          </h2>
        </div>
        <p className="text-textGray text-sm md:text-base max-w-xs">
          Results speak louder than promises.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {workTestimonials.map((testimonial, idx) => (
          <div
            key={idx}
            className="bg-[#111] p-6 lg:p-10 rounded-2xl border border-[#222] lg:w-1/3 flex flex-col justify-between"
          >
            <div>
              <div className="text-4xl text-[#444] mb-6">&ldquo;</div>
              <p className="text-base lg:text-xl text-light mb-6 lg:mb-10 leading-relaxed">
                {testimonial.quote}
              </p>
            </div>
            <div>
              <div className="flex items-center gap-4 mb-6 lg:mb-8">
                <div className="w-12 h-12 rounded-full bg-gray-600 overflow-hidden flex-shrink-0">
                  <img
                    src={testimonial.avatar}
                    className="w-full h-full object-cover grayscale"
                    alt=""
                  />
                </div>
                <div>
                  <div className="font-medium">{testimonial.name}</div>
                  <div className="text-sm text-textGray">{testimonial.role}</div>
                </div>
              </div>
              <div className="flex justify-between border-t border-[#333] pt-6">
                {testimonial.stats.map((stat, statIdx) => (
                  <div key={statIdx}>
                    <div className="text-2xl lg:text-3xl font-bold mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-textGray">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
