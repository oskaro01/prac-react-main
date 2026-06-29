import Link from "next/link";
import {
  signInMiddlewareDemo,
  signOutMiddlewareDemo,
} from "../app/middleware-lab/actions";
import { fullCode } from "../lib/middlewareRouting";
import Badge from "./ui/Badge";
import Button from "./ui/Button";
import Card from "./Card";
import CodeBlock from "./CodeBlock";
import LessonNotes from "./LessonNotes";

const actions = [
  {
    name: "file name",
    job: "Next 14 uses middleware.js. Next 16 docs call the same feature proxy.js.",
    example: "middleware -> proxy",
  },
  {
    name: "matcher",
    job: "Chooses which routes Middleware / Proxy runs on.",
    example: "/middleware-lab/:path*",
  },
  {
    name: "redirect",
    job: "Sends the user to a different URL.",
    example: "No session -> lesson page",
  },
  {
    name: "rewrite",
    job: "Shows a different route without changing the visible URL.",
    example: "/legacy -> /headers",
  },
  {
    name: "headers",
    job: "Passes request context into Server Components.",
    example: "x-step-22-path",
  },
];

const versionRows = [
  {
    version: "Next.js 14",
    file: "middleware.js",
    exportName: "middleware(request)",
  },
  {
    version: "Next.js 16",
    file: "proxy.js",
    exportName: "proxy(request)",
  },
];

const messages = {
  "middleware-redirect": "Middleware / Proxy stopped the protected page before it rendered.",
  "signed-in": "Demo session created. Try the protected route now.",
  "signed-out": "Demo session cleared.",
};

export default function MiddlewareLesson({ message, middlewarePath, middlewareTime, user }) {
  return (
    <div className="flex justify-center">
      <Card>
        <div className="bg-[#f5f6f7] px-6 py-3">
          <p className="text-xs font-bold leading-4 text-[#3f5f9f]">Step 22</p>
          <h1 className="mt-1 text-base font-bold leading-5 text-[#111111]">Middleware / Proxy and route protection</h1>
          <p className="mt-2 text-sm leading-[18px] text-[#8a8d91]">
            Run request code before a route renders. In this Next.js 14 project the file is middleware.js; in current Next.js docs the same idea is called Proxy.
          </p>
        </div>

        <LessonNotes
          notes={[
            {
              title: "Same feature",
              body: "Middleware in Next 14 became Proxy in Next 16. The request-time job stayed the same.",
            },
            {
              title: "Run before render",
              body: "It sees the request before the page, layout, or route handler runs.",
            },
            {
              title: "Verify again",
              body: "Proxy can guard routes, but pages and mutations still need server-side permission checks.",
            },
          ]}
        />

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">What Middleware / Proxy can do</p>
          <div className="mt-3 overflow-hidden rounded-[4px] border border-gray-200">
            {actions.map((item) => (
              <div
                className="grid gap-1 border-b border-gray-200 px-4 py-2 last:border-b-0 md:grid-cols-[0.7fr_1.5fr_1.1fr]"
                key={item.name}
              >
                <p className="font-mono text-xs font-bold leading-5 text-[#3f5f9f]">{item.name}</p>
                <p className="text-sm leading-[18px] text-[#111111]">{item.job}</p>
                <p className="text-sm leading-[18px] text-[#8a8d91]">{item.example}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="px-6 py-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <p className="text-base font-bold leading-5 text-[#111111]">Live Middleware / Proxy lab</p>
              <p className="mt-1 text-sm leading-[18px] text-[#8a8d91]">
                This page is inside the matcher, so middleware.js added request headers before rendering. In Next 16, that file would be proxy.js.
              </p>
            </div>
            <Badge tone={user ? "success" : "neutral"}>{user ? user.role : "no session"}</Badge>
          </div>

          {messages[message] && (
            <p className="mt-2 text-sm font-bold leading-5 text-[#3f5f9f]">{messages[message]}</p>
          )}

          <div className="mt-3 grid gap-2 md:grid-cols-2">
            <div className="rounded-[4px] border border-gray-200 bg-[#fafbfc] px-4 py-3">
              <p className="text-xs font-bold leading-4 text-[#6b7078]">Middleware / Proxy request path</p>
              <p className="mt-2 break-words font-mono text-sm leading-5 text-[#111111]">{middlewarePath}</p>
              <p className="mt-2 break-words font-mono text-xs leading-4 text-[#6b7078]">{middlewareTime}</p>
            </div>
            <div className="rounded-[4px] border border-gray-200 bg-[#fafbfc] px-4 py-3">
              <p className="text-xs font-bold leading-4 text-[#6b7078]">Demo session</p>
              <p className="mt-2 text-sm font-bold leading-5 text-[#111111]">
                {user ? user.name : "No signed-in demo user"}
              </p>
              <p className="mt-1 text-xs leading-4 text-[#6b7078]">
                The same demo-session cookie from Step 21 is used here.
              </p>
            </div>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            <form action={signInMiddlewareDemo}>
              <Button name="role" type="submit" value="student">
                Sign in student
              </Button>
            </form>
            <form action={signInMiddlewareDemo}>
              <Button name="role" type="submit" value="admin" variant="secondary">
                Sign in admin
              </Button>
            </form>
            <form action={signOutMiddlewareDemo}>
              <Button type="submit" variant="secondary">
                Clear session
              </Button>
            </form>
          </div>
        </div>

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">Try each Proxy-style result</p>
          <div className="mt-3 grid gap-2 md:grid-cols-3">
            <Link
              className="rounded-[4px] border border-gray-200 bg-white px-4 py-3 text-sm font-bold leading-5 text-[#3f5f9f] hover:bg-[#f5f6f7]"
              href="/middleware-lab/protected"
            >
              Protected route
            </Link>
            <Link
              className="rounded-[4px] border border-gray-200 bg-white px-4 py-3 text-sm font-bold leading-5 text-[#3f5f9f] hover:bg-[#f5f6f7]"
              href="/middleware-lab/headers"
            >
              Header route
            </Link>
            <Link
              className="rounded-[4px] border border-gray-200 bg-white px-4 py-3 text-sm font-bold leading-5 text-[#3f5f9f] hover:bg-[#f5f6f7]"
              href="/middleware-lab/legacy"
            >
              Rewrite route
            </Link>
          </div>
        </div>

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">File name by Next.js version</p>
          <div className="mt-3 overflow-hidden rounded-[4px] border border-gray-200">
            {versionRows.map((item) => (
              <div
                className="grid gap-1 border-b border-gray-200 px-4 py-2 last:border-b-0 md:grid-cols-[0.8fr_0.8fr_1fr]"
                key={item.version}
              >
                <p className="text-sm font-bold leading-5 text-[#111111]">{item.version}</p>
                <p className="font-mono text-xs font-bold leading-5 text-[#3f5f9f]">{item.file}</p>
                <p className="font-mono text-xs leading-5 text-[#6b7078]">{item.exportName}</p>
              </div>
            ))}
          </div>
          <p className="mt-2 text-sm leading-[18px] text-[#8a8d91]">
            The real project file stays middleware.js because package.json uses Next.js 14.2.5. Creating proxy.js here would teach the newest name but would not match the installed version.
          </p>
        </div>

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">What just happened</p>
          <p className="mt-1 text-sm leading-[18px] text-[#8a8d91]">
            Middleware, now called Proxy in newer docs, matched only this lab, redirected unsigned requests away from the protected page, rewrote a legacy URL, and passed headers into Server Components.
          </p>
        </div>

        <div className="px-6 py-3">
          <p className="mb-3 text-base font-bold leading-5 text-[#111111]">Code preview</p>
          <CodeBlock code={fullCode} />
        </div>
      </Card>
    </div>
  );
}
