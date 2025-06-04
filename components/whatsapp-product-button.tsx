"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface WhatsAppProductButtonProps {
  productName: string
  customMessage?: string
}

export default function WhatsAppProductButton({ productName, customMessage }: WhatsAppProductButtonProps) {
  const phoneNumber = "+355697320453"
  const message = customMessage || "Jam ne kerkim te produkteve tuaja,dua me shume informacion."
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(message)}`

  return (
    <div className="relative group">
      {/* Glowing background effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

      <Button
        onClick={() => window.open(whatsappUrl, "_blank")}
        className="relative w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        <MessageCircle className="mr-2 h-4 w-4" />
        <span>Porosit në WhatsApp</span>
      </Button>
    </div>
  )
}
