"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Trash2, UserPlus, Key } from "lucide-react"

// Mock data
const admins = [
  {
    id: 1,
    name: "Admin User",
    email: "admin@manuka-albania.com",
    role: "Super Admin",
    status: "active",
    lastLogin: "2024-03-12 14:30",
    createdAt: "2024-01-01",
  },
  {
    id: 2,
    name: "John Manager",
    email: "john@manuka-albania.com",
    role: "Manager",
    status: "active",
    lastLogin: "2024-03-11 09:15",
    createdAt: "2024-02-15",
  },
  {
    id: 3,
    name: "Jane Editor",
    email: "jane@manuka-albania.com",
    role: "Editor",
    status: "inactive",
    lastLogin: "2024-03-05 16:45",
    createdAt: "2024-03-01",
  },
]

export default function AdminSettingsPage() {
  const [isAddAdminOpen, setIsAddAdminOpen] = useState(false)
  const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false)

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Admin Settings</h1>
        <p className="text-muted-foreground">Manage admin accounts and system configuration</p>
      </div>

      <Tabs defaultValue="admins" className="space-y-6">
        <TabsList>
          <TabsTrigger value="admins">Admin Users</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="system">System Config</TabsTrigger>
        </TabsList>

        <TabsContent value="admins" className="space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Admin Users</CardTitle>
                <CardDescription>Manage administrator accounts and permissions</CardDescription>
              </div>
              <Dialog open={isAddAdminOpen} onOpenChange={setIsAddAdminOpen}>
                <DialogTrigger asChild>
                  <Button>
                    <UserPlus className="mr-2 h-4 w-4" />
                    Add Admin
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add New Admin</DialogTitle>
                    <DialogDescription>Create a new administrator account</DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="admin-name">Full Name</Label>
                        <Input id="admin-name" placeholder="Enter full name" />
                      </div>
                      <div>
                        <Label htmlFor="admin-email">Email</Label>
                        <Input id="admin-email" type="email" placeholder="admin@example.com" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="admin-role">Role</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="super-admin">Super Admin</SelectItem>
                          <SelectItem value="manager">Manager</SelectItem>
                          <SelectItem value="editor">Editor</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="admin-password">Password</Label>
                        <Input id="admin-password" type="password" placeholder="Enter password" />
                      </div>
                      <div>
                        <Label htmlFor="admin-confirm">Confirm Password</Label>
                        <Input id="admin-confirm" type="password" placeholder="Confirm password" />
                      </div>
                    </div>
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" onClick={() => setIsAddAdminOpen(false)}>
                        Cancel
                      </Button>
                      <Button>Create Admin</Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Login</TableHead>
                    <TableHead className="w-[70px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {admins.map((admin) => (
                    <TableRow key={admin.id}>
                      <TableCell className="font-medium">{admin.name}</TableCell>
                      <TableCell>{admin.email}</TableCell>
                      <TableCell>
                        <Badge variant={admin.role === "Super Admin" ? "default" : "secondary"}>{admin.role}</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant={admin.status === "active" ? "default" : "destructive"}>{admin.status}</Badge>
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">{admin.lastLogin}</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm" className="text-red-600">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>Configure security and authentication settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Change Password</h3>
                  <p className="text-sm text-muted-foreground">Update your admin password</p>
                </div>
                <Dialog open={isChangePasswordOpen} onOpenChange={setIsChangePasswordOpen}>
                  <DialogTrigger asChild>
                    <Button variant="outline">
                      <Key className="mr-2 h-4 w-4" />
                      Change Password
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Change Password</DialogTitle>
                      <DialogDescription>Update your admin account password</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                      <div>
                        <Label htmlFor="current-password">Current Password</Label>
                        <Input id="current-password" type="password" />
                      </div>
                      <div>
                        <Label htmlFor="new-password">New Password</Label>
                        <Input id="new-password" type="password" />
                      </div>
                      <div>
                        <Label htmlFor="confirm-new-password">Confirm New Password</Label>
                        <Input id="confirm-new-password" type="password" />
                      </div>
                      <div className="flex justify-end gap-2">
                        <Button variant="outline" onClick={() => setIsChangePasswordOpen(false)}>
                          Cancel
                        </Button>
                        <Button>Update Password</Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Two-Factor Authentication</h3>
                    <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Login Notifications</h3>
                    <p className="text-sm text-muted-foreground">Get notified of admin logins</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Session Timeout</h3>
                    <p className="text-sm text-muted-foreground">Auto-logout after inactivity</p>
                  </div>
                  <Select defaultValue="30">
                    <SelectTrigger className="w-[120px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15">15 minutes</SelectItem>
                      <SelectItem value="30">30 minutes</SelectItem>
                      <SelectItem value="60">1 hour</SelectItem>
                      <SelectItem value="120">2 hours</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Email Notifications</CardTitle>
              <CardDescription>Configure when to receive email notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">New Orders</h3>
                    <p className="text-sm text-muted-foreground">Get notified when new orders are placed</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Low Stock Alerts</h3>
                    <p className="text-sm text-muted-foreground">Alert when products are running low</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">New Customer Registrations</h3>
                    <p className="text-sm text-muted-foreground">Notify when new customers sign up</p>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Payment Notifications</h3>
                    <p className="text-sm text-muted-foreground">Get notified of successful payments</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">System Updates</h3>
                    <p className="text-sm text-muted-foreground">Receive system maintenance notifications</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>

              <div className="pt-4 border-t">
                <div>
                  <Label htmlFor="notification-email">Notification Email</Label>
                  <Input
                    id="notification-email"
                    type="email"
                    defaultValue="admin@manuka-albania.com"
                    className="mt-2"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="system" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>System Configuration</CardTitle>
              <CardDescription>Configure general system settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label htmlFor="site-name">Site Name</Label>
                  <Input id="site-name" defaultValue="Manuka Bio Organik" />
                </div>
                <div>
                  <Label htmlFor="site-url">Site URL</Label>
                  <Input id="site-url" defaultValue="https://manuka-albania.com" />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label htmlFor="contact-email">Contact Email</Label>
                  <Input id="contact-email" defaultValue="manuka.al@hotmail.com" />
                </div>
                <div>
                  <Label htmlFor="support-phone">Support Phone</Label>
                  <Input id="support-phone" defaultValue="+355 69 732 0453" />
                </div>
              </div>

              <div>
                <Label htmlFor="currency">Default Currency</Label>
                <Select defaultValue="EUR">
                  <SelectTrigger className="w-[200px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="EUR">Euro (€)</SelectItem>
                    <SelectItem value="USD">US Dollar ($)</SelectItem>
                    <SelectItem value="ALL">Albanian Lek (L)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="timezone">Timezone</Label>
                <Select defaultValue="Europe/Tirane">
                  <SelectTrigger className="w-[200px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Europe/Tirane">Europe/Tirane</SelectItem>
                    <SelectItem value="Europe/London">Europe/London</SelectItem>
                    <SelectItem value="Europe/Berlin">Europe/Berlin</SelectItem>
                    <SelectItem value="UTC">UTC</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Maintenance Mode</h3>
                    <p className="text-sm text-muted-foreground">Put the site in maintenance mode</p>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Debug Mode</h3>
                    <p className="text-sm text-muted-foreground">Enable debug logging</p>
                  </div>
                  <Switch />
                </div>
              </div>

              <Button>Save Configuration</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
