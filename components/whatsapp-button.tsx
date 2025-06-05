"use client"

import { MessageCircle } from "lucide-react"
import { useState } from "react"

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false)

  const phoneNumber = "+355697320453"
  const message = "Pershendetje jam i/e interesuar per produktet manuka. A keni ne gjendje?"
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(message)}`

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div
        className="relative group cursor-pointer h-14 w-14 flex items-center justify-center rounded-full" // Fixed size container for the button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => window.open(whatsappUrl, "_blank")}
      >
        {/* Simplified glow effect directly on the button */}
        <div className="absolute inset-0 rounded-full bg-green-500 opacity-75 animate-ping-slow"></div>
        <div className="absolute inset-0 rounded-full bg-green-400 opacity-75 animate-pulse-slow"></div>

        {/* Main button - fixed size and circular */}
        <div
          className="relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-200 flex items-center justify-center h-12 w-12" // Smaller fixed size for the visible button
        >
          <MessageCircle className="h-7 w-7 text-white" /> {/* Slightly smaller icon */}
        </div>

        {/* Tooltip - only show on hover for desktop, hidden on mobile */}
        <div
          className={`absolute bottom-full right-0 mb-3 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap transform transition-all duration-200 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
          } hidden md:block`} // Hide on mobile screens
        >
          Na kontaktoni në WhatsApp
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      </div>
    </div>
  )
}
