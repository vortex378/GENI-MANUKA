import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Manuka Albania - Mjalte Premium Manuka nga Zelanda e Re",
  description:
    "Manuka Albania ofron mjaltë premium Manuka nga Zelanda e Re. Mjalte autentik me MGO të lartë për shëndet dhe mirëqenie. Porosite online në Shqipëri.",
  keywords:
    "manuka albania, mjalte manuka, manuka honey albania, mjalte premium, MGO manuka, zelanda e re, shqiperi, mjalte natyror",
  openGraph: {
    title: "Manuka Albania - Mjalte Premium Manuka",
    description: "Mjalte premium Manuka nga Zelanda e Re në Shqipëri. Cilësi e garantuar dhe çmime konkurruese.",
    url: "https://manuka-albania.com",
    siteName: "Manuka Albania",
    locale: "sq_AL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manuka Albania - Mjalte Premium Manuka",
    description: "Mjalte premium Manuka nga Zelanda e Re në Shqipëri",
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
  verification: {
    google: "your-google-verification-code",
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sq">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
