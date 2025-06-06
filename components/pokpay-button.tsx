"use client"

import { Button } from "@/components/ui/button"
import { CreditCard } from "lucide-react"

interface PokPayButtonProps {
  productName: string
  price: number
}

export default function PokPayButton({ productName, price }: PokPayButtonProps) {
  const handlePokPayPayment = () => {
    const pokpayUrl = `https://pokpay.io/send?to=EugeniFama&amount=${price}&description=${encodeURIComponent(productName)}`
    window.open(pokpayUrl, "_blank")
  }

  return (
    <div className="relative group">
      {/* Blue neon glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

      {/* Enhanced glow on hover */}
      <div className="absolute -inset-2 bg-blue-400/30 rounded-xl blur-lg opacity-0 group-hover:opacity-60 transition-all duration-300"></div>

      <Button
        onClick={handlePokPayPayment}
        className="relative w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl rounded-xl border-0 h-14 text-sm font-semibold"
      >
        <div className="flex flex-col items-center justify-center gap-1">
          <div className="flex items-center gap-2">
            <div className="bg-white/20 rounded-full p-1.5 backdrop-blur-sm">
              <CreditCard className="h-4 w-4 text-white" />
            </div>
            <span>Blej me PokPay - {price} L</span>
          </div>
          <span className="text-xs text-blue-100 font-medium">Eugeni Fama</span>
        </div>

        {/* Inner glow effect */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </Button>
    </div>
  )
}
