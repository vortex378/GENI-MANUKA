import { MongoClient } from "mongodb"
import * as dotenv from "dotenv"
import * as fs from "fs"
import * as path from "path"

// Load environment variables from .env.local
const envPath = path.join(process.cwd(), ".env.local")
if (fs.existsSync(envPath)) {
  console.log("📄 Loading environment from .env.local")
  dotenv.config({ path: envPath })
} else {
  console.log("❌ .env.local file not found!")
  process.exit(1)
}

async function testConnection() {
  console.log("🔍 Starting database connection test...")

  // Check if DATABASE_URL exists
  const dbUrl = process.env.DATABASE_URL
  if (!dbUrl) {
    console.log("❌ DATABASE_URL not found in environment variables!")
    console.log("Please make sure your .env.local file contains DATABASE_URL")
    process.exit(1)
  }

  console.log("✅ DATABASE_URL found in environment variables")
  console.log(`🔒 Connection string: ${dbUrl.replace(/\/\/(.+?):(.+?)@/, "//***:***@")}`)

  try {
    console.log("🔄 Attempting to connect to MongoDB...")
    const client = new MongoClient(dbUrl)
    await client.connect()

    console.log("✅ Successfully connected to MongoDB!")
    const dbName = client.db().databaseName
    console.log(`📊 Connected to database: ${dbName}`)

    // List collections if any exist
    const collections = await client.db().listCollections().toArray()
    console.log(`📋 Found ${collections.length} collections`)

    if (collections.length > 0) {
      console.log("Collections:")
      collections.forEach((col) => console.log(`- ${col.name}`))
    }

    await client.close()
    console.log("🔌 Connection closed")
    console.log("✅ Database connection test PASSED")
  } catch (error) {
    console.log("❌ Failed to connect to MongoDB:")
    console.error(error)

    // Provide helpful error messages based on common issues
    if (error instanceof Error) {
      if (error.message.includes("ENOTFOUND")) {
        console.log("\n🔍 DIAGNOSIS: Hostname not found")
        console.log("- Check if your cluster name is correct")
        console.log("- Verify your internet connection")
      } else if (error.message.includes("Authentication failed")) {
        console.log("\n🔍 DIAGNOSIS: Authentication failed")
        console.log("- Check your username and password")
        console.log("- Verify that the database user exists with proper permissions")
      } else if (error.message.includes("timed out")) {
        console.log("\n🔍 DIAGNOSIS: Connection timed out")
        console.log("- Check if your IP address is whitelisted in MongoDB Atlas")
        console.log("- Verify that your MongoDB Atlas cluster is running")
      }
    }

    console.log("\n📝 NEXT STEPS:")
    console.log("1. Update your .env.local file with the correct DATABASE_URL")
    console.log("2. Make sure your MongoDB Atlas cluster is running")
    console.log("3. Ensure your IP address is whitelisted in MongoDB Atlas")
    console.log("4. Run this test script again")
  }
}

testConnection()
