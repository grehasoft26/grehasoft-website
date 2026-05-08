import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const auth = request.cookies.get("site_access");

  const pathname = request.nextUrl.pathname;

  // Allow access page
  if (pathname === "/access") {
    return NextResponse.next();
  }

  // Allow static files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Check auth
  if (auth?.value === "granted") {
    return NextResponse.next();
  }

  // Redirect if not authenticated
  return NextResponse.redirect(new URL("/access", request.url));
}

export const config = {
  matcher: ["/:path*"],
};