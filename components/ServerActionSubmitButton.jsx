"use client";

import { useFormStatus } from "react-dom";

export default function ServerActionSubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="shrink-0 rounded-[4px] bg-[#3f5f9f] px-4 py-2 text-sm font-bold leading-5 text-white hover:bg-[#334f88] disabled:cursor-not-allowed disabled:opacity-60"
      disabled={pending}
      type="submit"
    >
      {pending ? "Submitting..." : "Submit goal"}
    </button>
  );
}
