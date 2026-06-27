import Link from "next/link";
import Card from "@components/Card";
import PrivateFolderNotice from "../../_parts/PrivateFolderNotice";

export default function RouteGroupPage() {
  return (
    <div className="flex justify-center">
      <Card>
        <div className="bg-[#f5f6f7] px-6 py-3">
          <p className="text-xs font-bold leading-4 text-[#3f5f9f]">Route group demo</p>
          <h1 className="mt-1 text-base font-bold leading-5 text-[#111111]">The URL skips (examples)</h1>
          <p className="mt-2 text-sm leading-[18px] text-[#8a8d91]">
            This file lives inside (examples), but the visible URL is only /advanced-routing/route-group.
          </p>
        </div>

        <div className="px-6 py-3">
          <PrivateFolderNotice />
        </div>

        <div className="px-6 py-3">
          <Link className="text-sm font-bold leading-5 text-[#3f5f9f] hover:underline" href="/advanced-routing">
            Back to Step 15
          </Link>
        </div>
      </Card>
    </div>
  );
}
