import { useState } from "react";

export default function FAQSection() {
  const [activeItem, setActiveItem] = useState(0);

  const faqs = [
    {
      question: "How do retainers actually work?",
      answer: "Think of it as having a dedicated designer on your team for a flat monthly rate. You get a set number of hours each month to use however you need—whether that's one big project or lots of small requests. We sync regularly and work through your priorities systematically.",
    },
    {
      question: "What if I don't use all my hours?",
      answer: "Unused hours roll over to the next month, up to a certain limit depending on your plan. We want to ensure you get the value you pay for without feeling pressured to invent tasks just to use up time.",
    },
    {
      question: "How fast can you start?",
      answer: "Typically, we can kick off a new engagement within 3-5 business days of signing the agreement and receiving the initial payment. This gives us time to assign the right talent and set up our collaborative workspace.",
    },
    {
      question: "Who will be working on my account?",
      answer: "You'll be paired with a dedicated senior designer and a project manager. We don't bait-and-switch with junior talent. The people you meet during the intro call are the ones doing the actual work.",
    },
  ];

  const toggleItem = (index) => {
    setActiveItem(activeItem === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-32 px-6 md:px-20 border-t border-[#222] flex flex-col lg:flex-row gap-10 lg:gap-20 3xl:max-w-[1400px] 3xl:mx-auto">
      <div className="lg:w-1/3">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-4">FAQ</h2>
        <p className="text-textGray text-lg">Everything else you&apos;re wondering.</p>
        <p className="text-textGray mt-10 text-base">
          Have a question?
          <br />
          Reach out anytime. We&apos;re happy to answer any questions before we
          commit to working together.
        </p>
      </div>

      <div className="lg:w-2/3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-[#222] cursor-pointer group"
            onClick={() => toggleItem(index)}
          >
            <div className="py-6 flex justify-between items-center gap-4">
              <h3 className={`text-xl font-medium transition-colors ${activeItem === index ? "text-white" : "text-textGray group-hover:text-white"}`}>
                {faq.question}
              </h3>
              <span className={`text-2xl flex-shrink-0 transition-transform duration-300 ${activeItem === index ? "rotate-45" : ""}`}>
                +
              </span>
            </div>
            <div
              className="overflow-hidden transition-all duration-500 ease-in-out"
              style={{
                maxHeight: activeItem === index ? "300px" : "0",
              }}
            >
              <p className="text-textGray text-lg pb-6 pr-10">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
