"use client";

import { useRouter } from "next/navigation";

export default function StreamingReplayButton() {
  const router = useRouter();

  return (
    <button
      className="rounded-[4px] border border-gray-300 bg-white px-4 py-2 text-sm font-bold leading-5 text-[#111111] hover:bg-gray-50"
      onClick={() => router.refresh()}
      type="button"
    >
      Replay stream
    </button>
  );
}
