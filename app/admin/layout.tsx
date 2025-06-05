"use client"

import type { ReactNode } from "react"
import { useAuth } from "@/lib/auth-context"
import { useRouter, usePathname } from "next/navigation"
import { useEffect } from "react"
import { Loader2 } from "lucide-react"

export default function AdminLayout({ children }: { children: ReactNode }) {
  const { user, loading } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Don't redirect if we're already on the login page
    if (pathname === "/admin/login") return

    // Only redirect if not loading and no user
    if (!loading && !user) {
      router.push("/admin/login")
    }
  }, [user, loading, router, pathname])

  // Show loading spinner while checking auth
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  // If on login page, always show content
  if (pathname === "/admin/login") {
    return <>{children}</>
  }

  // If no user and not on login page, show nothing (redirect will happen)
  if (!user) {
    return null
  }

  // User is authenticated, show content
  return <>{children}</>
}
