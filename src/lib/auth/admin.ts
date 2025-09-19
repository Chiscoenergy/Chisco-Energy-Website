import { jwtVerify } from "jose";
import { NextRequest } from "next/server";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

export interface AdminUser {
  email: string;
  role: string;
}

export async function verifyAdminToken(
  token: string
): Promise<AdminUser | null> {
  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(JWT_SECRET)
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
