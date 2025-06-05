import { PrismaClient, Role } from "@prisma/client"
import bcrypt from "bcryptjs"

const prisma = new PrismaClient()

async function main() {
  console.log("🌱 Starting database seeding...")

  // Create admin user
  const hashedPassword = await bcrypt.hash("admin123", 12)

  const admin = await prisma.user.upsert({
    where: { email: "admin@manuka-bio-organik.com" },
    update: {},
    create: {
      email: "admin@manuka-bio-organik.com",
      name: "Admin User",
      password: hashedPassword,
      role: Role.ADMIN,
    },
  })

  console.log("✅ Admin user created:", admin.email)

  // Create categories
  const categories = [
    {
      name: "Manuka Honey",
      slug: "manuka-honey",
      description: "Premium Manuka honey from New Zealand",
    },
    {
      name: "Raw Honey",
      slug: "raw-honey",
      description: "Unprocessed raw honey varieties",
    },
    {
      name: "Honey Products",
      slug: "honey-products",
      description: "Honey-based health and beauty products",
    },
  ]

  for (const category of categories) {
    await prisma.category.upsert({
      where: { slug: category.slug },
      update: {},
      create: category,
    })
  }

  console.log("✅ Categories created")

  // Create sample products
  const products = [
    {
      name: "Premium Manuka Honey UMF 15+",
      slug: "premium-manuka-honey-umf-15",
      description:
        "Our premium UMF 15+ Manuka honey is sourced directly from the pristine forests of New Zealand. This therapeutic grade honey offers exceptional antibacterial properties and a rich, complex flavor profile.",
      price: 89.99,
      comparePrice: 109.99,
      images: ["/images/manuka-honey-umf15-1.jpg", "/images/manuka-honey-umf15-2.jpg"],
      category: "Manuka Honey",
      stock: 50,
      featured: true,
      weight: 250,
      sku: "MH-UMF15-250G",
      tags: ["UMF 15+", "Premium", "Therapeutic"],
    },
    {
      name: "Manuka Honey UMF 10+",
      slug: "manuka-honey-umf-10",
      description:
        "High-quality UMF 10+ Manuka honey with proven antibacterial activity. Perfect for daily wellness and immune support.",
      price: 59.99,
      comparePrice: 74.99,
      images: ["/images/manuka-honey-umf10-1.jpg", "/images/manuka-honey-umf10-2.jpg"],
      category: "Manuka Honey",
      stock: 75,
      featured: true,
      weight: 250,
      sku: "MH-UMF10-250G",
      tags: ["UMF 10+", "Daily Wellness"],
    },
    {
      name: "Raw Wildflower Honey",
      slug: "raw-wildflower-honey",
      description:
        "Pure, unfiltered wildflower honey harvested from diverse floral sources. Rich in enzymes and natural nutrients.",
      price: 24.99,
      comparePrice: 29.99,
      images: ["/images/wildflower-honey-1.jpg", "/images/wildflower-honey-2.jpg"],
      category: "Raw Honey",
      stock: 100,
      featured: false,
      weight: 500,
      sku: "RH-WF-500G",
      tags: ["Raw", "Wildflower", "Unfiltered"],
    },
    {
      name: "Manuka Honey Gift Set",
      slug: "manuka-honey-gift-set",
      description:
        "Beautiful gift set containing UMF 10+ and UMF 15+ Manuka honey in elegant packaging. Perfect for special occasions.",
      price: 139.99,
      comparePrice: 169.99,
      images: ["/images/gift-set-1.jpg", "/images/gift-set-2.jpg"],
      category: "Honey Products",
      stock: 25,
      featured: true,
      weight: 500,
      sku: "GS-MH-DUAL",
      tags: ["Gift Set", "Premium", "UMF Certified"],
    },
  ]

  for (const product of products) {
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: {},
      create: product,
    })
  }

  console.log("✅ Sample products created")

  // Create a test user
  const testUserPassword = await bcrypt.hash("user123", 12)

  const testUser = await prisma.user.upsert({
    where: { email: "user@example.com" },
    update: {},
    create: {
      email: "user@example.com",
      name: "Test User",
      password: testUserPassword,
      role: Role.USER,
    },
  })

  console.log("✅ Test user created:", testUser.email)

  console.log("🎉 Database seeding completed!")
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
