import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const requestHeaders = new Headers(request.headers);

  requestHeaders.set("x-step-22-path", pathname);
  requestHeaders.set("x-step-22-time", new Date().toISOString());

  if (pathname === "/middleware-lab/legacy") {
    const rewriteUrl = request.nextUrl.clone();
    rewriteUrl.pathname = "/middleware-lab/headers";
    rewriteUrl.searchParams.set("rewritten", "1");

    const response = NextResponse.rewrite(rewriteUrl, {
      request: {
        headers: requestHeaders,
      },
    });
    response.headers.set("x-step-22-middleware", "rewrote");
    return response;
  }

  if (pathname.startsWith("/middleware-lab/protected")) {
    const session = request.cookies.get("demo-session")?.value;

    if (!session) {
      const redirectUrl = request.nextUrl.clone();
      redirectUrl.pathname = "/middleware-lab";
      redirectUrl.searchParams.set("message", "middleware-redirect");
      return NextResponse.redirect(redirectUrl);
    }
  }

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
  response.headers.set("x-step-22-middleware", "ran");
  return response;
}

export const config = {
  matcher: ["/middleware-lab/:path*"],
};
