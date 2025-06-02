"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Heart, Zap, Shield } from "lucide-react"
import Navigation from "@/components/navigation"
import AnimatedSection from "@/components/animated-section"
import WhatsAppButton from "@/components/whatsapp-button"
import PayPalButton from "@/components/paypal-button"
import WhatsAppProductButton from "@/components/whatsapp-product-button"

export default function ProductsPage() {
  const supplements = [
    {
      id: 1,
      name: "Kolagjen",
      price: 2500,
      image: "https://www.vianaturalia.ro/wp-content/uploads/2018/10/Colagen-bovin-450x450.jpg",
      description: "Kolagjen i pastër për shëndetin e lëkurës dhe nyjeve",
      benefits: ["Përmirëson elasticitetin e lëkurës", "Mbështet shëndetin e nyjeve", "Anti-aging natyror"],
      icon: Heart,
      color: "from-pink-500 to-rose-500",
    },
    {
      id: 2,
      name: "Kolagjen Peptides MSM",
      price: 2500,
      image: "https://www.vianaturalia.ro/wp-content/uploads/2018/07/Colagen-cu-MSM-3-450x450.jpg",
      description: "Kolagjen me MSM për përfitime të shtuar",
      benefits: ["Kolagjen + MSM", "Mbështetje e plotë e nyjeve", "Rikuperim më i shpejtë"],
      icon: Zap,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 3,
      name: "Vitamin C",
      price: 1500,
      image: "https://intenson.pl/cdn/shop/files/witaminaC150_960x720.png?v=1739975165",
      description: "Vitamin C i pastër për sistemin imunitar",
      benefits: ["Forcim i imunitetit", "Antioksidant i fuqishëm", "Energji natyrore"],
      icon: Shield,
      color: "from-orange-500 to-yellow-500",
    },
    {
      id: 4,
      name: "Spirulina",
      price: 1500,
      image: "https://us-i.makeupstore.com/j/j2/j2izpwefxtxp.jpg",
      description: "Superfood i gjelbër me proteina të larta",
      benefits: ["I pasur me proteina", "Detoksifikim natyror", "Energji e qëndrueshme"],
      icon: Heart,
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 5,
      name: "Vital Fibre",
      price: 1500,
      image: "https://www.smakolyk.co.uk/wp-content/uploads/2025/01/21992.png",
      description: "Fibra vitale për shëndetin e tretjes",
      benefits: ["Përmirëson tretjen", "Mbështet shëndetin e zorrëve", "Kontroll i peshës"],
      icon: Zap,
      color: "from-purple-500 to-violet-500",
    },
    {
      id: 6,
      name: "Ksylitol Sheqeri Diabetik",
      price: 1200,
      image: "https://intenson.pl/cdn/shop/files/ksylitolchinski500_1280x.png?v=1741183860",
      description: "Ëmbëlsues natyror për diabetikë",
      benefits: ["Pa kalori shtesë", "I sigurt për diabetikë", "Shije e ëmbël natyrore"],
      icon: Heart,
      color: "from-teal-500 to-cyan-500",
    },
    {
      id: 7,
      name: "Magnez Aqua",
      price: 2500,
      image: "https://intenson.pl/cdn/shop/files/0_AQ_LOVELY_1280x.jpg?v=1720014976",
      description: "Magnez i lëngshëm për thithje të shpejtë",
      benefits: ["Relaksim i muskujve", "Përmirëson gjumin", "Mbështet sistemin nervor"],
      icon: Shield,
      color: "from-indigo-500 to-purple-500",
    },
    {
      id: 8,
      name: "Shilajit Tableta",
      price: null,
      image: "https://cdn.stolichki.ru/s/drugs/medium/96/9681_2.jpg",
      description: "Shilajit në formë tabletash për përdorim të lehtë",
      benefits: ["Energji natyrore", "Mbështetje imuniteti", "Minerale të pasura"],
      icon: Zap,
      color: "from-gray-600 to-gray-800",
    },
    {
      id: 9,
      name: "Shilajit Vazo",
      price: null,
      image: "https://ekodlaciebie.pl/6560-thickbox_default/mumio-altajskie-30-gr.jpg",
      description: "Shilajit i pastër në vazo për dozim të saktë",
      benefits: ["Forma e pastër", "Dozim i kontrollueshëm", "Cilësi premium"],
      icon: Heart,
      color: "from-amber-600 to-orange-600",
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
            <Badge className="mb-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 text-lg">
              Suplementet Shëndetësore
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Produktet Tona të
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent block">
                Shëndetit
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Suplementet më të mira natyrore për shëndetin dhe mirëqenien tuaj
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supplements.map((product, index) => (
              <AnimatedSection key={product.id} animation="scaleIn" delay={index * 50}>
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 group border-0 bg-white/90 backdrop-blur-sm h-full">
                  <div className="aspect-square relative overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div
                      className={`absolute top-4 left-4 bg-gradient-to-r ${product.color} rounded-full p-3 shadow-lg`}
                    >
                      <product.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex-grow">
                      <h3 className="font-bold text-xl mb-3 text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>

                      <div className="space-y-2 mb-6">
                        {product.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <div className={`w-2 h-2 bg-gradient-to-r ${product.color} rounded-full mr-2`}></div>
                            {benefit}
                          </div>
                        ))}
                      </div>

                      {product.price && (
                        <div className="text-center mb-6">
                          <span className="text-3xl font-bold text-green-600">{product.price} L</span>
                        </div>
                      )}

                      {!product.price && (
                        <div className="text-center mb-6">
                          <span className="text-lg text-gray-500 italic">Çmimi do të publikohet së shpejti</span>
                        </div>
                      )}
                    </div>

                    <div className="space-y-3">
                      {product.price && <PayPalButton productName={product.name} price={product.price} />}
                      <WhatsAppProductButton productName={product.name} />
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  )
}
