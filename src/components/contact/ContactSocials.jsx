import { useState } from "react";
import { socials } from "@/components/contact/contactData";

export default function ContactSocials() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null); // 'submitting' | 'success' | 'error' | null
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email || !email.trim()) return;

    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/v1/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email.trim(), source: "ContactSocials" }),
      });

      const data = await response.json();

      if (response.ok && data.status) {
        setStatus("success");
        setMessage(data.data?.message || "Successfully subscribed!");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.data || "Something went wrong.");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      setStatus("error");
      setMessage("Failed to subscribe. Please try again.");
    }
  };

  return (
    <section className="py-16 lg:py-24 px-6 md:px-10 border-t border-[#222] 3xl:max-w-[1400px] 3xl:mx-auto">
      <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6 mb-12 lg:mb-16">
        <div>
          <div className="text-xs uppercase tracking-[0.28em] text-textGray mb-4">
            Community
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter">
            Follow along.
          </h2>
        </div>
        <p className="text-textGray text-sm md:text-base max-w-sm leading-relaxed">
          Behind-the-scenes process, new case studies, and design thinking — all
          shared in real time.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.href}
            className="rounded-2xl border border-[#222] bg-[#111] p-5 lg:p-6 hover:border-[#444] hover:bg-[#1a1a1a] transition-colors group block"
          >
            <h3 className="text-lg font-medium mb-1 group-hover:text-white transition-colors">
              {social.name}
            </h3>
            <p className="text-sm text-textGray mb-4">{social.handle}</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-textGray">
                {social.followers} followers
              </span>
              <span className="text-textGray group-hover:text-white transition-colors text-lg">
                ↗
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* Newsletter — matches footer style */}
      <div className="mt-10 rounded-2xl border border-[#222] bg-[#0a0a0a] p-6 lg:p-8 flex flex-col md:flex-row md:items-center gap-6">
        <div className="flex-1">
          <h3 className="text-xl font-medium mb-2">
            Design insights, monthly.
          </h3>
          <p className="text-sm text-textGray leading-relaxed">
            Curated essays on design strategy, process, and culture. No spam,
            unsubscribe anytime.
          </p>
        </div>
        
        <div className="md:w-[340px] flex flex-col gap-2">
          {status === "success" ? (
            <div className="text-left text-sm py-2">
              <p className="text-white font-medium">🎉 {message}</p>
              <button
                onClick={() => setStatus(null)}
                className="mt-1 text-xs text-textGray underline hover:text-white transition-colors"
              >
                Subscribe another email
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex border-b border-[#333] pb-2 w-full">
              <input
                type="email"
                required
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "submitting"}
                className="bg-transparent border-none outline-none w-full text-white placeholder:text-[#555] disabled:opacity-50"
              />
              <button 
                type="submit"
                disabled={status === "submitting"}
                className="text-xl hover:text-gray-400 shrink-0 disabled:opacity-50"
              >
                {status === "submitting" ? "..." : "+"}
              </button>
            </form>
          )}
          {status === "error" && (
            <p className="text-xs text-red-500 text-left">{message}</p>
          )}
        </div>
      </div>
    </section>
  );
}
