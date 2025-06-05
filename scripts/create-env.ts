import fs from "fs"
import path from "path"
import crypto from "crypto"

function createEnvironmentFile() {
  console.log("🔧 Setting up environment configuration...\n")

  const envPath = path.join(process.cwd(), ".env.local")

  if (fs.existsSync(envPath)) {
    console.log("⚠️  .env.local already exists. Creating backup...")
    fs.copyFileSync(envPath, `${envPath}.backup.${Date.now()}`)
  }

  // Generate a secure NextAuth secret
  const nextAuthSecret = crypto.randomBytes(32).toString("hex")

  const envContent = `# ===========================================
# MANUKA HONEY E-COMMERCE - ENVIRONMENT CONFIG
# ===========================================

# DATABASE CONNECTION
# Replace with your MongoDB Atlas connection string
# Format: mongodb+srv://username:password@cluster.mongodb.net/database-name?retryWrites=true&w=majority
DATABASE_URL="mongodb+srv://username:password@cluster.mongodb.net/manuka-honey-ecommerce?retryWrites=true&w=majority"

# NEXTAUTH CONFIGURATION
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="${nextAuthSecret}"

# DEFAULT ADMIN CREDENTIALS
ADMIN_EMAIL="admin@manuka-bio-organik.com"
ADMIN_PASSWORD="admin123"

# POKPAY PAYMENT GATEWAY
POKPAY_API_KEY="your-pokpay-api-key"
POKPAY_SECRET="your-pokpay-secret"
POKPAY_WEBHOOK_SECRET="your-pokpay-webhook-secret"

# EMAIL CONFIGURATION (Optional)
EMAIL_SERVER_HOST="smtp.gmail.com"
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER="your-email@gmail.com"
EMAIL_SERVER_PASSWORD="your-app-password"
EMAIL_FROM="noreply@manuka-bio-organik.com"

# WHATSAPP INTEGRATION
WHATSAPP_PHONE_NUMBER="+1234567890"
WHATSAPP_API_TOKEN="your-whatsapp-api-token"

# ANALYTICS (Optional)
GOOGLE_ANALYTICS_ID="G-XXXXXXXXXX"

# FILE UPLOAD (Optional)
CLOUDINARY_CLOUD_NAME="your-cloud-name"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"

# DEVELOPMENT FLAGS
NODE_ENV="development"
DEBUG_MODE="true"
`

  fs.writeFileSync(envPath, envContent)

  console.log("✅ .env.local file created successfully!")
  console.log("\n📋 IMPORTANT: Update the following values:")
  console.log("1. DATABASE_URL - Your MongoDB Atlas connection string")
  console.log("2. POKPAY_API_KEY & POKPAY_SECRET - Your payment gateway credentials")
  console.log("3. Email settings (if you want email functionality)")
  console.log("\n🔒 Security note: Never commit .env.local to version control!")

  // Create .env.example for reference
  const exampleContent = envContent.replace(/="[^"]*"/g, '="your-value-here"')
  fs.writeFileSync(path.join(process.cwd(), ".env.example"), exampleContent)
  console.log("✅ .env.example file created for reference")
}

createEnvironmentFile()
