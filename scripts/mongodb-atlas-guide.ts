function showMongoDBAtlasGuide() {
  console.log("🌐 MongoDB Atlas Setup Guide")
  console.log("=".repeat(50))

  console.log("\n📋 Step 1: Create MongoDB Atlas Account")
  console.log("• Go to: https://www.mongodb.com/atlas")
  console.log("• Sign up for a free account")
  console.log("• Verify your email address")

  console.log("\n📋 Step 2: Create a New Cluster")
  console.log("• Click 'Create a New Cluster'")
  console.log("• Choose 'M0 Sandbox' (Free tier)")
  console.log("• Select a cloud provider and region")
  console.log("• Name your cluster (e.g., 'manuka-honey-cluster')")
  console.log("• Click 'Create Cluster'")

  console.log("\n📋 Step 3: Create Database User")
  console.log("• Go to 'Database Access' in the left sidebar")
  console.log("• Click 'Add New Database User'")
  console.log("• Choose 'Password' authentication")
  console.log("• Create username and strong password")
  console.log("• Set privileges to 'Read and write to any database'")
  console.log("• Click 'Add User'")

  console.log("\n📋 Step 4: Configure Network Access")
  console.log("• Go to 'Network Access' in the left sidebar")
  console.log("• Click 'Add IP Address'")
  console.log("• For development: Click 'Allow Access from Anywhere'")
  console.log("• For production: Add your specific IP addresses")
  console.log("• Click 'Confirm'")

  console.log("\n📋 Step 5: Get Connection String")
  console.log("• Go to 'Clusters' and click 'Connect'")
  console.log("• Choose 'Connect your application'")
  console.log("• Select 'Node.js' and version '4.1 or later'")
  console.log("• Copy the connection string")
  console.log("• Replace <password> with your database user password")
  console.log("• Replace <dbname> with 'manuka-honey-ecommerce'")

  console.log("\n📋 Step 6: Update Environment File")
  console.log("• Open your .env.local file")
  console.log("• Replace the DATABASE_URL with your connection string")
  console.log("• Save the file")

  console.log("\n✅ Example connection string format:")
  console.log(
    "mongodb+srv://myuser:mypassword@cluster0.abc123.mongodb.net/manuka-honey-ecommerce?retryWrites=true&w=majority",
  )

  console.log("\n🔧 Next steps after setup:")
  console.log("1. Run: npm run db:generate")
  console.log("2. Run: npm run db:push")
  console.log("3. Run: npm run db:seed")

  console.log("\n💡 Troubleshooting tips:")
  console.log("• Ensure your IP is whitelisted")
  console.log("• Check username/password are correct")
  console.log("• Verify cluster is running (not paused)")
  console.log("• Test connection with MongoDB Compass")
}

showMongoDBAtlasGuide()
