# Manuka Albania

**Online store for premium New Zealand Manuka honey in Albania.** Customers browse products by brand, read about the benefits, and order through PokPay checkout or WhatsApp.

**[Visit the live site](https://manuka-albania-xi.vercel.app)** · Albanian interface

## Features

- **Product catalog** with brand filter and product cards
- **PokPay checkout:** a server-side API route looks up the price in the product catalog, creates the payment session, and redirects to PokPay's hosted checkout. The browser only sends a product id, so the amount cannot be changed on the client. Webhooks are accepted only with a valid HMAC signature.
- **WhatsApp ordering** from any product, for customers who prefer to order by message
- **Content pages:** benefits of Manuka honey, product showcase, FAQ, contact
- **SEO:** per-page metadata, Open Graph, `sitemap.xml`, `robots.txt`, and structured business data
- **Responsive** layout with loading states and animated sections

## Tech stack

Next.js (App Router) · TypeScript · Tailwind CSS · shadcn/ui (Radix) · Vercel

## Project structure

```
app/
├── api/pokpay/
│   ├── create-payment/   # creates a PokPay payment session
│   └── webhook/          # receives payment status updates
├── products/             # catalog with brand filter
├── checkout/             # checkout page
├── payment/success|cancel
├── benefits/ showcase/ manukat/ contact/
└── sitemap.ts, robots.txt
components/               # navigation, carousel, product cards, PokPay and WhatsApp buttons
```

## Run locally

```sh
pnpm install
pnpm dev
```

Create a `.env.local` file with these values first:

| Variable | Purpose |
| --- | --- |
| `POKPAY_MERCHANT_ID` | Merchant identifier from PokPay |
| `POKPAY_KEY_ID` / `POKPAY_KEY_SECRET` | API credentials (keep secret) |
| `POKPAY_API_URL` | `https://api-staging.pokpay.io` for testing, `https://api.pokpay.io` for production |
| `NEXT_PUBLIC_BASE_URL` | Public URL used for return and webhook links |
| `POKPAY_WEBHOOK_SECRET` | Secret used to verify webhook signatures (falls back to `POKPAY_KEY_SECRET`) |

Use staging credentials for local development. Full setup steps are in [POKPAY_SETUP.md](POKPAY_SETUP.md).

## Roadmap

- Store orders in a database and update them from the webhook
- Order confirmation email to the customer
- English version of the site
