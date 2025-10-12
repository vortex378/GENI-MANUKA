"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from "lucide-react"

interface Slide {
  id: number
  image: string
  title: string
  subtitle: string
  ctaText: string
  ctaLink: string
}

const slides: Slide[] = [
  {
    id: 1,
    image: "https://manukahealth.shop/cdn/shop/products/MH-Honey-MGO100_-250g-front-DE_grande.jpg?v=1658158893",
    title: "Shëndeti Është Pasuri",
    subtitle: "Përfitimet e provuara shkencore të mjaltit Manuka",
    ctaText: "Mëso Më Shumë",
    ctaLink: "/benefits",
  },
  {
    id: 2,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2841-BerNBWshVNeJ2GNGar0J6eBTSxPPV1.png",
    title: "Cilësia Premium Manuka",
    subtitle: "Mjalte autentik nga Zelanda e Re për shëndet dhe mirëqenie",
    ctaText: "Blej Tani",
    ctaLink: "https://www.instagram.com/manuka_mjalte_albania_2014?igsh=MXB2NHA2OWtlamdsMA==",
  },
  {
    id: 3,
    image: "https://neozealand.com/cdn/shop/files/DSC3887_100.jpg?v=1718806711",
    title: "Manuka Koru Premium",
    subtitle: "Koleksioni më i mirë i mjaltit Manuka me MGO të lartë",
    ctaText: "Shiko Koleksionin",
    ctaLink: "/showcase",
  },
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      nextSlide()
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  const handleCTAClick = (link: string) => {
    if (link.startsWith("http")) {
      window.open(link, "_blank")
    } else {
      window.location.href = link
    }
  }

  return (
    <div className="relative h-screen w-full overflow-hidden bg-slate-900">
      {/* VIDEO BACKGROUND - MUCH MORE VISIBLE NOW! */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            filter: "brightness(0.7) saturate(1.4) contrast(1.15)",
          }}
        >
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/watermarked_preview-c1RlRbHJ93yjo99ZLSGNQw9bhkfbW8.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* MINIMAL overlay - let the honey video SHINE! */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-slate-900/60" />
      </div>

      {/* Slides */}
      <div className="relative h-full w-full z-10">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Desktop Layout - Text Left, Product Right */}
            <div className="hidden md:flex h-full items-center px-8 lg:px-16 xl:px-24 max-w-[1800px] mx-auto">
              {/* LEFT SIDE - Text Content */}
              <div
                className="flex-1 max-w-2xl pr-8"
                style={{
                  transform: index === currentSlide ? "translateX(0)" : "translateX(-100px)",
                  opacity: index === currentSlide ? 1 : 0,
                  transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: index === currentSlide ? "200ms" : "0ms",
                }}
              >
                {/* Premium Badge */}
                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900/80 backdrop-blur-md rounded-full border-2 border-amber-500/50 mb-8 shadow-2xl">
                  <Sparkles className="h-5 w-5 text-amber-400 animate-pulse" />
                  <span className="text-sm font-bold text-white tracking-wide">Premium Quality</span>
                </div>

                {/* Main Title - HUGE and BOLD */}
                <h1
                  className="text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black leading-[1.1] mb-6"
                  style={{
                    color: "#FDB71A",
                    textShadow:
                      "3px 3px 0px rgba(0,0,0,0.8), 6px 6px 20px rgba(0,0,0,0.6), 0 0 40px rgba(253, 183, 26, 0.3)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {slide.title}
                </h1>

                {/* Subtitle - WHITE and CLEAR */}
                <p
                  className="text-xl lg:text-2xl xl:text-3xl font-semibold leading-relaxed mb-10"
                  style={{
                    color: "#FFFFFF",
                    textShadow: "2px 2px 8px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.7)",
                  }}
                >
                  {slide.subtitle}
                </p>
              </div>

              {/* RIGHT SIDE - Product + CTA */}
              <div
                className="flex-shrink-0"
                style={{
                  transform: index === currentSlide ? "translateX(0)" : "translateX(100px)",
                  opacity: index === currentSlide ? 1 : 0,
                  transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: index === currentSlide ? "400ms" : "0ms",
                }}
              >
                {/* Product Card */}
                <div className="bg-white rounded-3xl p-8 shadow-2xl mb-6 max-w-md">
                  <div className="relative">
                    <div className="absolute inset-0 bg-amber-500/10 blur-2xl" />
                    <Image
                      src={slide.image || "/placeholder.svg"}
                      alt={slide.title}
                      width={400}
                      height={400}
                      priority={index === 0}
                      className="relative object-contain w-full"
                    />
                  </div>
                </div>

                {/* CTA Button */}
                <div className="group relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse" />
                  <Button
                    size="lg"
                    onClick={() => handleCTAClick(slide.ctaLink)}
                    className="relative w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-10 py-7 text-xl font-black rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300"
                  >
                    <span className="text-white drop-shadow-lg">{slide.ctaText}</span>
                    <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>

            {/* MOBILE Layout */}
            <div className="md:hidden flex flex-col h-full items-center justify-center px-4 py-8 space-y-8">
              <div
                className="text-center space-y-4 max-w-md"
                style={{
                  transform: index === currentSlide ? "translateY(0)" : "translateY(50px)",
                  opacity: index === currentSlide ? 1 : 0,
                  transition: "all 0.7s ease-out",
                  transitionDelay: index === currentSlide ? "150ms" : "0ms",
                }}
              >
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900/80 backdrop-blur-md rounded-full border-2 border-amber-500/50">
                  <Sparkles className="h-4 w-4 text-amber-400 animate-pulse" />
                  <span className="text-xs font-bold text-white">Premium Quality</span>
                </div>

                {/* Title */}
                <h1
                  className="text-4xl sm:text-5xl font-black leading-tight"
                  style={{
                    color: "#FDB71A",
                    textShadow: "2px 2px 0px rgba(0,0,0,0.8), 4px 4px 15px rgba(0,0,0,0.6)",
                  }}
                >
                  {slide.title}
                </h1>

                {/* Subtitle */}
                <p
                  className="text-lg sm:text-xl font-semibold leading-relaxed"
                  style={{
                    color: "#FFFFFF",
                    textShadow: "1px 1px 6px rgba(0,0,0,0.9)",
                  }}
                >
                  {slide.subtitle}
                </p>
              </div>

              {/* Product */}
              <div
                className="bg-white rounded-2xl p-6 shadow-2xl max-w-xs w-full"
                style={{
                  transform: index === currentSlide ? "scale(1)" : "scale(0.9)",
                  opacity: index === currentSlide ? 1 : 0,
                  transition: "all 0.7s ease-out",
                  transitionDelay: index === currentSlide ? "300ms" : "0ms",
                }}
              >
                <Image
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.title}
                  width={300}
                  height={300}
                  priority={index === 0}
                  className="object-contain w-full"
                />
              </div>

              {/* CTA */}
              <div
                className="w-full max-w-xs"
                style={{
                  transform: index === currentSlide ? "translateY(0)" : "translateY(50px)",
                  opacity: index === currentSlide ? 1 : 0,
                  transition: "all 0.7s ease-out",
                  transitionDelay: index === currentSlide ? "450ms" : "0ms",
                }}
              >
                <div className="group relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse" />
                  <Button
                    size="lg"
                    onClick={() => handleCTAClick(slide.ctaLink)}
                    className="relative w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-6 text-lg font-black rounded-2xl shadow-2xl"
                  >
                    <span className="text-white">{slide.ctaText}</span>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="hidden md:block">
        <button
          onClick={() => {
            prevSlide()
            setIsAutoPlaying(false)
          }}
          className="absolute left-8 top-1/2 -translate-y-1/2 z-20 p-4 bg-slate-900/80 hover:bg-slate-900/95 backdrop-blur-md rounded-full transition-all duration-300 group border-2 border-white/20 hover:scale-110 shadow-2xl"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-8 w-8 text-white group-hover:-translate-x-1 transition-transform" />
        </button>

        <button
          onClick={() => {
            nextSlide()
            setIsAutoPlaying(false)
          }}
          className="absolute right-8 top-1/2 -translate-y-1/2 z-20 p-4 bg-slate-900/80 hover:bg-slate-900/95 backdrop-blur-md rounded-full transition-all duration-300 group border-2 border-white/20 hover:scale-110 shadow-2xl"
          aria-label="Next slide"
        >
          <ChevronRight className="h-8 w-8 text-white group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Carousel Dots */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-500 rounded-full ${
              index === currentSlide
                ? "bg-gradient-to-r from-amber-400 to-orange-500 w-16 h-4 shadow-lg"
                : "bg-white/40 hover:bg-white/60 w-4 h-4"
            }`}
            style={{
              boxShadow: index === currentSlide ? "0 0 25px rgba(251, 191, 36, 0.6)" : "none",
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Mobile Swipe Support */}
      <div
        className="absolute inset-0 z-10 md:hidden"
        onTouchStart={(e) => {
          const touch = e.touches[0]
          const startX = touch.clientX

          const handleTouchEnd = (endEvent: TouchEvent) => {
            const endX = endEvent.changedTouches[0].clientX
            const diff = startX - endX

            if (Math.abs(diff) > 50) {
              if (diff > 0) {
                nextSlide()
              } else {
                prevSlide()
              }
              setIsAutoPlaying(false)
            }

            document.removeEventListener("touchend", handleTouchEnd)
          }

          document.addEventListener("touchend", handleTouchEnd)
        }}
      />
    </div>
  )
}
