import { NextRequest, NextResponse } from "next/server";
import { SignJWT } from "jose";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@chiscoenergy.com";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";
const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    // Validate credentials
    if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Create JWT token
    const token = await new SignJWT({
      email: ADMIN_EMAIL,
      role: "admin",
    })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("24h")
      .setIssuedAt()
      .sign(new TextEncoder().encode(JWT_SECRET));

    // Create response with token
    const response = NextResponse.json({
      message: "Login successful",
      user: {
        email: ADMIN_EMAIL,
        role: "admin",
      },
    });

    // Set HTTP-only cookie
    response.cookies.set("admin-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24, // 24 hours
    });

    return response;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
