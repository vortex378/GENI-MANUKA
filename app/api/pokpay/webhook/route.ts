import { createHmac, timingSafeEqual } from "node:crypto"
import { type NextRequest, NextResponse } from "next/server"

// Verifies that a webhook really comes from PokPay before anything is trusted.
//
// The signature is expected to be an HMAC-SHA256 of the raw request body,
// hex encoded, in the `x-pokpay-signature` header (an optional `sha256=`
// prefix is accepted). Confirm the header name and signing scheme in your
// PokPay merchant documentation and adjust `isValidSignature` if they differ.
// Until a valid signature arrives, every webhook is rejected with 401.

function isValidSignature(rawBody: string, signatureHeader: string | null, secret: string): boolean {
  if (!signatureHeader) return false

  const received = signatureHeader.trim().replace(/^sha256=/i, "").toLowerCase()
  if (!/^[0-9a-f]{64}$/.test(received)) return false

  const expected = createHmac("sha256", secret).update(rawBody, "utf8").digest("hex")
  return timingSafeEqual(Buffer.from(received, "hex"), Buffer.from(expected, "hex"))
}

export async function POST(request: NextRequest) {
  const secret = process.env.POKPAY_WEBHOOK_SECRET || process.env.POKPAY_KEY_SECRET
  if (!secret) {
    console.error("PokPay webhook secret is not configured")
    return NextResponse.json({ error: "Webhook not configured" }, { status: 500 })
  }

  // Read the raw body: the signature is computed over the exact bytes sent.
  const rawBody = await request.text()

  if (!isValidSignature(rawBody, request.headers.get("x-pokpay-signature"), secret)) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 })
  }

  let payload: { status?: string; order_id?: string; payment_id?: string; amount?: number }
  try {
    payload = JSON.parse(rawBody)
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 })
  }

  const { status, order_id, payment_id } = payload

  if (status === "completed" || status === "success") {
    console.info("PokPay payment completed", { order_id, payment_id })
    // TODO: mark the order as paid once orders are stored in a database.
  } else if (status === "failed" || status === "cancelled") {
    console.info("PokPay payment not completed", { order_id, payment_id, status })
    // TODO: mark the order as cancelled once orders are stored in a database.
  }

  return NextResponse.json({ received: true })
}
