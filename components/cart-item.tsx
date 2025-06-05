"use client"

import type React from "react"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Trash2 } from "lucide-react"
import { useCart, type CartItem } from "@/contexts/cart-context"

interface CartItemProps {
  item: CartItem
}

export function CartItemComponent({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart()

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value)
    if (!isNaN(value)) {
      updateQuantity(item.id, value)
    }
  }

  return (
    <div className="flex items-center space-x-4 py-4 border-b">
      <div className="relative h-24 w-24 overflow-hidden rounded-md">
        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
      </div>
      <div className="flex-1">
        <h3 className="font-medium">{item.name}</h3>
        <p className="text-sm text-gray-500">€{item.price.toFixed(2)}</p>
      </div>
      <div className="flex items-center space-x-2">
        <div className="w-20">
          <Input type="number" min="1" value={item.quantity} onChange={handleQuantityChange} className="h-8" />
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => removeItem(item.id)}
          className="text-red-500 hover:text-red-700 hover:bg-red-50"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
