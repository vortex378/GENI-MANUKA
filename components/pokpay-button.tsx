"use client"

import { Button } from "@/components/ui/button"
import { CreditCard, Loader2 } from "lucide-react"
import { useState } from "react"

interface PokPayButtonProps {
  productName: string
  price: number
  currency?: string
}

export default function PokPayButton({ productName, price, currency = "ALL" }: PokPayButtonProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handlePokPayPayment = async () => {
    setIsLoading(true)

    try {
      // Create payment request to our API route
      const response = await fetch("/api/pokpay/create-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productName,
          amount: price,
          currency,
        }),
      })

      const data = await response.json()

      if (data.success && data.checkoutUrl) {
        // Redirect to PokPay checkout
        window.location.href = data.checkoutUrl
      } else {
        console.error("Payment creation failed:", data.error)
        alert("Ka ndodhur një gabim gjatë krijimit të pagesës. Ju lutemi provoni përsëri.")
      }
    } catch (error) {
      console.error("Payment error:", error)
      alert("Ka ndodhur një gabim gjatë krijimit të pagesës. Ju lutemi provoni përsëri.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button
      onClick={handlePokPayPayment}
      disabled={isLoading}
      className="w-full bg-green-600 hover:bg-green-700 text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl rounded-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Duke krijuar pagesën...
        </>
      ) : (
        <>
          <CreditCard className="mr-2 h-4 w-4" />
          Porosit tani - {price} {currency}
        </>
      )}
    </Button>
  )
}
