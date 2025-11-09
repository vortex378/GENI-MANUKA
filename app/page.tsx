"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, Award, Shield, Instagram, ArrowRight, Sparkles, Crown, Star, TrendingUp, Package } from "lucide-react"
import Navigation from "@/components/navigation"
import AnimatedSection from "@/components/animated-section"
import WhatsAppButton from "@/components/whatsapp-button"
import HeroCarousel from "@/components/hero-carousel"
import ProductCardRow from "@/components/product-card-row"
import ManukaKoruShowcase from "@/components/manuka-koru-showcase"
import PageWrapper from "./page-wrapper"
import FAQSection from "@/components/faq-section"

export default function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

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

  const melloraProducts = [
    {
      id: "melora-balm",
      name: "Krem Restorative Balm",
      description: "Deep Hydration and Skin Repair - Mjalte Manuka 525+ MGO",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-28%20at%206.52.48%20PM%20%281%29-UpylCmAHjXXxlKvaNyuLL51xXBnq23.jpeg",
      mgoLevel: "525+ MGO",
      brand: "MELORA" as const,
      isPremium: false,
      price: 2800,
      rating: 5,
      whatsappMessage: "Krem Restorative Balm - 2800L",
    },
    {
      id: "melora-moisturiser",
      name: "Krem Moisturiser",
      description: "Nourish, Restore and Hydrate - Mjalte Manuka 525+ MGO",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-28%20at%206.52.48%20PM%20%282%29-RWUhaAqaKUOZK9H8QpgIfqhVw5RSEz.jpeg",
      mgoLevel: "525+ MGO",
      brand: "MELORA" as const,
      isPremium: false,
      price: 2800,
      rating: 5,
      whatsappMessage: "Krem Moisturiser - 2800L",
    },
    {
      id: "melora-facewash",
      name: "Purifying Face Wash",
      description: "Cleanse and Protect - Mjalte Manuka 525+ MGO",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-28%20at%206.52.48%20PM-IK7LxvwgkD3YuAhSxARyss4v3A8ie4.jpeg",
      mgoLevel: "525+ MGO",
      brand: "MELORA" as const,
      isPremium: false,
      price: 2500,
      rating: 5,
      whatsappMessage: "Purifying Face Wash - 2500L",
    },
  ]

  const melloraHoneyProducts = [
    {
      id: "melora-lozenges",
      name: "Karamele Manuka 525+ MGO",
      description: "Blackcurrant with Propolis - Mjalte Manuka Honey Lozenges",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NWSLReyWsfhFOJwelXhhBumgmQY30c.png",
      mgoLevel: "525+ MGO",
      brand: "MELORA" as const,
      isPremium: false,
      price: 1200,
      rating: 5,
      whatsappMessage: "Karamele Manuka 525+ MGO - 1200L",
    },
  ]

  const stats = [
    { icon: Package, value: "500+", label: "Klientë të Kënaqur", color: "from-blue-500 to-cyan-500" },
    { icon: Award, value: "100%", label: "Cilësi Premium", color: "from-amber-500 to-orange-500" },
    { icon: TrendingUp, value: "10+", label: "Vite Përvojë", color: "from-green-500 to-emerald-500" },
    { icon: Star, value: "5.0", label: "Vlerësim Mesatar", color: "from-purple-500 to-pink-500" },
  ]

  return (
    <PageWrapper>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50/30 to-orange-50/20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <div
            className="absolute w-[500px] h-[500px] bg-gradient-to-r from-amber-400/10 to-orange-400/10 rounded-full blur-3xl transition-all duration-1000 ease-out"
            style={{
              left: `${mousePosition.x - 250}px`,
              top: `${mousePosition.y - 250}px`,
            }}
          />
          <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-orange-300/20 to-yellow-300/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-orange-300/20 to-red-300/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <Navigation />

        {/* Hero Carousel - Full Screen */}
        <HeroCarousel />

        {/* Stats Section - Modern Cards */}
        <section className="py-20 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <AnimatedSection key={index} animation="scaleIn" delay={index * 100}>
                  <Card className="group relative overflow-hidden border-0 bg-white/80 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    />
                    <CardContent className="p-8 text-center relative z-10">
                      <div
                        className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${stat.color} mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <stat.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-4xl font-black bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent mb-2">
                        {stat.value}
                      </h3>
                      <p className="text-slate-600 font-medium">{stat.label}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section - Modern Grid */}
        <section className="py-20 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <Badge className="mb-4 px-6 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-bold">
                PSE NE?
              </Badge>
              <h2 className="text-4xl lg:text-6xl font-black bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent mb-4">
                Cilësia që Ju Meritoni
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Tre arsye kryesore pse mijëra klientë na besojnë çdo ditë
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Award,
                  title: "E Certifikuar Autentike",
                  description:
                    "Çdo produkt testohet dhe certifikohet nga laboratorë të pavarur me standarde ndërkombëtare ISO 17025",
                  gradient: "from-blue-500 via-cyan-500 to-teal-500",
                  delay: 0,
                },
                {
                  icon: Shield,
                  title: "E Pastër & Natyrore",
                  description: "Pa shtesa artificiale, pa përpunim kimik - vetëm mjalte Manuka e pastër 100% natyror",
                  gradient: "from-amber-500 via-orange-500 to-red-500",
                  delay: 200,
                },
                {
                  icon: Leaf,
                  title: "Burim i Qëndrueshëm",
                  description: "Mbledhur në mënyrë etike nga zonat e mbrojtura të natyrës së virgjër të Zelandës së Re",
                  gradient: "from-green-500 via-emerald-500 to-teal-500",
                  delay: 400,
                },
              ].map((feature, index) => (
                <AnimatedSection key={index} animation="fadeInUp" delay={feature.delay}>
                  <Card className="group relative h-full border-0 bg-white/80 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    />

                    <CardContent className="p-8 relative z-10">
                      <div
                        className={`inline-flex p-5 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                      >
                        <feature.icon className="h-10 w-10 text-white" />
                      </div>

                      <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-amber-600 group-hover:to-orange-600 transition-all duration-300">
                        {feature.title}
                      </h3>

                      <p className="text-slate-600 leading-relaxed">{feature.description}</p>

                      <div
                        className={`mt-6 w-0 h-1 bg-gradient-to-r ${feature.gradient} group-hover:w-full transition-all duration-500 rounded-full`}
                      />
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20 relative overflow-hidden z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-orange-50/50" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <Badge className="mb-4 px-6 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-bold">
                PRODUKTET TONA
              </Badge>
              <h2 className="text-4xl lg:text-6xl font-black bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent mb-4">
                Koleksioni Premium
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Zgjidhni nga produktet më të njohura të mjaltit Manuka
              </p>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <ProductCardRow products={featuredProducts} />
            </AnimatedSection>

            <AnimatedSection className="text-center mt-12" delay={400}>
              <Link href="/showcase">
                <div className="group relative inline-block">
                  <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse" />
                  <Button
                    size="lg"
                    className="relative bg-white text-slate-900 hover:bg-slate-50 px-8 py-6 text-lg rounded-2xl font-bold shadow-xl border-2 border-slate-900"
                  >
                    <Crown className="mr-2 h-6 w-6 text-amber-600" />
                    Shiko Koleksionin e Plotë
                    <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Link>
            </AnimatedSection>
          </div>
        </section>

        <section className="py-20 relative overflow-hidden z-10 bg-gradient-to-br from-purple-50 via-pink-50/30 to-purple-50/20">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400/5 to-pink-400/5" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <Badge className="mb-4 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold">
                PRODUKTET E SKINCARE
              </Badge>
              <h2 className="text-4xl lg:text-6xl font-black bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent mb-4">
                Koleksioni Melora
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Produktet e kujdesit të lëkurës me mjalte Manuka premium për lëkurë të shëndoshë dhe të rrezatuese
              </p>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <ProductCardRow products={melloraProducts} showPricing={true} showWhatsAppButton={true} />
            </AnimatedSection>
          </div>
        </section>

        {/* Melora Honey Lozenges Section */}
        <section className="py-20 relative overflow-hidden z-10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-orange-400/5" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <Badge className="mb-4 px-6 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-bold">
                HONEY LOZENGES
              </Badge>
              <h2 className="text-4xl lg:text-6xl font-black bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent mb-4">
                Melora Honey Lozenges
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Kombinim i përfektë i mjaltit Manuka premium me propolis dhe mjedra të zezë për shëndetin tuaj
              </p>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <ProductCardRow products={melloraHoneyProducts} showPricing={true} showWhatsAppButton={true} />
            </AnimatedSection>
          </div>
        </section>

        {/* Koru Showcase */}
        <section className="py-20 relative bg-white z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ManukaKoruShowcase />
          </div>
        </section>

        {/* Benefits Preview - Modern Design */}
        <section className="py-20 relative overflow-hidden z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection animation="fadeInLeft">
                <Badge className="mb-6 px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-bold">
                  PËRFITIMET SHËNDETËSORE
                </Badge>
                <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-8">
                  Fuqia e Natyrës për
                  <span className="block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    Shëndetin Tuaj
                  </span>
                </h2>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  Mjalti Manuka është superfood me përfitime të provuara shkencërisht
                </p>

                <div className="space-y-4">
                  {[
                    "Mbështet sistemin imunitar",
                    "Përmirëson shëndetin e tretjes",
                    "Ofron energji të qëndrueshme",
                    "Mbështet shërimin natyror",
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-4 group">
                      <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <Shield className="h-6 w-6 text-white" />
                      </div>
                      <span className="text-lg font-semibold text-slate-700 group-hover:text-green-600 transition-colors">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>

                <Link href="/benefits">
                  <Button
                    size="lg"
                    className="mt-8 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-6 text-lg rounded-2xl font-bold shadow-xl"
                  >
                    Mëso Më Shumë
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </AnimatedSection>

              <AnimatedSection animation="fadeInRight" delay={300}>
                <div className="relative group">
                  <div className="absolute -inset-8 bg-gradient-to-r from-green-400 to-emerald-400 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-all duration-500" />
                  <div className="relative bg-white rounded-3xl p-6 shadow-2xl transform group-hover:scale-105 transition-all duration-500">
                    <Image
                      src="https://neozealand.com/cdn/shop/files/DSC3887_100.jpg?v=1718806711"
                      alt="Përfitimet e Mjaltit Manuka"
                      width={600}
                      height={600}
                      className="rounded-2xl"
                    />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="z-10 relative">
          <FAQSection />
        </section>

        {/* CTA Section - Bold & Modern */}
        <section className="py-20 relative overflow-hidden z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-amber-900 to-orange-900" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAgMy4zMTQtMi42ODYgNi02IDZzLTYtMi42ODYtNi02IDIuNjg2LTYgNi02IDYgMi42ODYgNiA2ek0wIDEyYzAtMy4zMTQgMi42ODYtNiA2LTZzNiAyLjY4NiA2IDYtMi42ODYgNi02IDYtNi0yLjY4Ni02LTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm mb-8">
                <Sparkles className="h-5 w-5 text-amber-400 animate-pulse" />
                <span className="text-sm font-semibold text-white">Ofertë e Kufizuar - Porositni Sot</span>
              </div>

              <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
                Filloni Udhëtimin Tuaj të
                <span className="block bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  Mirëqenies Sot
                </span>
              </h2>

              <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                Bashkohuni me mijëra klientë të kënaqur në Shqipëri dhe përjetoni fuqinë e mjaltit Manuka
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse" />
                  <Button
                    size="lg"
                    className="relative bg-white text-slate-900 hover:bg-slate-100 px-10 py-7 text-xl rounded-2xl font-black shadow-2xl"
                    onClick={() =>
                      window.open(
                        "https://www.instagram.com/manuka_mjalte_albania_2014?igsh=MXB2NHA2OWtlamdsMA==",
                        "_blank",
                      )
                    }
                  >
                    <Instagram className="mr-3 h-7 w-7" />
                    Blej Manuka Tani
                    <ArrowRight className="ml-3 h-7 w-7 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </div>

                <Button
                  size="lg"
                  variant="outline"
                  className="px-10 py-7 text-xl rounded-2xl font-bold border-2 border-white text-white hover:bg-white hover:text-slate-900 transition-all duration-300 bg-transparent"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/manuka_mjalte_albania_2014?igsh=MXB2NHA2OWtlamdsMA==",
                      "_blank",
                    )
                  }
                >
                  Na Kontaktoni
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-8 justify-center mt-12 pt-12 border-t border-white/20">
                {[
                  { icon: Shield, text: "Pagesa e Sigurt" },
                  { icon: Package, text: "Dërgesa Falas" },
                  { icon: Award, text: "Garanci Cilësie" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-white">
                    <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <span className="font-semibold text-lg">{item.text}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Footer - Modern & Clean */}
        <footer className="bg-slate-900 text-white py-16 relative overflow-hidden border-t-4 border-amber-500 z-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDE2YzAgMy4zMTQtMi42ODYgNi02IDZzLTYtMi42ODYtNi02IDIuNjg2LTYgNi02IDYgMi42ODYgNiA2ek0wIDEyYzAtMy4zMTQgMi42ODYtNiA2LTZzNiAyLjY4NiA2IDYtMi42ODYgNi02IDYtNi0yLjY4Ni02LTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              <AnimatedSection animation="fadeInUp" className="md:col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl">
                    <Leaf className="h-8 w-8 text-white" />
                  </div>
                  <span className="text-3xl font-black">Manuka Albania</span>
                </div>
                <p className="text-slate-400 leading-relaxed mb-6 max-w-md">
                  Mjalte premium Manuka nga Zelanda e Re për shëndet dhe mirëqenie në Shqipëri. Cilësi e garantuar,
                  rezultate të provuara.
                </p>
                <Button
                  className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white rounded-xl font-bold"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/manuka_mjalte_albania_2014?igsh=MXB2NHA2OWtlamdsMA==",
                      "_blank",
                    )
                  }
                >
                  <Instagram className="mr-2 h-5 w-5" />
                  Na Ndiqni
                </Button>
              </AnimatedSection>

              <AnimatedSection animation="fadeInUp" delay={200}>
                <h3 className="font-bold text-xl mb-6 text-amber-400">Lidhje të Shpejta</h3>
                <ul className="space-y-3">
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
                        className="text-slate-400 hover:text-amber-400 transition-colors duration-300 flex items-center gap-2 group"
                      >
                        <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all duration-300" />
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>

              <AnimatedSection animation="fadeInUp" delay={400}>
                <h3 className="font-bold text-xl mb-6 text-amber-400">Kontakti</h3>
                <div className="space-y-4 text-slate-400">
                  <p className="flex items-center gap-2">
                    <span className="font-semibold text-white">Email:</span>
                    info@manuka-albania.com
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="font-semibold text-white">WhatsApp:</span>
                    +355 69 732 0453
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="font-semibold text-white">Adresa:</span>
                    Tirana, Shqipëri
                  </p>
                  <div className="pt-4">
                    <p className="font-semibold text-white mb-2">Orari:</p>
                    <p>Hën-Pre: 9:00-18:00</p>
                    <p>Shtunë: 10:00-16:00</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-500 text-sm">&copy; 2025 Manuka Albania. Të gjitha të drejtat e rezervuara.</p>
              <div className="flex gap-4 text-slate-500 text-sm">
                <a href="#" className="hover:text-amber-400 transition-colors">
                  Privatësia
                </a>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  Kushtet
                </a>
              </div>
            </div>
          </div>
        </footer>

        <WhatsAppButton />
      </div>
    </PageWrapper>
  )
}
