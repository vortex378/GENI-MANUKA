"use client"

import { MessageCircle } from "lucide-react"
import { useState } from "react"

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false)

  const phoneNumber = "+355697320453"
  const message = "Pershendetje jam i/e interesuar per produktet manuka. A keni ne gjendje?"
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(message)}`

  return (
    <div
      className="fixed bottom-6 right-6 z-[9999]"
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 9999,
        width: "56px",
        height: "56px",
      }}
    >
      <div
        className="relative cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => window.open(whatsappUrl, "_blank")}
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          position: "relative",
        }}
      >
        {/* Glowing rings */}
        <div
          className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-60"
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            animation: "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
          }}
        ></div>

        <div
          className="absolute inset-0 rounded-full bg-green-400 animate-pulse opacity-40"
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
          }}
        ></div>

        {/* Main button */}
        <div
          className="relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-200 flex items-center justify-center"
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            background: "linear-gradient(to right, #22c55e, #16a34a)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 20px 8px rgba(34, 197, 94, 0.4)",
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)"
            e.currentTarget.style.boxShadow =
              "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 25px 10px rgba(34, 197, 94, 0.6)"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)"
            e.currentTarget.style.boxShadow =
              "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 20px 8px rgba(34, 197, 94, 0.4)"
          }}
        >
          <MessageCircle
            className="text-white"
            style={{
              width: "24px",
              height: "24px",
              color: "white",
            }}
          />
        </div>

        {/* Tooltip - only show on desktop */}
        <div
          className={`absolute bottom-full right-0 mb-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap transform transition-all duration-200 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
          }`}
          style={{
            position: "absolute",
            bottom: "100%",
            right: "0",
            marginBottom: "12px",
            padding: "8px 12px",
            backgroundColor: "#111827",
            color: "white",
            fontSize: "14px",
            borderRadius: "8px",
            whiteSpace: "nowrap",
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? "translateY(0)" : "translateY(8px)",
            transition: "all 0.2s ease",
            pointerEvents: isHovered ? "auto" : "none",
          }}
        >
          Na kontaktoni në WhatsApp
          <div
            style={{
              position: "absolute",
              top: "100%",
              right: "16px",
              width: "0",
              height: "0",
              borderLeft: "4px solid transparent",
              borderRight: "4px solid transparent",
              borderTop: "4px solid #111827",
            }}
          ></div>
        </div>
      </div>
    </div>
  )
}
