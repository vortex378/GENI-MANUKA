"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Search, Star, Crown, MessageCircle } from "lucide-react"
import Navigation from "@/components/navigation"
import AnimatedSection from "@/components/animated-section"
import WhatsAppButton from "@/components/whatsapp-button"
import BrandFilter from "@/components/brand-filter"
import PageWrapper from "../page-wrapper"

export default function ManukatPage() {
  const [selectedBrand, setSelectedBrand] = useState("")
  const [searchTerm, setSearchTerm] = useState("")

  const brands = [
    {
      name: "Manuka Koru",
      color: "from-blue-500 to-indigo-500",
      priority: 1,
      products: [
        {
          id: "koru-300",
          mgo: "300+",
          name: "Manuka Koru MGO 300+",
          description: "Mjalte Manuka premium me përmbajtje të lartë antioksidantësh",
          image: "https://m.media-amazon.com/images/I/71+la-DryjL.jpg",
          price: 7500,
          weight: "250gr",
          isPremium: true,
          whatsappMessage: "Manuka Koru MGO 300+",
        },
        {
          id: "koru-500",
          mgo: "500+",
          name: "Manuka Koru MGO 500+",
          description: "Mjalte Manuka me aktivitet të lartë antibakterial",
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2841-BerNBWshVNeJ2GNGar0J6eBTSxPPV1.png",
          price: 10000,
          weight: "250gr",
          isPremium: false,
          whatsappMessage: "Manuka Koru MGO 500+",
        },
        {
          id: "koru-800",
          mgo: "800+",
          name: "Manuka Koru MGO 800+",
          description: "Mjalte Manuka super premium për përdorim terapeutik",
          image: "https://bioceuticals.co.uk/cdn/shop/products/koru800.jpg?v=1590247373",
          price: 17000,
          weight: "250gr",
          isPremium: true,
          whatsappMessage: "Manuka Koru MGO 800+",
        },
        {
          id: "koru-1000",
          mgo: "1000+",
          name: "Manuka Koru MGO 1000+",
          description: "Mjalte Manuka me koncentrim të lartë të vetive aktive",
          image: "https://bioceuticals.co.uk/cdn/shop/products/koru1000.jpg?v=1590247497",
          price: 22000,
          weight: "250gr",
          isPremium: true,
          whatsappMessage: "Manuka Koru MGO 1000+",
        },
        {
          id: "koru-1200",
          mgo: "1200+",
          name: "Manuka Koru MGO 1200+",
          description: "Mjalte Manuka luksoze me veti të jashtëzakonshme",
          image: "https://m.media-amazon.com/images/I/71pEIvPrnDL.jpg",
          price: 33000,
          weight: "250gr",
          isPremium: true,
          whatsappMessage: "Manuka Koru MGO 1200+",
        },
        {
          id: "koru-1500",
          mgo: "1500+",
          name: "Manuka Koru MGO 1500+",
          description: "Mjalte Manuka ekskluzive me cilësinë më të lartë",
          image: "https://caresoul.in/cdn/shop/files/Koru1500_3_1024x1024.png?v=1742383386",
          price: 110000,
          euroPrice: 1100,
          isEuro: true,
          weight: "250gr",
          isPremium: true,
          whatsappMessage: "Manuka Koru MGO 1500+",
        },
        {
          id: "koru-1959",
          mgo: "1959+",
          name: "Manuka Koru MGO 1959+",
          description: "Koleksioni më i rrallë - mjalte Manuka më e fuqishme në botë",
          image: "https://manukahoneyofnz.com/cdn/shop/files/MH-Website-Images-KORU1959_2_1200x.png?v=1712528245",
          price: 220000,
          euroPrice: 2200,
          isEuro: true,
          weight: "250gr",
          isPremium: true,
          whatsappMessage: "Manuka Koru MGO 1959+",
        },
      ],
    },
    {
      name: "Manuka NUI",
      color: "from-green-500 to-emerald-500",
      priority: 2,
      products: [
        {
          id: "nui-100-250",
          mgo: "100+",
          name: "Manuka NUI MGO 100+",
          description: "Mjalte Manuka ideale për përdorim të përditshëm",
          image: "https://neozealand.com/cdn/shop/files/DSC3887_100.jpg?v=1718806711",
          price: 3000,
          weight: "250gr",
          isPremium: false,
          whatsappMessage: "Manuka NUI MGO 100+ 250g",
        },
        {
          id: "nui-100-500",
          mgo: "100+",
          name: "Manuka NUI MGO 100+",
          description: "Madhësi familjare për përdorim të përditshëm",
          image: "https://m.media-amazon.com/images/I/51hv3OL8NUL.jpg",
          price: 5500,
          weight: "500gr",
          isPremium: false,
          whatsappMessage: "Manuka NUI MGO 100+ 500g",
        },
        {
          id: "nui-250-250",
          mgo: "250+",
          name: "Manuka NUI MGO 250+",
          description: "Mjalte Manuka me aktivitet të fortë",
          image:
            "https://neozealand.com/cdn/shop/files/s-l1600_4_192aa3f2-472d-470f-b2f9-f2c4fb692a00.jpg?v=1709631267",
          price: 3500,
          weight: "250gr",
          isPremium: false,
          whatsappMessage: "Manuka NUI MGO 250+ 250gr",
        },
        {
          id: "nui-250-500",
          mgo: "250+",
          name: "Manuka NUI MGO 250+",
          description: "Madhësi familjare me aktivitet të fortë",
          image: "https://m.media-amazon.com/images/I/61VPEnQQBYL._AC_UF1000,1000_QL80_.jpg",
          price: 6500,
          weight: "500gr",
          isPremium: false,
          whatsappMessage: "Manuka NUI MGO 250+ 500gr",
        },
        {
          id: "nui-400-250",
          mgo: "400+",
          name: "Manuka NUI MGO 400+",
          description: "Mjalte Manuka me aktivitet të fortë",
          image: "https://suztain.no/cdn/shop/files/2_7bec0993-af0d-4918-bf94-78353c3f9a41.jpg?v=1734095461",
          price: 5000,
          weight: "250gr",
          isPremium: true,
          whatsappMessage: "Manuka NUI MGO 400+ 250gr",
        },
        {
          id: "nui-400-500",
          mgo: "400+",
          name: "Manuka NUI MGO 400+",
          description: "Madhësi familjare me aktivitet të fortë",
          image: "https://m.media-amazon.com/images/I/61IfN4YbhyL._AC_UF1000,1000_QL80_.jpg",
          price: 9500,
          weight: "500gr",
          isPremium: true,
          whatsappMessage: "Manuka NUI MGO 400+ 500gr",
        },
        {
          id: "nui-600-250",
          mgo: "600+",
          name: "Manuka NUI MGO 600+",
          description: "Mjalte Manuka me aktivitet të lartë",
          image: "https://neozealand.com/cdn/shop/files/DSC3887_600.png?v=1718807355",
          price: 7800,
          weight: "250gr",
          isPremium: true,
          whatsappMessage: "Manuka NUI MGO 600+ 250gr",
        },
        {
          id: "nui-600-500",
          mgo: "600+",
          name: "Manuka NUI MGO 600+",
          description: "Madhësi familjare me aktivitet të lartë",
          image: "https://neozealand.com/cdn/shop/files/DSC3880_600.png?v=1718807355",
          price: 15000,
          weight: "500gr",
          isPremium: true,
          whatsappMessage: "Manuka NUI MGO 600+ 500gr",
        },
      ],
    },
    {
      name: "Manuka Health",
      color: "from-indigo-500 to-purple-500",
      priority: 3,
      products: [
        {
          id: "health-100-250",
          mgo: "100+",
          name: "Manuka Health MGO 100+",
          description: "Mjalte Manuka për përdorim të përditshëm",
          image: "https://manukahealth.shop/cdn/shop/products/MH-Honey-MGO100_-250g-front-DE_grande.jpg?v=1658158893",
          price: 3800,
          weight: "250gr",
          isPremium: false,
          whatsappMessage: "Manuka Health MGO 100+ 250gr",
        },
        {
          id: "health-100-500",
          mgo: "100+",
          name: "Manuka Health MGO 100+",
          description: "Madhësi familjare për përdorim të përditshëm",
          image: "https://manukahealth.shop/cdn/shop/products/MH-Honey-MGO100_-500g-front-DE.jpg?v=1658515140",
          price: 6500,
          weight: "500gr",
          isPremium: false,
          whatsappMessage: "Manuka Health MGO 100+ 500gr",
        },
        {
          id: "health-100-1kg",
          mgo: "100+",
          name: "Manuka Health MGO 100+",
          description: "Madhësi e madhe për familje",
          image: "https://manukahealth.shop/cdn/shop/products/MH-Honey-MGO100_-1kg-front-DE.jpg?v=1658515140",
          price: 12000,
          weight: "1kg",
          isPremium: false,
          whatsappMessage: "Manuka Health MGO 100+ 1kg",
        },
        {
          id: "health-250-250",
          mgo: "250+",
          name: "Manuka Health MGO 250+",
          description: "Mjalte Manuka me aktivitet të mirë",
          image:
            "https://digitalcontent.api.tesco.com/v2/media/marketplace/479e576f-1fdf-4e1e-a5f1-043d53f4223a/I4N9uuryz_ynEx63lZcFOBLY8_1118806194.jpeg?h=960&w=960",
          price: 4500,
          weight: "250gr",
          isPremium: true,
          whatsappMessage: "Manuka Health MGO 250+ 250gr",
        },
        {
          id: "health-250-500",
          mgo: "250+",
          name: "Manuka Health MGO 250+",
          description: "Madhësi familjare me aktivitet të mirë",
          image: "https://manukahealth.shop/cdn/shop/products/mh-honey-mgo250_-500g-front-de.jpg?v=1700054298",
          price: 7500,
          weight: "500gr",
          isPremium: true,
          whatsappMessage: "Manuka Health MGO 250+ 500gr",
        },
        {
          id: "health-400-250",
          mgo: "400+",
          name: "Manuka Health MGO 400+",
          description: "Mjalte Manuka me aktivitet të lartë",
          image: "https://m.media-amazon.com/images/I/61rMDpbr6KL.jpg",
          price: 6500,
          weight: "250gr",
          isPremium: true,
          whatsappMessage: "Manuka Health MGO 400+ 250gr",
        },
        {
          id: "health-550-250",
          mgo: "550+",
          name: "Manuka Health MGO 550+",
          description: "Mjalte Manuka me aktivitet të fortë",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgWwEziLn4fdq7YKeC4DrB5jS9aQ6sjcwsVg&s",
          price: 9000,
          weight: "250gr",
          isPremium: true,
          whatsappMessage: "Manuka Health MGO 550+ 250gr",
        },
      ],
    },
    {
      name: "Melora",
      color: "from-purple-500 to-violet-500",
      priority: 4,
      products: [
        {
          id: "melora-70",
          mgo: "70+",
          name: "Melora MGO 70+",
          description: "Mjalte Manuka për fillestare",
          image: "https://www.ardkeen.com/cdn/shop/files/MeloraMultifloraManukaHoneyMGO70_330g_1000x.png?v=1704196996",
          price: 2500,
          weight: "330gr",
          isPremium: false,
          whatsappMessage: "Manuka Melora MGO 70+ 340gr",
        },
        {
          id: "melora-300-250",
          mgo: "300+",
          name: "Melora MGO 300+",
          description: "Mjalte Manuka me aktivitet të mirë",
          image: "https://melora.co.uk/cdn/shop/products/300250g.jpg?v=1745410540&width=1445",
          price: 3800,
          weight: "250gr",
          isPremium: false,
          whatsappMessage: "Manuka Melora MGO 300+ 250gr",
        },
        {
          id: "melora-300-500",
          mgo: "300+",
          name: "Melora MGO 300+",
          description: "Madhësi familjare me aktivitet të mirë",
          image: "https://melora.co.uk/cdn/shop/products/300500g.jpg?v=1745407645&width=1445",
          price: 7200,
          weight: "500gr",
          isPremium: false,
          whatsappMessage: "Manuka Melora MGO 300+ 500gr",
        },
        {
          id: "melora-526",
          mgo: "526+",
          name: "Melora MGO 526+",
          description: "Mjalte Manuka me aktivitet të lartë",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9_gL7beWKi5bX7psfBC0_PmO6Nhsu66upOg&s",
          price: 6200,
          weight: "250gr",
          isPremium: true,
          whatsappMessage: "Manuka Melora MGO 526+ 250g",
        },
      ],
    },
  ]

  // Sort brands by priority (Koru first)
  const sortedBrands = [...brands].sort((a, b) => a.priority - b.priority)

  // Filter brands based on selection
  const filteredBrands = selectedBrand ? sortedBrands.filter((brand) => brand.name === selectedBrand) : sortedBrands

  // Get unique brand names for filter
  const brandNames = brands.map((brand) => brand.name)

  // Filter products based on search term
  const getFilteredProducts = (brand: any) => {
    if (!searchTerm) return brand.products

    return brand.products.filter(
      (product: any) =>
        product.mgo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.weight.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()),
    )
  }

  const getBrandDisplayName = (brandName: string) => {
    switch (brandName) {
      case "Manuka Koru":
        return "KORU"
      case "Manuka NUI":
        return "NUI"
      case "Manuka Health":
        return "HEALTH"
      case "Melora":
        return "MELORA"
      default:
        return brandName
    }
  }

  const getBrandBadgeColor = (brandName: string) => {
    switch (brandName) {
      case "Manuka Koru":
        return "bg-blue-500"
      case "Manuka NUI":
        return "bg-green-500"
      case "Manuka Health":
        return "bg-indigo-500"
      case "Melora":
        return "bg-purple-500"
      default:
        return "bg-blue-500"
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
              <Badge className="mb-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 text-lg">
                Marka Premium Manuka
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Manukat
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent block">
                  Premium
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                Zgjidhni nga markat më të njohura të mjaltit Manuka nga Zelanda e Re
              </p>

              {/* Search Bar */}
              <div className="max-w-md mx-auto relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Kërko sipas MGO, peshës ose përshkrimit..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-amber-200 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
                />
              </div>
            </AnimatedSection>

            {/* Brand Filter */}
            <AnimatedSection delay={200}>
              <BrandFilter brands={brandNames} selectedBrand={selectedBrand} onBrandSelect={setSelectedBrand} />
            </AnimatedSection>
          </div>
        </section>

        {/* Products Section */}
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredBrands.map((brand, brandIndex) => {
              const filteredProducts = getFilteredProducts(brand)

              if (filteredProducts.length === 0) return null

              return (
                <div key={brand.name} className="mb-16">
                  <AnimatedSection className="text-center mb-8" delay={brandIndex * 100}>
                    <div className="flex items-center justify-center mb-6">
                      {brand.name === "Manuka Koru" && <Crown className="h-8 w-8 text-amber-500 mr-3 animate-pulse" />}
                      <h2
                        className={`text-4xl lg:text-5xl font-bold bg-gradient-to-r ${brand.color} bg-clip-text text-transparent`}
                      >
                        {brand.name}
                      </h2>
                      {brand.name === "Manuka Koru" && <Crown className="h-8 w-8 text-amber-500 ml-3 animate-pulse" />}
                    </div>
                    <div className={`w-24 h-1 bg-gradient-to-r ${brand.color} mx-auto rounded-full`}></div>
                    {brand.name === "Manuka Koru" && (
                      <p className="text-amber-600 font-semibold mt-4 text-lg">✨ Marka Kryesore Premium ✨</p>
                    )}
                  </AnimatedSection>

                  {/* Horizontal Product Cards */}
                  <div className="overflow-x-auto pb-4">
                    <div className="flex gap-6 min-w-max px-4">
                      {filteredProducts.map((product, productIndex) => (
                        <AnimatedSection
                          key={product.id}
                          animation="scaleIn"
                          delay={brandIndex * 100 + productIndex * 50}
                        >
                          <Card className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden">
                            {/* Product Image Section */}
                            <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 p-6 h-64">
                              {/* MGO Badge at Top */}
                              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
                                <Badge className="bg-gray-800 text-white px-4 py-2 text-lg font-bold rounded-full shadow-lg">
                                  MGO {product.mgo}
                                </Badge>
                              </div>

                              {/* Premium Badge */}
                              {product.isPremium && (
                                <Badge className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 text-sm font-semibold rounded-full flex items-center gap-1 z-10 shadow-lg">
                                  <Star className="h-3 w-3 fill-current" />
                                  Premium
                                </Badge>
                              )}

                              {/* Product Image */}
                              <div className="relative w-full h-full flex items-center justify-center mt-8">
                                <Image
                                  src={product.image || "/placeholder.svg"}
                                  alt={product.name}
                                  width={180}
                                  height={180}
                                  className="object-contain max-w-full max-h-full transition-transform duration-300 hover:scale-105"
                                  loading={productIndex < 4 ? "eager" : "lazy"}
                                />
                              </div>

                              {/* Brand Badge */}
                              <Badge
                                className={`absolute bottom-4 left-4 ${getBrandBadgeColor(brand.name)} text-white px-4 py-2 text-sm font-bold rounded-full shadow-lg`}
                              >
                                {getBrandDisplayName(brand.name)}
                              </Badge>
                            </div>

                            {/* Product Info Section */}
                            <CardContent className="p-6">
                              <div className="space-y-4">
                                {/* Product Name */}
                                <h3 className="text-xl font-bold text-gray-900 leading-tight">
                                  {product.name}
                                  <span className="text-lg font-normal text-gray-600 block">({product.weight})</span>
                                </h3>

                                {/* Weight Badge */}
                                <div className="text-center">
                                  <span className="text-lg font-semibold text-gray-700">{product.weight}</span>
                                </div>

                                {/* Description */}
                                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                                  {product.description}
                                </p>

                                {/* Pricing */}
                                <div className="text-center pt-2">
                                  {product.isEuro ? (
                                    <div>
                                      <span className="text-2xl font-bold text-blue-600">{product.euroPrice} Euro</span>
                                      <p className="text-sm text-gray-500">({product.price.toLocaleString()} L)</p>
                                    </div>
                                  ) : (
                                    <span className="text-2xl font-bold text-blue-600">
                                      {product.price.toLocaleString()} L
                                    </span>
                                  )}
                                </div>

                                {/* Star Rating */}
                                <div className="flex items-center justify-center gap-1">
                                  {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                                  ))}
                                </div>

                                {/* WhatsApp Button */}
                                <Button
                                  className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
                                  onClick={() => {
                                    const phoneNumber = "+355697320453"
                                    const message = `Dua te porosis ${product.whatsappMessage}`
                                    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(message)}`
                                    window.open(whatsappUrl, "_blank")
                                  }}
                                >
                                  <MessageCircle className="mr-2 h-4 w-4" />
                                  Porosi në WhatsApp
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        </AnimatedSection>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}

            {/* No Results Message */}
            {filteredBrands.every((brand) => getFilteredProducts(brand).length === 0) && (
              <AnimatedSection className="text-center py-20">
                <div className="text-gray-500 text-xl">Nuk u gjetën produkte që përputhen me kriteret e kërkimit.</div>
                <button
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedBrand("")
                  }}
                  className="mt-4 px-6 py-2 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-colors"
                >
                  Pastro filtrat
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
