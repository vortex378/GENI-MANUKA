"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface WhatsAppProductButtonProps {
  productName: string
}

export default function WhatsAppProductButton({ productName }: WhatsAppProductButtonProps) {
  const phoneNumber = "+355697320453"
  const message = "Jam ne kerkim te produkteve tuaja,dua me shume informacion."
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(message)}`

  return (
    <Button
      onClick={() => window.open(whatsappUrl, "_blank")}
      className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl mt-3"
    >
      <MessageCircle className="mr-2 h-4 w-4" />
      Pyetje në WhatsApp
    </Button>
  )
}
