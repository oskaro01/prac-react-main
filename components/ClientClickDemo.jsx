"use client";

import { useState } from "react";

export default function ClientClickDemo() {
  const [count, setCount] = useState(0);

  return (
    <div className="rounded-[4px] border border-gray-200 bg-[#fafbfc] px-4 py-3">
      <p className="text-base font-bold leading-5 text-[#111111]">Client component demo</p>
      <p className="mt-1 text-sm leading-[18px] text-[#8a8d91]">
        This small piece uses useState and onClick, so this file needs "use client".
      </p>

      <button
        className="mt-3 rounded-[4px] bg-[#3f5f9f] px-4 py-2 text-sm font-bold leading-5 text-white hover:bg-[#334f88]"
        onClick={() => setCount(count + 1)}
        type="button"
      >
        Clicked {count} times
      </button>
    </div>
  );
}
