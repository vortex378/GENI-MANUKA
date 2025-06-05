import { PrismaClient } from "@prisma/client"
import { MongoClient } from "mongodb"

async function testDatabaseConnection() {
  console.log("🧪 Testing Database Connection...\n")

  const databaseUrl = process.env.DATABASE_URL

  if (!databaseUrl) {
    console.log("❌ DATABASE_URL not found!")
    console.log("Please set up your .env.local file first.")
    console.log("Run: npm run setup:env")
    return
  }

  console.log("🔗 Database URL found (credentials hidden)")

  // Test 1: Direct MongoDB connection
  console.log("\n📡 Test 1: Direct MongoDB Connection")
  try {
    const client = new MongoClient(databaseUrl)
    await client.connect()

    const admin = client.db().admin()
    const serverStatus = await admin.serverStatus()

    console.log("✅ MongoDB connection successful!")
    console.log(`📊 MongoDB version: ${serverStatus.version}`)
    console.log(`🏠 Host: ${serverStatus.host}`)

    await client.close()
  } catch (error) {
    console.log("❌ MongoDB connection failed:")
    console.log(error)
    return
  }

  // Test 2: Prisma connection
  console.log("\n🔧 Test 2: Prisma Connection")
  const prisma = new PrismaClient()

  try {
    await prisma.$connect()
    console.log("✅ Prisma connection successful!")

    // Test database operations
    console.log("\n📊 Database Statistics:")

    try {
      const userCount = await prisma.user.count()
      console.log(`👥 Users: ${userCount}`)
    } catch (e) {
      console.log("👥 Users: Collection not created yet")
    }

    try {
      const productCount = await prisma.product.count()
      console.log(`📦 Products: ${productCount}`)
    } catch (e) {
      console.log("📦 Products: Collection not created yet")
    }

    try {
      const orderCount = await prisma.order.count()
      console.log(`🛒 Orders: ${orderCount}`)
    } catch (e) {
      console.log("🛒 Orders: Collection not created yet")
    }
  } catch (error) {
    console.log("❌ Prisma connection failed:")
    console.log(error)
  } finally {
    await prisma.$disconnect()
  }

  console.log("\n🎉 Connection test completed!")
  console.log("\nNext steps:")
  console.log("1. If connections failed, check your DATABASE_URL")
  console.log("2. If successful, run: npm run db:push")
  console.log("3. Then run: npm run db:seed")
}

testDatabaseConnection()
