import { type NextRequest, NextResponse } from "next/server"
import { jwtVerify } from "jose"

const secret = new TextEncoder().encode("your-secret-key-here")

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get("auth-token")?.value

    if (!token) {
      return NextResponse.json({ user: null })
    }

    const { payload } = await jwtVerify(token, secret)

    return NextResponse.json({
      user: {
        id: payload.userId,
        email: payload.email,
        name: payload.name,
        role: payload.role,
      },
    })
  } catch (error) {
    return NextResponse.json({ user: null })
  }
}
