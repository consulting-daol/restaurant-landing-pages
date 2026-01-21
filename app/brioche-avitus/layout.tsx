import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brioche by Avitus | French Bistro in Marda Loop, Calgary",
  description: "Brioche is a relaxed South of France inspired bistro located between Marda Loop and Mont Royal in Calgary. We serve simple yet refined French cuisine, crafted with local ingredients and a warm Mediterranean spirit. From brunch to dinner, enjoy comforting classics like brioche sandwiches, seafood dishes, and seasonal specialties all paired with a curated wine list and creative cocktails.",
  keywords: [
    "Brioche by Avitus",
    "French bistro Calgary",
    "Marda Loop restaurant",
    "French cuisine Calgary",
    "Calgary bistro",
    "French restaurant Calgary",
    "brioche sandwiches",
    "French wine Calgary",
    "Mediterranean cuisine Calgary",
    "Calgary dining",
  ],
  authors: [{ name: "Brioche by Avitus" }],
  openGraph: {
    title: "Brioche by Avitus | French Bistro in Marda Loop, Calgary",
    description: "A relaxed South of France inspired bistro serving simple yet refined French cuisine with local ingredients and a warm Mediterranean spirit. Enjoy brunch to dinner with curated French wines.",
    type: "website",
    locale: "en_CA",
    siteName: "Brioche by Avitus",
    images: [
      {
        url: "/images/brioche-instagram/brioche4.png",
        width: 1200,
        height: 630,
        alt: "Brioche by Avitus French Bistro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brioche by Avitus | French Bistro in Marda Loop, Calgary",
    description: "A relaxed South of France inspired bistro serving simple yet refined French cuisine with local ingredients.",
    images: ["/images/brioche-instagram/brioche4.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/brioche-avitus",
  },
  other: {
    "restaurant:contact_info:street_address": "1512 29 Avenue Southwest",
    "restaurant:contact_info:locality": "Calgary",
    "restaurant:contact_info:region": "AB",
    "restaurant:contact_info:postal_code": "T2T 1M3",
    "restaurant:contact_info:country_name": "Canada",
    "restaurant:contact_info:phone_number": "+14032222222",
  },
};

export default function BriocheAvitusLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
