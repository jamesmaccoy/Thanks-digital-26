import { useState } from "react";
import Link from "next/link";

const services = [

  "Digital Design",
  "Product Design",
  "Marketing & Growth",
  "Development",
  "Digital Transformation",
  "Other",
];

const budgets = [
  "Under R10K",
  "R10K – R25K",
  "R25K – R50K",
  "R50K – R100K",
  "R100K+",
];

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [errorMessage, setErrorMessage] = useState("");
  const [serviceError, setServiceError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedService) {
      setServiceError(true);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage("");

    try {
      const response = await fetch("/api/v1/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          company,
          service: selectedService,
          budget: selectedBudget,
          message,
        }),
      });

      const data = await response.json();

      if (response.ok && data.status) {
        setSubmitStatus("success");
        // Reset form
        setName("");
        setEmail("");
        setCompany("");
        setMessage("");
        setSelectedService("");
        setSelectedBudget("");
      } else {
        setSubmitStatus("error");
        setErrorMessage(data.data || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
      setErrorMessage("Failed to send inquiry. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
          {submitStatus === "success" ? (
            <div className="border border-[#222] rounded-3xl p-8 md:p-12 bg-[#0a0a0a] text-center space-y-6 flex flex-col items-center justify-center min-h-[400px] transition-all duration-500">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black mb-2 animate-pulse">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Thank you!</h3>
              <p className="text-textGray max-w-md text-base leading-relaxed">
                Your inquiry has been sent successfully. We&apos;ll review your project details and get back to you within 24 hours.
              </p>
              <button
                type="button"
                onClick={() => setSubmitStatus(null)}
                className="mt-4 px-8 py-3 border border-[#333] hover:border-white rounded-full text-sm font-medium transition-colors"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={isSubmitting}
                  className="flex-1 bg-transparent border-none outline-none text-white text-lg placeholder:text-[#333] focus:placeholder:text-[#555] transition-colors disabled:opacity-50"
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                  className="flex-1 bg-transparent border-none outline-none text-white text-lg placeholder:text-[#333] focus:placeholder:text-[#555] transition-colors disabled:opacity-50"
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
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  disabled={isSubmitting}
                  className="flex-1 bg-transparent border-none outline-none text-white text-lg placeholder:text-[#333] focus:placeholder:text-[#555] transition-colors disabled:opacity-50"
                />
              </div>

              {/* Service */}
              <div className="py-6">
                <label className="text-sm font-medium text-textGray mb-4 block">
                  What do you need? * {serviceError && <span className="text-red-500 ml-2">(Please select at least one service)</span>}
                </label>
                <div className="flex flex-wrap gap-2">
                  {services.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => {
                        setSelectedService(s);
                        setServiceError(false);
                      }}
                      disabled={isSubmitting}
                      className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${selectedService === s
                        ? "bg-white text-black border-white"
                        : "bg-transparent text-textGray border-[#333] hover:border-white hover:text-white"
                        } disabled:opacity-50`}
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
                      disabled={isSubmitting}
                      className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${selectedBudget === b
                        ? "bg-white text-black border-white"
                        : "bg-transparent text-textGray border-[#333] hover:border-white hover:text-white"
                        } disabled:opacity-50`}
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
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  disabled={isSubmitting}
                  className="w-full bg-transparent border border-[#222] rounded-2xl p-4 outline-none text-white text-base placeholder:text-[#333] focus:border-[#444] transition-colors resize-none disabled:opacity-50"
                />
              </div>

              {/* Error Message */}
              {submitStatus === "error" && (
                <div className="py-4 text-sm text-red-500 bg-red-950/20 border-y border-red-900/40 px-4">
                  {errorMessage}
                </div>
              )}

              {/* Submit */}
              <div className="py-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-10 py-4 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-colors text-base disabled:bg-gray-400 disabled:text-gray-700 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send inquiry"
                  )}
                </button>
                <p className="mt-4 text-xs text-textGray">
                  By submitting, you agree to our{" "}
                  <Link href="/privacy" className="underline hover:text-white transition-colors">
                    privacy policy
                  </Link>. We&apos;ll never share your information.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
