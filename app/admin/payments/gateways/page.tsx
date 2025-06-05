"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  CreditCard,
  Settings,
  TestTube,
  Globe,
  Shield,
  Zap,
  Plus,
  AlertTriangle,
  CheckCircle,
  Clock,
} from "lucide-react"

// Mock data
const paymentGateways = [
  {
    id: 1,
    name: "Stripe",
    provider: "stripe",
    status: "active",
    mode: "live",
    enabled: true,
    priority: 1,
    fees: { fixed: 0.3, percentage: 2.9 },
    supportedMethods: ["card", "apple_pay", "google_pay"],
    currencies: ["EUR", "USD", "GBP"],
    countries: ["AL", "US", "GB", "DE"],
    config: {
      publishableKey: "pk_live_...",
      secretKey: "sk_live_...",
      webhookSecret: "whsec_...",
    },
    transactions: 1234,
    volume: 125430.5,
    successRate: 98.5,
    lastTransaction: "2024-03-12T14:30:00Z",
  },
  {
    id: 2,
    name: "PayPal",
    provider: "paypal",
    status: "active",
    mode: "live",
    enabled: true,
    priority: 2,
    fees: { fixed: 0.35, percentage: 3.4 },
    supportedMethods: ["paypal", "pay_later"],
    currencies: ["EUR", "USD"],
    countries: ["AL", "US", "GB"],
    config: {
      clientId: "AYiPC...",
      clientSecret: "EHZ...",
      webhookId: "WH-...",
    },
    transactions: 567,
    volume: 45230.75,
    successRate: 96.8,
    lastTransaction: "2024-03-12T12:15:00Z",
  },
  {
    id: 3,
    name: "PokPay",
    provider: "pokpay",
    status: "active",
    mode: "live",
    enabled: true,
    priority: 3,
    fees: { fixed: 0.25, percentage: 2.5 },
    supportedMethods: ["card", "bank_transfer"],
    currencies: ["EUR", "ALL"],
    countries: ["AL", "XK", "MK"],
    config: {
      merchantId: "d2169a71-5da9-4841-b67e-70dc8e2e144e",
      keyId: "ffe259a0-47e1-4df3-b771-d5e31dc6935a",
      secretKey: "eJCOQ354V/shVlfhNum58ck5OAE/aDta5MeaciZe",
    },
    transactions: 234,
    volume: 18450.25,
    successRate: 94.2,
    lastTransaction: "2024-03-12T10:45:00Z",
  },
  {
    id: 4,
    name: "NowPayments",
    provider: "nowpayments",
    status: "inactive",
    mode: "test",
    enabled: false,
    priority: 4,
    fees: { fixed: 0.0, percentage: 1.5 },
    supportedMethods: ["crypto"],
    currencies: ["BTC", "ETH", "USDT"],
    countries: ["Global"],
    config: {
      apiKey: "NPM_...",
      ipnSecret: "ipn_...",
    },
    transactions: 12,
    volume: 2340.0,
    successRate: 100.0,
    lastTransaction: "2024-03-10T16:20:00Z",
  },
]

const availableProviders = [
  { id: "stripe", name: "Stripe", icon: CreditCard, description: "Accept cards and digital wallets" },
  { id: "paypal", name: "PayPal", icon: Globe, description: "PayPal and Pay Later options" },
  { id: "pokpay", name: "PokPay", icon: Shield, description: "Local payment gateway for Balkans" },
  { id: "nowpayments", name: "NowPayments", icon: Zap, description: "Cryptocurrency payments" },
]

export default function PaymentGatewaysPage() {
  const [selectedGateway, setSelectedGateway] = useState<any>(null)
  const [isConfigDialogOpen, setIsConfigDialogOpen] = useState(false)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isTestDialogOpen, setIsTestDialogOpen] = useState(false)

  const handleConfigureGateway = (gateway: any) => {
    setSelectedGateway(gateway)
    setIsConfigDialogOpen(true)
  }

  const handleTestGateway = (gateway: any) => {
    setSelectedGateway(gateway)
    setIsTestDialogOpen(true)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "inactive":
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
      case "error":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  const getModeColor = (mode: string) => {
    return mode === "live"
      ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Payment Gateways</h1>
          <p className="text-muted-foreground">Configure and manage payment processing methods</p>
        </div>
        <Button onClick={() => setIsAddDialogOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Add Gateway
        </Button>
      </div>

      {/* Overview Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Gateways</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{paymentGateways.filter((g) => g.status === "active").length}</div>
            <p className="text-xs text-muted-foreground">{paymentGateways.filter((g) => g.enabled).length} enabled</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Volume</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              €{paymentGateways.reduce((sum, g) => sum + g.volume, 0).toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {(paymentGateways.reduce((sum, g) => sum + g.successRate, 0) / paymentGateways.length).toFixed(1)}%
            </div>
            <p className="text-xs text-muted-foreground">Average across all gateways</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Transactions</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {paymentGateways.reduce((sum, g) => sum + g.transactions, 0).toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>
      </div>

      {/* Gateways Table */}
      <Card>
        <CardHeader>
          <CardTitle>Payment Gateways</CardTitle>
          <CardDescription>Manage your payment processing providers</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Gateway</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Mode</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Transactions</TableHead>
                <TableHead>Success Rate</TableHead>
                <TableHead>Fees</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paymentGateways.map((gateway) => (
                <TableRow key={gateway.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-gray-100">
                        <CreditCard className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-medium">{gateway.name}</div>
                        <div className="text-sm text-muted-foreground">{gateway.supportedMethods.join(", ")}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Badge className={getStatusColor(gateway.status)}>{gateway.status}</Badge>
                      <Switch
                        checked={gateway.enabled}
                        onCheckedChange={(checked) => {
                          // Handle enable/disable
                        }}
                        size="sm"
                      />
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getModeColor(gateway.mode)}>{gateway.mode}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">#{gateway.priority}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="font-medium">{gateway.transactions.toLocaleString()}</div>
                      <div className="text-sm text-muted-foreground">€{gateway.volume.toLocaleString()}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="font-medium">{gateway.successRate}%</div>
                      {gateway.successRate >= 95 ? (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      ) : gateway.successRate >= 90 ? (
                        <Clock className="h-4 w-4 text-yellow-500" />
                      ) : (
                        <AlertTriangle className="h-4 w-4 text-red-500" />
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div>
                        {gateway.fees.percentage}% + €{gateway.fees.fixed}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" onClick={() => handleConfigureGateway(gateway)}>
                        <Settings className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => handleTestGateway(gateway)}>
                        <TestTube className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Add Gateway Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Add Payment Gateway</DialogTitle>
            <DialogDescription>Choose a payment provider to integrate</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            {availableProviders.map((provider) => (
              <Card key={provider.id} className="cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-900">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gray-100">
                      <provider.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{provider.name}</h3>
                      <p className="text-sm text-muted-foreground">{provider.description}</p>
                    </div>
                    <Button>Add</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* Configure Gateway Dialog */}
      <Dialog open={isConfigDialogOpen} onOpenChange={setIsConfigDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Configure {selectedGateway?.name}</DialogTitle>
            <DialogDescription>Update gateway settings and credentials</DialogDescription>
          </DialogHeader>
          {selectedGateway && (
            <Tabs defaultValue="settings" className="w-full">
              <TabsList>
                <TabsTrigger value="settings">Settings</TabsTrigger>
                <TabsTrigger value="credentials">Credentials</TabsTrigger>
                <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
              </TabsList>
              <TabsContent value="settings" className="space-y-4">
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="priority">Priority</Label>
                      <Input id="priority" type="number" defaultValue={selectedGateway.priority} min="1" max="10" />
                    </div>
                    <div>
                      <Label htmlFor="mode">Mode</Label>
                      <Select defaultValue={selectedGateway.mode}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="test">Test Mode</SelectItem>
                          <SelectItem value="live">Live Mode</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fixedFee">Fixed Fee (€)</Label>
                      <Input id="fixedFee" type="number" step="0.01" defaultValue={selectedGateway.fees.fixed} />
                    </div>
                    <div>
                      <Label htmlFor="percentageFee">Percentage Fee (%)</Label>
                      <Input
                        id="percentageFee"
                        type="number"
                        step="0.1"
                        defaultValue={selectedGateway.fees.percentage}
                      />
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="enabled" defaultChecked={selectedGateway.enabled} />
                    <Label htmlFor="enabled">Enable this gateway</Label>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="credentials" className="space-y-4">
                <div className="grid gap-4">
                  {Object.entries(selectedGateway.config).map(([key, value]) => (
                    <div key={key}>
                      <Label htmlFor={key}>
                        {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                      </Label>
                      <Input id={key} type="password" defaultValue={value as string} placeholder={`Enter ${key}`} />
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="webhooks" className="space-y-4">
                <div className="grid gap-4">
                  <div>
                    <Label htmlFor="webhookUrl">Webhook URL</Label>
                    <Input
                      id="webhookUrl"
                      value={`${process.env.NEXT_PUBLIC_BASE_URL}/api/webhooks/${selectedGateway.provider}`}
                      readOnly
                    />
                  </div>
                  <div>
                    <Label htmlFor="webhookEvents">Webhook Events</Label>
                    <Textarea
                      id="webhookEvents"
                      defaultValue="payment.succeeded, payment.failed, payment.cancelled"
                      rows={3}
                    />
                  </div>
                  <Button variant="outline">
                    <TestTube className="mr-2 h-4 w-4" />
                    Test Webhook
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          )}
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setIsConfigDialogOpen(false)}>
              Cancel
            </Button>
            <Button>Save Configuration</Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Test Gateway Dialog */}
      <Dialog open={isTestDialogOpen} onOpenChange={setIsTestDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Test {selectedGateway?.name}</DialogTitle>
            <DialogDescription>Run a test transaction to verify gateway configuration</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="testAmount">Test Amount (€)</Label>
              <Input id="testAmount" type="number" step="0.01" defaultValue="1.00" />
            </div>
            <div>
              <Label htmlFor="testCurrency">Currency</Label>
              <Select defaultValue="EUR">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {selectedGateway?.currencies.map((currency: string) => (
                    <SelectItem key={currency} value={currency}>
                      {currency}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setIsTestDialogOpen(false)}>
                Cancel
              </Button>
              <Button>
                <TestTube className="mr-2 h-4 w-4" />
                Run Test
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
