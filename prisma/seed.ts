import { PrismaClient } from "@prisma/client"
import bcrypt from "bcryptjs"

const prisma = new PrismaClient()

async function main() {
  console.log("🌱 Starting database seed...")

  // Create admin user
  const hashedPassword = await bcrypt.hash("admin123", 12)

  const admin = await prisma.user.upsert({
    where: { email: "admin@manuka-albania.com" },
    update: {},
    create: {
      email: "admin@manuka-albania.com",
      password: hashedPassword,
      name: "Admin User",
      role: "admin",
    },
  })

  console.log("✅ Admin user created:", admin.email)

  // Create sample products
  const products = [
    {
      name: "Manuka Honey UMF 15+",
      description: "Premium Manuka honey with UMF 15+ rating. Raw, unprocessed, and certified authentic.",
      price: 45.99,
      image: "/placeholder.svg?height=400&width=400",
      category: "Honey",
      stock: 50,
    },
    {
      name: "Manuka Honey UMF 20+",
      description: "Ultra-premium Manuka honey with UMF 20+ rating. Exceptional quality and potency.",
      price: 89.99,
      image: "/placeholder.svg?height=400&width=400",
      category: "Honey",
      stock: 25,
    },
    {
      name: "Manuka Honey UMF 10+",
      description: "High-quality Manuka honey with UMF 10+ rating. Perfect for daily wellness.",
      price: 29.99,
      image: "/placeholder.svg?height=400&width=400",
      category: "Honey",
      stock: 75,
    },
  ]

  for (const product of products) {
    await prisma.product.upsert({
      where: { name: product.name },
      update: {},
      create: product,
    })
  }

  console.log("✅ Sample products created")

  // Create default settings
  const settings = [
    {
      key: "site_name",
      value: { value: "Manuka Bio Organik" },
    },
    {
      key: "site_description",
      value: { value: "Premium Manuka Honey from Albania" },
    },
    {
      key: "contact_email",
      value: { value: "info@manuka-albania.com" },
    },
    {
      key: "whatsapp_number",
      value: { value: "+355123456789" },
    },
  ]

  for (const setting of settings) {
    await prisma.settings.upsert({
      where: { key: setting.key },
      update: {},
      create: setting,
    })
  }

  console.log("✅ Default settings created")
  console.log("🎉 Database seed completed successfully!")
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error("❌ Seed failed:", e)
    await prisma.$disconnect()
    process.exit(1)
  })
