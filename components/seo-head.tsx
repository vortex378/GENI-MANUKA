"use client"

import Head from "next/head"

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
  canonicalUrl?: string
  ogImage?: string
}

export default function SEOHead({
  title = "Manuka Albania - Mjalte Premium Manuka nga Zelanda e Re",
  description = "Manuka Albania ofron mjaltë premium Manuka nga Zelanda e Re. Mjalte autentik me MGO të lartë për shëndet dhe mirëqenie. Porosite online në Shqipëri.",
  keywords = "manuka albania, mjalte manuka, manuka honey albania, mjalte premium, MGO manuka, zelanda e re, shqiperi, mjalte natyror, manuka health, koru manuka",
  canonicalUrl = "https://manuka-albania.com",
  ogImage = "https://manuka-albania.com/og-image.jpg",
}: SEOHeadProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Manuka Albania",
    description: "Manuka Albania ofron mjaltë premium Manuka nga Zelanda e Re në Shqipëri",
    url: "https://manuka-albania.com",
    logo: "https://manuka-albania.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+355697320453",
      contactType: "customer service",
      availableLanguage: ["Albanian", "English"],
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "AL",
      addressLocality: "Tirana",
    },
    sameAs: ["https://www.instagram.com/manuka_mjalte_albania_2014"],
  }

  const productStructuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Mjalte Manuka Premium",
    description: "Mjalte premium Manuka nga Zelanda e Re me MGO të lartë",
    brand: {
      "@type": "Brand",
      name: "Manuka Albania",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "ALL",
      lowPrice: "2500",
      highPrice: "220000",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "150",
    },
  }

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Manuka Albania" />
      <meta property="og:locale" content="sq_AL" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional SEO */}
      <meta name="author" content="Manuka Albania" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="language" content="Albanian" />
      <meta name="geo.region" content="AL" />
      <meta name="geo.country" content="Albania" />
      <meta name="geo.placename" content="Tirana" />

      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productStructuredData) }} />
    </Head>
  )
}
