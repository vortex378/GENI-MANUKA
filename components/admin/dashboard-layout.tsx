"use client"

import type React from "react"

import { useState } from "react"
import { useSession, signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  Package,
  Search,
  Settings,
  LogOut,
  Menu,
  Bell,
  User,
  CreditCard,
  Gift,
  Mail,
  BarChart3,
  Globe,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AuthGuard } from "./auth-guard"

const navigation = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Clients", href: "/admin/clients", icon: Users },
  { name: "Orders", href: "/admin/orders", icon: ShoppingCart },
  { name: "Products", href: "/admin/products", icon: Package },
  { name: "Payments", href: "/admin/payments", icon: CreditCard },
  { name: "Coupons", href: "/admin/coupons", icon: Gift },
  { name: "Marketing", href: "/admin/marketing", icon: Mail },
  { name: "Analytics", href: "/admin/analytics", icon: BarChart3 },
  { name: "SEO", href: "/admin/seo", icon: Search },
  { name: "Content", href: "/admin/content", icon: Globe },
  { name: "Settings", href: "/admin/settings", icon: Settings },
]

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()
  const { data: session } = useSession()

  const Sidebar = ({ mobile = false }) => (
    <div className={`flex flex-col ${mobile ? "h-full" : "h-screen"}`}>
      <div className="flex h-16 shrink-0 items-center px-6 border-b">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">Admin Panel</h1>
      </div>
      <nav className="flex flex-1 flex-col px-6 py-6">
        <ul role="list" className="flex flex-1 flex-col gap-y-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-semibold transition-colors ${
                    isActive
                      ? "bg-blue-50 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-800"
                  }`}
                  onClick={() => mobile && setSidebarOpen(false)}
                >
                  <item.icon
                    className={`h-5 w-5 shrink-0 ${
                      isActive
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400"
                    }`}
                  />
                  {item.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )

  return (
    <AuthGuard>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Mobile sidebar */}
        <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
          <SheetContent side="left" className="p-0 w-64">
            <Sidebar mobile />
          </SheetContent>
        </Sheet>

        {/* Desktop sidebar */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-64 lg:flex-col">
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
            <Sidebar />
          </div>
        </div>

        {/* Main content */}
        <div className="lg:pl-64">
          {/* Top navigation */}
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setSidebarOpen(true)}>
              <Menu className="h-5 w-5" />
            </Button>

            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
              <div className="flex flex-1"></div>
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                <Button variant="ghost" size="sm">
                  <Bell className="h-5 w-5" />
                </Button>

                <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200 dark:lg:bg-gray-700" />

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/admin-avatar.jpg" alt="Admin" />
                        <AvatarFallback>{session?.user?.name?.charAt(0) || "A"}</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuLabel className="font-normal">
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">{session?.user?.name || "Admin User"}</p>
                        <p className="text-xs leading-none text-muted-foreground">
                          {session?.user?.email || "admin@manuka-albania.com"}
                        </p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => signOut()}>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>

          {/* Page content */}
          <main className="py-8">
            <div className="px-4 sm:px-6 lg:px-8">{children}</div>
          </main>
        </div>
      </div>
    </AuthGuard>
  )
}
