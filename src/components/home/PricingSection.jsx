import { useState, useEffect, useRef, useCallback } from "react";
import gsap from "gsap";

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
          ref.current.textContent = "$" + Math.round(obj.val).toLocaleString();
        }
      },
    });
    prevValue.current = value;
  }, [value, duration]);

  return <span ref={ref} className="text-4xl lg:text-5xl font-bold">${value.toLocaleString()}</span>;
}

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <section id="pricing" className="py-20 lg:py-32 px-6 md:px-20 border-t border-[#222] 3xl:max-w-[1400px] 3xl:mx-auto">
      <div className="mb-12 lg:mb-20">
        <h2 className="text-4xl md:text-5xl lg:text-8xl font-bold tracking-tighter mb-4 lg:mb-6">
          Built to scale
        </h2>
        <p className="text-xl text-textGray max-w-2xl">
          Choose the engagement model that works for your business. Start small
          and grow with confidence, or jump straight into transformative projects.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Plan 1 */}
        <div className="bg-[#111] border border-[#222] p-6 lg:p-8 rounded-2xl hover:border-[#444] transition-colors">
          <h3 className="text-2xl font-medium mb-2">Growth</h3>
          <p className="text-sm text-textGray mb-8">
            Perfect for growing businesses needing steady design needs.
          </p>
          <div className="flex gap-2 mb-8 bg-black p-1 rounded-lg w-fit border border-[#333]">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 py-1.5 rounded-md text-sm transition-colors ${
                billingCycle === "monthly" ? "bg-[#222]" : ""
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("quarterly")}
              className={`px-4 py-1.5 text-sm transition-colors ${
                billingCycle === "quarterly" ? "bg-[#222]" : "text-textGray"
              }`}
            >
              Quarterly
            </button>
          </div>
          <div className="mb-8">
            <AnimatedPrice value={billingCycle === "monthly" ? 7500 : 6500} />{" "}
            <span className="text-textGray">/ month</span>
          </div>
          <button className="w-full py-4 bg-white text-black font-medium rounded-xl hover:bg-gray-200 transition-colors mb-10">
            Start Now
          </button>

          <h4 className="text-sm font-semibold mb-4 text-white">What&apos;s included.</h4>
          <ul className="space-y-3 text-sm text-textGray">
            <li className="flex gap-3">
              <span className="text-white">+</span> 45 hours of dedicated design time
            </li>
            <li className="flex gap-3">
              <span className="text-white">+</span> Two active projects at a time
            </li>
            <li className="flex gap-3">
              <span className="text-white">+</span> Twice-weekly syncs
            </li>
            <li className="flex gap-3">
              <span className="text-white">+</span> 24-hour response time
            </li>
            <li className="flex gap-3">
              <span className="text-white">+</span> Unused hours roll over
            </li>
          </ul>
        </div>

        {/* Plan 2 */}
        <div className="bg-[#1a1a1a] border border-[#333] p-6 lg:p-8 rounded-2xl relative shadow-2xl mt-4 lg:mt-0">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
            Popular
          </div>
          <h3 className="text-2xl font-medium mb-2">Scale</h3>
          <p className="text-sm text-textGray mb-8">
            For teams that need to move fast and ship often.
          </p>
          <div className="flex gap-2 mb-8 bg-black p-1 rounded-lg w-fit border border-[#333]">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 py-1.5 rounded-md text-sm transition-colors ${
                billingCycle === "monthly" ? "bg-[#222]" : ""
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("quarterly")}
              className={`px-4 py-1.5 text-sm transition-colors ${
                billingCycle === "quarterly" ? "bg-[#222]" : "text-textGray"
              }`}
            >
              Quarterly
            </button>
          </div>
          <div className="mb-8">
            <AnimatedPrice value={billingCycle === "monthly" ? 15000 : 12500} />{" "}
            <span className="text-textGray">/ month</span>
          </div>
          <button className="w-full py-4 bg-white text-black font-medium rounded-xl hover:bg-gray-200 transition-colors mb-10">
            Start Now
          </button>

          <h4 className="text-sm font-semibold mb-4 text-white">What&apos;s included.</h4>
          <ul className="space-y-3 text-sm text-textGray">
            <li className="flex gap-3">
              <span className="text-white">+</span> 100 hours of dedicated design time
            </li>
            <li className="flex gap-3">
              <span className="text-white">+</span> Unlimited active projects
            </li>
            <li className="flex gap-3">
              <span className="text-white">+</span> Daily syncs available
            </li>
            <li className="flex gap-3">
              <span className="text-white">+</span> Same-day response time
            </li>
            <li className="flex gap-3">
              <span className="text-white">+</span> Unused hours roll over
            </li>
          </ul>
        </div>

        {/* Plan 3 */}
        <div className="bg-[#111] border border-[#222] p-6 lg:p-8 rounded-2xl hover:border-[#444] transition-colors">
          <h3 className="text-2xl font-medium mb-2">Custom Project</h3>
          <p className="text-sm text-textGray mb-14">
            Clear scope, fixed timeline, no surprises.
          </p>
          <div className="mb-14">
            <div className="text-textGray text-sm mb-2">Starts at</div>
            <span className="text-4xl lg:text-5xl font-bold">$10,000</span>
          </div>
          <button className="w-full py-4 bg-transparent border border-white text-white font-medium rounded-xl hover:bg-[#222] transition-colors mb-10">
            Get Quote
          </button>

          <div className="bg-[#1a1a1a] p-4 rounded-xl flex items-start gap-4">
            <img
              src="/images/avatars/sarah-park.webp"
              alt=""
              className="w-12 h-12 rounded-full object-cover grayscale flex-shrink-0"
            />
            <div>
              <div className="font-medium text-sm">Sarah Park</div>
              <div className="text-xs text-textGray mb-2">Project Manager</div>
              <p className="text-xs text-textGray">
                Tell us about your design needs, team size, and project volume.
                We&apos;ll help you choose the right plan within 3-5 days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
