import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import slugify from "slugify"

// GET all products
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get("category")
  const featured = searchParams.get("featured") === "true"

  const where = {
    ...(category ? { category } : {}),
    ...(featured ? { featured: true } : {}),
  }

  try {
    const products = await prisma.product.findMany({
      where,
      orderBy: { createdAt: "desc" },
    })

    return NextResponse.json(products)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 })
  }
}

// POST new product (admin only)
export async function POST(request: Request) {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== "ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { name, description, price, comparePrice, images, category, stock, featured } = body

    const slug = slugify(name, { lower: true })

    const product = await prisma.product.create({
      data: {
        name,
        slug,
        description,
        price: Number.parseFloat(price),
        comparePrice: comparePrice ? Number.parseFloat(comparePrice) : null,
        images,
        category,
        stock: Number.parseInt(stock),
        featured: featured || false,
      },
    })

    return NextResponse.json(product, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to create product" }, { status: 500 })
  }
}
