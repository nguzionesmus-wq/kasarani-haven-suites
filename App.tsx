import { useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Gallery } from "./components/Gallery";
import { Amenities } from "./components/Amenities";
import { Pricing } from "./components/Pricing";
import { BookingCalendar } from "./components/BookingCalendar";
import { Blog } from "./components/Blog";
import { NewsletterSubscribe } from "./components/NewsletterSubscribe";
import { Reviews } from "./components/Reviews";
import { Location } from "./components/Location";
import { TermsSection } from "./components/TermsAndConditions";
import { Contact } from "./components/Contact";
import { CookieConsent } from "./components/CookieConsent";
import { WhatsAppWidget } from "./components/WhatsAppWidget";
import { SEO_DESCRIPTION, SEO_KEYWORDS } from "./data/content";

export default function App() {
  useEffect(() => {
    // Set SEO meta tags
    document.title = "Best Airbnb in Kasarani | Kasarani Haven Suites - Affordable Accommodation";
    
    // Description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", SEO_DESCRIPTION);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = SEO_DESCRIPTION;
      document.head.appendChild(meta);
    }

    // Keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute("content", SEO_KEYWORDS.join(", "));
    } else {
      const meta = document.createElement("meta");
      meta.name = "keywords";
      meta.content = SEO_KEYWORDS.join(", ");
      document.head.appendChild(meta);
    }

    // Add metallic logo CSS animation - INSIDE GLOW ONLY
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes shineHeader {
        0% { 
          filter: brightness(1.3) contrast(1.4) saturate(1.3);
        }
        50% { 
          filter: brightness(1.7) contrast(1.7) saturate(1.5);
        }
        100% { 
          filter: brightness(1.3) contrast(1.4) saturate(1.3);
        }
      }
      
      @keyframes shineFooter {
        0% { 
          filter: brightness(1.2) contrast(1.3) saturate(1.2);
        }
        50% { 
          filter: brightness(1.6) contrast(1.6) saturate(1.4);
        }
        100% { 
          filter: brightness(1.2) contrast(1.3) saturate(1.2);
        }
      }
      
      .logo-shine-header {
        animation: shineHeader 2s ease-in-out infinite;
      }
      
      .logo-shine-footer {
        animation: shineFooter 2s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Gallery />
        <Amenities />
        <Pricing />
        <BookingCalendar />
        <Reviews />
        <Blog />
        <NewsletterSubscribe />
        <Location />
        <TermsSection />
        <Contact />
      </main>
      <CookieConsent />
      <WhatsAppWidget />
    </div>
  );
}