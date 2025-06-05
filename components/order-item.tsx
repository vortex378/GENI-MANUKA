import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { formatDate } from "@/lib/utils"

interface OrderItemProps {
  order: {
    id: string
    createdAt: string
    total: number
    status: string
    paymentStatus: string
    items: {
      id: string
      name: string
      price: number
      quantity: number
      product: {
        images: string[]
      }
    }[]
  }
}

export function OrderItem({ order }: OrderItemProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "PENDING":
        return "bg-yellow-100 text-yellow-800"
      case "PROCESSING":
        return "bg-blue-100 text-blue-800"
      case "SHIPPED":
        return "bg-purple-100 text-purple-800"
      case "DELIVERED":
        return "bg-green-100 text-green-800"
      case "CANCELLED":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case "PAID":
        return "bg-green-100 text-green-800"
      case "PENDING":
        return "bg-yellow-100 text-yellow-800"
      case "FAILED":
        return "bg-red-100 text-red-800"
      case "REFUNDED":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="border rounded-lg p-4 mb-4">
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="text-sm text-gray-500">Order #{order.id.slice(-8)}</p>
          <p className="text-sm text-gray-500">{formatDate(order.createdAt)}</p>
        </div>
        <div className="flex space-x-2">
          <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
          <Badge className={getPaymentStatusColor(order.paymentStatus)}>{order.paymentStatus}</Badge>
        </div>
      </div>

      <div className="space-y-3">
        {order.items.map((item) => (
          <div key={item.id} className="flex items-center space-x-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-md">
              <Image src={item.product.images[0] || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
            </div>
            <div className="flex-1">
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-gray-500">
                {item.quantity} x €{item.price.toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t flex justify-between items-center">
        <p className="font-medium">Total</p>
        <p className="font-bold">€{order.total.toFixed(2)}</p>
      </div>
    </div>
  )
}
