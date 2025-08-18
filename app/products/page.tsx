"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Heart, Zap, Shield, Search, Filter, ChevronLeft, ChevronRight, Coffee, Star } from "lucide-react"
import Navigation from "@/components/navigation"
import AnimatedSection from "@/components/animated-section"
import WhatsAppButton from "@/components/whatsapp-button"
import WhatsAppOrderButton from "@/components/whatsapp-order-button"
import PageWrapper from "../page-wrapper"

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [priceFilter, setPriceFilter] = useState("")
  const mateScrollRef = useRef<HTMLDivElement>(null)

  // Mate Cups & Accessories
  const mateAccessories = [
    {
      id: "mate-1",
      name: "Gotë Mate Tradicionale me Lëkurë",
      description: "Gotë mate tradicionale me mbështjellës lëkure dhe buzë metalike",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-07-30%20at%206.35.43%20PM%20%281%29-qCozmGwXBpWLM2cO5sI5GYmyOvSRhy.jpeg",
      whatsappMessage: "Gotë Mate Tradicionale me Lëkurë",
    },
    {
      id: "mate-2",
      name: "Gotë Mate El Pasto",
      description: "Gotë mate moderne El Pasto me dizajn të zi dhe elegant",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-07-30%20at%206.35.43%20PM%20%282%29-oBGzAYGdAMWIZ1rJowYVQI27G7Ldsp.jpeg",
      whatsappMessage: "Gotë Mate El Pasto",
    },
    {
      id: "mate-3",
      name: "Gotë Mate Luksoze me Kristale",
      description: "Gotë mate premium me rrip dekorativ metalik dhe kristale",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-07-30%20at%206.35.43%20PM%20%283%29-zepdKI3MqAaEBev92NdWhE7w67fXV1.jpeg",
      whatsappMessage: "Gotë Mate Luksoze me Kristale",
    },
    {
      id: "mate-4",
      name: "Gotë Mate Klasike",
      description: "Gotë mate klasike me mbështjellës lëkure dhe formë tradicionale",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-07-30%20at%206.35.43%20PM-qojk3DIUYLtdcPyVgweSdwUFC69D0V.jpeg",
      whatsappMessage: "Gotë Mate Klasike",
    },
  ]

  const supplements = [
    {
      id: 1,
      name: "Kolagjen",
      price: 2500,
      category: "Bukuria & Anti-aging",
      image: "https://www.vianaturalia.ro/wp-content/uploads/2018/10/Colagen-bovin-450x450.jpg",
      description: "Kolagjen i pastër për shëndetin e lëkurës dhe nyjeve",
      benefits: ["Përmirëson elasticitetin e lëkurës", "Mbështet shëndetin e nyjeve", "Anti-aging natyror"],
      icon: Heart,
      color: "from-pink-500 to-rose-500",
      whatsappMessage: "Kolagjen Pure",
    },
    {
      id: 2,
      name: "Kolagjen Peptides MSM",
      price: 2500,
      category: "Bukuria & Anti-aging",
      image: "https://www.vianaturalia.ro/wp-content/uploads/2018/07/Colagen-cu-MSM-3-450x450.jpg",
      description: "Kolagjen me MSM për përfitime të shtuar",
      benefits: ["Kolagjen + MSM", "Mbështetje e plotë e nyjeve", "Rikuperim më i shpejtë"],
      icon: Zap,
      color: "from-blue-500 to-cyan-500",
      whatsappMessage: "Kolagjen Peptides MSM",
    },
    {
      id: 3,
      name: "Vitamin C",
      price: 1500,
      category: "Imuniteti",
      image: "https://intenson.pl/cdn/shop/files/witaminaC150_960x720.png?v=1739975165",
      description: "Vitamin C i pastër për sistemin imunitar",
      benefits: ["Forcim i imunitetit", "Antioksidant i fuqishëm", "Energji natyrore"],
      icon: Shield,
      color: "from-orange-500 to-yellow-500",
      whatsappMessage: "Vitamine C",
    },
    {
      id: 4,
      name: "Spirulina",
      price: 1500,
      category: "Superfood",
      image: "https://us-i.makeupstore.com/j/j2/j2izpwefxtxp.jpg",
      description: "Superfood i gjelbër me proteina të larta",
      benefits: ["I pasur me proteina", "Detoksifikim natyror", "Energji e qëndrueshme"],
      icon: Heart,
      color: "from-green-500 to-emerald-500",
      whatsappMessage: "Spirulina",
    },
    {
      id: 5,
      name: "Vital Fibre",
      price: 1500,
      category: "Tretja",
      image: "https://www.smakolyk.co.uk/wp-content/uploads/2025/01/21992.png",
      description: "Fibra vitale për shëndetin e tretjes",
      benefits: ["Përmirëson tretjen", "Mbështet shëndetin e zorrëve", "Kontroll i peshës"],
      icon: Zap,
      color: "from-purple-500 to-violet-500",
      whatsappMessage: "Vital Fibre",
    },
    {
      id: 6,
      name: "Ksylitol Sheqeri Diabetik",
      price: 1200,
      category: "Diabetikë",
      image: "https://intenson.pl/cdn/shop/files/ksylitolchinski500_1280x.png?v=1741183860",
      description: "Ëmbëlsues natyror për diabetikë",
      benefits: ["Pa kalori shtesë", "I sigurt për diabetikë", "Shije e ëmbël natyrore"],
      icon: Heart,
      color: "from-teal-500 to-cyan-500",
      whatsappMessage: "Ksylitol",
    },
    {
      id: 7,
      name: "Magnez Aqua",
      price: 2500,
      category: "Relaksim & Gjumi",
      image: "https://intenson.pl/cdn/shop/files/0_AQ_LOVELY_1280x.jpg?v=1720014976",
      description: "Magnez i lëngshëm për thithje të shpejtë",
      benefits: ["Relaksim i muskujve", "Përmirëson gjumin", "Mbështet sistemin nervor"],
      icon: Shield,
      color: "from-indigo-500 to-purple-500",
      whatsappMessage: "Magnez Aqua",
    },
    {
      id: 8,
      name: "Shilajit Tableta",
      price: null,
      category: "Energji & Vitalitet",
      image: "https://cdn.stolichki.ru/s/drugs/medium/96/9681_2.jpg",
      description: "Shilajit në formë tabletash për përdorim të lehtë",
      benefits: ["Energji natyrore", "Mbështetje imuniteti", "Minerale të pasura"],
      icon: Zap,
      color: "from-gray-600 to-gray-800",
      whatsappMessage: "Shilajit Tablete",
    },
    {
      id: 9,
      name: "Shilajit Vazo",
      price: null,
      category: "Energji & Vitalitet",
      image: "https://ekodlaciebie.pl/6560-thickbox_default/mumio-altajskie-30-gr.jpg",
      description: "Shilajit i pastër në vazo për dozim të saktë",
      benefits: ["Forma e pastër", "Dozim i kontrollueshëm", "Cilësi premium"],
      icon: Heart,
      color: "from-amber-600 to-orange-600",
      whatsappMessage: "Shilajit Vazo",
    },
    {
      id: 10,
      name: "Yerba Mate Canarias",
      price: 1700,
      category: "Energji & Vitalitet",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/canarias.jpg-4rXUieiGptTh0xR5HsTVvuqq8aqotD.png",
      description: "Yerba Mate tradicionale nga Argjentina - energjizues natyror me antioksidantë",
      benefits: [
        "Energjizues natyror",
        "I pasur me antioksidantë",
        "Ndihmon me humbjen e peshës",
        "Rregullon kolesterolin",
      ],
      icon: Zap,
      color: "from-green-600 to-yellow-500",
      whatsappMessage: "Yerba Mate Canarias 1kg",
    },
    {
      id: 11,
      name: "Yerba Mate Baldo",
      price: 1700,
      category: "Energji & Vitalitet",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/baldo.jpg-xkb9QP9gsQ82LeDt6XM3eI8N0PSAYb.webp",
      description: "Yerba Mate premium nga Brazil - infuzion tradicional me vitamina dhe minerale",
      benefits: ["Antioksidant i fuqishëm", "I pasur me vitamina", "Antidepresiv natyror", "Përmirëson tretjen"],
      icon: Heart,
      color: "from-red-500 to-green-500",
      whatsappMessage: "Yerba Mate Baldo 1kg",
    },
    {
      id: 12,
      name: "Krokos Kozanis Safran 1g",
      price: 1400,
      category: "Erëza Premium",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-18%20at%2011.47.51%20AM-DP1YbnKt5NK1n1iiqYKbcuchW3a2Oa.jpeg",
      description: "Safran premium grek nga Kozani me cilësi të lartë P.D.O - erëza më e shtrenjtë në botë",
      benefits: [
        "Antioksidant i fuqishëm",
        "Përmirëson humorin",
        "Mbështet shëndetin e syve",
        "Aromë dhe ngjyrë unike",
      ],
      icon: Star,
      color: "from-yellow-500 to-orange-500",
      whatsappMessage: "Krokos Kozanis Safran 1g",
    },
    {
      id: 13,
      name: "Krokos Kozanis Safran 0.5g",
      price: 750,
      category: "Erëza Premium",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-18%20at%2011.47.51%20AM%20%281%29-bsYe5Ap9XA9YPTwWaYiy1EB6geNPKW.jpeg",
      description: "Safran premium grek nga Kozani në paketim 0.5g - cilësi e garantuar P.D.O",
      benefits: ["Cilësi e garantuar P.D.O", "Aromë intensive", "Ngjyrë e pasur", "Përdorim në gatim luksoze"],
      icon: Star,
      color: "from-orange-500 to-red-500",
      whatsappMessage: "Krokos Kozanis Safran 0.5g",
    },
  ]

  // Get unique categories
  const categories = [...new Set(supplements.map((product) => product.category))]

  // Filter products based on search, category, and price
  const filteredProducts = supplements.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.benefits.some((benefit) => benefit.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesCategory = selectedCategory === "" || product.category === selectedCategory

    const matchesPrice =
      priceFilter === "" ||
      (priceFilter === "low" && product.price && product.price <= 1500) ||
      (priceFilter === "medium" && product.price && product.price > 1500 && product.price <= 2500) ||
      (priceFilter === "high" && product.price && product.price > 2500) ||
      (priceFilter === "contact" && !product.price)

    return matchesSearch && matchesCategory && matchesPrice
  })

  const scrollMate = (direction: "left" | "right") => {
    if (mateScrollRef.current) {
      const cardWidth = 280
      const scrollAmount = cardWidth + 24
      const currentScroll = mateScrollRef.current.scrollLeft
      const targetScroll = direction === "left" ? currentScroll - scrollAmount : currentScroll + scrollAmount

      mateScrollRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      })
    }
  }

  return (
    <PageWrapper>
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-24 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-100/30 to-orange-100/30">
            <div className="absolute top-20 left-10 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="flex items-center mb-8">
              <Link
                href="/"
                className="flex items-center text-amber-600 hover:text-amber-700 group transition-colors duration-300"
              >
                <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
                Kthehu në Kryefaqe
              </Link>
            </AnimatedSection>

            <AnimatedSection className="text-center mb-16">
              <Badge className="mb-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 text-lg">
                Suplementet Shëndetësore
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Produktet Tona të
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent block">
                  Shëndetit
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                Suplementet më të mira natyrore për shëndetin dhe mirëqenien tuaj
              </p>

              {/* Search and Filter Section */}
              <div className="max-w-4xl mx-auto space-y-6">
                {/* Search Bar */}
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Kërko produkte, përfitime ose përshkrime..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 border border-amber-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white/80 backdrop-blur-sm text-lg"
                  />
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-4">
                  {/* Category Filter */}
                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="pl-10 pr-8 py-3 border border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white/80 backdrop-blur-sm appearance-none cursor-pointer"
                    >
                      <option value="">Të gjitha kategoritë</option>
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Price Filter */}
                  <select
                    value={priceFilter}
                    onChange={(e) => setPriceFilter(e.target.value)}
                    className="px-4 py-3 border border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white/80 backdrop-blur-sm appearance-none cursor-pointer"
                  >
                    <option value="">Të gjitha çmimet</option>
                    <option value="low">Deri në 1500 L</option>
                    <option value="medium">1500 - 2500 L</option>
                    <option value="high">Mbi 2500 L</option>
                    <option value="contact">Kontaktoni për çmim</option>
                  </select>

                  {/* Clear Filters */}
                  {(searchTerm || selectedCategory || priceFilter) && (
                    <button
                      onClick={() => {
                        setSearchTerm("")
                        setSelectedCategory("")
                        setPriceFilter("")
                      }}
                      className="px-6 py-3 bg-amber-500 text-white rounded-xl hover:bg-amber-600 transition-colors font-medium"
                    >
                      Pastro filtrat
                    </button>
                  )}
                </div>

                {/* Results Count */}
                <div className="text-gray-600">
                  {filteredProducts.length} produkt{filteredProducts.length !== 1 ? "e" : ""} u gjet
                  {filteredProducts.length !== 1 ? "ën" : ""}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Mate Cups & Accessories Section */}
        <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-64 h-64 bg-green-200/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <Coffee className="h-8 w-8 text-green-600 mr-3 animate-pulse" />
                <Badge className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 text-lg font-bold">
                  GOTA DHE PIPA
                </Badge>
                <Coffee className="h-8 w-8 text-green-600 ml-3 animate-pulse" />
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-6">
                Aksesorët për Yerba Mate
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Gota dhe pipa tradicionale për të shijuar Yerba Mate në stilin autentik argjentinas dhe brazilian
              </p>
            </AnimatedSection>

            {/* Swipeable Mate Accessories */}
            <div className="relative group">
              {/* Desktop Navigation Arrows */}
              <div className="hidden md:block">
                <button
                  onClick={() => scrollMate("left")}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="h-6 w-6 text-gray-700" />
                </button>

                <button
                  onClick={() => scrollMate("right")}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="h-6 w-6 text-gray-700" />
                </button>
              </div>

              {/* Scrollable Container */}
              <div
                ref={mateScrollRef}
                className="overflow-x-auto scrollbar-hide pb-4 scroll-smooth"
                style={{
                  scrollSnapType: "x mandatory",
                  WebkitOverflowScrolling: "touch",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
              >
                <div className="flex gap-6 px-4" style={{ width: "max-content" }}>
                  {mateAccessories.map((accessory, index) => (
                    <AnimatedSection key={accessory.id} animation="scaleIn" delay={index * 100}>
                      <Card
                        className="flex-shrink-0 w-80 md:w-72 lg:w-80 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden"
                        style={{
                          scrollSnapAlign: "start",
                          scrollSnapStop: "always",
                        }}
                      >
                        {/* Product Image Section */}
                        <div className="relative bg-gradient-to-br from-green-50 to-emerald-50 p-6 h-64">
                          {/* Mate Icon */}
                          <div className="absolute top-4 left-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3 shadow-lg">
                            <Coffee className="h-6 w-6 text-white" />
                          </div>

                          {/* Category Badge */}
                          <Badge className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 text-sm font-bold rounded-full shadow-lg">
                            MATE
                          </Badge>

                          {/* Product Image */}
                          <div className="relative w-full h-full flex items-center justify-center mt-8">
                            <Image
                              src={accessory.image || "/placeholder.svg"}
                              alt={accessory.name}
                              width={180}
                              height={180}
                              className="object-contain max-w-full max-h-full transition-transform duration-300 hover:scale-105 rounded-lg"
                              loading={index < 2 ? "eager" : "lazy"}
                            />
                          </div>
                        </div>

                        {/* Product Info Section */}
                        <CardContent className="p-6">
                          <div className="space-y-4">
                            {/* Product Name */}
                            <h3 className="text-xl font-bold text-gray-900 leading-tight text-center">
                              {accessory.name}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 text-sm leading-relaxed text-center line-clamp-3">
                              {accessory.description}
                            </p>

                            {/* Contact for Price */}
                            <div className="text-center pt-2">
                              <span className="text-lg font-medium text-green-600">Kontaktoni për çmim</span>
                            </div>

                            {/* WhatsApp Button */}
                            <div className="pt-4">
                              <button
                                className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                                onClick={() => {
                                  const phoneNumber = "+355697320453"
                                  const message = `Dua informacion për ${accessory.whatsappMessage}`
                                  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(message)}`
                                  window.open(whatsappUrl, "_blank")
                                }}
                              >
                                <Coffee className="mr-2 h-4 w-4" />
                                Pyet për Çmim
                              </button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </AnimatedSection>
                  ))}
                </div>
              </div>

              {/* Mobile Scroll Hint */}
              <div className="md:hidden text-center mt-4">
                <p className="text-sm text-gray-500">
                  ← Rrëshqit për të parë të gjitha gotat ({mateAccessories.length}) →
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredProducts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product, index) => (
                  <AnimatedSection key={product.id} animation="scaleIn" delay={index * 50}>
                    <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 group border-0 bg-white/90 backdrop-blur-sm h-full flex flex-col">
                      <div className="aspect-square relative overflow-hidden w-full">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-contain group-hover:scale-110 transition-transform duration-700"
                        />
                        <div
                          className={`absolute top-4 left-4 bg-gradient-to-r ${product.color} rounded-full p-3 shadow-lg`}
                        >
                          <product.icon className="h-6 w-6 text-white" />
                        </div>
                        <Badge className="absolute top-4 right-4 bg-white/90 text-gray-700 px-3 py-1 text-sm">
                          {product.category}
                        </Badge>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>

                      <CardContent className="p-6 flex flex-col flex-grow">
                        <div className="flex-grow">
                          <h3 className="font-bold text-xl mb-3 text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                            {product.name}
                          </h3>
                          <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>

                          <div className="space-y-2 mb-6">
                            {product.benefits.map((benefit, idx) => (
                              <div key={idx} className="flex items-center text-sm text-gray-600">
                                <div
                                  className={`w-2 h-2 bg-gradient-to-r ${product.color} rounded-full mr-2 flex-shrink-0`}
                                ></div>
                                {benefit}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="mt-auto">
                          {/* Pricing */}
                          <div className="text-center pt-2">
                            {product.price ? (
                              <span className="text-2xl font-bold text-green-600">{product.price} L</span>
                            ) : (
                              <div className="text-center mb-4">
                                <span className="text-lg font-medium text-amber-600">Kontaktoni për çmim</span>
                              </div>
                            )}
                          </div>

                          <WhatsAppOrderButton productName={product.whatsappMessage} />
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
            ) : (
              <AnimatedSection className="text-center py-20">
                <div className="text-gray-500 text-xl mb-4">
                  Nuk u gjetën produkte që përputhen me kriteret e kërkimit.
                </div>
                <button
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedCategory("")
                    setPriceFilter("")
                  }}
                  className="px-6 py-3 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-colors"
                >
                  Pastro të gjitha filtrat
                </button>
              </AnimatedSection>
            )}
          </div>
        </section>

        <WhatsAppButton />
      </div>
    </PageWrapper>
  )
}
