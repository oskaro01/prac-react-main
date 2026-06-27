"use client";

import Link from "next/link";
import Card from "@components/Card";

export default function Error({ error, reset }) {
  return (
    <div className="flex justify-center">
      <Card>
        <div className="bg-[#f5f6f7] px-6 py-3">
          <p className="text-xs font-bold leading-4 text-red-700">Step 10 demo</p>
          <h1 className="mt-1 text-base font-bold leading-5 text-[#111111]">Something went wrong</h1>
          <p className="mt-2 text-sm leading-[18px] text-[#8a8d91]">
            error.js caught the problem and kept the rest of the app available.
          </p>
        </div>

        <div className="px-6 py-3">
          <p className="text-sm leading-5 text-red-700">{error.message}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              className="rounded-[4px] bg-[#3f5f9f] px-4 py-2 text-sm font-bold leading-5 text-white hover:bg-[#334f88]"
              onClick={reset}
              type="button"
            >
              Try again
            </button>
            <Link
              className="rounded-[4px] border border-gray-300 bg-white px-4 py-2 text-sm font-bold leading-5 text-[#111111] hover:bg-[#f5f6f7]"
              href="/route-states"
            >
              Back to Step 10
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
}
