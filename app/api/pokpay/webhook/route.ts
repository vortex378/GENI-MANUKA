import { type NextRequest, NextResponse } from "next/server"

const SECRET_KEY = "eJCOQ354V/shVlfhNum58ck5OAE/aDta5MeaciZe"

export async function POST(request: NextRequest) {
  try {
    const body = await request.text()
    const signature = request.headers.get("x-pokpay-signature")

    // Verify webhook signature (implement according to PokPay docs)
    // This is a basic implementation - adjust based on PokPay's signature verification method
    if (!signature) {
      return NextResponse.json({ error: "Missing signature" }, { status: 400 })
    }

    const payload = JSON.parse(body)

    // Handle different payment events
    switch (payload.event) {
      case "payment.completed":
        console.log("Payment completed:", payload.data)
        // Here you can:
        // - Update your database
        // - Send confirmation emails
        // - Update inventory
        // - Trigger fulfillment process
        break

      case "payment.failed":
        console.log("Payment failed:", payload.data)
        // Handle failed payment
        break

      case "payment.cancelled":
        console.log("Payment cancelled:", payload.data)
        // Handle cancelled payment
        break

      default:
        console.log("Unknown event:", payload.event)
    }

    // Always return 200 to acknowledge receipt
    return NextResponse.json({ received: true })
  } catch (error) {
    console.error("Webhook error:", error)
    return NextResponse.json({ error: "Webhook processing failed" }, { status: 500 })
  }
}
