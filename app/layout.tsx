import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://unik-cookies.com"),
  title: "UNIK Cookies — Cookies d'Exception Artisanaux",
  description:
    "Découvrez UNIK, des cookies artisanaux d'exception préparés avec des ingrédients soigneusement sélectionnés. Une expérience gourmande unique, généreuse et mémorable. Commandez maintenant.",
  keywords: [
    "cookies artisanaux",
    "cookies premium",
    "cookies chocolat",
    "UNIK cookies",
    "pâtisserie artisanale",
    "cookies maison",
    "cookies livraison",
    "cookies moelleux",
  ],
  authors: [{ name: "UNIK Cookies" }],
  creator: "UNIK Cookies",
  openGraph: {
    title: "UNIK Cookies — Cookies d'Exception",
    description:
      "Des cookies généreux, moelleux, gourmands et mémorables. Préparés avec passion et des ingrédients d'exception.",
    url: "https://unik-cookies.com",
    siteName: "UNIK Cookies",
    images: [
      {
        url: "/hero_cookie.png",
        width: 1200,
        height: 630,
        alt: "UNIK Cookies — Cookies d'Exception Artisanaux",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UNIK Cookies — Cookies d'Exception",
    description: "Des cookies artisanaux premium, préparés avec amour.",
    images: ["/hero_cookie.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Bakery",
              name: "UNIK Cookies",
              description:
                "Cookies artisanaux d'exception préparés avec des ingrédients soigneusement sélectionnés.",
              url: "https://unik-cookies.com",
              image: "https://unik-cookies.com/hero_cookie.png",
              priceRange: "€€",
              servesCuisine: "French Pastry",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Nos Cookies",
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
