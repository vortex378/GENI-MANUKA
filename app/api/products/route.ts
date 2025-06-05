import { NextResponse } from "next/server"

// Placeholder products data
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
  {
    id: "2",
    name: "Raw Manuka Honey UMF 10+",
    slug: "raw-manuka-honey-umf-10",
    description: "Raw, unprocessed Manuka Honey with UMF 10+ rating",
    price: 59.99,
    comparePrice: 80.0,
    images: ["/placeholder.svg?height=400&width=400"],
    category: "Raw",
    stock: 30,
    featured: true,
    createdAt: new Date().toISOString(),
  },
]

// GET all products
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category")
    const featured = searchParams.get("featured") === "true"

    let filteredProducts = products

    if (category) {
      filteredProducts = filteredProducts.filter((p) => p.category === category)
    }

    if (featured) {
      filteredProducts = filteredProducts.filter((p) => p.featured)
    }

    return NextResponse.json(filteredProducts)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 })
  }
}

// POST new product (placeholder)
export async function POST(request: Request) {
  return NextResponse.json({ error: "Database not configured" }, { status: 503 })
}
