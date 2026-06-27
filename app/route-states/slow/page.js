import Link from "next/link";
import Card from "@components/Card";

export const dynamic = "force-dynamic";

function wait(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

export default async function SlowPage() {
  await wait(2500);

  return (
    <div className="flex justify-center">
      <Card>
        <div className="bg-[#f5f6f7] px-6 py-3">
          <p className="text-xs font-bold leading-4 text-[#3f5f9f]">Step 10 demo</p>
          <h1 className="mt-1 text-base font-bold leading-5 text-[#111111]">Loading finished</h1>
          <p className="mt-2 text-sm leading-[18px] text-[#8a8d91]">
            The slow page is ready, so it replaced loading.js.
          </p>
        </div>

        <div className="px-6 py-3">
          <Link className="text-sm font-bold leading-5 text-[#3f5f9f] hover:underline" href="/route-states">
            Back to Step 10
          </Link>
        </div>
      </Card>
    </div>
  );
}
