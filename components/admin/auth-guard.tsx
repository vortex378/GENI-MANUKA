"use client"

import type React from "react"

import { useSession } from "next-auth/react"
import { useRouter, usePathname } from "next/navigation"
import { useEffect } from "react"
import { Loader2 } from "lucide-react"

interface AuthGuardProps {
  children: React.ReactNode
}

export function AuthGuard({ children }: AuthGuardProps) {
  const { data: session, status } = useSession()
  const router = useRouter()
  const pathname = usePathname()

  const publicPaths = ["/admin/login", "/admin/forgot-password", "/admin/reset-password"]
  const isPublicPath = publicPaths.includes(pathname)

  useEffect(() => {
    if (status === "loading") return // Still loading

    if (!session && !isPublicPath) {
      router.push("/admin/login")
      return
    }

    if (session && isPublicPath) {
      router.push("/admin")
      return
    }
  }, [session, status, router, pathname, isPublicPath])

  // Show loading spinner while checking authentication
  if (status === "loading") {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  // Show login page for unauthenticated users on protected routes
  if (!session && !isPublicPath) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  return <>{children}</>
}
