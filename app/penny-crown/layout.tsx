import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Penny Crown Tavern | Classic Tavern Dining in Calgary",
  description: "Experience classic tavern-style dining at Penny Crown Tavern in Calgary. Enjoy hearty meals, craft beers, and a warm, welcoming atmosphere perfect for friends and family.",
  keywords: ["Penny Crown Tavern", "Calgary restaurant", "tavern dining", "Calgary pub", "classic tavern", "Calgary dining", "restaurant Calgary"],
  authors: [{ name: "Penny Crown Tavern" }],
  openGraph: {
    title: "Penny Crown Tavern | Classic Tavern Dining in Calgary",
    description: "Experience classic tavern-style dining at Penny Crown Tavern in Calgary. Enjoy hearty meals, craft beers, and a warm, welcoming atmosphere.",
    type: "website",
    locale: "en_CA",
    siteName: "Penny Crown Tavern",
    images: [
      {
        url: "/images/pennycrowns/pennycrownfoods.webp",
        width: 1200,
        height: 630,
        alt: "Penny Crown Tavern",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Penny Crown Tavern | Classic Tavern Dining in Calgary",
    description: "Experience classic tavern-style dining at Penny Crown Tavern in Calgary.",
    images: ["/images/pennycrowns/pennycrownfoods.webp"],
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
    canonical: "/penny-crown",
  },
};

export default function PennyCrownLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
