import { useState } from "react";
import Link from "next/link";

const services = [
  "Brand Identity",
  "Digital Design",
  "Product Design",
  "Marketing & Growth",
  "Development",
  "Other",
];

const budgets = [
  "Under $10K",
  "$10K – $25K",
  "$25K – $50K",
  "$50K – $100K",
  "$100K+",
];

export default function ContactForm() {
  const [selectedService, setSelectedService] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");

  return (
    <section className="py-16 lg:py-24 px-6 md:px-10 border-t border-[#222] 3xl:max-w-[1400px] 3xl:mx-auto">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
        <div className="lg:w-1/3">
          <div className="sticky top-28">
            <div className="text-xs uppercase tracking-[0.28em] text-textGray mb-4">
              Project inquiry
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter">
              Tell us about your project.
            </h2>
            <p className="mt-4 text-textGray text-base leading-relaxed">
              Fill out the form and we&apos;ll get back to you within 24 hours
              with next steps.
            </p>
            <div className="mt-8 hidden lg:flex items-center gap-3 text-sm text-textGray">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Typically responds within 4-6 hours
            </div>
          </div>
        </div>

        <div className="lg:w-2/3">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-0 divide-y divide-[#222] border-y border-[#222]"
          >
            {/* Name */}
            <div className="py-6 flex flex-col sm:flex-row sm:items-center gap-3">
              <label className="text-sm font-medium text-textGray w-32 shrink-0">
                Name *
              </label>
              <input
                type="text"
                placeholder="Your full name"
                required
                className="flex-1 bg-transparent border-none outline-none text-white text-lg placeholder:text-[#333] focus:placeholder:text-[#555] transition-colors"
              />
            </div>

            {/* Email */}
            <div className="py-6 flex flex-col sm:flex-row sm:items-center gap-3">
              <label className="text-sm font-medium text-textGray w-32 shrink-0">
                Email *
              </label>
              <input
                type="email"
                placeholder="you@company.com"
                required
                className="flex-1 bg-transparent border-none outline-none text-white text-lg placeholder:text-[#333] focus:placeholder:text-[#555] transition-colors"
              />
            </div>

            {/* Company */}
            <div className="py-6 flex flex-col sm:flex-row sm:items-center gap-3">
              <label className="text-sm font-medium text-textGray w-32 shrink-0">
                Company
              </label>
              <input
                type="text"
                placeholder="Company name"
                className="flex-1 bg-transparent border-none outline-none text-white text-lg placeholder:text-[#333] focus:placeholder:text-[#555] transition-colors"
              />
            </div>

            {/* Service */}
            <div className="py-6">
              <label className="text-sm font-medium text-textGray mb-4 block">
                What do you need? *
              </label>
              <div className="flex flex-wrap gap-2">
                {services.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSelectedService(s)}
                    className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                      selectedService === s
                        ? "bg-white text-black border-white"
                        : "bg-transparent text-textGray border-[#333] hover:border-white hover:text-white"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Budget */}
            <div className="py-6">
              <label className="text-sm font-medium text-textGray mb-4 block">
                Budget range
              </label>
              <div className="flex flex-wrap gap-2">
                {budgets.map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => setSelectedBudget(b)}
                    className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                      selectedBudget === b
                        ? "bg-white text-black border-white"
                        : "bg-transparent text-textGray border-[#333] hover:border-white hover:text-white"
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* Message */}
            <div className="py-6">
              <label className="text-sm font-medium text-textGray mb-4 block">
                Project details *
              </label>
              <textarea
                rows={4}
                placeholder="Tell us about your project, goals, and timeline..."
                required
                className="w-full bg-transparent border border-[#222] rounded-2xl p-4 outline-none text-white text-base placeholder:text-[#333] focus:border-[#444] transition-colors resize-none"
              />
            </div>

            {/* Submit */}
            <div className="py-8">
              <button
                type="submit"
                className="w-full sm:w-auto px-10 py-4 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-colors text-base"
              >
                Send inquiry
              </button>
              <p className="mt-4 text-xs text-textGray">
                By submitting, you agree to our{" "}
                <Link href="/privacy" className="underline hover:text-white transition-colors">
                  privacy policy
                </Link>. We&apos;ll never share your information.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
