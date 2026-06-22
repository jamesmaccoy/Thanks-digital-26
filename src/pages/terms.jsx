import Head from "next/head";
import LegalHero from "@/components/legal/LegalHero";
import LegalHighlights from "@/components/legal/LegalHighlights";
import LegalContent from "@/components/legal/LegalContent";
import LegalCTA from "@/components/legal/LegalCTA";
import { termsLastUpdated, termsSections, legalHighlights } from "@/components/legal/legalData";

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>Terms of Service | OPTIMA Agency</title>
        <meta
          name="description"
          content="Read Thanks Digital's Terms of Service. Clear terms for our design services, intellectual property rights, payment terms, and client obligations."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="selection:bg-white selection:text-black">
        <LegalHero
          title="Terms Service"
          subtitle="These terms govern your use of Thanks Digital's design services. We believe in transparent, fair agreements that protect both parties and set clear expectations."
          lastUpdated={termsLastUpdated}
          variant="terms"
        />
        <LegalHighlights highlights={legalHighlights.terms} />
        <LegalContent sections={termsSections} />
        <LegalCTA variant="terms" />
      </div>
    </>
  );
}
