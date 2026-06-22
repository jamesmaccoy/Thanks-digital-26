import Head from "next/head";
import HeroSection from "@/components/home/HeroSection";
import ClientsMarquee from "@/components/home/ClientsMarquee";
import ManifestoSection from "@/components/home/ManifestoSection";
import CaseStudies from "@/components/home/CaseStudies";
import StatsSection from "@/components/home/StatsSection";
import ServicesSection from "@/components/home/ServicesSection";
import ProcessSection from "@/components/home/ProcessSection";
import PricingSection from "@/components/home/PricingSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQSection from "@/components/home/FAQSection";
import BlogSection from "@/components/home/BlogSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Optima Agency | A design studio, built different.</title>
        <meta
          name="description"
          content="We've reimagined how great design happens. No pitches. No proposals. Just exceptional work from senior designers who become an extension of your team."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="selection:bg-white selection:text-black">
        <HeroSection />
        <ClientsMarquee />
        <ManifestoSection />
        <CaseStudies />
        <StatsSection />
        <ServicesSection />
        <ProcessSection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <BlogSection />
      </div>
    </>
  );
}
