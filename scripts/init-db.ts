import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function initializeDatabase() {
  try {
    console.log("🔄 Initializing database connection...")

    // Test the connection
    await prisma.$connect()
    console.log("✅ Database connection successful!")

    // Check if we can query the database
    const userCount = await prisma.user.count()
    console.log(`📊 Current user count: ${userCount}`)

    console.log("🎉 Database initialization completed!")
  } catch (error) {
    console.error("❌ Database initialization failed:", error)
    throw error
  } finally {
    await prisma.$disconnect()
  }
}

initializeDatabase()
