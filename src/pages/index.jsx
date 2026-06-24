import { useEffect, useState } from "react";
import Script from "next/script";
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
  const [firebaseAppLoaded, setFirebaseAppLoaded] = useState(false);
  const [firestoreLoaded, setFirestoreLoaded] = useState(false);
  
  useEffect(() => {
    // This code only runs in the browser, safely after jQuery and scripts load
    const initializeScripts = () => {
      console.log("[Antigravity Debug] initializeScripts triggered");
      if (typeof window === "undefined") return;
      if (!window.jQuery) {
        console.log("[Antigravity Debug] jQuery not found, retrying in 100ms");
        // Retry polling in 100ms
        setTimeout(initializeScripts, 100);
        return;
      }
      console.log("[Antigravity Debug] jQuery successfully loaded");
      const jQuery = window.jQuery;
      const $ = window.jQuery;

      // 1. Dynamically Show Price 
      $(".price-container").each(function () {
        var containerID = $(this).attr("id"); 
        var priceSpan = $(this).find(".price"); 
        jQuery
          .getJSON("/api/v1/get_package", { type: containerID })
          .done(function (resp) {
            if (resp?.status === true && resp?.data?.price != null) {
              priceSpan.text(resp.data.price);
            } else {
              console.error("Price not found:", resp?.data);
              priceSpan.text("-");
            }
          })
          .fail(function (xhr) {
            console.error("Price lookup failed:", xhr.responseText);
            priceSpan.text("-");
          });
      });

      // 2. Gallery Toggling
      $(document).off("click", ".custom_point_list .custom_point_click").on("click", ".custom_point_list .custom_point_click", function(){
        console.log("[Antigravity Debug] Gallery toggle clicked:", this);
        $(".custom_point_click").removeClass("click_active");
        $(this).addClass("click_active");
        var custom_click = $(this).attr("data-sl");
        $(".custom_click_image").removeClass("image_show");
        $( ".click_gallery .custom_click_image" ).each(function() {
          var custom_img_click = $(this).attr("data-sl");
          if(custom_click == custom_img_click) {
            $(this).addClass("image_show");
          }
        });             
      });

      // 3. Checkout Link Generation
      $(document).off("click", ".payment_url").on("click", ".payment_url", function (e) {
        console.log("[Antigravity Debug] Payment button clicked:", this);
        e.preventDefault();
        var buttonValue = $(this).attr("data-id") || $(this).data("id"); 
        console.log("[Antigravity Debug] buttonValue parsed:", buttonValue);
        if (buttonValue) {
          jQuery.ajax({
            url: "/api/v1/generate_checkout_link",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify({ type: buttonValue }),
            success: function (request) {
              console.log("[Antigravity Debug] AJAX success:", request);
              if (request?.status === true && request?.data?.redirectUrl) {
                window.location.href = request.data.redirectUrl;
              } else {
                console.error("Checkout error:", request?.data);
                alert("Could not start payment. Please try again or contact us.");
              }
            },
            error: function (xhr) {
              console.error("Checkout request failed:", xhr.responseText);
              alert("Could not start payment. Please try again or contact us.");
            },
          });
        }
      });
    };

    // Run the initialization logic
    initializeScripts();
  }, []);

  return (
    <>
      {/* Load jQuery */}
      <Script 
        src="https://code.jquery.com/jquery-3.6.0.min.js" 
        strategy="afterInteractive" 
      />
      {/* Load Firebase Core */}
      <Script 
        src="https://www.gstatic.com/firebasejs/8.8.1/firebase-app.js" 
        strategy="afterInteractive" 
        onLoad={() => setFirebaseAppLoaded(true)}
      />
      {/* Load Firebase Firestore */}
      {firebaseAppLoaded && (
        <Script 
          src="https://www.gstatic.com/firebasejs/8.8.1/firebase-firestore.js" 
          strategy="afterInteractive" 
          onLoad={() => setFirestoreLoaded(true)}
        />
      )}
      {/* Load your local firebase configurations */}
      {firestoreLoaded && (
        <Script 
          src="/js/firebase.js" 
          strategy="afterInteractive" 
        />
      )}

      <Head>
        <title>Thanks Digital | A digital design partner for startups and brave businesses</title>
        <meta
          name="description"
          content="A digital design partner for startups and brave businesses"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="selection:bg-white selection:text-black">
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
      </main>
    </>
  );
}
