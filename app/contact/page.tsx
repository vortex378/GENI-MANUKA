"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Mail, Phone, Clock, Instagram, MessageCircle } from "lucide-react"
import Navigation from "@/components/navigation"
import AnimatedSection from "@/components/animated-section"
import WhatsAppButton from "@/components/whatsapp-button"
import PageWrapper from "../page-wrapper"

export default function ContactPage() {
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
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                Na
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  {" "}
                  Kontaktoni
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Keni pyetje rreth mjaltit tonë Manuka? Ne jemi këtu për t'ju ndihmuar të gjeni produktin e përsosur për
                nevojat tuaja.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          {/* Contact Information */}
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection animation="fadeInLeft" delay={50}>
              <Card className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-full p-4">
                      <Instagram className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-2xl mb-3 text-gray-900">Na Ndiqni në Instagram</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        Shikoni produktet tona dhe na kontaktoni drejtpërdrejt
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
                        @manuka_mjalte_albania_2014
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fadeInRight" delay={100}>
              <Card className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full p-4">
                      <Mail className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-2xl mb-3 text-gray-900">Na Shkruani Email</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">Kontaktoni nëpërmjet email-it</p>
                      <p className="text-amber-600 font-medium text-lg">manuka.al@hotmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fadeInLeft" delay={150}>
              <Card className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-4">
                      <Phone className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-2xl mb-3 text-gray-900">Na Telefononi</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">Flisni me ekipin tonë</p>
                      <p className="text-amber-600 font-medium text-lg">+355 69 732 0453</p>
                      <div className="mt-3">
                        <div className="relative group inline-block">
                          <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                          <Button
                            className="relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white transform hover:scale-105 transition-all duration-300"
                            onClick={() =>
                              window.open(
                                `https://wa.me/355697320453?text=${encodeURIComponent("Pershendetje jam i/e interesuar per produktet manuka. A keni ne gjendje?")}`,
                                "_blank",
                              )
                            }
                          >
                            <MessageCircle className="mr-2 h-4 w-4" />
                            WhatsApp
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fadeInRight" delay={200}>
              <Card className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="bg-gradient-to-r from-purple-500 to-violet-500 rounded-full p-4">
                      <Clock className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-2xl mb-3 text-gray-900">Orari i Punës</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">Kur jemi të disponueshëm</p>
                      <div className="space-y-2">
                        <p className="flex justify-between">
                          <span className="font-medium">Hënë - Premte:</span>
                          <span>9:00 - 18:00</span>
                        </p>
                        <p className="flex justify-between">
                          <span className="font-medium">Shtunë:</span>
                          <span>10:00 - 16:00</span>
                        </p>
                        <p className="flex justify-between">
                          <span className="font-medium">E Diel:</span>
                          <span>E mbyllur</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          {/* FAQ Section */}
          <AnimatedSection className="mt-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Pyetje të Shpeshta</h2>
              <p className="text-xl text-gray-600">Përgjigje të shpejta për pyetjet e zakonshme</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  question: "Si e di nëse mjalti juaj Manuka është autentik?",
                  answer:
                    "Çdo kavanoz vjen me certifikatë autenticiteti nga laboratorë të pavarur të Zelandës së Re. Ne ofrojmë gjithashtu numra identifikimi për transparencë të plotë.",
                  delay: 0,
                },
                {
                  question: "Çfarë niveli MGO duhet të zgjedh?",
                  answer:
                    "Për mirëqenie të përditshme, MGO 100-250 është perfekt. Për përfitime të shtuar, zgjidhni MGO 400-550. Për përdorim terapeutik, konsideroni MGO 850+. Na kontaktoni për rekomandime të personalizuara.",
                  delay: 50,
                },
                {
                  question: "A ofron dërgesa ndërkombëtare?",
                  answer:
                    "Po, ne bëjmë porosi kudo! Kostot e dërgesës dhe kohët e dorëzimit ndryshojnë sipas vendndodhjes. Na kontaktoni për informacione specifike të dërgesës.",
                  delay: 100,
                },
                {
                  question: "Cila është politika juaj e kthimit?",
                  answer:
                    "Ne ofrojmë garanci kënaqësie 30-ditore. Nëse nuk jeni plotësisht të kënaqur, na kontaktoni për kthim të plotë të parave ose këmbim.",
                  delay: 150,
                },
              ].map((faq, index) => (
                <AnimatedSection key={index} animation="fadeInUp" delay={faq.delay}>
                  <Card className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-8">
                      <h3 className="font-bold text-xl mb-4 text-gray-900">{faq.question}</h3>
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
        <WhatsAppButton />
      </div>
    </PageWrapper>
  )
}
