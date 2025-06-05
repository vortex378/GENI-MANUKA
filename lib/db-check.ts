import { PrismaClient } from "@prisma/client"

// This function will be used to check if the database is available
export async function checkDatabaseConnection() {
  try {
    const prisma = new PrismaClient()
    await prisma.$connect()
    await prisma.$disconnect()
    return { success: true }
  } catch (error) {
    console.error("Database connection failed:", error)
    return { success: false, error }
  }
}
