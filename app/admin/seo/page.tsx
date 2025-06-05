"use client"

// Force this page to be dynamic
export const dynamic = "force-dynamic"

import { useState } from "react"
import { DashboardLayout } from "@/components/admin/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, RefreshCw } from "lucide-react"

// Mock data
const pages = [
  {
    id: 1,
    path: "/",
    title: "Manuka Bio Organik - Premium Manuka Honey from New Zealand",
    description:
      "Discover authentic Manuka honey from New Zealand. Premium quality MGO certified honey for health and wellness.",
    keywords: "manuka honey, mgo, new zealand, health, wellness",
    lastUpdated: "2024-03-12",
  },
  {
    id: 2,
    path: "/manukat",
    title: "Premium Manuka Honey Collection | Manuka Bio Organik",
    description:
      "Browse our collection of premium Manuka honey with various MGO ratings from trusted New Zealand brands.",
    keywords: "manuka collection, mgo 400, mgo 550, premium honey",
    lastUpdated: "2024-03-10",
  },
  {
    id: 3,
    path: "/products",
    title: "Health Supplements & Natural Products | Manuka Bio Organik",
    description: "Explore our range of natural health supplements including spirulina, collagen, and vitamin C.",
    keywords: "supplements, spirulina, collagen, vitamin c, health products",
    lastUpdated: "2024-03-08",
  },
]

export default function SEOPage() {
  const [selectedPage, setSelectedPage] = useState<any>(pages[0])

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">SEO Settings</h1>
          <p className="text-muted-foreground">Manage your website's search engine optimization</p>
        </div>

        <Tabs defaultValue="pages" className="space-y-6">
          <TabsList>
            <TabsTrigger value="pages">Page SEO</TabsTrigger>
            <TabsTrigger value="global">Global Settings</TabsTrigger>
            <TabsTrigger value="schema">Schema Markup</TabsTrigger>
            <TabsTrigger value="sitemap">Sitemap</TabsTrigger>
          </TabsList>

          <TabsContent value="pages" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              {/* Pages List */}
              <Card>
                <CardHeader>
                  <CardTitle>Pages</CardTitle>
                  <CardDescription>Select a page to edit its SEO settings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {pages.map((page) => (
                      <div
                        key={page.id}
                        className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                          selectedPage?.id === page.id ? "bg-blue-50 border-blue-200" : "hover:bg-gray-50"
                        }`}
                        onClick={() => setSelectedPage(page)}
                      >
                        <div className="font-medium">{page.path}</div>
                        <div className="text-sm text-muted-foreground truncate">{page.title}</div>
                        <div className="text-xs text-muted-foreground">Updated: {page.lastUpdated}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Page SEO Editor */}
              <Card>
                <CardHeader>
                  <CardTitle>Edit SEO for {selectedPage?.path}</CardTitle>
                  <CardDescription>Update meta tags and SEO settings for this page</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="title">Meta Title</Label>
                    <Input id="title" defaultValue={selectedPage?.title} />
                    <div className="text-xs text-muted-foreground mt-1">
                      {selectedPage?.title?.length || 0}/60 characters
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="description">Meta Description</Label>
                    <Textarea id="description" defaultValue={selectedPage?.description} rows={3} />
                    <div className="text-xs text-muted-foreground mt-1">
                      {selectedPage?.description?.length || 0}/160 characters
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="keywords">Keywords</Label>
                    <Input
                      id="keywords"
                      defaultValue={selectedPage?.keywords}
                      placeholder="keyword1, keyword2, keyword3"
                    />
                  </div>
                  <div>
                    <Label htmlFor="canonical">Canonical URL</Label>
                    <Input id="canonical" placeholder="https://manuka-albania.com" />
                  </div>
                  <Button className="w-full">Save SEO Settings</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="global" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Global SEO Settings</CardTitle>
                <CardDescription>Configure site-wide SEO settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="site-title">Site Title</Label>
                    <Input id="site-title" defaultValue="Manuka Bio Organik" />
                  </div>
                  <div>
                    <Label htmlFor="site-tagline">Site Tagline</Label>
                    <Input id="site-tagline" defaultValue="Premium Manuka Honey from New Zealand" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="site-description">Site Description</Label>
                  <Textarea
                    id="site-description"
                    defaultValue="Discover authentic Manuka honey and natural health supplements from New Zealand. Premium quality products for health and wellness."
                    rows={3}
                  />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="google-analytics">Google Analytics ID</Label>
                    <Input id="google-analytics" placeholder="GA4-XXXXXXXXXX" />
                  </div>
                  <div>
                    <Label htmlFor="google-search-console">Google Search Console</Label>
                    <Input id="google-search-console" placeholder="Verification code" />
                  </div>
                </div>
                <Button>Save Global Settings</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sitemap" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Sitemap Management</CardTitle>
                <CardDescription>Generate and manage your website sitemap</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">XML Sitemap</h3>
                    <p className="text-sm text-muted-foreground">Last generated: March 12, 2024</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                    <Button>
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Regenerate
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
