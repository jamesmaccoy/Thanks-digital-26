import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { plans } from "@/components/pricing/pricingData";

function AnimatedPrice({ value, duration = 0.8 }) {
  const ref = useRef(null);
  const prevValue = useRef(value);

  useEffect(() => {
    if (!ref.current) return;
    const obj = { val: prevValue.current };
    gsap.to(obj, {
      val: value,
      duration,
      ease: "power2.out",
      onUpdate: () => {
        if (ref.current) {
          ref.current.textContent = "R" + Math.round(obj.val).toLocaleString();
        }
      },
    });
    prevValue.current = value;
  }, [value, duration]);

  return (
    <span ref={ref} className="text-4xl lg:text-5xl font-bold">
      R{value.toLocaleString()}
    </span>
  );
}

export default function PricingPlans() {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [loading, setLoading] = useState(null);

  const handleCheckout = async (planName) => {
    const isEnterprise = planName.toLowerCase() === "enterprise";
    if (isEnterprise) {
      window.location.href = "/contact";
      return;
    }

    const packageId = `${planName.toLowerCase()}_${billingCycle}`;
    setLoading(packageId);

    try {
      const response = await fetch("/api/v1/generate_checkout_link", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ type: packageId }),
      });
      const data = await response.json();
      if (data?.status === true && data?.data?.redirectUrl) {
        window.location.href = data.data.redirectUrl;
      } else {
        console.error("Checkout failed:", data);
        alert("Could not start payment. Please try again or contact us.");
      }
    } catch (err) {
      console.error("Checkout error:", err);
      alert("Could not start payment. Please try again or contact us.");
    } finally {
      setLoading(null);
    }
  };

  return (
    <section
      id="plans"
      className="py-16 lg:py-24 px-6 md:px-10 border-t border-[#222] 3xl:max-w-[1400px] 3xl:mx-auto"
    >
      <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-10 lg:mb-16">
        <div>
          <div className="text-xs uppercase tracking-[0.28em] text-textGray mb-4">
            Plans
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter">
            Simple, transparent pricing.
          </h2>
        </div>

        {/* Global billing toggle */}
        <div className="flex gap-2 bg-[#111] p-1 rounded-lg w-fit border border-[#222]">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`px-5 py-2 rounded-md text-sm font-medium transition-colors ${
              billingCycle === "monthly" ? "bg-[#222] text-white" : "text-textGray"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle("quarterly")}
            className={`px-5 py-2 rounded-md text-sm font-medium transition-colors ${
              billingCycle === "quarterly" ? "bg-[#222] text-white" : "text-textGray"
            }`}
          >
            Quarterly
            <span className="ml-1.5 text-xs text-green-500">Save 15%</span>
          </button>
        </div>
      </div>

      {/* Plan cards — consistent with home PricingSection */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`p-6 lg:p-8 rounded-2xl transition-colors relative ${
              plan.popular
                ? "bg-[#1a1a1a] border border-[#333] shadow-2xl"
                : "bg-[#111] border border-[#222] hover:border-[#444]"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                Popular
              </div>
            )}

            <h3 className="text-2xl font-medium mb-2">{plan.name}</h3>
            <p className="text-sm text-textGray mb-8">{plan.description}</p>

            <div className="mb-8">
              <AnimatedPrice
                value={
                  billingCycle === "monthly"
                    ? plan.monthlyPrice
                    : plan.quarterlyPrice
                }
              />{" "}
              <span className="text-textGray">/ month</span>
            </div>

            <button
              onClick={() => handleCheckout(plan.name)}
              disabled={loading !== null}
              className={`w-full py-4 font-medium rounded-xl transition-colors mb-10 ${
                plan.ctaStyle === "filled"
                  ? "bg-white text-black hover:bg-gray-200"
                  : "bg-transparent border border-white text-white hover:bg-[#222]"
              } ${loading !== null ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {loading === `${plan.name.toLowerCase()}_${billingCycle}` ? "Loading..." : plan.cta}
            </button>

            <h4 className="text-sm font-semibold mb-4 text-white">
              What&apos;s included.
            </h4>
            <ul className="space-y-3 text-sm text-textGray">
              {plan.features.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <span className="text-white">+</span> {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
