import Head from "next/head";
import ProcessHero from "@/components/process/ProcessHero";
import ProcessJourney from "@/components/process/ProcessJourney";
import ProcessTimeline from "@/components/process/ProcessTimeline";
import ProcessTeam from "@/components/process/ProcessTeam";
import ProcessTools from "@/components/process/ProcessTools";
import ProcessPrinciples from "@/components/process/ProcessPrinciples";
import ProcessFAQ from "@/components/process/ProcessFAQ";
import ProcessCTA from "@/components/process/ProcessCTA";

export default function ProcessPage() {
  return (
    <>
      <Head>
        <title>Thanks Digital Process | How we deliver results, not surprises</title>
        <meta
          name="description"
          content="Explore Thanks Digital's proven process from discovery to delivery. Transparent, structured, and refined over 172+ projects."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="selection:bg-white selection:text-black">
        <ProcessHero />
        <ProcessJourney />
        <ProcessTimeline />
        <ProcessTeam />
        <ProcessTools />
        <ProcessPrinciples />
        <ProcessFAQ />
        <ProcessCTA />
      </div>
    </>
  );
}
