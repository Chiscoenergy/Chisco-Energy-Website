import { NextRequest, NextResponse } from "next/server";
import { getAdminUser } from "@/lib/auth/admin";

export async function GET(request: NextRequest) {
  try {
    const user = await getAdminUser(request);

    if (!user) {
      return NextResponse.json(
        { message: "Not authenticated" },
        { status: 401 }
      );
    }

    return NextResponse.json({
      user,
      authenticated: true,
    });
  } catch {
    return NextResponse.json(
      { message: "Authentication check failed" },
      { status: 500 }
    );
  }
}
