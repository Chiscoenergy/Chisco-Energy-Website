import { timingSafeEqual } from "node:crypto";
import { SignJWT } from "jose";
import { NextRequest, NextResponse } from "next/server";
import { getAdminJwtSecret } from "@/lib/auth/admin";

export const runtime = "nodejs";

function matchesSecret(provided: string, expected: string): boolean {
  const providedBytes = Buffer.from(provided);
  const expectedBytes = Buffer.from(expected);

  return (
    providedBytes.length === expectedBytes.length &&
    timingSafeEqual(providedBytes, expectedBytes)
  );
}

export async function POST(request: NextRequest) {
  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;
  const jwtSecret = getAdminJwtSecret();

  if (!email || !password || !jwtSecret) {
    return NextResponse.json(
      { message: "Admin login is not configured on the server." },
      { status: 503 }
    );
  }

  let credentials: unknown;
  try {
    credentials = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }

  if (!credentials || typeof credentials !== "object") {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }

  const { email: providedEmail, password: providedPassword } = credentials as {
    email?: unknown;
    password?: unknown;
  };
  if (
    typeof providedEmail !== "string" ||
    typeof providedPassword !== "string" ||
    !matchesSecret(providedEmail.trim().toLowerCase(), email.trim().toLowerCase()) ||
    !matchesSecret(providedPassword, password)
  ) {
    return NextResponse.json(
      { message: "Invalid email or password." },
      { status: 401 }
    );
  }

  const token = await new SignJWT({ email, role: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("8h")
    .sign(new TextEncoder().encode(jwtSecret));

  const response = NextResponse.json({ success: true });
  response.cookies.set("admin-token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 8,
  });

  return response;
}
