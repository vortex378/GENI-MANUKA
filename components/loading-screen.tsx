"use client"

import { useEffect, useState } from "react"
import { Leaf, Sparkles } from "lucide-react"

interface LoadingScreenProps {
  onLoadingComplete?: () => void
  duration?: number
}

export default function LoadingScreen({ onLoadingComplete, duration = 3000 }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setIsVisible(false)
            onLoadingComplete?.()
          }, 500)
          return 100
        }
        return prev + 100 / (duration / 50)
      })
    }, 50)

    return () => clearInterval(interval)
  }, [duration, onLoadingComplete])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-200/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Honey Drops */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-bounce"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 2) * 40}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${2 + i * 0.3}s`,
          }}
        >
          <div className="w-3 h-3 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full opacity-60"></div>
        </div>
      ))}

      {/* Sparkles */}
      {[...Array(8)].map((_, i) => (
        <Sparkles
          key={i}
          className="absolute text-amber-400 animate-pulse"
          size={16}
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 30}%`,
            animationDelay: `${i * 0.3}s`,
          }}
        />
      ))}

      {/* Main Content */}
      <div className="relative text-center z-10">
        {/* Animated Honey Jar */}
        <div className="relative mx-auto mb-8 w-32 h-40">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-100 to-amber-200 rounded-t-3xl rounded-b-lg border-4 border-amber-300 shadow-2xl">
            {/* Honey Fill Animation */}
            <div
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-amber-500 to-amber-400 rounded-b-lg transition-all duration-1000 ease-out"
              style={{ height: `${progress}%` }}
            >
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 opacity-60 animate-pulse"></div>
            </div>

            {/* Jar Lid */}
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-20 h-4 bg-gradient-to-b from-amber-600 to-amber-700 rounded-full shadow-lg"></div>

            {/* Jar Label */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs font-bold text-amber-800 opacity-80">
              MGO
            </div>
          </div>

          {/* Honey Drip */}
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
            <div className="w-2 h-6 bg-gradient-to-b from-amber-500 to-amber-600 rounded-b-full animate-pulse"></div>
          </div>
        </div>

        {/* Welcome Text */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-4">
            <Leaf className="h-8 w-8 text-amber-600 mr-3 animate-pulse" />
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 bg-clip-text text-transparent animate-pulse">
              Welcome!
            </h1>
            <Leaf className="h-8 w-8 text-amber-600 ml-3 animate-pulse" />
          </div>
          <p className="text-xl text-amber-700 font-medium animate-pulse">
            Mirë se vini në botën e mjaltit premium Manuka
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-80 mx-auto">
          <div className="bg-amber-200/50 rounded-full h-3 overflow-hidden shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 rounded-full transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
            </div>
          </div>
          <div className="text-center mt-3 text-amber-700 font-semibold">{Math.round(progress)}%</div>
        </div>

        {/* Loading Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 bg-amber-500 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}
