import Link from "next/link";
import { headers } from "next/headers";
import Badge from "@components/ui/Badge";
import Card from "@components/Card";
import { verifyDemoSession } from "../../../lib/demoAuth";

export const dynamic = "force-dynamic";

export default async function MiddlewareProtectedPage() {
  const user = await verifyDemoSession();
  const requestHeaders = headers();

  return (
    <div className="flex justify-center">
      <Card>
        <div className="bg-[#f5f6f7] px-6 py-3">
          <p className="text-xs font-bold leading-4 text-[#18794e]">Middleware / Proxy allowed</p>
          <h1 className="mt-1 text-base font-bold leading-5 text-[#111111]">Protected by Middleware / Proxy</h1>
          <p className="mt-2 text-sm leading-[18px] text-[#8a8d91]">
            middleware.js checked the cookie first. In Next 16 this same guard would live in proxy.js.
          </p>
        </div>

        <div className="px-6 py-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <p className="text-base font-bold leading-5 text-[#111111]">{user.name}</p>
              <p className="mt-1 font-mono text-xs leading-4 text-[#6b7078]">
                Middleware / Proxy path: {requestHeaders.get("x-step-22-path") || "missing"}
              </p>
            </div>
            <Badge tone={user.role === "admin" ? "success" : "neutral"}>{user.role}</Badge>
          </div>
        </div>

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">Why check twice?</p>
          <p className="mt-1 text-sm leading-[18px] text-[#8a8d91]">
            Middleware / Proxy is a fast gate. The page, Server Action, or Route Handler still owns the final secure data check.
          </p>
        </div>

        <div className="px-6 py-3">
          <Link className="text-sm font-bold leading-5 text-[#3f5f9f] hover:underline" href="/middleware-lab">
            Back to Step 22
          </Link>
        </div>
      </Card>
    </div>
  );
}
