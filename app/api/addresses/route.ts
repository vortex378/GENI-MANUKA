import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"

// GET user addresses
export async function GET(request: Request) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const addresses = await prisma.address.findMany({
      where: { userId: session.user.id },
      orderBy: { isDefault: "desc" },
    })

    return NextResponse.json(addresses)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch addresses" }, { status: 500 })
  }
}

// POST create new address
export async function POST(request: Request) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { name, street, city, state, country, zipCode, isDefault } = body

    // If this is the default address, unset any existing default
    if (isDefault) {
      await prisma.address.updateMany({
        where: { userId: session.user.id, isDefault: true },
        data: { isDefault: false },
      })
    }

    const address = await prisma.address.create({
      data: {
        userId: session.user.id,
        name,
        street,
        city,
        state,
        country,
        zipCode,
        isDefault: isDefault || false,
      },
    })

    return NextResponse.json(address, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to create address" }, { status: 500 })
  }
}
