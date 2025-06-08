"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, Award, Shield, Instagram, ArrowRight, Sparkles, Crown } from "lucide-react"
import Navigation from "@/components/navigation"
import AnimatedSection from "@/components/animated-section"
import WhatsAppButton from "@/components/whatsapp-button"
import LoadingScreen from "@/components/loading-screen"
import ProductCardRow from "@/components/product-card-row"
import ManukaKoruShowcase from "@/components/manuka-koru-showcase"
import PageWrapper from "./page-wrapper"

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  // Featured Products Data
  const featuredProducts = [
    {
      id: "koru-300",
      name: "Manuka Koru MGO 300+",
      description: "Mjalte Manuka premium me përmbajtje të lartë antioksidantësh",
      image: "https://m.media-amazon.com/images/I/71+la-DryjL.jpg",
      mgoLevel: "MGO 300+",
      brand: "KORU" as const,
      isPremium: true,
      price: 7500,
      rating: 5,
      whatsappMessage: "Manuka Koru MGO 300+",
    },
    {
      id: "koru-500",
      name: "Manuka Koru MGO 500+",
      description: "Mjalte Manuka me aktivitet të lartë antibakterial",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2841-BerNBWshVNeJ2GNGar0J6eBTSxPPV1.png",
      mgoLevel: "MGO 500+",
      brand: "KORU" as const,
      isPremium: false,
      price: 10000,
      rating: 5,
      whatsappMessage: "Manuka Koru MGO 500+",
    },
    {
      id: "koru-800",
      name: "Manuka Koru MGO 800+",
      description: "Mjalte Manuka super premium për përdorim terapeutik",
      image: "https://bioceuticals.co.uk/cdn/shop/products/koru800.jpg?v=1590247373",
      mgoLevel: "MGO 800+",
      brand: "KORU" as const,
      isPremium: true,
      price: 17000,
      rating: 5,
      whatsappMessage: "Manuka Koru MGO 800+",
    },
    {
      id: "koru-1000",
      name: "Manuka Koru MGO 1000+",
      description: "Mjalte Manuka me koncentrim të lartë të vetive aktive",
      image: "https://bioceuticals.co.uk/cdn/shop/products/koru1000.jpg?v=1590247497",
      mgoLevel: "MGO 1000+",
      brand: "KORU" as const,
      isPremium: false,
      price: 22000,
      rating: 5,
      whatsappMessage: "Manuka Koru MGO 1000+",
    },
  ]

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} duration={3000} />
  }

  return (
    <PageWrapper>
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
        <Navigation />

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Animation */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-100/20 to-orange-100/20">
            <div className="absolute top-20 left-10 w-72 h-72 bg-amber-200/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection animation="fadeInLeft" className="text-center lg:text-left">
                <Badge className="mb-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 text-lg animate-bounce">
                  100% Mjalte Manuka i Pastër nga Zelanda e Re
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                  Mjalte Manuka
                  <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent block">
                    Premium
                  </span>
                  <span className="text-3xl lg:text-4xl text-gray-600 font-normal">nga Natyra</span>
                </h1>
                <p className="text-xl lg:text-2xl text-gray-600 mb-10 leading-relaxed">
                  Përjetoni shijen autentike dhe përfitimet e fuqishme shëndetësore të mjaltit të vërtetë Manuka nga
                  Zelanda e Re. I marrë drejtpërdrejt nga zonat e paprekura të natyrës dhe i testuar për pastërti.
                </p>
                <div className="flex justify-center lg:justify-start">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                    <Button
                      size="lg"
                      className="relative bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                      onClick={() =>
                        window.open(
                          "https://www.instagram.com/manuka_mjalte_albania_2014?igsh=MXB2NHA2OWtlamdsMA==",
                          "_blank",
                        )
                      }
                    >
                      <Instagram className="mr-2 h-5 w-5" />
                      Blej Tani
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeInRight" delay={300} className="relative">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-amber-400 to-orange-400 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <Image
                    src="https://manukahealth.shop/cdn/shop/products/MH-Honey-MGO100_-250g-front-DE_grande.jpg?v=1658158893"
                    alt="Mjalte Manuka Premium"
                    width={600}
                    height={600}
                    priority
                    className="relative rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300 object-cover"
                  />
                  <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg">
                    <Sparkles className="h-8 w-8 text-amber-600 animate-spin" />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-50/50 to-orange-50/50"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Pse të Zgjedhësh Mjaltën Tonë Manuka?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Cilësi e pakompromis dhe autenticitet në çdo kavanoz
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Award,
                  title: "E Certifikuar Autentike",
                  description:
                    "Çdo sasi testohet dhe certifikohet në mënyrë të pavarur për përmbajtjen MGO dhe autenticitetin",
                  delay: 0,
                },
                {
                  icon: Shield,
                  title: "E Pastër & Natyrore",
                  description: "Pa shtesa, pa përpunim - vetëm mjalte Manuka e pastër siç e ka menduar natyra",
                  delay: 200,
                },
                {
                  icon: Leaf,
                  title: "Burim i Qëndrueshëm",
                  description: "Mbledhur në mënyrë etike nga zonat e mbrojtura të natyrës së Zelandës së Re",
                  delay: 400,
                },
              ].map((feature, index) => (
                <AnimatedSection key={index} animation="scaleIn" delay={feature.delay}>
                  <Card className="text-center p-8 h-full hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border-0 bg-gradient-to-br from-white to-amber-50/30">
                    <CardContent className="pt-8">
                      <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-semibold mb-4 text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products Row */}
        <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-64 h-64 bg-amber-200/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Produktet Tona të Veçanta</h2>
              <p className="text-xl text-gray-600">Varietetet më të popullarizuara të mjaltit tonë Manuka</p>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <ProductCardRow products={featuredProducts} />
            </AnimatedSection>

            <AnimatedSection className="text-center mt-12" delay={100}>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <Link href="/showcase">
                  <Button
                    variant="outline"
                    size="lg"
                    className="relative border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 bg-white shadow-lg hover:shadow-xl"
                  >
                    <Crown className="mr-2 h-5 w-5" />
                    Shiko Koleksionin Koru
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Manuka Koru Showcase */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ManukaKoruShowcase />
          </div>
        </section>

        {/* Benefits Preview */}
        <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection animation="fadeInLeft">
                <Badge className="mb-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2 text-lg">
                  Përfitime Shëndetësore
                </Badge>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                  Fuqia e Natyrës për Shëndetin Tuaj
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Mjalti Manuka është më shumë se një ëmbëlsues natyror. Ai është një superfood i fuqishëm me përfitime
                  të provuara shkencore.
                </p>
                <div className="space-y-6">
                  {[
                    "Mbështet sistemin imunitar",
                    "Përmirëson shëndetin e tretjes",
                    "Ofron energji të qëndrueshme",
                    "Mbështet shërimin natyror",
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center group">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-3 h-3 mr-4 group-hover:scale-150 transition-transform duration-300"></div>
                      <span className="text-lg text-gray-700 group-hover:text-green-600 transition-colors duration-300">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeInRight" delay={300}>
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-emerald-400 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <Image
                    src="https://neozealand.com/cdn/shop/files/DSC3887_100.jpg?v=1718806711"
                    alt="Përfitimet e Mjaltit Manuka"
                    width={500}
                    height={500}
                    className="relative rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300 object-cover"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/10 to-orange-900/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <AnimatedSection animation="fadeInUp">
                <div className="flex items-center mb-6">
                  <Leaf className="h-10 w-10 text-amber-500" />
                  <span className="ml-3 text-2xl font-bold">Manuka Bio Organik</span>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Mjalte premium Manuka nga Zelanda e Re për shëndet dhe mirëqenie.
                </p>
                <Button
                  className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 transform hover:scale-105 transition-all duration-300"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/manuka_mjalte_albania_2014?igsh=MXB2NHA2OWtlamdsMA==",
                      "_blank",
                    )
                  }
                >
                  <Instagram className="mr-2 h-4 w-4" />
                  Na Ndiqni
                </Button>
              </AnimatedSection>

              <AnimatedSection animation="fadeInUp" delay={200}>
                <h3 className="font-bold text-xl mb-6 text-amber-400">Lidhje të Shpejta</h3>
                <ul className="space-y-3 text-gray-300">
                  {[
                    { href: "/manukat", label: "Manukat" },
                    { href: "/products", label: "Produktet" },
                    { href: "/benefits", label: "Përfitimet" },
                    { href: "/showcase", label: "Koleksioni Koru" },
                    { href: "/contact", label: "Kontakti" },
                  ].map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="hover:text-amber-400 transition-colors duration-300 flex items-center group"
                      >
                        <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>

              <AnimatedSection animation="fadeInUp" delay={400}>
                <h3 className="font-bold text-xl mb-6 text-amber-400">Shërbimi i Klientit</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>
                    <a href="/shipping" className="hover:text-amber-400 transition-colors duration-300">
                      Informacione Dërgese
                    </a>
                  </li>
                  <li>
                    <a href="/returns" className="hover:text-amber-400 transition-colors duration-300">
                      Kthime
                    </a>
                  </li>
                  <li>
                    <a href="/faq" className="hover:text-amber-400 transition-colors duration-300">
                      Pyetje të Shpeshta
                    </a>
                  </li>
                </ul>
              </AnimatedSection>

              <AnimatedSection animation="fadeInUp" delay={600}>
                <h3 className="font-bold text-xl mb-6 text-amber-400">Informacione Kontakti</h3>
                <div className="text-gray-300 space-y-3">
                  <p>Email: manuka.al@hotmail.com</p>
                  <p>Telefon: +355 69 123 4567</p>
                  <p>Hën-Pre: 9:00-18:00</p>
                  <p>Shtunë: 10:00-16:00</p>
                </div>
              </AnimatedSection>
            </div>

            <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
              <p>&copy; 2024 Manuka-bio-organik.</p>
            </div>
          </div>
        </footer>
        <WhatsAppButton />
      </div>
    </PageWrapper>
  )
}
