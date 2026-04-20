import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const auth = request.cookies.get("site_access");

  // ✅ Allow if logged in
  if (auth?.value === "granted") {
    return NextResponse.next();
  }

  // ✅ Allow access page
  if (request.nextUrl.pathname.startsWith("/access")) {
    return NextResponse.next();
  }

  // ❌ Otherwise redirect
  return NextResponse.redirect(new URL("/access", request.url));
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};