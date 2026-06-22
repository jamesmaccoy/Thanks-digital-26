import Head from "next/head";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesOverview from "@/components/services/ServicesOverview";
import ServicesDeliverables from "@/components/services/ServicesDeliverables";
import ServicesProcess from "@/components/services/ServicesProcess";
import ServicesStack from "@/components/services/ServicesStack";
import ServicesPrinciples from "@/components/services/ServicesPrinciples";
import ServicesFAQ from "@/components/services/ServicesFAQ";
import ServicesCTA from "@/components/services/ServicesCTA";

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>OPTIMA Services | Full-spectrum design under one roof</title>
        <meta
          name="description"
          content="Explore OPTIMA's services brand identity, digital design, product design, marketing, and development. Senior-only team, no outsourcing."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="selection:bg-white selection:text-black">
        <ServicesHero />
        <ServicesOverview />
        <ServicesDeliverables />
        <ServicesProcess />
        <ServicesStack />
        <ServicesPrinciples />
        <ServicesFAQ />
        <ServicesCTA />
      </div>
    </>
  );
}
