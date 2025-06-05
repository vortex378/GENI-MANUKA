"use client"

import { MessageCircle } from "lucide-react"
import { useState, useEffect } from "react"

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    // Initial check
    checkMobile()

    // Add resize listener
    window.addEventListener("resize", checkMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const phoneNumber = "+355697320453"
  const message = "Pershendetje jam i/e interesuar per produktet manuka. A keni ne gjendje?"
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(message)}`

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div
        className="relative group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => window.open(whatsappUrl, "_blank")}
      >
        {/* Enhanced animated rings - more visible */}
        <div
          className={`absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75 ${isMobile ? "scale-75" : ""}`}
        ></div>
        <div className={`absolute inset-0 rounded-full bg-green-400 animate-pulse ${isMobile ? "scale-75" : ""}`}></div>
        <div
          className={`absolute -inset-2 bg-green-400/30 rounded-full blur-md animate-pulse delay-700 ${isMobile ? "scale-75" : ""}`}
        ></div>

        {/* Main button - enhanced glow effect */}
        <div
          className={`relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-200 group ${isMobile ? "p-3" : "p-4"}`}
        >
          <MessageCircle className={`${isMobile ? "h-6 w-6" : "h-8 w-8"} text-white`} />
          <div className="absolute inset-0 rounded-full shadow-[0_0_15px_5px_rgba(34,197,94,0.6)] animate-pulse-slow"></div>
        </div>

        {/* Enhanced tooltip */}
        <div
          className={`absolute bottom-full right-0 mb-3 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap transform transition-all duration-200 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
          }`}
        >
          Na kontaktoni në WhatsApp
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      </div>
    </div>
  )
}
