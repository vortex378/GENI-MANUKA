"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Award, Shield } from "lucide-react"
import Navigation from "@/components/navigation"
import AnimatedSection from "@/components/animated-section"
import WhatsAppButton from "@/components/whatsapp-button"
import WhatsAppOrderButton from "@/components/whatsapp-order-button"
import PokPayButton from "@/components/pokpay-button"

export default function ManukatPage() {
  const brands = [
    {
      name: "Manuka Koru",
      color: "from-emerald-500 to-teal-500",
      products: [
        {
          mgo: "300+",
          variants: [
            {
              weight: "250gr",
              price: 7500,
              image: "https://m.media-amazon.com/images/I/71+la-DryjL.jpg",
              whatsappMessage: "Manuka Koru MGO 300+",
            },
          ],
        },
        {
          mgo: "500+",
          variants: [
            {
              weight: "250gr",
              price: 10000,
              image: "https://m.media-amazon.com/images/I/71qcOQdK05L._AC_UF1000,1000_QL80_.jpg",
              whatsappMessage: "Manuka Koru MGO 500+",
            },
          ],
        },
        {
          mgo: "800+",
          variants: [
            {
              weight: "250gr",
              price: 17000,
              image: "https://bioceuticals.co.uk/cdn/shop/products/koru800.jpg?v=1590247373",
              whatsappMessage: "Manuka Koru MGO 800+",
            },
          ],
        },
        {
          mgo: "1000+",
          variants: [
            {
              weight: "250gr",
              price: 22000,
              image: "https://bioceuticals.co.uk/cdn/shop/products/koru1000.jpg?v=1590247497",
              whatsappMessage: "Manuka Koru MGO 1000+",
            },
          ],
        },
        {
          mgo: "1200+",
          variants: [
            {
              weight: "250gr",
              price: 33000,
              image: "https://m.media-amazon.com/images/I/71pEIvPrnDL.jpg",
              whatsappMessage: "Manuka Koru MGO 1200+",
            },
          ],
        },
        {
          mgo: "1500+",
          variants: [
            {
              weight: "250gr",
              price: 110000,
              image: "https://caresoul.in/cdn/shop/files/Koru1500_3_1024x1024.png?v=1742383386",
              isEuro: true,
              euroPrice: 1100,
              whatsappMessage: "Manuka Koru MGO 1500+",
            },
          ],
        },
        {
          mgo: "1959+",
          variants: [
            {
              weight: "250gr",
              price: 220000,
              image: "https://manukahoneyofnz.com/cdn/shop/files/MH-Website-Images-KORU1959_2_1200x.png?v=1712528245",
              isEuro: true,
              euroPrice: 2200,
              whatsappMessage: "Manuka Koru MGO 1959+",
            },
          ],
        },
      ],
    },
    {
      name: "Manuka NUI",
      color: "from-yellow-500 to-orange-500",
      products: [
        {
          mgo: "100+",
          variants: [
            {
              weight: "250gr",
              price: 3000,
              image: "https://neozealand.com/cdn/shop/files/DSC3887_100.jpg?v=1718806711",
              whatsappMessage: "Manuka NUI MGO 100+ 250g/500g",
            },
            {
              weight: "500gr",
              price: 5500,
              image: "https://m.media-amazon.com/images/I/51hv3OL8NUL.jpg",
              whatsappMessage: "Manuka NUI MGO 100+ 250g/500g",
            },
          ],
        },
        {
          mgo: "250+",
          variants: [
            {
              weight: "250gr",
              price: 3500,
              image:
                "https://neozealand.com/cdn/shop/files/s-l1600_4_192aa3f2-472d-470f-b2f9-f2c4fb692a00.jpg?v=1709631267",
              whatsappMessage: "Manuka NUI MGO 250+ 250/500gr",
            },
            {
              weight: "500gr",
              price: 6500,
              image: "https://m.media-amazon.com/images/I/61VPEnQQBYL._AC_UF1000,1000_QL80_.jpg",
              whatsappMessage: "Manuka NUI MGO 250+ 250/500gr",
            },
          ],
        },
        {
          mgo: "400+",
          variants: [
            {
              weight: "250gr",
              price: 5000,
              image: "https://suztain.no/cdn/shop/files/2_7bec0993-af0d-4918-bf94-78353c3f9a41.jpg?v=1734095461",
              whatsappMessage: "Manuka NUI MGO 400+ 250/500gr",
            },
            {
              weight: "500gr",
              price: 9500,
              image: "https://m.media-amazon.com/images/I/61IfN4YbhyL._AC_UF1000,1000_QL80_.jpg",
              whatsappMessage: "Manuka NUI MGO 400+ 250/500gr",
            },
          ],
        },
        {
          mgo: "600+",
          variants: [
            {
              weight: "250gr",
              price: 7800,
              image: "https://neozealand.com/cdn/shop/files/DSC3887_600.png?v=1718807355",
              whatsappMessage: "Manuka NUI MGO 600+ 250/500gr",
            },
            {
              weight: "500gr",
              price: 15000,
              image: "https://neozealand.com/cdn/shop/files/DSC3880_600.png?v=1718807355",
              whatsappMessage: "Manuka NUI MGO 600+ 250/500gr",
            },
          ],
        },
      ],
    },
    {
      name: "Manuka Health",
      color: "from-blue-500 to-indigo-500",
      products: [
        {
          mgo: "100+",
          variants: [
            {
              weight: "250gr",
              price: 3800,
              image:
                "https://manukahealth.shop/cdn/shop/products/MH-Honey-MGO100_-250g-front-DE_grande.jpg?v=1658158893",
              whatsappMessage: "Manuka Health MGO 100+ 250/500gr/1kg",
            },
            {
              weight: "500gr",
              price: 6500,
              image: "https://manukahealth.shop/cdn/shop/products/MH-Honey-MGO100_-500g-front-DE.jpg?v=1658515140",
              whatsappMessage: "Manuka Health MGO 100+ 250/500gr/1kg",
            },
            {
              weight: "1kg",
              price: 12000,
              image: "https://manukahealth.shop/cdn/shop/products/MH-Honey-MGO100_-1kg-front-DE.jpg?v=1658515140",
              whatsappMessage: "Manuka Health MGO 100+ 250/500gr/1kg",
            },
          ],
        },
        {
          mgo: "250+",
          variants: [
            {
              weight: "250gr",
              price: 4500,
              image:
                "https://digitalcontent.api.tesco.com/v2/media/marketplace/479e576f-1fdf-4e1e-a5f1-043d53f4223a/I4N9uuryz_ynEx63lZcFOBLY8_1118806194.jpeg?h=960&w=960",
              whatsappMessage: "Manuka Health MGO 250+ 250/500gr/1kg",
            },
            {
              weight: "500gr",
              price: 7500,
              image: "https://manukahealth.shop/cdn/shop/products/mh-honey-mgo250_-500g-front-de.jpg?v=1700054298",
              whatsappMessage: "Manuka Health MGO 250+ 250/500gr/1kg",
            },
            {
              weight: "1kg",
              price: 14000,
              image: "https://m.media-amazon.com/images/I/61jLQZHAS9L.jpg",
              whatsappMessage: "Manuka Health MGO 250+ 250/500gr/1kg",
            },
          ],
        },
        {
          mgo: "400+",
          variants: [
            {
              weight: "250gr",
              price: 6500,
              image: "https://m.media-amazon.com/images/I/61rMDpbr6KL.jpg",
              whatsappMessage: "Manuka Health MGO 400+ 250/500gr",
            },
            {
              weight: "500gr",
              price: 13000,
              image: "https://manukahealth.shop/cdn/shop/products/mh-honey-mgo400_-500g-front-de.jpg?v=1717255689",
              whatsappMessage: "Manuka Health MGO 400+ 250/500gr",
            },
          ],
        },
        {
          mgo: "550+",
          variants: [
            {
              weight: "250gr",
              price: 9000,
              image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgWwEziLn4fdq7YKeC4DrB5jS9aQ6sjcwsVg&s",
              whatsappMessage: "Manuka Health MGO 550+ 250/500gr",
            },
            {
              weight: "500gr",
              price: 16500,
              image: "https://manukahealth.shop/cdn/shop/products/MH-Honey-MGO550_-500g-front-DE.jpg?v=1665054004",
              whatsappMessage: "Manuka Health MGO 550+ 250/500gr",
            },
          ],
        },
      ],
    },
    {
      name: "Melora",
      color: "from-purple-500 to-violet-500",
      products: [
        {
          mgo: "70+",
          variants: [
            {
              weight: "330gr",
              price: 2500,
              image:
                "https://www.ardkeen.com/cdn/shop/files/MeloraMultifloraManukaHoneyMGO70_330g_1000x.png?v=1704196996",
              whatsappMessage: "Manuka Melora MGO 70+ 340gr",
            },
          ],
        },
        {
          mgo: "300+",
          variants: [
            {
              weight: "250gr",
              price: 3800,
              image: "https://melora.co.uk/cdn/shop/products/300250g.jpg?v=1745410540&width=1445",
              whatsappMessage: "Manuka Melora MGO 300+ 250/500gr",
            },
            {
              weight: "500gr",
              price: 7200,
              image: "https://melora.co.uk/cdn/shop/products/300500g.jpg?v=1745407645&width=1445",
              whatsappMessage: "Manuka Melora MGO 300+ 250/500gr",
            },
          ],
        },
        {
          mgo: "526+",
          variants: [
            {
              weight: "250gr",
              price: 6200,
              image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9_gL7beWKi5bX7psfBC0_PmO6Nhsu66upOg&s",
              whatsappMessage: "Manuka Melora MGO 526+ 250g",
            },
          ],
        },
      ],
    },
  ]

  return (
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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Zgjidhni nga markat më të njohura të mjaltit Manuka nga Zelanda e Re
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Brands Section */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {brands.map((brand, brandIndex) => (
            <div key={brand.name} className="mb-20">
              <AnimatedSection className="text-center mb-12" delay={brandIndex * 100}>
                <h2
                  className={`text-4xl lg:text-5xl font-bold bg-gradient-to-r ${brand.color} bg-clip-text text-transparent mb-4`}
                >
                  {brand.name}
                </h2>
                <div className={`w-24 h-1 bg-gradient-to-r ${brand.color} mx-auto rounded-full`}></div>
              </AnimatedSection>

              {brand.products.map((product, productIndex) => (
                <div key={product.mgo} className="mb-12">
                  <AnimatedSection className="text-center mb-8" delay={brandIndex * 100 + productIndex * 50}>
                    <Badge className={`bg-gradient-to-r ${brand.color} text-white px-6 py-2 text-lg mb-4`}>
                      MGO {product.mgo}
                    </Badge>
                  </AnimatedSection>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {product.variants.map((variant, variantIndex) => (
                      <AnimatedSection
                        key={`${variant.weight}-${variant.price}`}
                        animation="scaleIn"
                        delay={brandIndex * 100 + productIndex * 50 + variantIndex * 30}
                      >
                        <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 group border-0 bg-white/90 backdrop-blur-sm h-full flex flex-col">
                          <div className="aspect-square relative overflow-hidden w-full">
                            <Image
                              src={variant.image || "/placeholder.svg"}
                              alt={`${brand.name} MGO ${product.mgo} ${variant.weight}`}
                              fill
                              className="object-contain group-hover:scale-110 transition-transform duration-700"
                            />
                            <Badge
                              className={`absolute top-4 left-4 bg-gradient-to-r ${brand.color} text-white px-4 py-2 text-lg shadow-lg`}
                            >
                              MGO {product.mgo}
                            </Badge>
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <Award className="h-5 w-5 text-amber-600" />
                            </div>
                          </div>

                          <CardContent className="p-6 flex flex-col flex-grow">
                            <div className="flex-grow">
                              <h3 className="font-bold text-xl mb-3 text-gray-900 group-hover:text-amber-600 transition-colors duration-300">
                                {brand.name} MGO {product.mgo}
                              </h3>
                              <p className="text-gray-600 mb-4 leading-relaxed">
                                Mjalte premium Manuka {variant.weight} me cilësi të lartë
                              </p>

                              <div className="flex items-center justify-between mb-4">
                                <Badge variant="outline" className="border-amber-600 text-amber-600">
                                  {variant.weight}
                                </Badge>
                                <div className="flex items-center text-green-600">
                                  <Shield className="h-4 w-4 mr-1" />
                                  <span className="text-sm font-medium">E Certifikuar</span>
                                </div>
                              </div>
                            </div>

                            <div className="mt-auto">
                              <div className="text-center mb-4">
                                {variant.isEuro ? (
                                  <div>
                                    <span className="text-3xl font-bold text-amber-600">{variant.euroPrice}€</span>
                                    <p className="text-sm text-gray-500">({variant.price} L)</p>
                                  </div>
                                ) : (
                                  <span className="text-3xl font-bold text-amber-600">{variant.price} L</span>
                                )}
                              </div>

                              {/* WhatsApp Order Button */}
                              <WhatsAppOrderButton productName={variant.whatsappMessage} />

                              <div className="mt-4">
                                <PokPayButton
                                  productName={`${brand.name} MGO ${product.mgo} ${variant.weight}`}
                                  price={variant.price}
                                />
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </AnimatedSection>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <WhatsAppButton />
    </div>
  )
}
