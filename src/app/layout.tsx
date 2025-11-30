import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";
import Nav from "./components/nav";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TimelessKashi — Varanasi Tour Packages & Bookings",
  description:
    "TimelessKashi (formerly BanarasBound) offers curated Varanasi tour packages, Ganga Aarti experiences, Sarnath visits, and local guided trips. Book affordable, hassle-free itineraries for small groups and private tours.",
  keywords: [
    "Varanasi tour packages",
    "Varanasi trips",
    "Ganga Aarti",
    "Banaras tours",
    "TimelessKashi",
    "Sarnath tour",
    "Varanasi travel guide",
    "boat ride Varanasi",
    "Varanasi packages",
    "Varanasi itinerary"
  ],
  openGraph: {
    title: "TimelessKashi — Varanasi Tour Packages & Bookings",
    description:
      "Curated Varanasi tour packages: witness the Ganga Aarti, explore temples, and experience the city's timeless culture. Affordable itineraries and expert local guides.",
    url: "https://your-domain.com",
    siteName: "TimelessKashi",
    images: [
      {
        url: "/carousel/e83ec978-76a8-4503-a983-db45ec0e28b1.jpg",
        width: 1200,
        height: 630,
        alt: "TimelessKashi Varanasi Boat Ride",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TimelessKashi — Varanasi Tour Packages",
    description:
      "Book Varanasi tours, Ganga Aarti experiences, and Sarnath visits with TimelessKashi. Small groups and private itineraries available.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${playfair.variable} ${outfit.variable} font-sans antialiased bg-[#fffbf2] text-neutral-900`}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
