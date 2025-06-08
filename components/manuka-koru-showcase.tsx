"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Crown, Star, Award, ArrowRight, Sparkles } from "lucide-react"
import AnimatedSection from "@/components/animated-section"

interface KoruProduct {
  id: string
  mgo: number
  mgoLabel: string
  name: string
  image: string
  price: number
  euroPrice?: number
  isEuro?: boolean
  description: string
  isPremium: boolean
  isRare?: boolean
  link: string
}

export default function ManukaKoruShowcase() {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null)

  const koruProducts: KoruProduct[] = [
    {
      id: "koru-300",
      mgo: 300,
      mgoLabel: "MGO 300+",
      name: "Manuka Koru MGO 300+",
      image: "https://m.media-amazon.com/images/I/71+la-DryjL.jpg",
      price: 7500,
      description: "Mjalte Manuka premium me përmbajtje të lartë antioksidantësh",
      isPremium: true,
      link: "/manukat#koru-300",
    },
    {
      id: "koru-500",
      mgo: 500,
      mgoLabel: "MGO 500+",
      name: "Manuka Koru MGO 500+",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2841-BerNBWshVNeJ2GNGar0J6eBTSxPPV1.png",
      price: 10000,
      description: "Mjalte Manuka me aktivitet të lartë antibakterial",
      isPremium: false,
      link: "/manukat#koru-500",
    },
    {
      id: "koru-800",
      mgo: 800,
      mgoLabel: "MGO 800+",
      name: "Manuka Koru MGO 800+",
      image: "https://bioceuticals.co.uk/cdn/shop/products/koru800.jpg?v=1590247373",
      price: 17000,
      description: "Mjalte Manuka super premium për përdorim terapeutik",
      isPremium: true,
      link: "/manukat#koru-800",
    },
    {
      id: "koru-1000",
      mgo: 1000,
      mgoLabel: "MGO 1000+",
      name: "Manuka Koru MGO 1000+",
      image: "https://bioceuticals.co.uk/cdn/shop/products/koru1000.jpg?v=1590247497",
      price: 22000,
      description: "Mjalte Manuka me koncentrim të lartë të vetive aktive",
      isPremium: true,
      link: "/manukat#koru-1000",
    },
    {
      id: "koru-1200",
      mgo: 1200,
      mgoLabel: "MGO 1200+",
      name: "Manuka Koru MGO 1200+",
      image: "https://m.media-amazon.com/images/I/71pEIvPrnDL.jpg",
      price: 33000,
      description: "Mjalte Manuka luksoze me veti të jashtëzakonshme",
      isPremium: true,
      link: "/manukat#koru-1200",
    },
    {
      id: "koru-1500",
      mgo: 1500,
      mgoLabel: "MGO 1500+",
      name: "Manuka Koru MGO 1500+",
      image: "https://caresoul.in/cdn/shop/files/Koru1500_3_1024x1024.png?v=1742383386",
      price: 110000,
      euroPrice: 1100,
      isEuro: true,
      description: "Mjalte Manuka ekskluzive me cilësinë më të lartë",
      isPremium: true,
      isRare: true,
      link: "/manukat#koru-1500",
    },
    {
      id: "koru-1959",
      mgo: 1959,
      mgoLabel: "MGO 1959+",
      name: "Manuka Koru MGO 1959+",
      image: "https://manukahoneyofnz.com/cdn/shop/files/MH-Website-Images-KORU1959_2_1200x.png?v=1712528245",
      price: 220000,
      euroPrice: 2200,
      isEuro: true,
      description: "Koleksioni më i rrallë - mjalte Manuka më e fuqishme në botë",
      isPremium: true,
      isRare: true,
      link: "/manukat#koru-1959",
    },
  ]

  // Sort products by MGO strength (ascending)
  const sortedProducts = [...koruProducts].sort((a, b) => a.mgo - b.mgo)

  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="text-center mb-12">
        <AnimatedSection>
          <div className="flex items-center justify-center mb-6">
            <Crown className="h-8 w-8 text-amber-500 mr-3 animate-pulse" />
            <Badge className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 text-lg font-bold">
              MANUKA KORU COLLECTION
            </Badge>
            <Crown className="h-8 w-8 text-amber-500 ml-3 animate-pulse" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            Koleksioni Premium Koru
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Zbuloni gamën e plotë të mjaltit Manuka Koru - nga MGO 300+ deri në MGO 1959+, çdo produkt i testuar dhe i
            certifikuar për cilësi të jashtëzakonshme.
          </p>
        </AnimatedSection>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
        {sortedProducts.map((product, index) => (
          <AnimatedSection key={product.id} animation="scaleIn" delay={index * 100}>
            <Link href={product.link} className="block group">
              <Card
                className="overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-0 bg-white/90 backdrop-blur-sm h-full relative"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                {/* Product Image Section */}
                <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 p-6 aspect-square">
                  {/* Premium/Rare Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                    {product.isPremium && (
                      <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 text-sm font-semibold rounded-full flex items-center gap-1 shadow-lg">
                        <Star className="h-3 w-3 fill-current" />
                        Premium
                      </Badge>
                    )}
                    {product.isRare && (
                      <Badge className="bg-gradient-to-r from-purple-500 to-violet-500 text-white px-3 py-1 text-sm font-semibold rounded-full flex items-center gap-1 shadow-lg animate-pulse">
                        <Sparkles className="h-3 w-3 fill-current" />I Rrallë
                      </Badge>
                    )}
                  </div>

                  {/* MGO Badge */}
                  <Badge className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 text-lg font-bold rounded-full shadow-lg z-10">
                    {product.mgoLabel}
                  </Badge>

                  {/* Product Image */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={250}
                      height={250}
                      className={`object-contain max-w-full max-h-full transition-all duration-500 ${
                        hoveredProduct === product.id ? "scale-110" : "scale-100"
                      }`}
                      loading={index < 4 ? "eager" : "lazy"}
                    />
                  </div>

                  {/* KORU Brand Badge */}
                  <Badge className="absolute bottom-4 left-4 bg-blue-500 text-white px-4 py-2 text-sm font-bold rounded-full shadow-lg">
                    KORU
                  </Badge>

                  {/* Hover Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent transition-opacity duration-300 ${
                      hoveredProduct === product.id ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </div>

                {/* Product Info Section */}
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {/* MGO Strength Label */}
                    <div className="text-center">
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        {product.mgoLabel}
                      </h3>
                      <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-2 rounded-full" />
                    </div>

                    {/* Product Name */}
                    <h4 className="text-lg font-semibold text-gray-900 text-center leading-tight">{product.name}</h4>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed text-center line-clamp-2">
                      {product.description}
                    </p>

                    {/* Pricing */}
                    <div className="text-center pt-2">
                      {product.isEuro ? (
                        <div>
                          <span className="text-2xl font-bold text-blue-600">{product.euroPrice}€</span>
                          <p className="text-sm text-gray-500">({product.price.toLocaleString()} L)</p>
                        </div>
                      ) : (
                        <span className="text-2xl font-bold text-blue-600">{product.price.toLocaleString()} L</span>
                      )}
                    </div>

                    {/* View Product Button */}
                    <div className="pt-4">
                      <Button
                        className={`w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform ${
                          hoveredProduct === product.id ? "scale-105" : "scale-100"
                        }`}
                      >
                        <Award className="mr-2 h-4 w-4" />
                        Shiko Produktin
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>

                {/* Strength Indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-200 to-indigo-200">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-500"
                    style={{ width: `${Math.min((product.mgo / 2000) * 100, 100)}%` }}
                  />
                </div>
              </Card>
            </Link>
          </AnimatedSection>
        ))}
      </div>

      {/* Bottom CTA Section */}
      <AnimatedSection className="text-center mt-16" delay={800}>
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 lg:p-12">
          <div className="flex items-center justify-center mb-6">
            <Crown className="h-10 w-10 text-blue-500 mr-3" />
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">Pse të Zgjedhësh Manuka Koru?</h3>
            <Crown className="h-10 w-10 text-blue-500 ml-3" />
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                icon: Award,
                title: "Cilësi e Garantuar",
                description: "Çdo produkt i testuar dhe i certifikuar nga laboratorë të pavarur",
              },
              {
                icon: Star,
                title: "MGO i Lartë",
                description: "Nga 300+ deri në 1959+ - gama më e gjerë e forcave MGO",
              },
              {
                icon: Sparkles,
                title: "Premium Quality",
                description: "Marka më e njohur dhe e besuar e mjaltit Manuka në botë",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold text-lg mb-2 text-gray-900">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/manukat">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Crown className="mr-2 h-5 w-5" />
                Shiko të Gjitha Manukat
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300"
              >
                Konsulto Ekspertët
              </Button>
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}
