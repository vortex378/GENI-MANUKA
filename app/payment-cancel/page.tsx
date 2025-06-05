"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { XCircle, ArrowLeft, Home } from "lucide-react"
import Navigation from "@/components/navigation"
import AnimatedSection from "@/components/animated-section"

export default function PaymentCancelPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
      <Navigation />

      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-12">
                <div className="flex justify-center mb-8">
                  <div className="bg-red-100 rounded-full p-6">
                    <XCircle className="h-16 w-16 text-red-600" />
                  </div>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Pagesa u Anulua</h1>

                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Pagesa juaj u anulua. Asnjë pagesë nuk është kryer dhe mund të provoni përsëri kur të dëshironi.
                </p>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
                  <h3 className="font-semibold text-amber-800 mb-2">Nëse keni probleme me pagesën:</h3>
                  <ul className="text-amber-700 space-y-2">
                    <li>• Kontrolloni të dhënat e kartës suaj</li>
                    <li>• Sigurohuni që keni fonde të mjaftueshme</li>
                    <li>• Kontaktoni bankën tuaj nëse problemi vazhdon</li>
                    <li>• Na kontaktoni për ndihmë shtesë</li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white transform hover:scale-105 transition-all duration-300"
                  >
                    <Link href="/manukat">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Provo Përsëri
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white transform hover:scale-105 transition-all duration-300"
                  >
                    <Link href="/contact">Na Kontaktoni</Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="border-2 border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white transform hover:scale-105 transition-all duration-300"
                  >
                    <Link href="/">
                      <Home className="mr-2 h-4 w-4" />
                      Kryefaqja
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
