"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Award, Shield, Search, Star, Zap, Crown } from "lucide-react"
import Navigation from "@/components/navigation"
import AnimatedSection from "@/components/animated-section"
import WhatsAppButton from "@/components/whatsapp-button"
import WhatsAppOrderButton from "@/components/whatsapp-order-button"
import BrandFilter from "@/components/brand-filter"
import PageWrapper from "../page-wrapper"

export default function ManukatPage() {
  const [selectedBrand, setSelectedBrand] = useState("")
  const [searchTerm, setSearchTerm] = useState("")

  const brands = [
    {
      name: "Manuka Koru",
      color: "from-emerald-500 to-teal-500",
      priority: 1, // Highest priority for featured display
      products: [
        {
          mgo: "300+",
          featured: true,
          inDemand: false,
          variants: [
            {
              weight: "250gr",
              price: 7500,
              image: "https://m.media-amazon.com/images/I/71+la-DryjL.jpg",
              whatsappMessage: "Manuka Koru MGO 300+",
              description: "Mjalte Manuka premium me përmbajtje të lartë antioksidantësh",
              rating: 5,
            },
          ],
        },
        {
          mgo: "500+",
          featured: false,
          inDemand: true,
          variants: [
            {
              weight: "250gr",
              price: 10000,
              image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2841-BerNBWshVNeJ2GNGar0J6eBTSxPPV1.png",
              whatsappMessage: "Manuka Koru MGO 500+",
              description: "Mjalte Manuka me aktivitet të lartë antibakterial",
              rating: 5,
            },
          ],
        },
        {
          mgo: "800+",
          featured: true,
          inDemand: true,
          variants: [
            {
              weight: "250gr",
              price: 17000,
              image: "https://bioceuticals.co.uk/cdn/shop/products/koru800.jpg?v=1590247373",
              whatsappMessage: "Manuka Koru MGO 800+",
              description: "Mjalte Manuka super premium për përdorim terapeutik",
              rating: 5,
            },
          ],
        },
        {
          mgo: "1000+",
          featured: true,
          inDemand: false,
          variants: [
            {
              weight: "250gr",
              price: 22000,
              image: "https://bioceuticals.co.uk/cdn/shop/products/koru1000.jpg?v=1590247497",
              whatsappMessage: "Manuka Koru MGO 1000+",
              description: "Mjalte Manuka me koncentrim të lartë të vetive aktive",
              rating: 5,
            },
          ],
        },
        {
          mgo: "1200+",
          featured: true,
          inDemand: false,
          variants: [
            {
              weight: "250gr",
              price: 33000,
              image: "https://m.media-amazon.com/images/I/71pEIvPrnDL.jpg",
              whatsappMessage: "Manuka Koru MGO 1200+",
              description: "Mjalte Manuka ultra premium me fuqi maksimale",
              rating: 5,
            },
          ],
        },
        {
          mgo: "1500+",
          featured: true,
          inDemand: false,
          variants: [
            {
              weight: "250gr",
              price: 110000,
              image: "https://caresoul.in/cdn/shop/files/Koru1500_3_1024x1024.png?v=1742383386",
              isEuro: true,
              euroPrice: 1100,
              whatsappMessage: "Manuka Koru MGO 1500+",
              description: "Mjalte Manuka ekskluzive me cilësi të jashtëzakonshme",
              rating: 5,
            },
          ],
        },
        {
          mgo: "1959+",
          featured: true,
          inDemand: false,
          variants: [
            {
              weight: "250gr",
              price: 220000,
              image: "https://manukahoneyofnz.com/cdn/shop/files/MH-Website-Images-KORU1959_2_1200x.png?v=1712528245",
              isEuro: true,
              euroPrice: 2200,
              whatsappMessage: "Manuka Koru MGO 1959+",
              description: "Mjalte Manuka më e fuqishme në botë",
              rating: 5,
            },
          ],
        },
      ],
    },
    {
      name: "Manuka NUI",
      color: "from-yellow-500 to-orange-500",
      priority: 2,
      products: [
        {
          mgo: "100+",
          featured: false,
          inDemand: false,
          variants: [
            {
              weight: "250gr",
              price: 3000,
              image: "https://neozealand.com/cdn/shop/files/DSC3887_100.jpg?v=1718806711",
              whatsappMessage: "Manuka NUI MGO 100+ 250g",
              description: "Madhësi familjare për përdorim të përditshëm",
              rating: 5,
            },
            {
              weight: "500gr",
              price: 5500,
              image: "https://m.media-amazon.com/images/I/51hv3OL8NUL.jpg",
              whatsappMessage: "Manuka NUI MGO 100+ 500g",
              description: "Madhësi familjare për përdorim të përditshëm",
              rating: 5,
            },
          ],
        },
        {
          mgo: "250+",
          featured: false,
          inDemand: false,
          variants: [
            {
              weight: "250gr",
              price: 3500,
              image:
                "https://neozealand.com/cdn/shop/files/s-l1600_4_192aa3f2-472d-470f-b2f9-f2c4fb692a00.jpg?v=1709631267",
              whatsappMessage: "Manuka NUI MGO 250+ 250gr",
              description: "Mjalte Manuka me aktivitet të fortë",
              rating: 5,
            },
            {
              weight: "500gr",
              price: 6500,
              image: "https://m.media-amazon.com/images/I/61VPEnQQBYL._AC_UF1000,1000_QL80_.jpg",
              whatsappMessage: "Manuka NUI MGO 250+ 500gr",
              description: "Madhësi familjare me aktivitet të fortë",
              rating: 5,
            },
          ],
        },
        {
          mgo: "400+",
          featured: true,
          inDemand: false,
          variants: [
            {
              weight: "250gr",
              price: 5000,
              image: "https://suztain.no/cdn/shop/files/2_7bec0993-af0d-4918-bf94-78353c3f9a41.jpg?v=1734095461",
              whatsappMessage: "Manuka NUI MGO 400+ 250gr",
              description: "Mjalte Manuka me aktivitet të fortë",
              rating: 5,
            },
            {
              weight: "500gr",
              price: 9500,
              image: "https://m.media-amazon.com/images/I/61IfN4YbhyL._AC_UF1000,1000_QL80_.jpg",
              whatsappMessage: "Manuka NUI MGO 400+ 500gr",
              description: "Madhësi familjare me aktivitet të fortë",
              rating: 5,
            },
          ],
        },
        {
          mgo: "600+",
          featured: false,
          inDemand: false,
          variants: [
            {
              weight: "250gr",
              price: 7800,
              image: "https://neozealand.com/cdn/shop/files/DSC3887_600.png?v=1718807355",
              whatsappMessage: "Manuka NUI MGO 600+ 250gr",
              description: "Mjalte Manuka me aktivitet të lartë",
              rating: 5,
            },
            {
              weight: "500gr",
              price: 15000,
              image: "https://neozealand.com/cdn/shop/files/DSC3880_600.png?v=1718807355",
              whatsappMessage: "Manuka NUI MGO 600+ 500gr",
              description: "Madhësi familjare me aktivitet të lartë",
              rating: 5,
            },
          ],
        },
      ],
    },
    {
      name: "Manuka Health",
      color: "from-blue-500 to-indigo-500",
      priority: 3,
      products: [
        {
          mgo: "100+",
          featured: false,
          inDemand: false,
          variants: [
            {
              weight: "250gr",
              price: 3800,
              image:
                "https://manukahealth.shop/cdn/shop/products/MH-Honey-MGO100_-250g-front-DE_grande.jpg?v=1658158893",
              whatsappMessage: "Manuka Health MGO 100+ 250gr",
              description: "Mjalte Manuka për përdorim të përditshëm",
              rating: 5,
            },
            {
              weight: "500gr",
              price: 6500,
              image: "https://manukahealth.shop/cdn/shop/products/MH-Honey-MGO100_-500g-front-DE.jpg?v=1658515140",
              whatsappMessage: "Manuka Health MGO 100+ 500gr",
              description: "Madhësi familjare për përdorim të përditshëm",
              rating: 5,
            },
            {
              weight: "1kg",
              price: 12000,
              image: "https://manukahealth.shop/cdn/shop/products/MH-Honey-MGO100_-1kg-front-DE.jpg?v=1658515140",
              whatsappMessage: "Manuka Health MGO 100+ 1kg",
              description: "Madhësi e madhe për familje",
              rating: 5,
            },
          ],
        },
        {
          mgo: "250+",
          featured: true,
          inDemand: false,
          variants: [
            {
              weight: "250gr",
              price: 4500,
              image:
                "https://digitalcontent.api.tesco.com/v2/media/marketplace/479e576f-1fdf-4e1e-a5f1-043d53f4223a/I4N9uuryz_ynEx63lZcFOBLY8_1118806194.jpeg?h=960&w=960",
              whatsappMessage: "Manuka Health MGO 250+ 250gr",
              description: "Mjalte Manuka me aktivitet të mirë",
              rating: 5,
            },
            {
              weight: "500gr",
              price: 7500,
              image: "https://manukahealth.shop/cdn/shop/products/mh-honey-mgo250_-500g-front-de.jpg?v=1700054298",
              whatsappMessage: "Manuka Health MGO 250+ 500gr",
              description: "Madhësi familjare me aktivitet të mirë",
              rating: 5,
            },
            {
              weight: "1kg",
              price: 14000,
              image: "https://m.media-amazon.com/images/I/61jLQZHAS9L.jpg",
              whatsappMessage: "Manuka Health MGO 250+ 1kg",
              description: "Madhësi e madhe për familje",
              rating: 5,
            },
          ],
        },
        {
          mgo: "400+",
          featured: false,
          inDemand: false,
          variants: [
            {
              weight: "250gr",
              price: 6500,
              image: "https://m.media-amazon.com/images/I/61rMDpbr6KL.jpg",
              whatsappMessage: "Manuka Health MGO 400+ 250gr",
              description: "Mjalte Manuka me aktivitet të lartë",
              rating: 5,
            },
            {
              weight: "500gr",
              price: 13000,
              image: "https://manukahealth.shop/cdn/shop/products/mh-honey-mgo400_-500g-front-de.jpg?v=1717255689",
              whatsappMessage: "Manuka Health MGO 400+ 500gr",
              description: "Madhësi familjare me aktivitet të lartë",
              rating: 5,
            },
          ],
        },
        {
          mgo: "550+",
          featured: false,
          inDemand: false,
          variants: [
            {
              weight: "250gr",
              price: 9000,
              image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgWwEziLn4fdq7YKeC4DrB5jS9aQ6sjcwsVg&s",
              whatsappMessage: "Manuka Health MGO 550+ 250gr",
              description: "Mjalte Manuka me aktivitet të fortë",
              rating: 5,
            },
            {
              weight: "500gr",
              price: 16500,
              image: "https://manukahealth.shop/cdn/shop/products/MH-Honey-MGO550_-500g-front-DE.jpg?v=1665054004",
              whatsappMessage: "Manuka Health MGO 550+ 500gr",
              description: "Madhësi familjare me aktivitet të fortë",
              rating: 5,
            },
          ],
        },
      ],
    },
    {
      name: "Melora",
      color: "from-purple-500 to-violet-500",
      priority: 4,
      products: [
        {
          mgo: "70+",
          featured: false,
          inDemand: false,
          variants: [
            {
              weight: "330gr",
              price: 2500,
              image:
                "https://www.ardkeen.com/cdn/shop/files/MeloraMultifloraManukaHoneyMGO70_330g_1000x.png?v=1704196996",
              whatsappMessage: "Manuka Melora MGO 70+ 340gr",
              description: "Mjalte Manuka për fillestare",
              rating: 5,
            },
          ],
        },
        {
          mgo: "300+",
          featured: false,
          inDemand: false,
          variants: [
            {
              weight: "250gr",
              price: 3800,
              image: "https://melora.co.uk/cdn/shop/products/300250g.jpg?v=1745410540&width=1445",
              whatsappMessage: "Manuka Melora MGO 300+ 250gr",
              description: "Mjalte Manuka me aktivitet të mirë",
              rating: 5,
            },
            {
              weight: "500gr",
              price: 7200,
              image: "https://melora.co.uk/cdn/shop/products/300500g.jpg?v=1745407645&width=1445",
              whatsappMessage: "Manuka Melora MGO 300+ 500gr",
              description: "Madhësi familjare me aktivitet të mirë",
              rating: 5,
            },
          ],
        },
        {
          mgo: "526+",
          featured: false,
          inDemand: false,
          variants: [
            {
              weight: "250gr",
              price: 6200,
              image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9_gL7beWKi5bX7psfBC0_PmO6Nhsu66upOg&s",
              whatsappMessage: "Manuka Melora MGO 526+ 250g",
              description: "Mjalte Manuka me aktivitet të lartë",
              rating: 5,
            },
          ],
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
        product.variants.some(
          (variant: any) =>
            variant.weight.toLowerCase().includes(searchTerm.toLowerCase()) ||
            variant.description.toLowerCase().includes(searchTerm.toLowerCase()),
        ),
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
                <div key={brand.name} className="mb-20">
                  <AnimatedSection className="text-center mb-12" delay={brandIndex * 100}>
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

                  {filteredProducts.map((product, productIndex) => (
                    <div key={product.mgo} className="mb-12">
                      <AnimatedSection className="text-center mb-8" delay={brandIndex * 100 + productIndex * 50}>
                        <Badge className={`bg-gradient-to-r ${brand.color} text-white px-6 py-2 text-lg mb-4`}>
                          MGO {product.mgo}
                        </Badge>
                      </AnimatedSection>

                      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {product.variants.map((variant, variantIndex) => (
                          <AnimatedSection
                            key={`${variant.weight}-${variant.price}`}
                            animation="scaleIn"
                            delay={brandIndex * 100 + productIndex * 50 + variantIndex * 30}
                          >
                            <Card
                              className={`overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 group border-0 h-full flex flex-col ${
                                product.inDemand
                                  ? "bg-gradient-to-br from-pink-50 to-rose-50 ring-2 ring-pink-200"
                                  : "bg-white/90 backdrop-blur-sm"
                              }`}
                            >
                              <div className="aspect-square relative overflow-hidden w-full">
                                <Image
                                  src={variant.image || "/placeholder.svg"}
                                  alt={`${brand.name} MGO ${product.mgo} ${variant.weight}`}
                                  fill
                                  className="object-contain group-hover:scale-110 transition-transform duration-700"
                                />

                                {/* Top Badges */}
                                <div className="absolute top-4 left-4 flex flex-col gap-2">
                                  {variant.featured && (
                                    <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 text-sm flex items-center gap-1">
                                      <Star className="h-3 w-3 fill-current" />
                                      Premium
                                    </Badge>
                                  )}
                                  <Badge
                                    className={`bg-gradient-to-r ${brand.color} text-white px-4 py-2 text-lg shadow-lg`}
                                  >
                                    MGO {product.mgo}
                                  </Badge>
                                </div>

                                {/* In Demand Badge */}
                                {product.inDemand && (
                                  <Badge className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 text-sm flex items-center gap-1 animate-pulse">
                                    <Zap className="h-3 w-3" />I KËRKUAR
                                  </Badge>
                                )}

                                {/* Brand Badge */}
                                <Badge
                                  className={`absolute bottom-4 left-4 px-4 py-2 text-sm font-bold ${
                                    brand.name === "Manuka Koru"
                                      ? "bg-blue-500 text-white"
                                      : brand.name === "Manuka NUI"
                                        ? "bg-green-500 text-white"
                                        : brand.name === "Manuka Health"
                                          ? "bg-indigo-500 text-white"
                                          : "bg-purple-500 text-white"
                                  }`}
                                >
                                  {getBrandDisplayName(brand.name)}
                                </Badge>

                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  <Award className="h-5 w-5 text-amber-600" />
                                </div>
                              </div>

                              <CardContent className="p-6 flex flex-col flex-grow">
                                <div className="flex-grow">
                                  <h3 className="font-bold text-xl mb-2 text-gray-900 group-hover:text-amber-600 transition-colors duration-300">
                                    {brand.name} MGO {product.mgo}
                                  </h3>
                                  <p className="text-lg font-medium text-gray-700 mb-3">({variant.weight})</p>
                                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">{variant.description}</p>

                                  <div className="flex items-center justify-between mb-4">
                                    <Badge variant="outline" className="border-amber-600 text-amber-600">
                                      {variant.weight}
                                    </Badge>
                                    <div className="flex items-center text-green-600">
                                      <Shield className="h-4 w-4 mr-1" />
                                      <span className="text-sm font-medium">E Certifikuar</span>
                                    </div>
                                  </div>

                                  {/* Star Rating */}
                                  <div className="flex items-center mb-4">
                                    {[...Array(variant.rating)].map((_, i) => (
                                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                                    ))}
                                    <span className="ml-2 text-gray-600 text-sm">(5.0)</span>
                                  </div>
                                </div>

                                <div className="mt-auto">
                                  <div className="text-center mb-4">
                                    {variant.isEuro ? (
                                      <div>
                                        <span className="text-2xl font-bold text-blue-600">{variant.euroPrice}€</span>
                                        <p className="text-sm text-gray-500">({variant.price} L)</p>
                                      </div>
                                    ) : (
                                      <span className="text-2xl font-bold text-blue-600">{variant.price} L</span>
                                    )}
                                  </div>

                                  <WhatsAppOrderButton productName={variant.whatsappMessage} />
                                </div>
                              </CardContent>
                            </Card>
                          </AnimatedSection>
                        ))}
                      </div>
                    </div>
                  ))}
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
