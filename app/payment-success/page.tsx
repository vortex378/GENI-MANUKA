"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowLeft, Home, Loader2 } from "lucide-react"
import Navigation from "@/components/navigation"
import AnimatedSection from "@/components/animated-section"
import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"

export default function PaymentSuccessPage() {
  const [paymentStatus, setPaymentStatus] = useState<"loading" | "success" | "error">("loading")
  const [paymentData, setPaymentData] = useState<any>(null)
  const searchParams = useSearchParams()

  useEffect(() => {
    const paymentId = searchParams.get("payment_id")

    if (paymentId) {
      // Check payment status
      fetch(`/api/pokpay/payment-status?payment_id=${paymentId}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.success && data.payment.status === "completed") {
            setPaymentStatus("success")
            setPaymentData(data.payment)
          } else {
            setPaymentStatus("error")
          }
        })
        .catch(() => {
          setPaymentStatus("error")
        })
    } else {
      // If no payment ID, assume success (for direct navigation)
      setPaymentStatus("success")
    }
  }, [searchParams])

  if (paymentStatus === "loading") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
        <Navigation />
        <section className="pt-24 pb-16 relative overflow-hidden">
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-12">
                  <div className="flex justify-center mb-8">
                    <Loader2 className="h-16 w-16 text-green-600 animate-spin" />
                  </div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Duke verifikuar pagesën...</h1>
                  <p className="text-xl text-gray-600">Ju lutemi prisni ndërsa verifikojmë statusin e pagesës suaj.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    )
  }

  if (paymentStatus === "error") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
        <Navigation />
        <section className="pt-24 pb-16 relative overflow-hidden">
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-12">
                  <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Problem me Pagesën</h1>
                  <p className="text-xl text-gray-600 mb-8">
                    Ka ndodhur një problem gjatë verifikimit të pagesës. Ju lutemi kontaktoni mbështetjen.
                  </p>
                  <Button
                    asChild
                    className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700"
                  >
                    <Link href="/contact">Na Kontaktoni</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <Navigation />

      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-12">
                <div className="flex justify-center mb-8">
                  <div className="bg-green-100 rounded-full p-6">
                    <CheckCircle className="h-16 w-16 text-green-600" />
                  </div>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Pagesa u Krye me Sukses!</h1>

                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Faleminderit për blerjen tuaj! Porosia juaj është pranuar dhe do të përpunohet së shpejti. Do të
                  merrni një email konfirmimi në adresën tuaj të email-it.
                </p>

                {paymentData && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
                    <h3 className="font-semibold text-green-800 mb-4">Detajet e Pagesës:</h3>
                    <div className="text-green-700 space-y-2">
                      <p>
                        <strong>ID e Pagesës:</strong> {paymentData.id}
                      </p>
                      <p>
                        <strong>Shuma:</strong> {paymentData.amount} {paymentData.currency}
                      </p>
                      <p>
                        <strong>Përshkrimi:</strong> {paymentData.description}
                      </p>
                      {paymentData.order_id && (
                        <p>
                          <strong>ID e Porosisë:</strong> {paymentData.order_id}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
                  <h3 className="font-semibold text-green-800 mb-2">Hapat e ardhshëm:</h3>
                  <ul className="text-green-700 space-y-2">
                    <li>• Do të kontaktoheni brenda 24 orëve për konfirmimin e porosisë</li>
                    <li>• Produkti do të dërgohet brenda 2-3 ditëve pune</li>
                    <li>• Do të merrni numrin e ndjekjes për dërgesën</li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white transform hover:scale-105 transition-all duration-300"
                  >
                    <Link href="/">
                      <Home className="mr-2 h-4 w-4" />
                      Kthehu në Kryefaqe
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white transform hover:scale-105 transition-all duration-300"
                  >
                    <Link href="/manukat">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Vazhdo Blerjen
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
