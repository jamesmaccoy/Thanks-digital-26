import Head from "next/head";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactTeam from "@/components/contact/ContactTeam";
import ContactBooking from "@/components/contact/ContactBooking";
import ContactSocials from "@/components/contact/ContactSocials";
import ContactFAQ from "@/components/contact/ContactFAQ";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>OPTIMA Contact | Let&apos;s start talking</title>
        <meta
          name="description"
          content="Get in touch with OPTIMA. Project inquiries, partnership opportunities, and discovery calls. Offices in New York, London, and Singapore."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="selection:bg-white selection:text-black">
        <ContactHero />
        <ContactForm />
        <ContactInfo />
        <ContactTeam />
        <ContactBooking />
        <ContactSocials />
        <ContactFAQ />
      </div>
    </>
  );
}
