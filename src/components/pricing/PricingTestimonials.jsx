import { pricingTestimonials } from "@/components/pricing/pricingData";

export default function PricingTestimonials() {
  return (
    <section className="py-16 lg:py-24 px-6 md:px-10 border-t border-[#222] overflow-hidden 3xl:max-w-[1400px] 3xl:mx-auto">
      <div className="mb-10 lg:mb-16 flex flex-col md:flex-row justify-between md:items-end gap-6">
        <div>
          <div className="text-xs uppercase tracking-[0.28em] text-textGray mb-4">
            Client stories
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter max-w-2xl">
            Worth every dollar.
          </h2>
        </div>
        <p className="text-textGray text-sm md:text-base max-w-xs">
          Hear from clients on every plan tier.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {pricingTestimonials.map((testimonial, idx) => (
          <div
            key={idx}
            className="bg-[#111] p-6 lg:p-10 rounded-2xl border border-[#222] lg:w-1/3 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="text-4xl text-[#444]">&ldquo;</div>
                <span className="text-xs uppercase tracking-[0.2em] text-textGray bg-[#0a0a0a] px-3 py-1 rounded-full border border-[#222]">
                  {testimonial.plan}
                </span>
              </div>
              <p className="text-base lg:text-xl text-light mb-6 lg:mb-10 leading-relaxed">
                {testimonial.quote}
              </p>
            </div>
            <div className="flex items-center gap-4">
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
          </div>
        ))}
      </div>
    </section>
  );
}
