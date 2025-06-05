"use client"

import { Button } from "@/components/ui/button"
import { CreditCard } from "lucide-react"

interface PayPalButtonProps {
  productName: string
  price: number
  currency?: string
}

export default function PayPalButton({ productName, price, currency = "EUR" }: PayPalButtonProps) {
  const handlePayPalPayment = () => {
    // Convert Leke to EUR (approximate rate: 1 EUR = 100 Leke)
    const eurPrice = currency === "EUR" ? (price / 100).toFixed(2) : price.toFixed(2)

    // Create PayPal payment URL
    const paypalUrl = `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=manuka.al@hotmail.com&item_name=${encodeURIComponent(productName)}&amount=${eurPrice}&currency_code=EUR&return=https://manuka-albania.com/success&cancel_return=https://manuka-albania.com/cancel`

    window.open(paypalUrl, "_blank")
  }

  return (
    <Button
      onClick={handlePayPalPayment}
      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
    >
      <CreditCard className="mr-2 h-4 w-4" />
      Blej me PayPal - {price} L
    </Button>
  )
}
