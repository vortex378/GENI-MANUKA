"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Leaf, Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Kryefaqja" },
    { href: "/manukat", label: "Manukat" },
    { href: "/products", label: "Produktet" },
    { href: "/benefits", label: "Përfitimet" },
    { href: "/contact", label: "Kontakti" },
  ]

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-slate-900/95 backdrop-blur-md shadow-lg" : "bg-slate-900/60 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group" title="Manuka Albania - Kryefaqja">
            <Leaf className="h-8 w-8 text-amber-500 group-hover:scale-110 transition-transform duration-300" />
            <span className="ml-2 text-lg sm:text-xl font-bold text-white group-hover:text-amber-400 transition-colors duration-300 truncate">
              Manuka Albania
            </span>
          </Link>

          {/* Desktop Navigation - WHITE TEXT */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white hover:text-amber-400 font-semibold transition-all duration-300 relative group whitespace-nowrap text-base"
                title={`Manuka Albania - ${item.label}`}
                style={{
                  textShadow: "0 2px 8px rgba(0,0,0,0.8)",
                }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <Button
                className="relative bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/manuka_mjalte_albania_2014?igsh=MXB2NHA2OWtlamdsMA==",
                    "_blank",
                  )
                }
                title="Blej Mjalte Manuka nga Manuka Albania"
              >
                Blej Tani
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-300 flex-shrink-0"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Hap menunë"
          >
            {isOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden fixed inset-x-0 top-16 transition-all duration-300 ${
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="mx-4 mt-2 rounded-xl bg-slate-900/95 backdrop-blur-md shadow-xl border border-white/10 overflow-hidden">
            <div className="py-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center px-6 py-4 text-white hover:text-amber-400 hover:bg-white/5 transition-all duration-300 border-b border-white/5 last:border-b-0"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setIsOpen(false)}
                  title={`Manuka Albania - ${item.label}`}
                >
                  <span className="text-base font-semibold">{item.label}</span>
                </Link>
              ))}
              <div className="px-6 py-4">
                <Button
                  className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  onClick={() => {
                    window.open(
                      "https://www.instagram.com/manuka_mjalte_albania_2014?igsh=MXB2NHA2OWtlamdsMA==",
                      "_blank",
                    )
                    setIsOpen(false)
                  }}
                  title="Blej Mjalte Manuka nga Manuka Albania"
                >
                  Blej Tani
                </Button>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm -z-10" onClick={() => setIsOpen(false)}></div>
        </div>
      </div>
    </nav>
  )
}
