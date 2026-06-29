import Link from "next/link";
import { headers } from "next/headers";
import Card from "@components/Card";

export const dynamic = "force-dynamic";

export default function MiddlewareHeadersPage({ searchParams = {} }) {
  const requestHeaders = headers();
  const rewritten = searchParams.rewritten === "1";

  return (
    <div className="flex justify-center">
      <Card>
        <div className="bg-[#f5f6f7] px-6 py-3">
          <p className="text-xs font-bold leading-4 text-[#3f5f9f]">Middleware / Proxy headers</p>
          <h1 className="mt-1 text-base font-bold leading-5 text-[#111111]">Request headers from Middleware / Proxy</h1>
          <p className="mt-2 text-sm leading-[18px] text-[#8a8d91]">
            middleware.js added request headers before this Server Component rendered. In Next 16 this would be proxy.js.
          </p>
        </div>

        {rewritten && (
          <div className="px-6 py-3">
            <p className="text-sm font-bold leading-5 text-[#18794e]">
              This content was reached through a rewrite from /middleware-lab/legacy.
            </p>
          </div>
        )}

        <div className="px-6 py-3">
          <div className="overflow-hidden rounded-[4px] border border-gray-200">
            <div className="grid gap-1 border-b border-gray-200 px-4 py-2 md:grid-cols-[0.8fr_1.7fr]">
              <p className="font-mono text-xs font-bold leading-5 text-[#3f5f9f]">x-step-22-path</p>
              <p className="break-words text-sm leading-[18px] text-[#111111]">
                {requestHeaders.get("x-step-22-path") || "missing"}
              </p>
            </div>
            <div className="grid gap-1 px-4 py-2 md:grid-cols-[0.8fr_1.7fr]">
              <p className="font-mono text-xs font-bold leading-5 text-[#3f5f9f]">x-step-22-time</p>
              <p className="break-words text-sm leading-[18px] text-[#111111]">
                {requestHeaders.get("x-step-22-time") || "missing"}
              </p>
            </div>
          </div>
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
