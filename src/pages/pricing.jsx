import Head from "next/head";
import PricingHero from "@/components/pricing/PricingHero";
import PricingPlans from "@/components/pricing/PricingPlans";
import PricingComparison from "@/components/pricing/PricingComparison";
import PricingAddons from "@/components/pricing/PricingAddons";
import PricingProcess from "@/components/pricing/PricingProcess";
import PricingTestimonials from "@/components/pricing/PricingTestimonials";
import PricingFAQ from "@/components/pricing/PricingFAQ";
import PricingCTA from "@/components/pricing/PricingCTA";

export default function PricingPage() {
  return (
    <>
      <Head>
        <title>Thanks Digital Pricing | Transparent plans built to scale</title>
        <meta
          name="description"
          content="Simple, transparent pricing for world-class design. Monthly retainers, quarterly discounts, and enterprise plans. No hidden fees."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="selection:bg-white selection:text-black">
        <PricingHero />
        <PricingPlans />
        <PricingComparison />
        <PricingAddons />
        <PricingProcess />
        <PricingTestimonials />
        <PricingFAQ />
        <PricingCTA />
      </div>
    </>
  );
}
