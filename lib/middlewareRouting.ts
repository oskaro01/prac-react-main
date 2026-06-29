export const middlewareFile = `// Next.js 14 working file: middleware.js
import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const requestHeaders = new Headers(request.headers);

  requestHeaders.set("x-step-22-path", pathname);

  if (pathname.startsWith("/middleware-lab/protected")) {
    const session = request.cookies.get("demo-session")?.value;

    if (!session) {
      const redirectUrl = request.nextUrl.clone();
      redirectUrl.pathname = "/middleware-lab";
      redirectUrl.searchParams.set("message", "middleware-redirect");
      return NextResponse.redirect(redirectUrl);
    }
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ["/middleware-lab/:path*"],
};`;

export const proxyFile = `// Next.js 16 equivalent file: proxy.js
import { NextResponse } from "next/server";

export function proxy(request) {
  const { pathname } = request.nextUrl;
  const requestHeaders = new Headers(request.headers);

  requestHeaders.set("x-step-22-path", pathname);

  if (pathname.startsWith("/middleware-lab/protected")) {
    const session = request.cookies.get("demo-session")?.value;

    if (!session) {
      const redirectUrl = request.nextUrl.clone();
      redirectUrl.pathname = "/middleware-lab";
      redirectUrl.searchParams.set("message", "middleware-redirect");
      return NextResponse.redirect(redirectUrl);
    }
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ["/middleware-lab/:path*"],
};`;

export const protectedPageCode = `import { verifyDemoSession } from "@/lib/demoAuth";

export default async function ProtectedPage() {
  const user = await verifyDemoSession();

  return <h1>Welcome, {user.name}</h1>;
}`;

export const fullCode = `${middlewareFile}

${proxyFile}

// app/middleware-lab/protected/page.js
${protectedPageCode}`;
