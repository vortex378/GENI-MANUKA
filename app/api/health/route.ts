import { NextResponse } from "next/server"
import { checkDatabaseConnection } from "@/lib/db-check"

export async function GET() {
  const dbStatus = await checkDatabaseConnection()

  return NextResponse.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    database: dbStatus,
  })
}
