"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react" // Import MessageCircle

interface WhatsAppOrderButtonProps {
  productName: string
}

export default function WhatsAppOrderButton({ productName }: WhatsAppOrderButtonProps) {
  const phoneNumber = "+355697320453"
  const message = `Dua te porosis ${productName}`
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(message)}`

  return (
    <Button
      onClick={() => window.open(whatsappUrl, "_blank")}
      className="w-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center gap-2 mt-4 transition-all duration-300"
    >
      {/* Replaced inline SVG with Lucide MessageCircle icon */}
      <MessageCircle className="h-5 w-5 text-white" /> {/* Adjusted size for better visibility */}
      <span>Porosit tani</span>
    </Button>
  )
}
