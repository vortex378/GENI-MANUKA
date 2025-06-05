import { type NextRequest, NextResponse } from "next/server"

const POKPAY_API_URL = "https://api.pokpay.io"
const MERCHANT_ID = "d2169a71-5da9-4841-b67e-70dc8e2e144e"
const KEY_ID = "ffe259a0-47e1-4df3-b771-d5e31dc6935a"
const SECRET_KEY = "eJCOQ354V/shVlfhNum58ck5OAE/aDta5MeaciZe"

export async function POST(request: NextRequest) {
  try {
    const { productName, amount, currency } = await request.json()

    // Validate required fields
    if (!productName || !amount || !currency) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 })
    }

    // Create payment request payload according to PokPay API
    const paymentData = {
      merchant_id: MERCHANT_ID,
      amount: amount,
      currency: currency,
      description: `Blerje: ${productName}`,
      order_id: `ORDER_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      return_url: `${process.env.NEXT_PUBLIC_BASE_URL || "https://manuka-albania.com"}/payment-success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || "https://manuka-albania.com"}/payment-cancel`,
      webhook_url: `${process.env.NEXT_PUBLIC_BASE_URL || "https://manuka-albania.com"}/api/pokpay/webhook`,
      customer: {
        name: "Klient Manuka",
        email: "customer@manuka-albania.com",
      },
    }

    // Create authorization header
    const authString = Buffer.from(`${KEY_ID}:${SECRET_KEY}`).toString("base64")

    // Make request to PokPay API
    const pokpayResponse = await fetch(`${POKPAY_API_URL}/v1/payments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${authString}`,
        Accept: "application/json",
      },
      body: JSON.stringify(paymentData),
    })

    const pokpayData = await pokpayResponse.json()

    if (pokpayResponse.ok && pokpayData.checkout_url) {
      return NextResponse.json({
        success: true,
        checkoutUrl: pokpayData.checkout_url,
        paymentId: pokpayData.id,
      })
    } else {
      console.error("PokPay API Error:", pokpayData)
      return NextResponse.json(
        { success: false, error: pokpayData.message || "Payment creation failed" },
        { status: 400 },
      )
    }
  } catch (error) {
    console.error("Payment creation error:", error)
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 })
  }
}
