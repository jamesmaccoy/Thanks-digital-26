export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "James possesses a rare ability to anchor complex design strategy within robust, real-world execution. He didn't just sharpen our product interface; he engineered a unified visual language that made our underlying technical strength immediately visible and intuitive to the market.",
      name: "Mark Tomlinson",
      role: "Former Chief Operating Officer, Hello Computer",
      avatar: "https://media.licdn.com/dms/image/v2/C5603AQEE3kHRmioPFg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1549273472397?e=1784160000&v=beta&t=AkPNv73YtPHXw_kh-Wng1pIb3bUp72BqtanjeRh4jOs",
      stats: [
        { value: "10M+", label: "Stabilized daily active users" },
        { value: "40%", label: "UX friction reduction" },
      ],
    },
    {
      quote:
        "At an enterprise scale, you cannot separate design from structural integrity. James fundamentally understands this constraint. He re-architected our digital approach to treat security and trust as core creative drivers, massively simplifying the sales narrative for high-stakes products.",
      name: "Alistair King",
      role: "Chief Creative Officer, Accenture Song (King James)",
      avatar: "https://media.licdn.com/dms/image/v2/D4E03AQFhfLl4FnjKsA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1701872744412?e=1784160000&v=beta&t=jKVcI0Fub_EIiFVQVe95APB99uvbF6cmVn0TJp7RJnU",
      stats: [
        { value: "30%+", label: "Driven income protected by architecture" },
        { value: "10+", label: "International & local industry awards" },
      ],
    },
    {
      quote:
        "James cut right through the ambiguity of our product vision. He established an unshakeable narrative framework and translated it into a modular web system that perfectly aligned our mission with a flawless, high-conversion user journey.",
      name: "Tim Bishop",
      role: "Former Director / VP of Product, Prezence",
      avatar: "https://media.licdn.com/dms/image/v2/D4D03AQHRlRlpSGRZ-w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730284667464?e=1784160000&v=beta&t=44UiaHxzNGDGQFg3m74huhGIvCvAqcPHlymSB9Uae7I",
      stats: [
        { value: "2x", label: "Component deployment velocity" },
        { value: "0+", label: "Design system regression errors" },
      ],
    },
  ];

  return (
    <section className="py-20 lg:py-32 px-6 md:px-20 border-t border-[#222] overflow-hidden 3xl:max-w-[1400px] 3xl:mx-auto">
      <div className="mb-10 lg:mb-20 text-center md:text-left flex flex-col md:flex-row justify-between md:items-end gap-6 lg:gap-10">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight max-w-2xl">
          Trusted by the most innovative teams.
        </h2>
        <p className="text-xl text-textGray">Results speak louder than promises.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {testimonials.map((testimonial, idx) => (
          <div
            key={idx}
            className="bg-[#111] p-6 lg:p-10 rounded-2xl border border-[#222] lg:w-1/3 flex flex-col justify-between"
          >
            <div>
              <div className="text-4xl text-[#444] mb-6">"</div>
              <p className="text-base lg:text-xl text-light mb-6 lg:mb-10 leading-relaxed">
                {testimonial.quote}
              </p>
            </div>
            <div>
              <div className="flex items-center gap-4 mb-6 lg:mb-8">
                <div className="w-12 h-12 rounded-full bg-gray-600 overflow-hidden">
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
                    <div className="text-2xl lg:text-3xl font-bold mb-1">{stat.value}</div>
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
