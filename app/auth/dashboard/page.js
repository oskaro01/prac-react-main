import Link from "next/link";
import Badge from "@components/ui/Badge";
import Card from "@components/Card";
import { signOutDemo } from "../actions";
import { verifyDemoSession } from "../../../lib/demoAuth";

export const dynamic = "force-dynamic";

export default async function DashboardPage({ searchParams = {} }) {
  const user = await verifyDemoSession();

  return (
    <div className="flex justify-center">
      <Card>
        <div className="bg-[#f5f6f7] px-6 py-3">
          <p className="text-xs font-bold leading-4 text-[#3f5f9f]">Protected route</p>
          <h1 className="mt-1 text-base font-bold leading-5 text-[#111111]">Demo dashboard</h1>
          <p className="mt-2 text-sm leading-[18px] text-[#8a8d91]">
            verifyDemoSession redirected unauthenticated requests before this content rendered.
          </p>
        </div>

        {searchParams.message === "forbidden" && (
          <div className="px-6 py-3">
            <p className="text-sm font-bold leading-5 text-red-700">
              That page requires the admin role. The server denied access.
            </p>
          </div>
        )}

        <div className="px-6 py-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <p className="text-base font-bold leading-5 text-[#111111]">{user.name}</p>
              <p className="mt-1 font-mono text-xs leading-4 text-[#6b7078]">{user.id}</p>
            </div>
            <Badge tone={user.role === "admin" ? "success" : "neutral"}>{user.role}</Badge>
          </div>
        </div>

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">Authorization test</p>
          <p className="mt-1 text-sm leading-[18px] text-[#8a8d91]">
            Open the admin route. Students are redirected back; admins pass the server role check.
          </p>
          <Link
            className="mt-3 inline-block rounded-[4px] bg-[#3f5f9f] px-4 py-2 text-sm font-bold leading-5 text-white hover:bg-[#334f88]"
            href="/auth/admin"
          >
            Open admin route
          </Link>
        </div>

        <div className="flex flex-wrap gap-2 px-6 py-3">
          <Link
            className="rounded-[4px] border border-gray-300 bg-white px-4 py-2 text-sm font-bold leading-5 text-[#111111] hover:bg-gray-50"
            href="/auth"
          >
            Back to Step 21
          </Link>
          <form action={signOutDemo}>
            <button
              className="rounded-[4px] border border-gray-300 bg-white px-4 py-2 text-sm font-bold leading-5 text-[#111111] hover:bg-gray-50"
              type="submit"
            >
              Sign out
            </button>
          </form>
        </div>
      </Card>
    </div>
  );
}
