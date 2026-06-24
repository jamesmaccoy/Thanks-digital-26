import "@/styles/globals.css";
import Layout from "@/layouts/Layout";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      {/* 2. Load the main Google Tag script */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-KZJEWMPVQN"
      />
      
      {/* 3. Initialize your Google Analytics configuration */}
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KZJEWMPVQN');
          `,
        }}
      />
      <Component {...pageProps} />
    </Layout>
    
  );
}
