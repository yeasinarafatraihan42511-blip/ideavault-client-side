import { NextResponse } from "next/server";

export function middleware(request) {
  const session =
    request.cookies.get("better-auth.session_token");

  if (
    request.nextUrl.pathname.startsWith("/add-idea") &&
    !session
  ) {
    return NextResponse.redirect(
      new URL("/login", request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/add-idea/:path*"],
};