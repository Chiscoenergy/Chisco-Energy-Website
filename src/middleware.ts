import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Allow static assets, Next.js internals, and image optimization endpoints
  if (
    request.nextUrl.pathname.startsWith("/_next") ||
    request.nextUrl.pathname.startsWith("/static") ||
    request.nextUrl.pathname.includes(".") ||
    request.nextUrl.pathname.startsWith("/favicon.ico") ||
    request.nextUrl.pathname.startsWith("/logo.png")
  ) {
    return NextResponse.next();
  }

  // Block API routes with specific 503 response
  if (request.nextUrl.pathname.startsWith("/api")) {
    return new NextResponse(
      JSON.stringify({
        error: "Service Unavailable",
        message:
          "This service is currently undergoing scheduled maintenance. Please contact support via WhatsApp or email.",
      }),
      { status: 503, headers: { "content-type": "application/json" } },
    );
  }

  // Allow the layout.tsx to handle the UI blocking for all other routes
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
