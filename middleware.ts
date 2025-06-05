import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// This middleware will run on all API routes
export function middleware(request: NextRequest) {
  // Check if we're in a build environment (CI=1 is set by Vercel during build)
  const isBuildTime = process.env.CI === "1"

  // If we're building and this is an API route that uses Prisma
  if (isBuildTime && request.nextUrl.pathname.startsWith("/api/addresses")) {
    return NextResponse.json({ message: "This API is not available during build time" }, { status: 503 })
  }

  return NextResponse.next()
}

// Only run this middleware on API routes
export const config = {
  matcher: "/api/:path*",
}
