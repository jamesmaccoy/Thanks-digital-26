import Head from "next/head";
import WorkHero from "@/components/work/WorkHero";
import WorkShowcase from "@/components/work/WorkShowcase";
import WorkCategories from "@/components/work/WorkCategories";
import WorkResults from "@/components/work/WorkResults";
import WorkProcess from "@/components/work/WorkProcess";
import WorkTestimonials from "@/components/work/WorkTestimonials";
import WorkFAQ from "@/components/work/WorkFAQ";
import WorkCTA from "@/components/work/WorkCTA";

export default function WorkPage() {
  return (
    <>
      <Head>
        <title>OPTIMA Work | Case studies & selected projects</title>
        <meta
          name="description"
          content="Explore OPTIMA's portfolio brand strategy, product design, web design, and design systems for the most ambitious companies."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="selection:bg-white selection:text-black">
        <WorkHero />
        <WorkShowcase />
        <WorkCategories />
        <WorkResults />
        <WorkProcess />
        <WorkTestimonials />
        <WorkFAQ />
        <WorkCTA />
      </div>
    </>
  );
}
