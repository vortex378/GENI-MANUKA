"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { WhatsAppProductButton } from "./whatsapp-product-button"

interface Product {
  id: string
  name: string
  slug: string
  description: string
  price: number
  comparePrice?: number
  images: string[]
  category: string
  stock: number
  featured: boolean
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const discount = product.comparePrice
    ? Math.round(((product.comparePrice - product.price) / product.comparePrice) * 100)
    : 0

  return (
    <Card className="group overflow-hidden">
      <div className="relative overflow-hidden">
        <Image
          src={product.images[0] || "/placeholder.svg?height=300&width=300&query=honey jar"}
          alt={product.name}
          width={300}
          height={300}
          className="w-full h-64 object-cover transition-transform group-hover:scale-105"
        />
        {discount > 0 && (
          <Badge variant="destructive" className="absolute top-2 left-2">
            -{discount}%
          </Badge>
        )}
        {product.featured && <Badge className="absolute top-2 right-2">Featured</Badge>}
      </div>

      <CardContent className="p-4">
        <div className="space-y-2">
          <h3 className="font-semibold text-lg line-clamp-2">{product.name}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">${product.price}</span>
            {product.comparePrice && (
              <span className="text-sm text-muted-foreground line-through">${product.comparePrice}</span>
            )}
          </div>
          <div className="flex items-center justify-between">
            <Badge variant="outline">{product.category}</Badge>
            <span className="text-sm text-muted-foreground">
              {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
            </span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 space-y-2">
        <WhatsAppProductButton
          product={{
            name: product.name,
            price: product.price,
            image: product.images[0],
          }}
          className="w-full"
        />
        <Button variant="outline" asChild className="w-full">
          <Link href={`/products/${product.slug}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
