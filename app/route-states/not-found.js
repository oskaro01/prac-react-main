import Link from "next/link";
import Card from "@components/Card";

export default function NotFound() {
  return (
    <div className="flex justify-center">
      <Card>
        <div className="bg-[#f5f6f7] px-6 py-3">
          <p className="text-xs font-bold leading-4 text-[#3f5f9f]">Step 10 demo</p>
          <h1 className="mt-1 text-base font-bold leading-5 text-[#111111]">Content not found</h1>
          <p className="mt-2 text-sm leading-[18px] text-[#8a8d91]">
            notFound() stopped the page and Next.js displayed not-found.js instead.
          </p>
        </div>

        <div className="px-6 py-3">
          <Link
            className="inline-block rounded-[4px] bg-[#3f5f9f] px-4 py-2 text-sm font-bold leading-5 text-white hover:bg-[#334f88]"
            href="/route-states"
          >
            Back to Step 10
          </Link>
        </div>
      </Card>
    </div>
  );
}
