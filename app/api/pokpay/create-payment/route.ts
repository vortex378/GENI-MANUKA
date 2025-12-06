import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { productName, price, orderId } = await request.json()

    const merchantId = process.env.POKPAY_MERCHANT_ID
    const keyId = process.env.POKPAY_KEY_ID
    const keySecret = process.env.POKPAY_KEY_SECRET
    const apiUrl = process.env.POKPAY_API_URL || "https://api.pokpay.io"

    if (!merchantId || !keyId || !keySecret) {
      console.error("[v0] Missing PokPay credentials")
      return NextResponse.json({ error: "Payment configuration error" }, { status: 500 })
    }

    console.log("[v0] Creating PokPay payment:", { productName, price, orderId })

    const authString = `${keyId}:${keySecret}`
    const authHeader = `Basic ${Buffer.from(authString).toString("base64")}`

    const paymentPayload = {
      merchant_id: merchantId,
      amount: price,
      currency: "ALL",
      description: `Manuka Albania - ${productName}`,
      order_id: orderId,
      return_url: `${process.env.NEXT_PUBLIC_BASE_URL || request.headers.get("origin")}/payment/success?order_id=${orderId}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || request.headers.get("origin")}/payment/cancel?order_id=${orderId}`,
      webhook_url: `${process.env.NEXT_PUBLIC_BASE_URL || request.headers.get("origin")}/api/pokpay/webhook`,
    }

    console.log("[v0] Payment payload:", paymentPayload)

    const response = await fetch(`${apiUrl}/v1/payments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: authHeader,
      },
      body: JSON.stringify(paymentPayload),
    })

    const responseData = await response.json()
    console.log("[v0] PokPay API response:", responseData)

    if (!response.ok) {
      console.error("[v0] PokPay API error:", responseData)
      return NextResponse.json(
        { error: responseData.message || "Failed to create payment" },
        { status: response.status },
      )
    }

    return NextResponse.json({
      success: true,
      checkout_url: responseData.checkout_url,
      payment_id: responseData.id,
    })
  } catch (error) {
    console.error("[v0] Error creating PokPay payment:", error)
    return NextResponse.json({ error: "Failed to process payment request" }, { status: 500 })
  }
}
