import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"

// GET dashboard statistics (admin only)
export async function GET(request: Request) {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== "ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    // Get total users
    const totalUsers = await prisma.user.count()

    // Get total products
    const totalProducts = await prisma.product.count()

    // Get total orders
    const totalOrders = await prisma.order.count()

    // Get total revenue
    const revenue = await prisma.order.aggregate({
      _sum: {
        total: true,
      },
      where: {
        paymentStatus: "PAID",
      },
    })

    // Get recent orders
    const recentOrders = await prisma.order.findMany({
      take: 5,
      orderBy: { createdAt: "desc" },
      include: {
        user: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    })

    // Get low stock products
    const lowStockProducts = await prisma.product.findMany({
      where: {
        stock: {
          lte: 10,
        },
      },
      take: 5,
      orderBy: { stock: "asc" },
    })

    return NextResponse.json({
      totalUsers,
      totalProducts,
      totalOrders,
      revenue: revenue._sum.total || 0,
      recentOrders,
      lowStockProducts,
    })
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch statistics" }, { status: 500 })
  }
}
