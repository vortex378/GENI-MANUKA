# PokPay Payment Integration Setup Guide

## Overview
Your Manuka Albania website now has complete PokPay payment integration. Follow these steps to configure and test payments.

## Required Environment Variables

Add these environment variables to your Vercel project (or `.env.local` for local development):

### Production Environment
\`\`\`bash
POKPAY_MERCHANT_ID=your_merchant_id_here
POKPAY_KEY_ID=your_key_id_here
POKPAY_KEY_SECRET=your_key_secret_here
POKPAY_API_URL=https://api.pokpay.io
NEXT_PUBLIC_BASE_URL=https://your-domain.com
\`\`\`

### Staging/Testing Environment
\`\`\`bash
POKPAY_MERCHANT_ID=your_staging_merchant_id
POKPAY_KEY_ID=your_staging_key_id
POKPAY_KEY_SECRET=your_staging_key_secret
POKPAY_API_URL=https://api-staging.pokpay.io
NEXT_PUBLIC_BASE_URL=https://your-staging-domain.com
\`\`\`

## Where to Get Your Credentials

Contact your PokPay account manager or check your PokPay merchant dashboard for:
- **Merchant ID**: Your unique merchant identifier
- **Key ID**: Your API key ID for authentication
- **Key Secret**: Your API secret key (keep this secure!)

## API Endpoints

PokPay provides two environments:
- **Production**: `https://api.pokpay.io` (for live payments)
- **Staging**: `https://api-staging.pokpay.io` (for testing)

## How It Works

1. **User clicks "Blej me PokPay" button** on any product
2. **Payment creation**: Server-side API creates a PokPay payment session
3. **Redirect**: User is redirected to PokPay's secure checkout page
4. **Payment**: User completes payment on PokPay
5. **Webhook**: PokPay notifies your server of payment status
6. **Confirmation**: User sees success/cancel page based on payment result

## Testing the Integration

### Local Testing
1. Add environment variables to `.env.local`
2. Use staging credentials and API URL
3. Run your development server: `npm run dev`
4. Click a PokPay button and complete a test payment

### Production Deployment
1. Add production environment variables in Vercel dashboard
2. Use production API URL: `https://api.pokpay.io`
3. Deploy and test with real payments

## Webhook Configuration

Your webhook URL is automatically set to:
\`\`\`
https://your-domain.com/api/pokpay/webhook
\`\`\`

Make sure this URL is:
- Publicly accessible
- Configured in your PokPay merchant dashboard
- Using HTTPS (required for production)

## Payment Flow Files

The integration includes these key files:
- `/app/api/pokpay/create-payment/route.ts` - Creates payment sessions
- `/app/api/pokpay/webhook/route.ts` - Handles payment confirmations
- `/components/pokpay-button.tsx` - Updated payment button component
- `/app/payment/success/page.tsx` - Success confirmation page
- `/app/payment/cancel/page.tsx` - Cancellation page

## Security Notes

- API keys are stored as environment variables (never in code)
- Authentication uses Basic Auth with Key ID and Key Secret
- All payment creation happens server-side
- Webhook signatures should be verified (implement in production)

## Next Steps

1. **Add environment variables** to your Vercel project
2. **Test in staging** environment first
3. **Verify webhook** is receiving payment updates
4. **Add database integration** to store completed orders (see TODO comments in webhook)
5. **Switch to production** credentials when ready for live payments

## Support

For PokPay API documentation or issues with credentials, contact your PokPay account representative.
