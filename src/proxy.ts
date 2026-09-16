import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const PRIMARY_HOST = "www.sunandsandrealtor.com";
const LOCAL_HOSTS = new Set(["localhost", "127.0.0.1", "::1", "[::1]"]);

export function proxy(request: NextRequest) {
  const forwardedHost = request.headers
    .get("x-forwarded-host")
    ?.split(",")[0]
    ?.trim();
  const host = forwardedHost ?? request.headers.get("host") ?? request.nextUrl.host;
  let hostname = request.nextUrl.hostname.toLowerCase();

  try {
    hostname = new URL(`http://${host}`).hostname.toLowerCase();
  } catch {
    // Fall back to the parsed request URL when a proxy supplies an invalid host.
  }

  if (hostname === PRIMARY_HOST || LOCAL_HOSTS.has(hostname)) {
    return NextResponse.next();
  }

  const destination = new URL(request.nextUrl.pathname, `https://${PRIMARY_HOST}`);
  destination.search = request.nextUrl.search;

  return NextResponse.redirect(destination, 308);
}

export const config = {
  matcher: ["/((?!api|_next|favicon.ico).*)"],
};
