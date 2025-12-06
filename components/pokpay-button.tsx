"use client"

import { Button } from "@/components/ui/button"
import { CreditCard } from "lucide-react"
import { useState } from "react"

interface PokPayButtonProps {
  productName: string
  amount: number
  currency?: string
  className?: string
}

export default function PokPayButton({ productName, amount, currency = "ALL", className }: PokPayButtonProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handlePokPayPayment = async () => {
    try {
      setIsLoading(true)
      console.log("[v0] Initiating PokPay payment:", { productName, amount, currency })

      const orderId = `ORDER-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`

      const response = await fetch("/api/pokpay/create-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productName,
          price: amount,
          orderId,
        }),
      })

      const data = await response.json()
      console.log("[v0] Payment creation response:", data)

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Failed to create payment")
      }

      if (data.checkout_url) {
        console.log("[v0] Redirecting to PokPay checkout:", data.checkout_url)
        window.location.href = data.checkout_url
      } else {
        throw new Error("No checkout URL received")
      }
    } catch (error) {
      console.error("[v0] Payment error:", error)
      alert("Na falni, ndodhi një gabim gjatë përpunimit të pagesës. Ju lutemi provoni përsëri.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button
      onClick={handlePokPayPayment}
      disabled={isLoading}
      className={
        className ||
        "relative w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl rounded-xl border-0 h-14 text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
      }
    >
      <div className="flex items-center justify-center gap-2">
        <CreditCard className={`h-5 w-5 ${isLoading ? "animate-pulse" : ""}`} />
        <span>{isLoading ? "Duke procesuar..." : `Paguaj ${amount} ${currency}`}</span>
      </div>
    </Button>
  )
}
