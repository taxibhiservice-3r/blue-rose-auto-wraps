import { NextRequest, NextResponse } from "next/server";

export function proxy(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith("/admin/login")) {
    return NextResponse.next();
  }

  if (req.nextUrl.pathname.startsWith("/admin")) {
    const session = req.cookies.get("admin-session")?.value;
    if (session !== "authenticated") {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
