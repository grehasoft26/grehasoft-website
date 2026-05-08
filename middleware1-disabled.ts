import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Allow Next.js internals
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Allow access page
  if (pathname === "/access") {
    return NextResponse.next();
  }

  // Check cookie
  const auth = request.cookies.get("site_access");

  if (auth?.value === "granted") {
    return NextResponse.next();
  }

  // Redirect unauthenticated users
  return NextResponse.redirect(new URL("/access", request.url));
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next
     * - api
     * - static files
     */
    "/((?!_next|api|favicon.ico).*)",
  ],
};