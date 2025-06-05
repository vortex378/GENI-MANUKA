import { MongoClient } from "mongodb"
import { PrismaClient } from "@prisma/client"

async function setupMongoDB() {
  console.log("🔗 Setting up MongoDB connection...\n")

  // Check if DATABASE_URL exists in environment
  const databaseUrl = process.env.DATABASE_URL

  if (!databaseUrl) {
    console.log("❌ DATABASE_URL not found in environment variables")
    console.log("\n📋 To set up your database connection:")
    console.log("1. Create a MongoDB Atlas account at: https://www.mongodb.com/atlas")
    console.log("2. Create a new cluster")
    console.log("3. Get your connection string")
    console.log("4. Add it to your .env.local file")
    console.log("\nExample DATABASE_URL format:")
    console.log("mongodb+srv://username:password@cluster.mongodb.net/database-name?retryWrites=true&w=majority")
    return
  }

  console.log("✅ DATABASE_URL found in environment")
  console.log(`🔗 Connecting to: ${databaseUrl.replace(/\/\/.*@/, "//***:***@")}`)

  try {
    // Test MongoDB connection directly
    console.log("\n📡 Testing MongoDB connection...")
    const client = new MongoClient(databaseUrl)
    await client.connect()

    const db = client.db()
    const collections = await db.listCollections().toArray()

    console.log("✅ MongoDB connection successful!")
    console.log(`📊 Database: ${db.databaseName}`)
    console.log(`📁 Collections found: ${collections.length}`)

    if (collections.length > 0) {
      console.log("   Existing collections:")
      collections.forEach((col) => console.log(`   • ${col.name}`))
    }

    await client.close()

    // Test Prisma connection
    console.log("\n🔧 Testing Prisma connection...")
    const prisma = new PrismaClient()

    try {
      await prisma.$connect()
      console.log("✅ Prisma connection successful!")

      // Try to count users (this will work even if the collection is empty)
      const userCount = await prisma.user.count()
      console.log(`👥 Users in database: ${userCount}`)

      await prisma.$disconnect()
    } catch (prismaError) {
      console.log("⚠️  Prisma connection issue:")
      console.log(prismaError)
      console.log("\n💡 This might be normal if the database schema hasn't been pushed yet")
    }
  } catch (error) {
    console.error("❌ Database connection failed:")
    console.error(error)

    if (error instanceof Error) {
      if (error.message.includes("ENOTFOUND")) {
        console.log("\n💡 Network connectivity issue. Check:")
        console.log("• Your internet connection")
        console.log("• MongoDB Atlas cluster is running")
        console.log("• Firewall settings")
      } else if (error.message.includes("authentication failed")) {
        console.log("\n💡 Authentication issue. Check:")
        console.log("• Username and password in connection string")
        console.log("• Database user permissions")
      } else if (error.message.includes("IP")) {
        console.log("\n💡 IP whitelist issue. Check:")
        console.log("• Your IP is whitelisted in MongoDB Atlas")
        console.log("• Consider allowing access from anywhere (0.0.0.0/0) for development")
      }
    }
  }
}

setupMongoDB()
