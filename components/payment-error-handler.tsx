"use client"

import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

interface PaymentErrorHandlerProps {
  error: string
  onRetry?: () => void
}

export default function PaymentErrorHandler({ error, onRetry }: PaymentErrorHandlerProps) {
  return (
    <Alert variant="destructive" className="mt-4">
      <AlertCircle className="h-4 w-4" />
      <AlertDescription className="flex items-center justify-between">
        <span>{error}</span>
        {onRetry && (
          <button onClick={onRetry} className="ml-4 text-sm underline hover:no-underline">
            Provo përsëri
          </button>
        )}
      </AlertDescription>
    </Alert>
  )
}
