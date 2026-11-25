"use client"

import { Suspense, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, CreditCard, ArrowLeft, Loader2 } from "lucide-react"
import PokPayButton from "@/components/pokpay-button"
import { findProduct, formatLek } from "@/lib/catalog"

function CheckoutContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  // Product details come from the catalog; the URL only carries the product id
  const product = findProduct(searchParams.get("id"))
  const productName = product?.name ?? ""
  const productPrice = product ? formatLek(product.price) : ""
  const productImage = product?.image ?? ""
  const productMgo = product?.mgoLevel ?? ""
  const productBrand = product?.brand ?? ""
  const whatsappMessage = product?.whatsappMessage ?? ""

  const handleWhatsAppOrder = () => {
    setLoading(true)
    const phoneNumber = "+355697320453"
    const message = `Dua te porosis ${whatsappMessage}`
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
    setTimeout(() => setLoading(false), 1000)
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-4 text-center">
        <p className="text-lg text-gray-700">Produkti nuk u gjet.</p>
        <Button onClick={() => router.push("/")}>Kthehu në faqen kryesore</Button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-amber-50/30 to-orange-50/20">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={() => router.back()} className="hover:bg-gray-100">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Kthehu
          </Button>
          <h1 className="text-xl font-bold text-gray-900">Checkout</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Summary Card */}
          <Card className="bg-white shadow-lg rounded-2xl border-0 overflow-hidden h-fit sticky top-24">
            <CardContent className="p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Përmbledhje e produktit</h2>

              {/* Product Image */}
              <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 mb-4">
                {productMgo && (
                  <Badge className="absolute top-4 right-4 bg-white/95 text-gray-700 px-3 py-1 text-sm font-bold rounded-full shadow-md z-10">
                    {productMgo}
                  </Badge>
                )}
                <div className="relative w-full h-48 flex items-center justify-center">
                  <Image
                    src={productImage || "/placeholder.svg"}
                    alt={productName}
                    width={180}
                    height={180}
                    className="object-contain"
                  />
                </div>
                {productBrand && (
                  <Badge className="absolute bottom-4 left-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 text-sm font-bold rounded-full shadow-lg">
                    {productBrand}
                  </Badge>
                )}
              </div>

              {/* Product Details */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-gray-900">{productName}</h3>
                <div className="flex items-center justify-between pt-2 border-t border-gray-200">
                  <span className="text-gray-600">Çmimi:</span>
                  <span className="text-2xl font-bold text-amber-600">{productPrice}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Options */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Zgjidh metodën e pagesës</h2>
              <p className="text-gray-600">Përzgjidhni mënyrën më të përshtatshme për ju</p>
            </div>

            {/* WhatsApp Order Option */}
            <Card className="bg-white shadow-lg rounded-2xl border-2 border-gray-200 hover:border-green-400 transition-all duration-300 overflow-hidden group cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Porosit përmes WhatsApp</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Kontaktoni drejtpërdrejt me ekipin tonë dhe paguani me para në dorë kur produkti të dorëzohet.
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-center text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></span>
                        Konfirmim i shpejtë
                      </li>
                      <li className="flex items-center text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></span>
                        Pagesë në dorëzim
                      </li>
                      <li className="flex items-center text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></span>
                        Mbështetje e drejtpërdrejtë
                      </li>
                    </ul>
                    <Button
                      onClick={handleWhatsAppOrder}
                      disabled={loading}
                      className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Duke hapur WhatsApp...
                        </>
                      ) : (
                        <>
                          <MessageCircle className="mr-2 h-5 w-5" />
                          Vazhdo me WhatsApp
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* PokPay Payment Option */}
            <Card className="bg-white shadow-lg rounded-2xl border-2 border-gray-200 hover:border-amber-400 transition-all duration-300 overflow-hidden group cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <CreditCard className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-bold text-gray-900">Paguaj me PokPay</h3>
                      <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs px-2 py-0.5">
                        E sigurt
                      </Badge>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      Paguaj direkt me kartë debiti/krediti ose portofol elektronik përmes platformës së sigurt PokPay.
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-center text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2"></span>
                        Transaksion i sigurt dhe i enkriptuar
                      </li>
                      <li className="flex items-center text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2"></span>
                        Konfirmim automatik
                      </li>
                      <li className="flex items-center text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2"></span>
                        Dërgesë e shpejtë
                      </li>
                    </ul>
                    <PokPayButton
                      productId={product.id}
                      amount={product.price}
                      currency="ALL"
                      className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Trust Badges */}
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200">
              <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>Transaksion i sigurt</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span>Produkte autentike</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CheckoutPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-amber-500" />
        </div>
      }
    >
      <CheckoutContent />
    </Suspense>
  )
}
