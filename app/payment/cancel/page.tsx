"use client"

import { useSearchParams } from "next/navigation"
import { XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PaymentCancelPage() {
  const searchParams = useSearchParams()
  const orderId = searchParams.get("order_id")

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-gray-50 p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="mb-6">
          <XCircle className="h-20 w-20 text-red-500 mx-auto" />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">Pagesa u anulua</h1>

        <p className="text-gray-600 mb-2">Pagesa juaj nuk u përfundua.</p>

        {orderId && (
          <p className="text-sm text-gray-500 mb-6">
            Numri i porosisë: <span className="font-mono font-semibold">{orderId}</span>
          </p>
        )}

        <p className="text-gray-600 mb-8">Nëse hasët në ndonjë problem, ju lutemi na kontaktoni përmes WhatsApp.</p>

        <div className="space-y-3">
          <Link href="/products">
            <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white">
              Provo përsëri
            </Button>
          </Link>

          <Link href="/">
            <Button variant="outline" className="w-full bg-transparent">
              Kthehu në faqen kryesore
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
