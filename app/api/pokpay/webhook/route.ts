import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json()
    console.log("[v0] PokPay webhook received:", payload)

    const signature = request.headers.get("x-pokpay-signature")
    const keySecret = process.env.POKPAY_KEY_SECRET

    if (!signature || !keySecret) {
      console.error("[v0] Missing webhook signature or secret")
      return NextResponse.json({ error: "Invalid webhook" }, { status: 401 })
    }

    const { status, order_id, payment_id, amount } = payload

    console.log("[v0] Payment status update:", { status, order_id, payment_id, amount })

    if (status === "completed" || status === "success") {
      console.log("[v0] Payment completed successfully:", { order_id, payment_id, amount })

      // TODO: Save order to database here
      // Example: await saveOrder({ order_id, payment_id, amount, status: "paid" })
    } else if (status === "failed" || status === "cancelled") {
      console.log("[v0] Payment failed or cancelled:", { order_id, payment_id })

      // TODO: Update order status in database
      // Example: await updateOrderStatus({ order_id, status: "cancelled" })
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error("[v0] Webhook processing error:", error)
    return NextResponse.json({ error: "Webhook processing failed" }, { status: 500 })
  }
}
