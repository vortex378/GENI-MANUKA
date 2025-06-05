"use client"

import { useAuth } from "@/lib/auth-context"

export default function TestPage() {
  const { user, loading } = useAuth()

  if (loading) {
    return <div className="p-8">Loading...</div>
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Test Page</h1>
      <div className="bg-gray-100 p-4 rounded">
        <p>Auth Status: {user ? "Authenticated" : "Not authenticated"}</p>
        {user && (
          <div className="mt-2">
            <p>User: {user.email}</p>
            <p>Role: {user.role}</p>
          </div>
        )}
      </div>
    </div>
  )
}
