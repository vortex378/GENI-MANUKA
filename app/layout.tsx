import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Manuka Albania - Mjalte Premium Manuka nga Zelanda e Re",
  description:
    "Manuka Albania ofron mjaltë premium Manuka nga Zelanda e Re. Mjalte autentik me MGO të lartë për shëndet dhe mirëqenie. Porosite online në Shqipëri me dërgesa në të gjithë vendin.",
  keywords: [
    "manuka albania",
    "mjalte manuka",
    "manuka honey albania",
    "mjalte premium",
    "MGO manuka",
    "zelanda e re",
    "shqiperi",
    "mjalte natyror",
    "manuka health",
    "koru manuka",
    "mjalte antibakterial",
    "manuka shqiperi",
  ].join(", "),
  authors: [{ name: "Manuka Albania" }],
  creator: "Manuka Albania",
  publisher: "Manuka Albania",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://manuka-albania.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Manuka Albania - Mjalte Premium Manuka nga Zelanda e Re",
    description:
      "Mjalte premium Manuka nga Zelanda e Re në Shqipëri. Cilësi e garantuar dhe çmime konkurruese. Porosite tani!",
    url: "https://manuka-albania.com",
    siteName: "Manuka Albania",
    locale: "sq_AL",
    type: "website",
    images: [
      {
        url: "/og-manuka-albania.jpg",
        width: 1200,
        height: 630,
        alt: "Manuka Albania - Mjalte Premium Manuka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manuka Albania - Mjalte Premium Manuka",
    description: "Mjalte premium Manuka nga Zelanda e Re në Shqipëri",
    images: ["/og-manuka-albania.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "manuka-albania-verification",
  },
  category: "food",
  classification: "business",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sq" dir="ltr">
      <head>
        <meta name="theme-color" content="#d97706" />
        <meta name="msapplication-TileColor" content="#d97706" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Manuka Albania" />
        <meta name="application-name" content="Manuka Albania" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileImage" content="/mstile-144x144.png" />

        {/* Geo tags */}
        <meta name="geo.region" content="AL" />
        <meta name="geo.country" content="Albania" />
        <meta name="geo.placename" content="Tirana" />
        <meta name="ICBM" content="41.3275, 19.8187" />

        {/* Business info */}
        <meta name="contact" content="info@manuka-albania.com" />
        <meta name="author" content="Manuka Albania" />
        <meta name="reply-to" content="info@manuka-albania.com" />
        <meta name="owner" content="Manuka Albania" />
        <meta name="url" content="https://manuka-albania.com" />
        <meta name="identifier-URL" content="https://manuka-albania.com" />
        <meta name="directory" content="submission" />
        <meta name="category" content="Business, Food, Health" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="7 days" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Manuka Albania",
              alternateName: "Manuka Albania",
              description: "Manuka Albania ofron mjaltë premium Manuka nga Zelanda e Re në Shqipëri",
              url: "https://manuka-albania.com",
              logo: "https://manuka-albania.com/logo-manuka-albania.png",
              image: "https://manuka-albania.com/og-manuka-albania.jpg",
              telephone: "+355697320453",
              email: "info@manuka-albania.com",
              address: {
                "@type": "PostalAddress",
                addressCountry: "AL",
                addressLocality: "Tirana",
                addressRegion: "Tirana",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "41.3275",
                longitude: "19.8187",
              },
              areaServed: {
                "@type": "Country",
                name: "Albania",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+355697320453",
                contactType: "customer service",
                availableLanguage: ["Albanian", "English"],
                areaServed: "AL",
              },
              sameAs: ["https://www.instagram.com/manuka_mjalte_albania_2014"],
              foundingDate: "2014",
              slogan: "Mjalte Premium Manuka nga Zelanda e Re",
              brand: {
                "@type": "Brand",
                name: "Manuka Albania",
              },
            }),
          }}
        />

        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://manuka-albania.com",
              name: "Manuka Albania",
              image: "https://manuka-albania.com/og-manuka-albania.jpg",
              telephone: "+355697320453",
              email: "info@manuka-albania.com",
              address: {
                "@type": "PostalAddress",
                addressCountry: "AL",
                addressLocality: "Tirana",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "41.3275",
                longitude: "19.8187",
              },
              url: "https://manuka-albania.com",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "09:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "10:00",
                  closes: "16:00",
                },
              ],
              priceRange: "$$",
              currenciesAccepted: "ALL, EUR",
              paymentAccepted: "Cash, Bank Transfer",
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
