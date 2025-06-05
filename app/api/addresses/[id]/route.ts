import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"

// GET a single address
export async function GET(request: Request, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const address = await prisma.address.findUnique({
      where: { id: params.id },
    })

    if (!address) {
      return NextResponse.json({ error: "Address not found" }, { status: 404 })
    }

    // Check if user is authorized to view this address
    if (address.userId !== session.user.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    return NextResponse.json(address)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch address" }, { status: 500 })
  }
}

// PUT update address
export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { name, street, city, state, country, zipCode, isDefault } = body

    // Get the address to check ownership
    const existingAddress = await prisma.address.findUnique({
      where: { id: params.id },
    })

    if (!existingAddress) {
      return NextResponse.json({ error: "Address not found" }, { status: 404 })
    }

    // Check if user is authorized to update this address
    if (existingAddress.userId !== session.user.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // If this is the default address, unset any existing default
    if (isDefault) {
      await prisma.address.updateMany({
        where: { userId: session.user.id, isDefault: true },
        data: { isDefault: false },
      })
    }

    const address = await prisma.address.update({
      where: { id: params.id },
      data: {
        name,
        street,
        city,
        state,
        country,
        zipCode,
        isDefault: isDefault || false,
      },
    })

    return NextResponse.json(address)
  } catch (error) {
    return NextResponse.json({ error: "Failed to update address" }, { status: 500 })
  }
}

// DELETE address
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    // Get the address to check ownership
    const existingAddress = await prisma.address.findUnique({
      where: { id: params.id },
    })

    if (!existingAddress) {
      return NextResponse.json({ error: "Address not found" }, { status: 404 })
    }

    // Check if user is authorized to delete this address
    if (existingAddress.userId !== session.user.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    await prisma.address.delete({
      where: { id: params.id },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete address" }, { status: 500 })
  }
}
