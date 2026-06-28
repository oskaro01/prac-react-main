import Link from "next/link";
import Badge from "@components/ui/Badge";
import Card from "@components/Card";
import { requireDemoAdmin } from "../../../lib/demoAuth";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const user = await requireDemoAdmin();

  return (
    <div className="flex justify-center">
      <Card>
        <div className="bg-[#f5f6f7] px-6 py-3">
          <p className="text-xs font-bold leading-4 text-[#18794e]">Admin authorization passed</p>
          <h1 className="mt-1 text-base font-bold leading-5 text-[#111111]">Admin-only route</h1>
          <p className="mt-2 text-sm leading-[18px] text-[#8a8d91]">
            requireDemoAdmin verified both the session and the admin role on the server.
          </p>
        </div>

        <div className="px-6 py-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-base font-bold leading-5 text-[#111111]">Welcome, {user.name}</p>
            <Badge tone="success">admin</Badge>
          </div>
          <p className="mt-1 text-sm leading-[18px] text-[#8a8d91]">
            Sensitive data would only be queried after this secure authorization check.
          </p>
        </div>

        <div className="px-6 py-3">
          <Link className="text-sm font-bold leading-5 text-[#3f5f9f] hover:underline" href="/auth/dashboard">
            Back to dashboard
          </Link>
        </div>
      </Card>
    </div>
  );
}
