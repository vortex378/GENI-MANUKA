"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, MapPin, Users, Award, Heart, Leaf, Instagram, Target, Globe, Sparkles } from "lucide-react"
import Navigation from "@/components/navigation"
import AnimatedSection from "@/components/animated-section"
import WhatsAppButton from "@/components/whatsapp-button"
import PageWrapper from "../page-wrapper"

export default function AboutPage() {
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

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection animation="fadeInLeft">
                <Badge className="mb-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 text-lg">
                  Historia Jonë
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                  Duke Sjellë
                  <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent block">
                    Arin e Natyrës
                  </span>
                  <span className="text-3xl lg:text-4xl text-gray-600 font-normal">në Tryezën Tuaj</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Për më shumë se një dekadë, ne kemi qenë të pasionuar për të ndarë përfitimet e pabesueshme të mjaltit
                  autentik Manuka nga Zelanda e Re me familjet në të gjithë botën.
                </p>
                <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                  Udhëtimi ynë filloi me një mision të thjeshtë: të sigurojmë mjaltën Manuka më të pastër dhe më të
                  fuqishme drejtpërdrejt nga zonat e paprekura të natyrës së Zelandës së Re dhe ta bëjmë të arritshme
                  për konsumatorët që kujdesen për shëndetin në çdo vend.
                </p>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/manuka_mjalte_albania_2014?igsh=MXB2NHA2OWtlamdsMA==",
                      "_blank",
                    )
                  }
                >
                  <Instagram className="mr-2 h-5 w-5" />
                  Na Kontaktoni
                </Button>
              </AnimatedSection>

              <AnimatedSection animation="fadeInRight" delay={300}>
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-amber-400 to-orange-400 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <Image
                    src="https://m.media-amazon.com/images/I/71+la-DryjL.jpg"
                    alt="Mjalte Manuka Premium"
                    width={500}
                    height={500}
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

        {/* Values Section */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-50/50 to-orange-50/50"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Vlerat Tona Kryesore</h2>
              <p className="text-xl text-gray-600">Ajo që na motivon çdo ditë</p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Award,
                  title: "Autenticiteti",
                  description: "Çdo kavanoz është mjalte e certifikuar e vërtetë Manuka nga Zelanda e Re",
                  color: "from-amber-500 to-orange-500",
                  delay: 0,
                },
                {
                  icon: Leaf,
                  title: "Qëndrueshmëria",
                  description: "Mbrojtja e mjedisit për brezat e ardhshëm",
                  color: "from-green-500 to-emerald-500",
                  delay: 50,
                },
                {
                  icon: Heart,
                  title: "Mirëqenia",
                  description: "Mbështetja e shëndetit dhe mirëqenies tuaj në mënyrë natyrore",
                  color: "from-red-500 to-pink-500",
                  delay: 100,
                },
                {
                  icon: Users,
                  title: "Komuniteti",
                  description: "Ndërtimi i marrëdhënieve me klientët dhe prodhuesit",
                  color: "from-blue-500 to-indigo-500",
                  delay: 150,
                },
              ].map((value, index) => (
                <AnimatedSection key={index} animation="scaleIn" delay={value.delay}>
                  <Card className="text-center p-8 h-full hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 group border-0 bg-white/80 backdrop-blur-sm">
                    <CardContent className="pt-8">
                      <div
                        className={`bg-gradient-to-br ${value.color} rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <value.icon className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-semibold mb-4 text-gray-900 group-hover:text-amber-600 transition-colors duration-300">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-64 h-64 bg-amber-200/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Nga Koshere në Shtëpi</h2>
              <p className="text-xl text-gray-600">Procesi ynë i kujdesshëm siguron cilësinë më të lartë</p>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  step: "1",
                  icon: MapPin,
                  title: "Sigurimi",
                  description:
                    "Punojmë drejtpërdrejt me bletarë të besuar në vende të largëta të Zelandës së Re ku pemët Manuka rriten të egra dhe të pastra.",
                  image:
                    "https://images.unsplash.com/photo-1587735243615-c03f25aaff15?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
                },
                {
                  step: "2",
                  icon: Award,
                  title: "Testimi",
                  description:
                    "Çdo sasi kalon nëpër teste rigoroze nga laboratorë të pavarur për të verifikuar përmbajtjen MGO dhe autenticitetin.",
                  image:
                    "https://images.unsplash.com/photo-1558642891-54be180ea339?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
                },
                {
                  step: "3",
                  icon: Heart,
                  title: "Dërgesa",
                  description:
                    "Ne paketojmë dhe dërgojmë me kujdes mjaltën tuaj për të ruajtur vetitë e saj natyrore dhe për të siguruar që të arrijë në gjendje të përsosur.",
                  image:
                    "https://images.unsplash.com/photo-1471943311424-646960669fbc?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
                },
              ].map((process, index) => (
                <AnimatedSection key={index} animation="fadeInUp" delay={index * 50}>
                  <Card className="text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 group border-0 bg-white/80 backdrop-blur-sm overflow-hidden">
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={process.image || "/placeholder.svg"}
                        alt={process.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full w-12 h-12 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">{process.step}</span>
                      </div>
                    </div>
                    <CardContent className="p-8">
                      <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <process.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-semibold mb-4 text-gray-900 group-hover:text-amber-600 transition-colors duration-300">
                        {process.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{process.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection animation="fadeInLeft">
                <div className="space-y-12">
                  <div>
                    <div className="flex items-center mb-6">
                      <Target className="h-8 w-8 text-amber-600 mr-3" />
                      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Misioni Ynë</h2>
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Të ofrojmë mjaltën Manuka më të pastër dhe më të fuqishme nga Zelanda e Re, duke mbështetur
                      shëndetin dhe mirëqenien e familjeve shqiptare me produktet më të mira të natyrës.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center mb-6">
                      <Globe className="h-8 w-8 text-amber-600 mr-3" />
                      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Vizioni Ynë</h2>
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Të bëhemi burimi më i besuar për mjalte Manuka autentike në Shqipëri dhe rajon, duke ndërtuar një
                      komunitet të shëndetshëm që vlerëson cilësinë dhe autenticitetin.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeInRight" delay={300}>
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-amber-400 to-orange-400 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <Image
                    src="https://images.unsplash.com/photo-1587735243615-c03f25aaff15?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3"
                    alt="Vizioni dhe Misioni"
                    width={600}
                    height={600}
                    className="relative rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300 object-cover"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-amber-600 to-orange-600 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection className="text-white">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Gati për të Përjetuar Mjaltën e Pastër Manuka?</h2>
              <p className="text-xl lg:text-2xl mb-10 opacity-90 max-w-3xl mx-auto">
                Bashkohuni me mijëra klientë të kënaqur që na besojnë për nevojat e tyre të mirëqenies
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                  <Button
                    size="lg"
                    variant="secondary"
                    className="relative bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
                    onClick={() =>
                      window.open(
                        "https://www.instagram.com/manuka_mjalte_albania_2014?igsh=MXB2NHA2OWtlamdsMA==",
                        "_blank",
                      )
                    }
                  >
                    <Instagram className="mr-2 h-5 w-5" />
                    Blej Tani
                  </Button>
                </div>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-amber-600 px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300"
                >
                  Na Kontaktoni
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
        <WhatsAppButton />
      </div>
    </PageWrapper>
  )
}
