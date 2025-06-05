import fs from "fs"
import path from "path"

console.log("🔍 Checking environment setup...\n")

// Check if required files exist
const requiredFiles = ["package.json", "prisma/schema.prisma", ".env.local"]

let allFilesExist = true

for (const file of requiredFiles) {
  const filePath = path.join(process.cwd(), file)
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${file} exists`)
  } else {
    console.log(`❌ ${file} is missing`)
    allFilesExist = false
  }
}

if (!allFilesExist) {
  console.log("\n⚠️  Some required files are missing. Please ensure all files are created before running setup.")
  process.exit(1)
}

// Check .env.local content
const envPath = path.join(process.cwd(), ".env.local")
const envContent = fs.readFileSync(envPath, "utf8")

console.log("\n🔧 Environment variables check:")

const requiredEnvVars = ["DATABASE_URL", "NEXTAUTH_URL", "NEXTAUTH_SECRET"]

for (const envVar of requiredEnvVars) {
  if (envContent.includes(`${envVar}=`)) {
    const value = envContent.match(new RegExp(`${envVar}="?([^"\\n]+)"?`))?.[1]
    if (value && !value.includes("your-") && !value.includes("change-this")) {
      console.log(`✅ ${envVar} is configured`)
    } else {
      console.log(`⚠️  ${envVar} needs to be updated (currently using placeholder)`)
    }
  } else {
    console.log(`❌ ${envVar} is missing`)
  }
}

console.log("\n📝 Next steps:")
console.log("1. Update DATABASE_URL with your MongoDB connection string")
console.log("2. Update NEXTAUTH_SECRET with a secure random string")
console.log("3. Run the database setup script")

console.log("\n✅ Environment check completed!")
