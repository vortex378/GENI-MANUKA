import { randomUUID } from "node:crypto"
import { type NextRequest, NextResponse } from "next/server"
import { findProduct } from "@/lib/catalog"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => null)
    const productId = typeof body?.productId === "string" ? body.productId : null

    // Price and name come from the server-side catalog. Anything else the
    // browser sends (price, name, order id) is ignored.
    const product = findProduct(productId)
    if (!product) {
      return NextResponse.json({ error: "Unknown product" }, { status: 400 })
    }

    const merchantId = process.env.POKPAY_MERCHANT_ID
    const keyId = process.env.POKPAY_KEY_ID
    const keySecret = process.env.POKPAY_KEY_SECRET
    const apiUrl = process.env.POKPAY_API_URL || "https://api.pokpay.io"

    if (!merchantId || !keyId || !keySecret) {
      console.error("PokPay credentials are not configured")
      return NextResponse.json({ error: "Payment configuration error" }, { status: 500 })
    }

    // Return and webhook URLs use the configured site URL, or this server's own
    // origin. The client-controlled Origin header is never used.
    const baseUrl = (process.env.NEXT_PUBLIC_BASE_URL || request.nextUrl.origin).replace(/\/$/, "")
    const orderId = `ORDER-${randomUUID()}`
    const authHeader = `Basic ${Buffer.from(`${keyId}:${keySecret}`).toString("base64")}`

    const paymentPayload = {
      merchant_id: merchantId,
      amount: product.price,
      currency: "ALL",
      description: `Manuka Albania - ${product.name}`,
      order_id: orderId,
      return_url: `${baseUrl}/payment/success?order_id=${encodeURIComponent(orderId)}`,
      cancel_url: `${baseUrl}/payment/cancel?order_id=${encodeURIComponent(orderId)}`,
      webhook_url: `${baseUrl}/api/pokpay/webhook`,
    }

    const response = await fetch(`${apiUrl}/v1/payments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: authHeader,
      },
      body: JSON.stringify(paymentPayload),
    })

    const responseData = await response.json().catch(() => ({}))

    if (!response.ok) {
      console.error("PokPay payment creation failed", { status: response.status, orderId })
      return NextResponse.json({ error: "Failed to create payment" }, { status: 502 })
    }

    return NextResponse.json({
      success: true,
      checkout_url: responseData.checkout_url,
      payment_id: responseData.id,
    })
  } catch (error) {
    console.error("Error creating PokPay payment:", error)
    return NextResponse.json({ error: "Failed to process payment request" }, { status: 500 })
  }
}
