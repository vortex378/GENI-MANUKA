"use client"

import { createContext, useContext, type ReactNode } from "react"
import { useSession, signIn, signOut } from "next-auth/react"

interface User {
  id: string
  email: string
  name?: string
  role: string
}

interface AuthContextType {
  user: User | null
  status: "loading" | "authenticated" | "unauthenticated"
  signIn: (credentials: { email: string; password: string }) => Promise<any>
  signOut: () => Promise<void>
  register: (userData: { name: string; email: string; password: string }) => Promise<any>
  isAdmin: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const { data: session, status } = useSession()

  const login = async (credentials: { email: string; password: string }) => {
    return signIn("credentials", {
      ...credentials,
      redirect: false,
    })
  }

  const logout = async () => {
    return signOut({ redirect: false })
  }

  const register = async (userData: { name: string; email: string; password: string }) => {
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Registration failed")
      }

      return data
    } catch (error) {
      throw error
    }
  }

  const user = session?.user as User | null
  const isAdmin = user?.role === "admin"

  return (
    <AuthContext.Provider
      value={{
        user,
        status,
        signIn: login,
        signOut: logout,
        register,
        isAdmin,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
