import { jwtVerify } from "jose";
import { NextRequest } from "next/server";

export function getAdminJwtSecret(): string | null {
  // ADMIN_PASSWORD is already a private server-side secret and provides a
  // backward-compatible signing key when JWT_SECRET has not been configured.
  return process.env.JWT_SECRET || process.env.ADMIN_PASSWORD || null;
}

export interface AdminUser {
  email: string;
  role: string;
}

export async function verifyAdminToken(
  token: string
): Promise<AdminUser | null> {
  try {
    const secret = getAdminJwtSecret();
    if (!secret) return null;

    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(secret)
    );
    return {
      email: payload.email as string,
      role: payload.role as string,
    };
  } catch {
    return null;
  }
}

export async function getAdminUser(
  request: NextRequest
): Promise<AdminUser | null> {
  const token = request.cookies.get("admin-token")?.value;

  if (!token) {
    return null;
  }

  return verifyAdminToken(token);
}

export async function requireAdmin(request: NextRequest): Promise<AdminUser> {
  const user = await getAdminUser(request);

  if (!user) {
    throw new Error("Unauthorized");
  }

  return user;
}
