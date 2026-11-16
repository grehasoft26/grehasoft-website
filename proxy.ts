import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Mixed-case page URLs (/SEO, /Mobile-App-Development) are permanently
// redirected to their lowercase form, keeping the query string. The backend
// matches service slugs case-insensitively, so without this every case variant
// rendered (and was cached) as a duplicate page. Percent-escapes are kept as
// they are; the matcher skips Next.js internals and files (paths with a dot),
// since public assets may have uppercase names.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const lowercase = pathname.replace(/(%[0-9A-Fa-f]{2})|[A-Z]+/g, (match, escape) =>
    escape ? escape : match.toLowerCase()
  );

  if (lowercase === pathname) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = lowercase;
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: ['/((?!_next/|api/)[^.]*)'],
};
