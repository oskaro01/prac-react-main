"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function AdvancedRouteModal({ id }) {
  const router = useRouter();
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        router.back();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [router]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 px-6 py-8"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          router.back();
        }
      }}
    >
      <section
        aria-labelledby="advanced-modal-title"
        aria-modal="true"
        className="w-full max-w-lg overflow-hidden rounded-[4px] border border-[#c9ccd1] bg-white shadow-xl"
        role="dialog"
      >
        <div className="flex items-start justify-between gap-4 border-b border-gray-200 bg-[#f5f6f7] px-5 py-4">
          <div>
            <p className="text-xs font-bold leading-4 text-[#3f5f9f]">Intercepted route</p>
            <h2 className="mt-1 text-base font-bold leading-5 text-[#111111]" id="advanced-modal-title">
              Detail #{id}
            </h2>
          </div>
          <button
            className="rounded-[4px] border border-gray-300 bg-white px-3 py-2 text-sm font-bold leading-4 text-[#111111] hover:bg-gray-50"
            onClick={() => router.back()}
            ref={closeButtonRef}
            type="button"
          >
            Close
          </button>
        </div>

        <div className="px-5 py-4">
          <p className="text-sm leading-[18px] text-[#6b7078]">
            The URL changed, but the Step 15 page stayed underneath because the route was intercepted into the @modal slot.
          </p>
          <p className="mt-2 text-sm leading-[18px] text-[#6b7078]">
            Refresh this URL to see the normal full-page version instead.
          </p>
        </div>
      </section>
    </div>
  );
}
