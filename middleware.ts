import { NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"
import type { NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request })
  const isAuthenticated = !!token
  const isAdmin = token?.role === "ADMIN"
  const isAdminRoute = request.nextUrl.pathname.startsWith("/admin")
  const isAuthRoute = request.nextUrl.pathname.startsWith("/login") || request.nextUrl.pathname.startsWith("/register")

  // Redirect authenticated users away from auth pages
  if (isAuthenticated && isAuthRoute) {
    return NextResponse.redirect(new URL("/", request.url))
  }

  // Protect admin routes
  if (isAdminRoute && !isAdmin) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  // Protect checkout and order routes
  if (
    (request.nextUrl.pathname.startsWith("/checkout") || request.nextUrl.pathname.startsWith("/orders")) &&
    !isAuthenticated
  ) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*", "/checkout/:path*", "/orders/:path*", "/login", "/register"],
}
