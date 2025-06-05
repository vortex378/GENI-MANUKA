"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
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
import {
  Search,
  MoreHorizontal,
  Eye,
  Edit,
  Trash2,
  Plus,
  Upload,
  Download,
  Copy,
  BarChart3,
  Package,
  DollarSign,
  TrendingUp,
  AlertTriangle,
} from "lucide-react"
import Image from "next/image"

// Mock data
const products = [
  {
    id: 1,
    name: "Manuka MGO 400+ 250g",
    sku: "MAN-400-250",
    category: "Manuka Honey",
    price: 65.0,
    comparePrice: 75.0,
    cost: 35.0,
    stock: 25,
    lowStockThreshold: 10,
    status: "active",
    visibility: true,
    images: ["https://manukahealth.shop/cdn/shop/products/mh-honey-mgo400_-500g-front-de.jpg?v=1717255689"],
    description: "Premium Manuka honey with MGO 400+ rating for daily wellness support",
    shortDescription: "Premium MGO 400+ Manuka honey",
    weight: 250,
    dimensions: { length: 10, width: 10, height: 12 },
    tags: ["premium", "manuka", "mgo400"],
    seoTitle: "Manuka MGO 400+ 250g - Premium New Zealand Honey",
    seoDescription: "Authentic Manuka honey with MGO 400+ rating from New Zealand",
    variants: [
      { id: 1, name: "250g", price: 65.0, stock: 25, sku: "MAN-400-250" },
      { id: 2, name: "500g", price: 120.0, stock: 15, sku: "MAN-400-500" },
    ],
    sales: 245,
    revenue: 15925,
    createdAt: "2024-01-15",
    updatedAt: "2024-03-10",
  },
  {
    id: 2,
    name: "Spirulina Premium 100g",
    sku: "SPI-PREM-100",
    category: "Supplements",
    price: 25.0,
    comparePrice: 30.0,
    cost: 12.0,
    stock: 50,
    lowStockThreshold: 20,
    status: "active",
    visibility: true,
    images: ["https://us-i.makeupstore.com/j/j2/j2izpwefxtxp.jpg"],
    description: "Organic spirulina powder supplement rich in protein and nutrients",
    shortDescription: "Organic spirulina powder",
    weight: 100,
    dimensions: { length: 8, width: 8, height: 10 },
    tags: ["organic", "spirulina", "supplement"],
    seoTitle: "Organic Spirulina Premium 100g - Superfood Supplement",
    seoDescription: "High-quality organic spirulina powder packed with nutrients",
    variants: [
      { id: 3, name: "100g", price: 25.0, stock: 50, sku: "SPI-PREM-100" },
      { id: 4, name: "250g", price: 55.0, stock: 30, sku: "SPI-PREM-250" },
    ],
    sales: 189,
    revenue: 4725,
    createdAt: "2024-02-01",
    updatedAt: "2024-03-08",
  },
]

const categories = [
  { id: 1, name: "Manuka Honey", slug: "manuka-honey", productCount: 12 },
  { id: 2, name: "Supplements", slug: "supplements", productCount: 8 },
  { id: 3, name: "Health Products", slug: "health-products", productCount: 5 },
  { id: 4, name: "Skincare", slug: "skincare", productCount: 3 },
]

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("products")

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === "all" || product.category === categoryFilter
    const matchesStatus = statusFilter === "all" || product.status === statusFilter
    return matchesSearch && matchesCategory && matchesStatus
  })

  const handleViewProduct = (product: any) => {
    setSelectedProduct(product)
    setIsViewDialogOpen(true)
  }

  const handleEditProduct = (product: any) => {
    setSelectedProduct(product)
    setIsEditDialogOpen(true)
  }

  const getStockStatus = (stock: number, threshold: number) => {
    if (stock === 0)
      return { label: "Out of Stock", color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300" }
    if (stock <= threshold)
      return { label: "Low Stock", color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300" }
    return { label: "In Stock", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Products</h1>
          <p className="text-muted-foreground">Manage your product catalog and inventory</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button variant="outline">
            <Upload className="mr-2 h-4 w-4" />
            Import
          </Button>
          <Button onClick={() => setIsAddDialogOpen(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Add Product
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="products" className="space-y-6">
          {/* Filters */}
          <Card>
            <CardHeader>
              <CardTitle>Product Management</CardTitle>
              <CardDescription>Search, filter, and manage your product inventory</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4 md:flex-row">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search products by name or SKU..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={category.name}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="archived">Archived</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Products Table */}
              <div className="mt-6 rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Product</TableHead>
                      <TableHead>SKU</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Stock</TableHead>
                      <TableHead>Sales</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="w-[70px]"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredProducts.map((product) => {
                      const stockStatus = getStockStatus(product.stock, product.lowStockThreshold)
                      return (
                        <TableRow key={product.id}>
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <div className="relative h-12 w-12 rounded-md overflow-hidden bg-gray-100">
                                <Image
                                  src={product.images[0] || "/placeholder.svg"}
                                  alt={product.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div>
                                <div className="font-medium">{product.name}</div>
                                <div className="text-sm text-muted-foreground truncate max-w-[200px]">
                                  {product.shortDescription}
                                </div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell className="font-mono text-sm">{product.sku}</TableCell>
                          <TableCell>{product.category}</TableCell>
                          <TableCell>
                            <div className="space-y-1">
                              <div className="font-medium">€{product.price.toFixed(2)}</div>
                              {product.comparePrice > product.price && (
                                <div className="text-sm text-muted-foreground line-through">
                                  €{product.comparePrice.toFixed(2)}
                                </div>
                              )}
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge className={stockStatus.color}>{product.stock} units</Badge>
                            {product.stock <= product.lowStockThreshold && (
                              <AlertTriangle className="inline h-4 w-4 text-yellow-500 ml-1" />
                            )}
                          </TableCell>
                          <TableCell>
                            <div className="space-y-1">
                              <div className="font-medium">{product.sales} sold</div>
                              <div className="text-sm text-muted-foreground">€{product.revenue.toLocaleString()}</div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Badge variant={product.status === "active" ? "default" : "secondary"}>
                                {product.status}
                              </Badge>
                              {!product.visibility && (
                                <Badge variant="outline" className="text-xs">
                                  Hidden
                                </Badge>
                              )}
                            </div>
                          </TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="h-8 w-8 p-0">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuItem onClick={() => handleViewProduct(product)}>
                                  <Eye className="mr-2 h-4 w-4" />
                                  View Details
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => handleEditProduct(product)}>
                                  <Edit className="mr-2 h-4 w-4" />
                                  Edit Product
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Copy className="mr-2 h-4 w-4" />
                                  Duplicate
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <BarChart3 className="mr-2 h-4 w-4" />
                                  View Analytics
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-red-600">
                                  <Trash2 className="mr-2 h-4 w-4" />
                                  Delete Product
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
        </TabsContent>

        <TabsContent value="categories" className="space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Product Categories</CardTitle>
                <CardDescription>Organize your products into categories</CardDescription>
              </div>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Category
              </Button>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {categories.map((category) => (
                  <Card key={category.id}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold">{category.name}</h3>
                          <p className="text-sm text-muted-foreground">{category.productCount} products</p>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuItem>
                              <Edit className="mr-2 h-4 w-4" />
                              Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              <Trash2 className="mr-2 h-4 w-4" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Products</CardTitle>
                <Package className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{products.length}</div>
                <p className="text-xs text-muted-foreground">
                  <TrendingUp className="inline h-3 w-3 mr-1" />
                  +2 from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  €{products.reduce((sum, p) => sum + p.revenue, 0).toLocaleString()}
                </div>
                <p className="text-xs text-muted-foreground">
                  <TrendingUp className="inline h-3 w-3 mr-1" />
                  +12% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Low Stock Items</CardTitle>
                <AlertTriangle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {products.filter((p) => p.stock <= p.lowStockThreshold).length}
                </div>
                <p className="text-xs text-muted-foreground">Require attention</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Products</CardTitle>
                <Package className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{products.filter((p) => p.status === "active").length}</div>
                <p className="text-xs text-muted-foreground">Currently visible</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* View Product Dialog */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Product Details</DialogTitle>
            <DialogDescription>Complete information about {selectedProduct?.name}</DialogDescription>
          </DialogHeader>
          {selectedProduct && (
            <Tabs defaultValue="overview" className="w-full">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="variants">Variants</TabsTrigger>
                <TabsTrigger value="seo">SEO</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Product Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="relative h-48 w-full rounded-lg overflow-hidden bg-gray-100">
                        <Image
                          src={selectedProduct.images[0] || "/placeholder.svg"}
                          alt={selectedProduct.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{selectedProduct.name}</h3>
                        <p className="text-sm text-muted-foreground">{selectedProduct.description}</p>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <Label>SKU</Label>
                          <p className="font-mono">{selectedProduct.sku}</p>
                        </div>
                        <div>
                          <Label>Category</Label>
                          <p>{selectedProduct.category}</p>
                        </div>
                        <div>
                          <Label>Price</Label>
                          <p className="font-medium">€{selectedProduct.price.toFixed(2)}</p>
                        </div>
                        <div>
                          <Label>Stock</Label>
                          <p>{selectedProduct.stock} units</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Sales Performance</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label>Total Sales</Label>
                          <p className="text-2xl font-bold">{selectedProduct.sales}</p>
                        </div>
                        <div>
                          <Label>Revenue</Label>
                          <p className="text-2xl font-bold">€{selectedProduct.revenue.toLocaleString()}</p>
                        </div>
                        <div>
                          <Label>Profit Margin</Label>
                          <p className="text-lg font-semibold">
                            {(((selectedProduct.price - selectedProduct.cost) / selectedProduct.price) * 100).toFixed(
                              1,
                            )}
                            %
                          </p>
                        </div>
                        <div>
                          <Label>Status</Label>
                          <Badge variant={selectedProduct.status === "active" ? "default" : "secondary"}>
                            {selectedProduct.status}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="variants">
                <Card>
                  <CardHeader>
                    <CardTitle>Product Variants</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {selectedProduct.variants?.map((variant: any) => (
                        <div key={variant.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <h4 className="font-medium">{variant.name}</h4>
                            <p className="text-sm text-muted-foreground">SKU: {variant.sku}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">€{variant.price.toFixed(2)}</p>
                            <p className="text-sm text-muted-foreground">{variant.stock} in stock</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="seo">
                <Card>
                  <CardHeader>
                    <CardTitle>SEO Settings</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label>SEO Title</Label>
                      <p className="text-sm">{selectedProduct.seoTitle}</p>
                    </div>
                    <div>
                      <Label>SEO Description</Label>
                      <p className="text-sm">{selectedProduct.seoDescription}</p>
                    </div>
                    <div>
                      <Label>Tags</Label>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {selectedProduct.tags?.map((tag: string) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          )}
        </DialogContent>
      </Dialog>

      {/* Add/Edit Product Dialog */}
      <Dialog
        open={isEditDialogOpen || isAddDialogOpen}
        onOpenChange={(open) => {
          setIsEditDialogOpen(open)
          setIsAddDialogOpen(open)
        }}
      >
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>{isAddDialogOpen ? "Add New Product" : "Edit Product"}</DialogTitle>
            <DialogDescription>
              {isAddDialogOpen ? "Create a new product in your catalog" : "Update product information"}
            </DialogDescription>
          </DialogHeader>
          <Tabs defaultValue="basic" className="w-full">
            <TabsList>
              <TabsTrigger value="basic">Basic Info</TabsTrigger>
              <TabsTrigger value="pricing">Pricing</TabsTrigger>
              <TabsTrigger value="inventory">Inventory</TabsTrigger>
              <TabsTrigger value="seo">SEO</TabsTrigger>
            </TabsList>
            <TabsContent value="basic" className="space-y-6">
              <div className="grid gap-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Product Name</Label>
                    <Input id="name" defaultValue={selectedProduct?.name} placeholder="Enter product name" />
                  </div>
                  <div>
                    <Label htmlFor="sku">SKU</Label>
                    <Input id="sku" defaultValue={selectedProduct?.sku} placeholder="Enter SKU" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select defaultValue={selectedProduct?.category}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.id} value={category.name}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    defaultValue={selectedProduct?.description}
                    placeholder="Enter product description"
                    rows={4}
                  />
                </div>
                <div>
                  <Label htmlFor="shortDescription">Short Description</Label>
                  <Input
                    id="shortDescription"
                    defaultValue={selectedProduct?.shortDescription}
                    placeholder="Brief product description"
                  />
                </div>
                <div>
                  <Label htmlFor="images">Product Images</Label>
                  <div className="mt-2 flex items-center gap-4">
                    <Button variant="outline">
                      <Upload className="mr-2 h-4 w-4" />
                      Upload Images
                    </Button>
                    <span className="text-sm text-muted-foreground">JPG, PNG up to 5MB each</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="active" defaultChecked={selectedProduct?.status === "active"} />
                  <Label htmlFor="active">Product is active</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="visible" defaultChecked={selectedProduct?.visibility} />
                  <Label htmlFor="visible">Visible in store</Label>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="pricing" className="space-y-6">
              <div className="grid gap-6">
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="price">Price</Label>
                    <Input
                      id="price"
                      type="number"
                      step="0.01"
                      defaultValue={selectedProduct?.price}
                      placeholder="0.00"
                    />
                  </div>
                  <div>
                    <Label htmlFor="comparePrice">Compare Price</Label>
                    <Input
                      id="comparePrice"
                      type="number"
                      step="0.01"
                      defaultValue={selectedProduct?.comparePrice}
                      placeholder="0.00"
                    />
                  </div>
                  <div>
                    <Label htmlFor="cost">Cost per Item</Label>
                    <Input
                      id="cost"
                      type="number"
                      step="0.01"
                      defaultValue={selectedProduct?.cost}
                      placeholder="0.00"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="weight">Weight (g)</Label>
                    <Input id="weight" type="number" defaultValue={selectedProduct?.weight} placeholder="0" />
                  </div>
                  <div>
                    <Label htmlFor="taxable">Tax Settings</Label>
                    <Select defaultValue="taxable">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="taxable">Taxable</SelectItem>
                        <SelectItem value="exempt">Tax Exempt</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="inventory" className="space-y-6">
              <div className="grid gap-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="stock">Stock Quantity</Label>
                    <Input id="stock" type="number" defaultValue={selectedProduct?.stock} placeholder="0" />
                  </div>
                  <div>
                    <Label htmlFor="lowStockThreshold">Low Stock Threshold</Label>
                    <Input
                      id="lowStockThreshold"
                      type="number"
                      defaultValue={selectedProduct?.lowStockThreshold}
                      placeholder="10"
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="trackQuantity" defaultChecked />
                  <Label htmlFor="trackQuantity">Track quantity</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="allowBackorders" />
                  <Label htmlFor="allowBackorders">Allow backorders</Label>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="seo" className="space-y-6">
              <div className="grid gap-6">
                <div>
                  <Label htmlFor="seoTitle">SEO Title</Label>
                  <Input id="seoTitle" defaultValue={selectedProduct?.seoTitle} placeholder="SEO optimized title" />
                  <div className="text-xs text-muted-foreground mt-1">
                    {selectedProduct?.seoTitle?.length || 0}/60 characters
                  </div>
                </div>
                <div>
                  <Label htmlFor="seoDescription">SEO Description</Label>
                  <Textarea
                    id="seoDescription"
                    defaultValue={selectedProduct?.seoDescription}
                    placeholder="SEO meta description"
                    rows={3}
                  />
                  <div className="text-xs text-muted-foreground mt-1">
                    {selectedProduct?.seoDescription?.length || 0}/160 characters
                  </div>
                </div>
                <div>
                  <Label htmlFor="tags">Tags</Label>
                  <Input id="tags" defaultValue={selectedProduct?.tags?.join(", ")} placeholder="tag1, tag2, tag3" />
                </div>
              </div>
            </TabsContent>
          </Tabs>
          <div className="flex justify-end gap-2 pt-6">
            <Button
              variant="outline"
              onClick={() => {
                setIsEditDialogOpen(false)
                setIsAddDialogOpen(false)
              }}
            >
              Cancel
            </Button>
            <Button>{isAddDialogOpen ? "Add Product" : "Save Changes"}</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
