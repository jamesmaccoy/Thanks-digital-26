import { useState } from "react";
import { contactFaqs } from "@/components/contact/contactData";

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-16 lg:py-24 px-6 md:px-10 border-t border-[#222] bg-[#0a0a0a] 3xl:max-w-[1400px] 3xl:mx-auto">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
        <div className="lg:w-1/3">
          <div className="sticky top-28">
            <div className="text-xs uppercase tracking-[0.28em] text-textGray mb-4">
              FAQ
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter">
              Before you reach out.
            </h2>
            <p className="text-textGray mt-6 text-base leading-relaxed">
              Quick answers to common questions. Still need help? We&apos;re one
              email away.
            </p>
          </div>
        </div>

        <div className="lg:w-2/3 divide-y divide-[#222] border-y border-[#222]">
          {contactFaqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <button
                key={item.question}
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="w-full text-left py-6"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <h3 className="text-lg md:text-2xl font-medium">
                      {item.question}
                    </h3>
                    <div
                      className="overflow-hidden transition-all duration-500 ease-in-out"
                      style={{ maxHeight: isOpen ? "300px" : "0" }}
                    >
                      <p className="mt-4 text-sm md:text-base text-textGray leading-relaxed max-w-2xl">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`text-2xl text-textGray shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
