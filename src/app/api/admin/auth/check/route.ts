import { NextRequest, NextResponse } from "next/server";
import { getAdminUser } from "@/lib/auth/admin";

export async function GET(request: NextRequest) {
  const user = await getAdminUser(request);
  if (!user || user.role !== "admin") {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }

  return NextResponse.json({ authenticated: true });
}
