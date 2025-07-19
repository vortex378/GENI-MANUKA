import type { Metadata } from "next"

interface PageMetaProps {
  title: string
  description: string
  keywords?: string
  path?: string
}

export function generatePageMetadata({
  title,
  description,
  keywords = "manuka albania, mjalte manuka, manuka honey albania, mjalte premium, MGO manuka, zelanda e re, shqiperi",
  path = "",
}: PageMetaProps): Metadata {
  const baseUrl = "https://manuka-albania.com"
  const fullUrl = `${baseUrl}${path}`

  return {
    title: `${title} | Manuka Albania`,
    description,
    keywords,
    openGraph: {
      title: `${title} | Manuka Albania`,
      description,
      url: fullUrl,
      siteName: "Manuka Albania",
      locale: "sq_AL",
      type: "website",
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: "Manuka Albania - Mjalte Premium Manuka",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Manuka Albania`,
      description,
      images: [`${baseUrl}/og-image.jpg`],
    },
    alternates: {
      canonical: fullUrl,
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}
