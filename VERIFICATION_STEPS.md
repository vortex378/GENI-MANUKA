# PokPay Integration Verification Steps

## ✅ Setup Complete

Your PokPay integration is configured with:
- POKPAY_MERCHANT_ID: ✓ Set
- POKPAY_KEY_ID: ✓ Set  
- POKPAY_KEY_SECRET: ✓ Set
- POKPAY_API_URL: ✓ Set (https://api.pokpay.io)
- NEXT_PUBLIC_BASE_URL: ✓ Set (https://www.manuka-albania.com)

## 🧪 How to Test

### Step 1: Access a Product
1. Go to https://www.manuka-albania.com
2. Scroll down to any product
3. Click the "Blej Tani" button

### Step 2: Checkout Page
1. You should see the checkout page with two options:
   - **WhatsApp Order** (green card)
   - **PokPay Payment** (amber card)

### Step 3: Test PokPay
1. Click "Paguaj me PokPay" button
2. Watch the browser console (F12 → Console tab) for debug logs:
   - `[v0] Initiating PokPay payment:` - Button clicked
   - `[v0] Creating PokPay payment:` - API route received request
   - `[v0] Payment payload:` - Data sent to PokPay
   - `[v0] PokPay API response:` - Response from PokPay
   - `[v0] Redirecting to PokPay checkout:` - Redirect URL

### Step 4: Complete Payment
1. You'll be redirected to PokPay's secure checkout page
2. Complete the test payment
3. You'll be redirected back to:
   - Success: https://www.manuka-albania.com/payment/success
   - Cancel: https://www.manuka-albania.com/payment/cancel

## 🔍 Debugging

If it doesn't work, check the console logs for:

### Error: "Missing PokPay credentials"
- One or more environment variables are not set
- Verify in Vercel dashboard or v0 Vars section

### Error: "Payment configuration error"
- Check POKPAY_API_URL is correct
- Verify merchant credentials are valid

### Error: "Failed to create payment"
- Check the API response in console
- Verify your PokPay account is active
- Ensure you're using the correct API URL (staging vs production)

## 📱 Quick Test Checklist

- [ ] Product "Blej Tani" button navigates to /checkout
- [ ] Checkout page displays product details correctly
- [ ] WhatsApp button opens WhatsApp with message
- [ ] PokPay button shows loading state when clicked
- [ ] Browser console shows debug logs
- [ ] Redirect to PokPay checkout page happens
- [ ] Success/cancel pages work after payment

## 🎯 Production Checklist

Before going live:
- [ ] Test with staging API first (`https://api-staging.pokpay.io`)
- [ ] Verify all payments work correctly
- [ ] Test success/cancel flows
- [ ] Switch to production API (`https://api.pokpay.io`)
- [ ] Remove console.log debug statements (optional)
- [ ] Test live payments with small amounts
