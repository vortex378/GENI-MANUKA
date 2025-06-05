import { NextResponse } from "next/server"

// Placeholder product data
const products = [
  {
    id: "1",
    name: "Premium Manuka Honey UMF 15+",
    slug: "premium-manuka-honey-umf-15",
    description: "Premium New Zealand Manuka Honey with UMF 15+ rating",
    price: 89.99,
    comparePrice: 120.0,
    images: ["/placeholder.svg?height=400&width=400"],
    category: "Premium",
    stock: 50,
    featured: true,
    createdAt: new Date().toISOString(),
  },
]

// GET a single product
export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const product = products.find((p) => p.id === params.id)

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 })
    }

    return NextResponse.json(product)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch product" }, { status: 500 })
  }
}

// PUT update product (placeholder)
export async function PUT(request: Request, { params }: { params: { id: string } }) {
  return NextResponse.json({ error: "Database not configured" }, { status: 503 })
}

// DELETE product (placeholder)
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  return NextResponse.json({ error: "Database not configured" }, { status: 503 })
}
