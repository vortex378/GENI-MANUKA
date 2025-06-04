"use client"

import { Button } from "@/components/ui/button"

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
      {/* WhatsApp Icon Circle */}
      <div className="bg-white rounded-full p-1 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="#25D366"
          stroke="#25D366"
          strokeWidth="0"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-message-circle"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      </div>
      <span>Porosit tani</span>
    </Button>
  )
}
