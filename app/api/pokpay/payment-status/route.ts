import { type NextRequest, NextResponse } from "next/server"

// Force this route to be dynamic
export const dynamic = "force-dynamic"

const POKPAY_API_URL = "https://api.pokpay.io"
const KEY_ID = "ffe259a0-47e1-4df3-b771-d5e31dc6935a"
const SECRET_KEY = "eJCOQ354V/shVlfhNum58ck5OAE/aDta5MeaciZe"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const paymentId = searchParams.get("payment_id")

    if (!paymentId) {
      return NextResponse.json({ success: false, error: "Payment ID is required" }, { status: 400 })
    }

    // Create authorization header
    const authString = Buffer.from(`${KEY_ID}:${SECRET_KEY}`).toString("base64")

    // Get payment status from PokPay
    const pokpayResponse = await fetch(`${POKPAY_API_URL}/v1/payments/${paymentId}`, {
      method: "GET",
      headers: {
        Authorization: `Basic ${authString}`,
        Accept: "application/json",
      },
    })

    const pokpayData = await pokpayResponse.json()

    if (pokpayResponse.ok) {
      return NextResponse.json({
        success: true,
        payment: pokpayData,
      })
    } else {
      return NextResponse.json(
        { success: false, error: pokpayData.message || "Failed to get payment status" },
        { status: 400 },
      )
    }
  } catch (error) {
    console.error("Payment status check error:", error)
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 })
  }
}
