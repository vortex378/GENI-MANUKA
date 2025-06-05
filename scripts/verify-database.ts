import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function verifyDatabase() {
  console.log("🔍 Verifying database setup...\n")

  try {
    // Test database connection
    await prisma.$connect()
    console.log("✅ Database connection successful")

    // Check if users exist
    const userCount = await prisma.user.count()
    console.log(`✅ Users in database: ${userCount}`)

    // Check if products exist
    const productCount = await prisma.product.count()
    console.log(`✅ Products in database: ${productCount}`)

    // Check if categories exist
    const categoryCount = await prisma.category.count()
    console.log(`✅ Categories in database: ${categoryCount}`)

    // Check admin user
    const adminUser = await prisma.user.findFirst({
      where: { role: "ADMIN" },
    })

    if (adminUser) {
      console.log(`✅ Admin user found: ${adminUser.email}`)
    } else {
      console.log("⚠️  No admin user found")
    }

    // List sample products
    const products = await prisma.product.findMany({
      take: 3,
      select: { name: true, price: true, stock: true },
    })

    if (products.length > 0) {
      console.log("\n📦 Sample products:")
      products.forEach((product) => {
        console.log(`  • ${product.name} - $${product.price} (Stock: ${product.stock})`)
      })
    }

    console.log("\n🎉 Database verification completed successfully!")
    console.log("Your e-commerce database is ready to use.")
  } catch (error) {
    console.error("❌ Database verification failed:")
    console.error(error)

    if (error instanceof Error && error.message.includes("ENOTFOUND")) {
      console.log("\n💡 Troubleshooting tips:")
      console.log("1. Check your DATABASE_URL in .env.local")
      console.log("2. Ensure your MongoDB cluster is running")
      console.log("3. Verify network connectivity")
    }
  } finally {
    await prisma.$disconnect()
  }
}

verifyDatabase()
