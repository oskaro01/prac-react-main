"use client";

import { useFormStatus } from "react-dom";

const variants = {
  primary: "bg-[#3f5f9f] text-white hover:bg-[#334f88]",
  secondary: "border border-gray-300 bg-white text-[#111111] hover:bg-gray-50",
  danger: "border border-red-300 bg-white text-red-700 hover:bg-red-50",
};

export default function CrudSubmitButton({ label, pendingLabel, variant = "primary" }) {
  const { pending } = useFormStatus();

  return (
    <button
      className={`shrink-0 rounded-[4px] px-4 py-2 text-sm font-bold leading-5 disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant]}`}
      disabled={pending}
      type="submit"
    >
      {pending ? pendingLabel : label}
    </button>
  );
}
