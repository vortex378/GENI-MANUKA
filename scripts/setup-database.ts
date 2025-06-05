import { execSync } from "child_process"
import fs from "fs"
import path from "path"

console.log("🚀 Starting database setup process...\n")

// Check if .env.local exists
const envPath = path.join(process.cwd(), ".env.local")
if (!fs.existsSync(envPath)) {
  console.log("⚠️  .env.local file not found. Creating from example...")

  const envExample = `# Database
DATABASE_URL="mongodb+srv://username:password@cluster.mongodb.net/manuka-honey-db?retryWrites=true&w=majority"

# NextAuth.js
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here-change-this-in-production"

# Admin credentials
ADMIN_EMAIL="admin@manuka-bio-organik.com"
ADMIN_PASSWORD="admin123"

# Payment (PokPay)
POKPAY_API_KEY="your-pokpay-api-key"
POKPAY_SECRET="your-pokpay-secret"

# Email (optional)
EMAIL_SERVER_HOST="smtp.gmail.com"
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER="your-email@gmail.com"
EMAIL_SERVER_PASSWORD="your-app-password"
EMAIL_FROM="noreply@manuka-bio-organik.com"`

  fs.writeFileSync(envPath, envExample)
  console.log("✅ .env.local file created. Please update DATABASE_URL with your MongoDB connection string.\n")
}

function runCommand(command: string, description: string) {
  console.log(`📦 ${description}...`)
  try {
    execSync(command, { stdio: "inherit", cwd: process.cwd() })
    console.log(`✅ ${description} completed successfully!\n`)
  } catch (error) {
    console.error(`❌ Error during ${description}:`)
    console.error(error)
    process.exit(1)
  }
}

// Step 1: Install dependencies
runCommand("npm install", "Installing dependencies")

// Step 2: Generate Prisma client
runCommand("npm run db:generate", "Generating Prisma client")

// Step 3: Push database schema
console.log("📊 Pushing database schema...")
console.log("Note: Make sure your DATABASE_URL in .env.local is correctly configured")
try {
  execSync("npm run db:push", { stdio: "inherit", cwd: process.cwd() })
  console.log("✅ Database schema pushed successfully!\n")
} catch (error) {
  console.error("❌ Error pushing database schema:")
  console.error("Please check your DATABASE_URL in .env.local")
  console.error(error)
  process.exit(1)
}

// Step 4: Seed database
runCommand("npm run db:seed", "Seeding database with initial data")

console.log("🎉 Database setup completed successfully!")
console.log("\n📋 Summary:")
console.log("✅ Dependencies installed")
console.log("✅ Prisma client generated")
console.log("✅ Database schema created")
console.log("✅ Database seeded with sample data")
console.log("\n👤 Default accounts created:")
console.log("Admin: admin@manuka-bio-organik.com / admin123")
console.log("User: user@example.com / user123")
console.log("\n🚀 You can now start the development server with: npm run dev")
