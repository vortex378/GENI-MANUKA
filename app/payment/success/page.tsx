"use client"

import { useSearchParams } from "next/navigation"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PaymentSuccessPage() {
  const searchParams = useSearchParams()
  const orderId = searchParams.get("order_id")

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="mb-6">
          <CheckCircle className="h-20 w-20 text-green-500 mx-auto" />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">Pagesa u krye me sukses!</h1>

        <p className="text-gray-600 mb-2">Faleminderit për blerjen tuaj!</p>

        {orderId && (
          <p className="text-sm text-gray-500 mb-6">
            Numri i porosisë: <span className="font-mono font-semibold">{orderId}</span>
          </p>
        )}

        <p className="text-gray-600 mb-8">Do të merrni një email konfirmimi së shpejti me detajet e porosisë tuaj.</p>

        <div className="space-y-3">
          <Link href="/">
            <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white">
              Kthehu në faqen kryesore
            </Button>
          </Link>

          <Link href="/products">
            <Button variant="outline" className="w-full bg-transparent">
              Vazhdo blerjen
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
