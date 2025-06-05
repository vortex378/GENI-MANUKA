"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useCart } from "@/contexts/cart-context"
import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"
import { CartItemComponent } from "@/components/cart-item"
import { ShoppingBag, ArrowRight } from "lucide-react"

export default function CartPage() {
  const { items, totalPrice, totalItems } = useCart()
  const { user } = useAuth()
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const handleCheckout = () => {
    if (!user) {
      router.push("/login?redirect=/checkout")
    } else {
      router.push("/checkout")
    }
  }

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <ShoppingBag className="mx-auto h-24 w-24 text-gray-400" />
          <h2 className="mt-4 text-2xl font-bold">Your cart is empty</h2>
          <p className="mt-2 text-gray-600">Start shopping to add items to your cart</p>
          <Link href="/products">
            <Button className="mt-4">Continue Shopping</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-xl font-semibold mb-4">Cart Items ({totalItems})</h2>
            <div className="space-y-4">
              {items.map((item) => (
                <CartItemComponent key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-4">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>€{totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="border-t pt-3">
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>€{totalPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>
            <Button onClick={handleCheckout} className="w-full mt-6">
              Proceed to Checkout
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Link href="/products">
              <Button variant="outline" className="w-full mt-3">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
