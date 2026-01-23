import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Émber Restaurant | Fine Dining Experience",
  description: "Where culinary artistry meets timeless elegance. Experience seasonal ingredients transformed into unforgettable moments at Émber Restaurant.",
  keywords: [
    "Émber Restaurant",
    "fine dining",
    "restaurant",
    "culinary excellence",
    "Michelin star restaurant",
    "gourmet dining",
    "fine cuisine",
  ],
  authors: [{ name: "Émber Restaurant" }],
  openGraph: {
    title: "Émber Restaurant | Fine Dining Experience",
    description: "Where culinary artistry meets timeless elegance. Experience seasonal ingredients transformed into unforgettable moments.",
    type: "website",
    locale: "en_US",
    siteName: "Émber Restaurant",
    images: [
      {
        url: "/images/ember/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Émber Restaurant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Émber Restaurant | Fine Dining Experience",
    description: "Where culinary artistry meets timeless elegance.",
    images: ["/images/ember/hero.jpg"],
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
    canonical: "/ember",
  },
};

export default function EmberLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
