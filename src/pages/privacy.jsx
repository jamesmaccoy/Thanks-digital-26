import Head from "next/head";
import LegalHero from "@/components/legal/LegalHero";
import LegalHighlights from "@/components/legal/LegalHighlights";
import LegalContent from "@/components/legal/LegalContent";
import LegalCTA from "@/components/legal/LegalCTA";
import { privacyLastUpdated, privacySections, legalHighlights } from "@/components/legal/legalData";

export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy | OPTIMA Agency</title>
        <meta
          name="description"
          content="Learn how OPTIMA collects, uses, and protects your personal information. We're committed to transparency and your privacy rights."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="selection:bg-white selection:text-black">
        <LegalHero
          title="Privacy Policy"
          subtitle="Your privacy matters to us. This policy explains what information we collect, how we use it, and the rights you have over your personal data."
          lastUpdated={privacyLastUpdated}
          variant="privacy"
        />
        <LegalHighlights highlights={legalHighlights.privacy} />
        <LegalContent sections={privacySections} />
        <LegalCTA variant="privacy" />
      </div>
    </>
  );
}
