"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Shield, Heart, Zap, Brain, Sparkles, Users, Instagram, Award } from "lucide-react"
import Navigation from "@/components/navigation"
import AnimatedSection from "@/components/animated-section"
import WhatsAppButton from "@/components/whatsapp-button"
import PageWrapper from "../page-wrapper"

export default function BenefitsPage() {
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
                Shëndet & Mirëqenie
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                Shkenca Prapa
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent block">
                  Mjaltit Manuka
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Kur merrni Manuka, gjithmonë përpiquni të porosisni ato Manuka që në paketim kanë të shkruar shkallën e
                matjes{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent font-bold animate-pulse">
                    UMF
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 blur-sm opacity-50 animate-pulse"></span>
                </span>{" "}
                ose{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent font-bold animate-pulse">
                    MGO
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 blur-sm opacity-50 animate-pulse"></span>
                </span>
                . Kujdes nga produktet e rreme!
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Key Benefits Grid */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-50/50 to-orange-50/50"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Përfitimet e Provuara Shëndetësore</h2>
              <p className="text-xl text-gray-600">Mbështetje mirëqenieje e bazuar në kërkime</p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Mbështetje e Sistemit Imunitar",
                  description:
                    "Komponenti unik MGO i mjaltit Manuka ndihmon në forcimin e mbrojtjeve natyrore të trupit tuaj dhe mbështet funksionin e përgjithshëm imunitar.",
                  badge: "MGO 400+ i Rekomanduar",
                  color: "from-blue-500 to-indigo-500",
                  delay: 0,
                },
                {
                  icon: Heart,
                  title: "Shëndeti i Tretjes",
                  description:
                    "Mbështet tretjen e shëndetshme dhe mund të ndihmojë në ruajtjen e baktereve të dobishme të zorrëve për mirëqenien optimale të tretjes.",
                  badge: "MGO 250+ i Rekomanduar",
                  color: "from-red-500 to-pink-500",
                  delay: 40,
                },
                {
                  icon: Zap,
                  title: "Energji Natyrore",
                  description:
                    "Ofron energji të qëndrueshme pa rënie, falë përzierjes së tij unike të sheqernave natyrorë dhe komponentëve të dobishëm.",
                  badge: "MGO 100+ i Rekomanduar",
                  color: "from-yellow-500 to-orange-500",
                  delay: 80,
                },
                {
                  icon: Sparkles,
                  title: "Shëndeti i Lëkurës",
                  description:
                    "Vetitë natyrore antibakteriale mund të ndihmojnë në mbështetjen e lëkurës së shëndetshme kur përdoret lokalisht ose konsumohet rregullisht.",
                  badge: "MGO 550+ i Rekomanduar",
                  color: "from-purple-500 to-violet-500",
                  delay: 120,
                },
                {
                  icon: Brain,
                  title: "Mbështetje Kognitive",
                  description:
                    "Antioksidantët në mjaltën Manuka mund të ndihmojnë në mbrojtjen e qelizave të trurit dhe mbështetjen e funksionit kognitive dhe qartësisë mendore.",
                  badge: "MGO 400+ i Rekomanduar",
                  color: "from-green-500 to-emerald-500",
                  delay: 160,
                },
                {
                  icon: Users,
                  title: "Mbështetje Rikuperimi",
                  description:
                    "Mund të ndihmojë në mbështetjen e proceseve natyrore të shërimit të trupit dhe rikuperimin nga stresi fizik dhe stërvitja.",
                  badge: "MGO 850+ i Rekomanduar",
                  color: "from-teal-500 to-cyan-500",
                  delay: 200,
                },
              ].map((benefit, index) => (
                <AnimatedSection key={index} animation="scaleIn" delay={benefit.delay}>
                  <Card className="p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 group border-0 bg-white/80 backdrop-blur-sm h-full">
                    <CardContent className="pt-8">
                      <div
                        className={`bg-gradient-to-br ${benefit.color} rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <benefit.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-semibold mb-4 text-gray-900 group-hover:text-amber-600 transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{benefit.description}</p>
                      <Badge
                        variant="outline"
                        className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white transition-colors duration-300"
                      >
                        {benefit.badge}
                      </Badge>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Scientific Research Section */}
        <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-64 h-64 bg-amber-200/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection animation="fadeInLeft">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">I Mbështetur nga Shkenca</h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Mjalti Manuka është studiuar gjerësisht nga kërkuesit në të gjithë botën. Komponenti unik
                  Methylglyoxal (MGO) është ajo që e dallon atë nga mjalti i rregullt.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      number: "1",
                      title: "Vetitë Antibakteriale",
                      description: "Studimet tregojnë se MGO ofron aktivitet të fuqishëm antibakterial",
                    },
                    {
                      number: "2",
                      title: "Shërimi i Plagëve",
                      description: "Provat klinike demonstrojnë vetitë e përmirësuara të shërimit",
                    },
                    {
                      number: "3",
                      title: "Aktiviteti Antioksidant",
                      description: "I pasur me antioksidantë që ndihmojnë në mbrojtjen e qelizave nga dëmtimi",
                    },
                  ].map((research, index) => (
                    <div key={index} className="flex items-start group">
                      <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-full w-12 h-12 flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold">{research.number}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-amber-600 transition-colors duration-300">
                          {research.title}
                        </h4>
                        <p className="text-gray-600">{research.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeInRight" delay={100}>
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-amber-400 to-orange-400 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <Image
                    src="https://images.unsplash.com/photo-1576671081837-49000212a370?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3"
                    alt="Laborator kërkimi për mjaltën Manuka"
                    width={600}
                    height={600}
                    className="relative rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300 object-cover"
                  />
                  <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg">
                    <Award className="h-8 w-8 text-amber-600" />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Certification Trust Section */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Certifikuar për Cilësi</h2>
              <p className="text-xl text-gray-600">Çdo kavanoz vjen me dokumentacion të plotë autenticiteti</p>
            </AnimatedSection>

            <div className="grid lg:grid-cols-3 gap-8">
              <AnimatedSection animation="fadeInLeft">
                <Card className="p-8 text-center border-0 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-xl">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Laboratorë të Akredituar</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Testuar nga laboratorë të pavarur në Zelandën e Re me standarde ndërkombëtare ISO 17025
                  </p>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fadeInUp" delay={50}>
                <Card className="p-8 text-center border-0 bg-gradient-to-br from-green-50 to-emerald-50 shadow-xl">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Verifikim i Plotë</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Çdo produkt ka numër unik certifikimi që mund të verifikohet online për autenticitet të plotë
                  </p>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fadeInRight" delay={100}>
                <Card className="p-8 text-center border-0 bg-gradient-to-br from-amber-50 to-orange-50 shadow-xl">
                  <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <Sparkles className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Transparencë Totale</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Dokumentacion i detajuar për përmbajtjen MGO, pastërtinë dhe origjinën e çdo sasie
                  </p>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Usage Guide */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Si të Përdorni Mjaltën Manuka</h2>
              <p className="text-xl text-gray-600">Maksimizoni përfitimet me përdorim të duhur</p>
            </AnimatedSection>

            <div className="grid lg:grid-cols-2 gap-12">
              <AnimatedSection animation="fadeInLeft">
                <Card className="p-8 h-full border-0 bg-gradient-to-br from-amber-50 to-orange-50 shadow-xl">
                  <CardContent className="pt-8">
                    <div className="flex items-center mb-6">
                      <Heart className="h-8 w-8 text-amber-600 mr-3" />
                      <h3 className="text-2xl font-bold text-gray-900">Mirëqenia e Përditshme</h3>
                    </div>
                    <div className="space-y-4">
                      {[
                        "Merrni 1-2 lugë çaji çdo ditë me stomak bosh",
                        "Shtojeni në çaj të ngrohtë (jo të nxehtë) ose ujë",
                        "Përdoreni si ëmbëlsues natyror në smoothie",
                        "Shpërndajeni mbi bukë ose biskota për një vakt më të shëndetshëm",
                      ].map((tip, index) => (
                        <div key={index} className="flex items-start group">
                          <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-full w-3 h-3 mr-4 mt-2 group-hover:scale-150 transition-transform duration-300"></div>
                          <span className="text-gray-700 leading-relaxed">{tip}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fadeInRight" delay={300}>
                <Card className="p-8 h-full border-0 bg-gradient-to-br from-green-50 to-emerald-50 shadow-xl">
                  <CardContent className="pt-8">
                    <div className="flex items-center mb-6">
                      <Shield className="h-8 w-8 text-green-600 mr-3" />
                      <h3 className="text-2xl font-bold text-gray-900">Përdorimi Terapeutik</h3>
                    </div>
                    <div className="space-y-4">
                      {[
                        "Përdorni nivele më të larta MGO (400+) për përfitime të shtuar",
                        "Merreni 30 minuta para vakteve për mbështetje të tretjes",
                        "Aplikojeni lokalisht mbi lëkurë të pastër sipas nevojës",
                        "Konsultohuni me ofruesin e kujdesit shëndetësor për kushte specifike",
                      ].map((tip, index) => (
                        <div key={index} className="flex items-start group">
                          <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-3 h-3 mr-4 mt-2 group-hover:scale-150 transition-transform duration-300"></div>
                          <span className="text-gray-700 leading-relaxed">{tip}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
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
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Filloni Udhëtimin Tuaj të Mirëqenies Sot</h2>
              <p className="text-xl lg:text-2xl mb-10 opacity-90 max-w-3xl mx-auto">
                Përjetoni fuqinë natyrore të mjaltit autentik Manuka
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-white/50 via-gray-200 to-white/50 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
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
                    Blej Mjaltë Manuka
                  </Button>
                </div>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-amber-600 px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/manuka_mjalte_albania_2014?igsh=MXB2NHA2OWtlamdsMA==",
                      "_blank",
                    )
                  }
                >
                  Pyesni Ekspertët Tanë
                </Button>
              </div>
            </AnimatedSection>
          </div>
          <WhatsAppButton />
        </section>
      </div>
    </PageWrapper>
  )
}
