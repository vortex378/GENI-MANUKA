"use client"

import type React from "react"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  // Scroll to top on page navigation
  useEffect(() => {
    // Use setTimeout to ensure the page has rendered
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      })
    }, 0)

    return () => clearTimeout(timer)
  }, [pathname])

  return <>{children}</>
}
