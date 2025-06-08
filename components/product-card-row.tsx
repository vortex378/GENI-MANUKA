"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react"

interface ProductCardProps {
  id: string
  name: string
  description: string
  image: string
  mgoLevel: string
  brand: "KORU" | "NUI" | "HEALTH" | "MELORA"
  isPremium?: boolean
  price?: number
  euroPrice?: number
  isEuro?: boolean
  weight?: string
  rating?: number
  whatsappMessage: string
}

interface ProductCardRowProps {
  products: ProductCardProps[]
  showPricing?: boolean
  showWhatsAppButton?: boolean
  title?: string
}

export default function ProductCardRow({
  products,
  showPricing = false,
  showWhatsAppButton = false,
  title,
}: ProductCardRowProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [isScrolling, setIsScrolling] = useState(false)

  const getBrandColor = (brand: string) => {
    switch (brand) {
      case "KORU":
        return "bg-blue-500"
      case "NUI":
        return "bg-green-500"
      case "HEALTH":
        return "bg-indigo-500"
      case "MELORA":
        return "bg-purple-500"
      default:
        return "bg-blue-500"
    }
  }

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
    }
  }

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const cardWidth = 320 // Card width + gap
      const scrollAmount = cardWidth + 24 // Include gap
      const currentScroll = scrollContainerRef.current.scrollLeft
      const targetScroll = direction === "left" ? currentScroll - scrollAmount : currentScroll + scrollAmount

      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      })
    }
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      checkScrollButtons()

      const handleScroll = () => {
        checkScrollButtons()
        setIsScrolling(true)

        // Clear scrolling state after scroll ends
        clearTimeout(window.scrollTimeout)
        window.scrollTimeout = setTimeout(() => {
          setIsScrolling(false)
        }, 150)
      }

      container.addEventListener("scroll", handleScroll, { passive: true })
      window.addEventListener("resize", checkScrollButtons)

      return () => {
        container.removeEventListener("scroll", handleScroll)
        window.removeEventListener("resize", checkScrollButtons)
      }
    }
  }, [])

  return (
    <div className="w-full relative group">
      {/* Title */}
      {title && (
        <div className="mb-6 px-4">
          <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        </div>
      )}

      {/* Desktop Navigation Arrows */}
      <div className="hidden md:block">
        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>
        )}

        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>
        )}
      </div>

      {/* Scrollable Container */}
      <div
        ref={scrollContainerRef}
        className="overflow-x-auto scrollbar-hide pb-4 scroll-smooth"
        style={{
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <div className="flex gap-6 px-4 md:px-6">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className="flex-shrink-0 w-80 md:w-72 lg:w-80 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden touch-manipulation"
              style={{
                scrollSnapAlign: "start",
                scrollSnapStop: "always",
              }}
            >
              {/* Product Image Section */}
              <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 p-6 h-64">
                {/* Premium Badge */}
                {product.isPremium && (
                  <Badge className="absolute top-4 left-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 text-sm font-semibold rounded-full flex items-center gap-1 z-10 shadow-md">
                    <Star className="h-3 w-3 fill-current" />
                    Premium
                  </Badge>
                )}

                {/* MGO Level Badge */}
                <Badge className="absolute top-4 right-4 bg-white/95 text-gray-700 px-4 py-2 text-sm font-bold rounded-full shadow-md z-10 backdrop-blur-sm">
                  {product.mgoLevel}
                </Badge>

                {/* Product Image */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="object-contain max-w-full max-h-full transition-transform duration-300 hover:scale-105"
                    loading={index < 2 ? "eager" : "lazy"}
                  />
                </div>

                {/* Brand Badge */}
                <Badge
                  className={`absolute bottom-4 left-4 ${getBrandColor(product.brand)} text-white px-4 py-2 text-sm font-bold rounded-full shadow-lg`}
                >
                  {product.brand}
                </Badge>
              </div>

              {/* Product Info Section */}
              <CardContent className="p-6">
                <div className="space-y-3">
                  {/* Product Name */}
                  <h3 className="text-xl font-bold text-gray-900 leading-tight">
                    {product.name}
                    {product.weight && (
                      <span className="text-lg font-normal text-gray-600 ml-2">({product.weight})</span>
                    )}
                  </h3>

                  {/* Product Description */}
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">{product.description}</p>

                  {/* Rating */}
                  {product.rating && (
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(product.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">({product.rating}.0)</span>
                    </div>
                  )}

                  {/* Pricing */}
                  {showPricing && product.price && (
                    <div className="pt-2">
                      {product.isEuro ? (
                        <div className="text-center">
                          <span className="text-2xl font-bold text-blue-600">{product.euroPrice} Euro</span>
                          <p className="text-sm text-gray-500">({product.price.toLocaleString()} L)</p>
                        </div>
                      ) : (
                        <span className="text-2xl font-bold text-blue-600">{product.price.toLocaleString()} L</span>
                      )}
                    </div>
                  )}

                  {/* WhatsApp Button */}
                  {showWhatsAppButton && (
                    <div className="pt-4">
                      <Button
                        className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 touch-manipulation"
                        onClick={() => {
                          const phoneNumber = "+355697320453"
                          const message = `Dua te porosis ${product.whatsappMessage}`
                          const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(message)}`
                          window.open(whatsappUrl, "_blank")
                        }}
                      >
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Porosi në WhatsApp
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Mobile Scroll Indicators */}
      <div className="flex justify-center mt-4 md:hidden">
        <div className="flex space-x-2">
          {products.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === 0 ? "bg-amber-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Hint for Mobile */}
      {canScrollRight && (
        <div className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
          <div
            className={`bg-gradient-to-l from-white via-white/80 to-transparent w-8 h-32 flex items-center justify-end transition-opacity duration-300 ${isScrolling ? "opacity-0" : "opacity-100"}`}
          >
            <ChevronRight className="h-5 w-5 text-gray-400 animate-pulse" />
          </div>
        </div>
      )}
    </div>
  )
}
