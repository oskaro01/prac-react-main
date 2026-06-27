"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function NavigationApiDemo() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentView = searchParams.get("view") || "list";

  function updateView(view, method) {
    const nextParams = new URLSearchParams(searchParams.toString());
    nextParams.set("view", view);

    const nextUrl = `${pathname}?${nextParams.toString()}`;

    if (method === "replace") {
      router.replace(nextUrl, { scroll: false });
      return;
    }

    router.push(nextUrl, { scroll: false });
  }

  return (
    <div className="rounded-[4px] border border-gray-200 bg-[#fafbfc] px-4 py-3">
      <div className="grid gap-2 md:grid-cols-2">
        <div>
          <p className="text-xs font-bold leading-4 text-[#6b7078]">usePathname()</p>
          <p className="mt-1 break-words font-mono text-xs leading-5 text-[#111111]">{pathname}</p>
        </div>
        <div>
          <p className="text-xs font-bold leading-4 text-[#6b7078]">useSearchParams()</p>
          <p className="mt-1 break-words font-mono text-xs leading-5 text-[#111111]">
            view={currentView}
          </p>
        </div>
      </div>

      <div className="mt-3">
        <p className="text-xs font-bold leading-4 text-[#6b7078]">Change view mode</p>
        <div className="mt-2 inline-flex overflow-hidden rounded-[4px] border border-gray-300" role="group" aria-label="View mode">
          <button
            aria-pressed={currentView === "list"}
            className={`px-4 py-2 text-sm font-bold leading-5 ${
              currentView === "list" ? "bg-[#3f5f9f] text-white" : "bg-white text-[#111111] hover:bg-gray-50"
            }`}
            onClick={() => updateView("list", "push")}
            type="button"
          >
            List
          </button>
          <button
            aria-pressed={currentView === "grid"}
            className={`border-l border-gray-300 px-4 py-2 text-sm font-bold leading-5 ${
              currentView === "grid" ? "bg-[#3f5f9f] text-white" : "bg-white text-[#111111] hover:bg-gray-50"
            }`}
            onClick={() => updateView("grid", "replace")}
            type="button"
          >
            Grid
          </button>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        <button
          className="rounded-[4px] border border-gray-300 bg-white px-4 py-2 text-sm font-bold leading-5 text-[#111111] hover:bg-gray-50"
          onClick={() => router.refresh()}
          type="button"
        >
          Refresh route
        </button>
        <button
          className="rounded-[4px] border border-gray-300 bg-white px-4 py-2 text-sm font-bold leading-5 text-[#111111] hover:bg-gray-50"
          onClick={() => router.back()}
          type="button"
        >
          Go back
        </button>
      </div>
    </div>
  );
}
