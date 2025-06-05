"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/contexts/cart-context"
import { useToast } from "@/hooks/use-toast"
import { Minus, Plus, ShoppingCart, Heart, Share2, Star } from "lucide-react"
import { WhatsAppProductButton } from "@/components/whatsapp-product-button"

interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  stock: number
}

export default function ProductPage() {
  const params = useParams()
  const { addItem } = useCart()
  const { toast } = useToast()
  const [product, setProduct] = useState<Product | null>(null)
  const [quantity, setQuantity] = useState(1)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // For now, use mock data since we don't have slug-based API
        const mockProduct: Product = {
          id: "1",
          name: "Premium Manuka Honey UMF 15+",
          description:
            "Premium New Zealand Manuka Honey with UMF 15+ rating. This exceptional honey is sourced from the pristine forests of New Zealand and offers powerful antibacterial properties. Perfect for daily wellness support, immune system boost, and natural healing.",
          price: 89.99,
          image: "/placeholder.svg?height=500&width=500",
          category: "Premium Honey",
          stock: 25,
        }
        setProduct(mockProduct)
      } catch (error) {
        console.error("Error fetching product:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [params.slug])

  const handleAddToCart = () => {
    if (!product) return

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity,
    })

    toast({
      title: "Added to cart",
      description: `${quantity}x ${product.name} added to your cart`,
    })
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-200 aspect-square rounded-lg"></div>
            <div className="space-y-4">
              <div className="h-8 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-6 bg-gray-200 rounded w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Product not found</h1>
          <p className="text-muted-foreground mt-2">The product you're looking for doesn't exist.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <Badge variant="outline" className="mb-2">
              {product.category}
            </Badge>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">(24 reviews)</span>
            </div>
          </div>

          <div className="text-3xl font-bold text-primary">€{product.price.toFixed(2)}</div>

          <p className="text-muted-foreground leading-relaxed">{product.description}</p>

          <Separator />

          {/* Quantity Selector */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="font-medium">Quantity:</span>
              <div className="flex items-center border rounded-md">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="px-4 py-2 min-w-[3rem] text-center">{quantity}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  disabled={quantity >= product.stock}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <span className="text-sm text-muted-foreground">{product.stock} available</span>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button onClick={handleAddToCart} className="w-full" size="lg" disabled={product.stock === 0}>
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>

              <div className="grid grid-cols-2 gap-3">
                <WhatsAppProductButton
                  product={{
                    name: product.name,
                    price: product.price,
                    image: product.image,
                  }}
                  className="w-full"
                  variant="outline"
                />
                <Button variant="outline" className="w-full">
                  <Heart className="mr-2 h-4 w-4" />
                  Wishlist
                </Button>
              </div>

              <Button variant="ghost" className="w-full">
                <Share2 className="mr-2 h-4 w-4" />
                Share Product
              </Button>
            </div>
          </div>

          <Separator />

          {/* Product Features */}
          <div className="space-y-4">
            <h3 className="font-semibold">Product Features</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• UMF 15+ certified for guaranteed quality</li>
              <li>• Raw and unprocessed for maximum benefits</li>
              <li>• Sourced from pristine New Zealand forests</li>
              <li>• Natural antibacterial and healing properties</li>
              <li>• Perfect for daily wellness and immune support</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Related Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">{/* Add related products here */}</div>
      </div>
    </div>
  )
}
