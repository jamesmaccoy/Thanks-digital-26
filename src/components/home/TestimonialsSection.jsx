export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Our product was always strong under the hood, but we struggled to express it clearly. Now, the platform feels sharp, modern, and incredibly intuitive—it's made onboarding so much smoother.",
      name: "Julian Singh",
      role: "COO, Boltshift",
      avatar: "/images/avatars/alex-west.webp",
      stats: [
        { value: "40%", label: "Churn rate reduction" },
        { value: "$2.3M", label: "Annual efficiency savings" },
      ],
    },
    {
      quote: "We knew our tech was solid, but the brand didn't reflect that. After the redesign, everything just clicked—sales calls got easier, and people finally 'got' what we do.",
      name: "Aisha Clark",
      role: "CEO, Warpspeed",
      avatar: "/images/avatars/maya-chen.webp",
      stats: [
        { value: "500x", label: "Github stars gained post-rebrand" },
        { value: "95%", label: "Developer-to-CTO approval rate" },
      ],
    },
    {
      quote: "We came in with a fuzzy idea and left with a brand that feels completely aligned with our mission. The team really understood our product and turned that into something emotionally resonant.",
      name: "Linh Tran",
      role: "VP of Product, Ephemeral",
      avatar: "/images/avatars/jordan-lee.webp",
      stats: [
        { value: "4.6x", label: "Conversation frequency" },
        { value: "0.8 sec", label: "Avg response time" },
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
