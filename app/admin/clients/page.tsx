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
  Trash2,
  UserPlus,
  Download,
  Mail,
  Phone,
  MapPin,
  DollarSign,
  ShoppingCart,
  Ban,
  UserCheck,
} from "lucide-react"

// Mock data
const clients = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phone: "+355 69 123 4567",
    avatar: "/avatars/john.jpg",
    orders: 12,
    totalSpent: 1245.5,
    registrationDate: "2024-01-15",
    lastOrder: "2024-03-10",
    status: "active",
    tags: ["VIP", "Loyal"],
    address: "123 Main St, Tirana, Albania",
    notes: "Prefers Manuka honey products",
    averageOrderValue: 103.79,
    lifetimeValue: 1245.5,
    acquisitionSource: "Google Ads",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "+355 69 234 5678",
    avatar: "/avatars/jane.jpg",
    orders: 8,
    totalSpent: 890.0,
    registrationDate: "2024-02-20",
    lastOrder: "2024-03-08",
    status: "active",
    tags: ["Regular"],
    address: "456 Oak Ave, Durres, Albania",
    notes: "Interested in supplements",
    averageOrderValue: 111.25,
    lifetimeValue: 890.0,
    acquisitionSource: "Organic Search",
  },
  {
    id: 3,
    name: "Maria Silva",
    email: "maria@example.com",
    phone: "+355 69 345 6789",
    avatar: "/avatars/maria.jpg",
    orders: 15,
    totalSpent: 2100.0,
    registrationDate: "2023-12-05",
    lastOrder: "2024-03-12",
    status: "active",
    tags: ["VIP", "Bulk Buyer"],
    address: "789 Pine St, Vlore, Albania",
    notes: "Bulk orders for family",
    averageOrderValue: 140.0,
    lifetimeValue: 2100.0,
    acquisitionSource: "Referral",
  },
  {
    id: 4,
    name: "David Wilson",
    email: "david@example.com",
    phone: "+355 69 456 7890",
    avatar: "/avatars/david.jpg",
    orders: 3,
    totalSpent: 320.0,
    registrationDate: "2024-03-01",
    lastOrder: "2024-03-05",
    status: "banned",
    tags: ["Problematic"],
    address: "321 Elm St, Shkoder, Albania",
    notes: "Multiple chargebacks",
    averageOrderValue: 106.67,
    lifetimeValue: 320.0,
    acquisitionSource: "Social Media",
  },
]

const clientTags = ["VIP", "Loyal", "Regular", "New", "Bulk Buyer", "Problematic"]
const statusOptions = ["active", "inactive", "banned"]

export default function ClientsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [tagFilter, setTagFilter] = useState("all")
  const [selectedClient, setSelectedClient] = useState<any>(null)
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)

  const filteredClients = clients.filter((client) => {
    const matchesSearch =
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || client.status === statusFilter
    const matchesTag = tagFilter === "all" || client.tags.includes(tagFilter)
    return matchesSearch && matchesStatus && matchesTag
  })

  const handleViewClient = (client: any) => {
    setSelectedClient(client)
    setIsViewDialogOpen(true)
  }

  const handleEditClient = (client: any) => {
    setSelectedClient(client)
    setIsEditDialogOpen(true)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "inactive":
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
      case "banned":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Clients</h1>
          <p className="text-muted-foreground">Manage your customer database and relationships</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button onClick={() => setIsAddDialogOpen(true)}>
            <UserPlus className="mr-2 h-4 w-4" />
            Add Client
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Client Management</CardTitle>
          <CardDescription>Search, filter, and manage your client database</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search clients by name or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
                <SelectItem value="banned">Banned</SelectItem>
              </SelectContent>
            </Select>
            <Select value={tagFilter} onValueChange={setTagFilter}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Tags" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Tags</SelectItem>
                {clientTags.map((tag) => (
                  <SelectItem key={tag} value={tag}>
                    {tag}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Clients Table */}
          <div className="mt-6 rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Client</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Orders</TableHead>
                  <TableHead>Total Spent</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Tags</TableHead>
                  <TableHead>Last Order</TableHead>
                  <TableHead className="w-[70px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredClients.map((client) => (
                  <TableRow key={client.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={client.avatar || "/placeholder.svg"} alt={client.name} />
                          <AvatarFallback>
                            {client.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{client.name}</div>
                          <div className="text-sm text-muted-foreground">ID: {client.id}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="text-sm">{client.email}</div>
                        <div className="text-sm text-muted-foreground">{client.phone}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <ShoppingCart className="h-4 w-4 text-muted-foreground" />
                        {client.orders}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <DollarSign className="h-4 w-4 text-muted-foreground" />€{client.totalSpent.toFixed(2)}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(client.status)}>{client.status}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {client.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">{client.lastOrder}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem onClick={() => handleViewClient(client)}>
                            <Eye className="mr-2 h-4 w-4" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleEditClient(client)}>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit Client
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Mail className="mr-2 h-4 w-4" />
                            Send Email
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          {client.status === "banned" ? (
                            <DropdownMenuItem>
                              <UserCheck className="mr-2 h-4 w-4" />
                              Unban Client
                            </DropdownMenuItem>
                          ) : (
                            <DropdownMenuItem className="text-red-600">
                              <Ban className="mr-2 h-4 w-4" />
                              Ban Client
                            </DropdownMenuItem>
                          )}
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete Client
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* View Client Dialog */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Client Details</DialogTitle>
            <DialogDescription>Complete information about the selected client</DialogDescription>
          </DialogHeader>
          {selectedClient && (
            <Tabs defaultValue="overview" className="w-full">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="orders">Orders</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={selectedClient.avatar || "/placeholder.svg"} alt={selectedClient.name} />
                          <AvatarFallback>
                            {selectedClient.name
                              .split(" ")
                              .map((n: string) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="text-lg font-semibold">{selectedClient.name}</div>
                          <div className="text-sm text-muted-foreground">Client ID: {selectedClient.id}</div>
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid gap-2">
                        <Label className="text-sm font-medium">Contact Information</Label>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{selectedClient.email}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{selectedClient.phone}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{selectedClient.address}</span>
                          </div>
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <Label className="text-sm font-medium">Status & Tags</Label>
                        <div className="flex flex-wrap gap-2">
                          <Badge className={getStatusColor(selectedClient.status)}>{selectedClient.status}</Badge>
                          {selectedClient.tags.map((tag: string) => (
                            <Badge key={tag} variant="outline">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Purchase Statistics</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label className="text-sm font-medium">Total Orders</Label>
                          <p className="text-2xl font-bold">{selectedClient.orders}</p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium">Total Spent</Label>
                          <p className="text-2xl font-bold">€{selectedClient.totalSpent.toFixed(2)}</p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium">Average Order</Label>
                          <p className="text-lg font-semibold">€{selectedClient.averageOrderValue.toFixed(2)}</p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium">Lifetime Value</Label>
                          <p className="text-lg font-semibold">€{selectedClient.lifetimeValue.toFixed(2)}</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Registration Date</span>
                          <span>{selectedClient.registrationDate}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Last Order</span>
                          <span>{selectedClient.lastOrder}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Acquisition Source</span>
                          <span>{selectedClient.acquisitionSource}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {selectedClient.notes && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Notes</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">{selectedClient.notes}</p>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
              <TabsContent value="orders">
                <Card>
                  <CardHeader>
                    <CardTitle>Order History</CardTitle>
                    <CardDescription>All orders placed by this client</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Order history would be displayed here...</p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="activity">
                <Card>
                  <CardHeader>
                    <CardTitle>Activity Log</CardTitle>
                    <CardDescription>Recent client activity and interactions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Activity log would be displayed here...</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          )}
        </DialogContent>
      </Dialog>

      {/* Add/Edit Client Dialog */}
      <Dialog
        open={isEditDialogOpen || isAddDialogOpen}
        onOpenChange={(open) => {
          setIsEditDialogOpen(open)
          setIsAddDialogOpen(open)
        }}
      >
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{isAddDialogOpen ? "Add New Client" : "Edit Client"}</DialogTitle>
            <DialogDescription>
              {isAddDialogOpen ? "Create a new client account" : "Update client information"}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" defaultValue={selectedClient?.name} placeholder="Enter full name" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue={selectedClient?.email} placeholder="Enter email" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" defaultValue={selectedClient?.phone} placeholder="Enter phone number" />
              </div>
              <div>
                <Label htmlFor="status">Status</Label>
                <Select defaultValue={selectedClient?.status}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    {statusOptions.map((status) => (
                      <SelectItem key={status} value={status}>
                        {status}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <Label htmlFor="address">Address</Label>
              <Input id="address" defaultValue={selectedClient?.address} placeholder="Enter address" />
            </div>
            <div>
              <Label htmlFor="notes">Notes</Label>
              <Textarea
                id="notes"
                defaultValue={selectedClient?.notes}
                placeholder="Add notes about this client"
                rows={3}
              />
            </div>
            <div className="flex justify-end gap-2">
              <Button
                variant="outline"
                onClick={() => {
                  setIsEditDialogOpen(false)
                  setIsAddDialogOpen(false)
                }}
              >
                Cancel
              </Button>
              <Button>{isAddDialogOpen ? "Add Client" : "Save Changes"}</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
