'use client';

import '../../src/restaurants/OrderStore.css';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { AboutSection } from './components/AboutSection';
import { LocationSection } from './components/LocationSection';
import { InstagramSection } from './components/InstagramSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { useMobileMenu } from './components/hooks/useMobileMenu';

export default function BriocheAvitusPage() {
  const { isMobileMenuOpen, toggleMobileMenu } = useMobileMenu();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Brioche by Avitus",
    "description": "A relaxed South of France inspired bistro located between Marda Loop and Mont Royal in Calgary. We serve simple yet refined French cuisine, crafted with local ingredients and a warm Mediterranean spirit.",
    "servesCuisine": "French",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1512 29 Avenue Southwest",
      "addressLocality": "Calgary",
      "addressRegion": "AB",
      "postalCode": "T2T 1M3",
      "addressCountry": "CA"
    },
    "telephone": "+14032222222",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "11:30",
        "closes": "22:00"
      }
    ],
    "image": "/images/brioche-instagram/brioche4.png",
    "url": "https://www.instagram.com/briochebyavitus.yyc/"
  };

  return (
    <div className="order-store">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header 
        isMobileMenuOpen={isMobileMenuOpen}
        onToggleMobileMenu={toggleMobileMenu}
      />
      <Hero />
      <MenuSection />
      <AboutSection />
      <LocationSection />
      <InstagramSection />
      <CTASection />
      <Footer />
    </div>
  );
}
