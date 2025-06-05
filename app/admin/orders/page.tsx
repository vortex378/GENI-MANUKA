"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Search,
  MoreHorizontal,
  Eye,
  Edit,
  Package,
  Calendar,
  Download,
  Printer,
  RefreshCw,
  Truck,
  MapPin,
  Phone,
  Mail,
  CheckCircle,
  Clock,
  XCircle,
} from "lucide-react"

// Mock data
const orders = [
  {
    id: "ORD-2024-001234",
    client: {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "+355 69 123 4567",
      avatar: "/avatars/john.jpg",
    },
    products: [
      { id: 1, name: "Manuka MGO 400+ 250g", quantity: 2, price: 65.0, image: "/products/manuka-400.jpg" },
      { id: 2, name: "Spirulina 100g", quantity: 1, price: 25.0, image: "/products/spirulina.jpg" },
    ],
    subtotal: 155.0,
    shipping: 10.0,
    tax: 16.5,
    total: 181.5,
    status: "pending",
    paymentStatus: "paid",
    paymentMethod: "Credit Card",
    date: "2024-03-12T10:30:00Z",
    trackingCode: "",
    shippingAddress: {
      street: "123 Main St",
      city: "Tirana",
      country: "Albania",
      postalCode: "1001",
    },
    notes: "Customer requested express shipping",
    estimatedDelivery: "2024-03-15",
  },
  {
    id: "ORD-2024-001233",
    client: {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "+355 69 234 5678",
      avatar: "/avatars/jane.jpg",
    },
    products: [{ id: 3, name: "Manuka MGO 550+ 500g", quantity: 1, price: 89.0, image: "/products/manuka-550.jpg" }],
    subtotal: 89.0,
    shipping: 5.0,
    tax: 9.4,
    total: 103.4,
    status: "shipped",
    paymentStatus: "paid",
    paymentMethod: "PayPal",
    date: "2024-03-11T14:20:00Z",
    trackingCode: "TRK123456789",
    shippingAddress: {
      street: "456 Oak Ave",
      city: "Durres",
      country: "Albania",
      postalCode: "2001",
    },
    notes: "",
    estimatedDelivery: "2024-03-14",
  },
  {
    id: "ORD-2024-001232",
    client: {
      id: 3,
      name: "Maria Silva",
      email: "maria@example.com",
      phone: "+355 69 345 6789",
      avatar: "/avatars/maria.jpg",
    },
    products: [
      { id: 4, name: "Manuka MGO 850+ 250g", quantity: 1, price: 150.0, image: "/products/manuka-850.jpg" },
      { id: 5, name: "Vitamin C", quantity: 2, price: 15.0, image: "/products/vitamin-c.jpg" },
    ],
    subtotal: 180.0,
    shipping: 15.0,
    tax: 19.5,
    total: 214.5,
    status: "delivered",
    paymentStatus: "paid",
    paymentMethod: "Bank Transfer",
    date: "2024-03-10T09:15:00Z",
    trackingCode: "TRK123456788",
    shippingAddress: {
      street: "789 Pine St",
      city: "Vlore",
      country: "Albania",
      postalCode: "9401",
    },
    notes: "Bulk order for family",
    estimatedDelivery: "2024-03-13",
  },
  {
    id: "ORD-2024-001231",
    client: {
      id: 4,
      name: "David Wilson",
      email: "david@example.com",
      phone: "+355 69 456 7890",
      avatar: "/avatars/david.jpg",
    },
    products: [{ id: 6, name: "Kolagjen", quantity: 1, price: 45.0, image: "/products/collagen.jpg" }],
    subtotal: 45.0,
    shipping: 5.0,
    tax: 5.0,
    total: 55.0,
    status: "cancelled",
    paymentStatus: "refunded",
    paymentMethod: "Credit Card",
    date: "2024-03-09T16:45:00Z",
    trackingCode: "",
    shippingAddress: {
      street: "321 Elm St",
      city: "Shkoder",
      country: "Albania",
      postalCode: "4001",
    },
    notes: "Customer requested cancellation",
    estimatedDelivery: "",
  },
]

const statusColors = {
  pending: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
  processing: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  shipped: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
  delivered: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  cancelled: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
}

const paymentStatusColors = {
  paid: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  pending: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
  failed: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
  refunded: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300",
}

const statusIcons = {
  pending: Clock,
  processing: RefreshCw,
  shipped: Truck,
  delivered: CheckCircle,
  cancelled: XCircle,
}

export default function OrdersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [paymentFilter, setPaymentFilter] = useState("all")
  const [selectedOrder, setSelectedOrder] = useState<any>(null)
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.client.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || order.status === statusFilter
    const matchesPayment = paymentFilter === "all" || order.paymentStatus === paymentFilter
    return matchesSearch && matchesStatus && matchesPayment
  })

  const handleViewOrder = (order: any) => {
    setSelectedOrder(order)
    setIsViewDialogOpen(true)
  }

  const handleEditOrder = (order: any) => {
    setSelectedOrder(order)
    setIsEditDialogOpen(true)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Orders</h1>
          <p className="text-muted-foreground">Manage and track all customer orders</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button variant="outline">
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Order Management</CardTitle>
          <CardDescription>Search, filter, and manage customer orders</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search orders by ID, client, or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Order Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="processing">Processing</SelectItem>
                <SelectItem value="shipped">Shipped</SelectItem>
                <SelectItem value="delivered">Delivered</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
            <Select value={paymentFilter} onValueChange={setPaymentFilter}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Payment Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Payments</SelectItem>
                <SelectItem value="paid">Paid</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
                <SelectItem value="refunded">Refunded</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Calendar className="mr-2 h-4 w-4" />
              Date Range
            </Button>
          </div>

          {/* Orders Table */}
          <div className="mt-6 rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>Products</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Payment</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="w-[70px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredOrders.map((order) => {
                  const StatusIcon = statusIcons[order.status as keyof typeof statusIcons]
                  return (
                    <TableRow key={order.id}>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="font-medium">{order.id}</div>
                          {order.trackingCode && (
                            <div className="text-xs text-muted-foreground font-mono">{order.trackingCode}</div>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={order.client.avatar || "/placeholder.svg"} alt={order.client.name} />
                            <AvatarFallback>
                              {order.client.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{order.client.name}</div>
                            <div className="text-sm text-muted-foreground">{order.client.email}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          {order.products.slice(0, 2).map((product, index) => (
                            <div key={index} className="text-sm">
                              {product.quantity}x {product.name}
                            </div>
                          ))}
                          {order.products.length > 2 && (
                            <div className="text-xs text-muted-foreground">+{order.products.length - 2} more</div>
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">€{order.total.toFixed(2)}</TableCell>
                      <TableCell>
                        <Badge className={statusColors[order.status as keyof typeof statusColors]}>
                          <StatusIcon className="mr-1 h-3 w-3" />
                          {order.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge className={paymentStatusColors[order.paymentStatus as keyof typeof paymentStatusColors]}>
                          {order.paymentStatus}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">{formatDate(order.date)}</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem onClick={() => handleViewOrder(order)}>
                              <Eye className="mr-2 h-4 w-4" />
                              View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleEditOrder(order)}>
                              <Edit className="mr-2 h-4 w-4" />
                              Update Status
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Printer className="mr-2 h-4 w-4" />
                              Print Invoice
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              <Package className="mr-2 h-4 w-4" />
                              Add Tracking
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <RefreshCw className="mr-2 h-4 w-4" />
                              Process Refund
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* View Order Dialog */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Order Details</DialogTitle>
            <DialogDescription>Complete information about order {selectedOrder?.id}</DialogDescription>
          </DialogHeader>
          {selectedOrder && (
            <Tabs defaultValue="overview" className="w-full">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="products">Products</TabsTrigger>
                <TabsTrigger value="shipping">Shipping</TabsTrigger>
                <TabsTrigger value="payment">Payment</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Order Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label className="text-sm font-medium">Order ID</Label>
                          <p className="text-sm font-mono">{selectedOrder.id}</p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium">Date</Label>
                          <p className="text-sm">{formatDate(selectedOrder.date)}</p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium">Status</Label>
                          <Badge className={statusColors[selectedOrder.status as keyof typeof statusColors]}>
                            {selectedOrder.status}
                          </Badge>
                        </div>
                        <div>
                          <Label className="text-sm font-medium">Payment Status</Label>
                          <Badge
                            className={
                              paymentStatusColors[selectedOrder.paymentStatus as keyof typeof paymentStatusColors]
                            }
                          >
                            {selectedOrder.paymentStatus}
                          </Badge>
                        </div>
                      </div>
                      {selectedOrder.trackingCode && (
                        <div>
                          <Label className="text-sm font-medium">Tracking Code</Label>
                          <p className="text-sm font-mono">{selectedOrder.trackingCode}</p>
                        </div>
                      )}
                      {selectedOrder.notes && (
                        <div>
                          <Label className="text-sm font-medium">Notes</Label>
                          <p className="text-sm">{selectedOrder.notes}</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Customer Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-12 w-12">
                          <AvatarImage
                            src={selectedOrder.client.avatar || "/placeholder.svg"}
                            alt={selectedOrder.client.name}
                          />
                          <AvatarFallback>
                            {selectedOrder.client.name
                              .split(" ")
                              .map((n: string) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{selectedOrder.client.name}</div>
                          <div className="text-sm text-muted-foreground">ID: {selectedOrder.client.id}</div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{selectedOrder.client.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{selectedOrder.client.phone}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>€{selectedOrder.subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Shipping</span>
                        <span>€{selectedOrder.shipping.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tax</span>
                        <span>€{selectedOrder.tax.toFixed(2)}</span>
                      </div>
                      <div className="border-t pt-4">
                        <div className="flex justify-between font-medium">
                          <span>Total</span>
                          <span>€{selectedOrder.total.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="products">
                <Card>
                  <CardHeader>
                    <CardTitle>Order Items</CardTitle>
                    <CardDescription>Products included in this order</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {selectedOrder.products.map((product: any, index: number) => (
                        <div key={index} className="flex items-center gap-4 p-4 border rounded-lg">
                          <div className="h-16 w-16 rounded-md bg-gray-100 flex items-center justify-center">
                            <Package className="h-8 w-8 text-gray-400" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium">{product.name}</h4>
                            <p className="text-sm text-muted-foreground">Quantity: {product.quantity}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">€{(product.price * product.quantity).toFixed(2)}</p>
                            <p className="text-sm text-muted-foreground">€{product.price.toFixed(2)} each</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="shipping">
                <Card>
                  <CardHeader>
                    <CardTitle>Shipping Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label className="text-sm font-medium">Shipping Address</Label>
                      <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-900 rounded-md">
                        <div className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                          <div className="text-sm">
                            <p>{selectedOrder.shippingAddress.street}</p>
                            <p>
                              {selectedOrder.shippingAddress.city}, {selectedOrder.shippingAddress.postalCode}
                            </p>
                            <p>{selectedOrder.shippingAddress.country}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {selectedOrder.estimatedDelivery && (
                      <div>
                        <Label className="text-sm font-medium">Estimated Delivery</Label>
                        <p className="text-sm">{selectedOrder.estimatedDelivery}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="payment">
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label className="text-sm font-medium">Payment Method</Label>
                        <p className="text-sm">{selectedOrder.paymentMethod}</p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium">Payment Status</Label>
                        <Badge
                          className={
                            paymentStatusColors[selectedOrder.paymentStatus as keyof typeof paymentStatusColors]
                          }
                        >
                          {selectedOrder.paymentStatus}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          )}
        </DialogContent>
      </Dialog>

      {/* Edit Order Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Update Order</DialogTitle>
            <DialogDescription>Update order status and tracking information</DialogDescription>
          </DialogHeader>
          {selectedOrder && (
            <div className="grid gap-4">
              <div>
                <Label htmlFor="status">Order Status</Label>
                <Select defaultValue={selectedOrder.status}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="processing">Processing</SelectItem>
                    <SelectItem value="shipped">Shipped</SelectItem>
                    <SelectItem value="delivered">Delivered</SelectItem>
                    <SelectItem value="cancelled">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="tracking">Tracking Code</Label>
                <Input id="tracking" defaultValue={selectedOrder.trackingCode} placeholder="Enter tracking code" />
              </div>
              <div>
                <Label htmlFor="notes">Internal Notes</Label>
                <Textarea id="notes" defaultValue={selectedOrder.notes} placeholder="Add internal notes" rows={3} />
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                  Cancel
                </Button>
                <Button>Update Order</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
