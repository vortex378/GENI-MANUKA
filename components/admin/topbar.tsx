"use client"

import { useState } from "react"
import { useSession, signOut } from "next-auth/react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Bell, Menu, Moon, Sun, User, Settings, LogOut, Shield } from "lucide-react"
import { Sidebar } from "./sidebar"

interface TopbarProps {
  className?: string
}

export function Topbar({ className }: TopbarProps) {
  const { data: session } = useSession()
  const { theme, setTheme } = useTheme()
  const [notifications] = useState([
    { id: 1, title: "New order received", time: "2 min ago", unread: true },
    { id: 2, title: "Low stock alert", time: "1 hour ago", unread: true },
    { id: 3, title: "Payment processed", time: "3 hours ago", unread: false },
  ])

  const unreadCount = notifications.filter((n) => n.unread).length

  return (
    <header className="flex h-14 items-center gap-4 border-b bg-background px-4 lg:px-6">
      {/* Mobile menu */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col p-0">
          <Sidebar />
        </SheetContent>
      </Sheet>

      <div className="flex-1" />

      {/* Notifications */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" className="relative">
            <Bell className="h-4 w-4" />
            {unreadCount > 0 && (
              <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 text-xs">{unreadCount}</Badge>
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-80">
          <DropdownMenuLabel>Notifications</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {notifications.map((notification) => (
            <DropdownMenuItem key={notification.id} className="flex flex-col items-start p-4">
              <div className="flex w-full items-center justify-between">
                <span className="font-medium">{notification.title}</span>
                {notification.unread && <div className="h-2 w-2 rounded-full bg-blue-500" />}
              </div>
              <span className="text-sm text-muted-foreground">{notification.time}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Theme toggle */}
      <Button variant="outline" size="icon" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </Button>

      {/* User menu */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/admin-avatar.jpg" alt={session?.user?.name || ""} />
              <AvatarFallback>
                {session?.user?.name
                  ?.split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">{session?.user?.name}</p>
              <p className="text-xs leading-none text-muted-foreground">{session?.user?.email}</p>
              <div className="flex items-center gap-1 pt-1">
                <Shield className="h-3 w-3" />
                <span className="text-xs">{session?.user?.role}</span>
              </div>
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
    </header>
  )
}
