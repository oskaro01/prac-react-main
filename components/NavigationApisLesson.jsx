import { Suspense } from "react";
import { setLessonMode } from "../app/navigation-apis/actions";
import { fullCode } from "../lib/navigationApis";
import Card from "./Card";
import CodeBlock from "./CodeBlock";
import LessonNotes from "./LessonNotes";
import NavigationApiDemo from "./NavigationApiDemo";

const apiRows = [
  { api: "useRouter", side: "Client", purpose: "Push, replace, refresh, or go back." },
  { api: "usePathname", side: "Client", purpose: "Read the current URL path." },
  { api: "useSearchParams", side: "Client", purpose: "Read query-string values." },
  { api: "redirect", side: "Server", purpose: "Stop work and send the user elsewhere." },
  { api: "cookies", side: "Server", purpose: "Read or write request cookies." },
  { api: "headers", side: "Server", purpose: "Read incoming request headers." },
];

export default function NavigationApisLesson({ requestInfo, saved }) {
  return (
    <div className="flex justify-center">
      <Card>
        <div className="bg-[#f5f6f7] px-6 py-3">
          <p className="text-xs font-bold leading-4 text-[#3f5f9f]">Step 16</p>
          <h1 className="mt-1 text-base font-bold leading-5 text-[#111111]">Navigation and request APIs</h1>
          <p className="mt-2 text-sm leading-[18px] text-[#8a8d91]">
            Next.js provides different APIs for browser navigation and server request information.
          </p>
        </div>

        <LessonNotes
          notes={[
            {
              title: "Client navigation",
              body: "Navigation hooks require use client because they react to the browser URL.",
            },
            {
              title: "Server requests",
              body: "cookies and headers read information that belongs to the incoming server request.",
            },
            {
              title: "Choose carefully",
              body: "Use Link for normal links and useRouter only when navigation must happen in code.",
            },
          ]}
        />

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">Which API runs where?</p>
          <div className="mt-3 overflow-hidden rounded-[4px] border border-gray-200">
            {apiRows.map((item) => (
              <div
                className="grid gap-1 border-b border-gray-200 px-4 py-2 last:border-b-0 md:grid-cols-[0.8fr_0.5fr_1.5fr]"
                key={item.api}
              >
                <p className="font-mono text-xs font-bold leading-5 text-[#3f5f9f]">{item.api}</p>
                <p className="text-sm font-bold leading-[18px] text-[#111111]">{item.side}</p>
                <p className="text-sm leading-[18px] text-[#8a8d91]">{item.purpose}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="px-6 py-3">
          <p className="mb-3 text-base font-bold leading-5 text-[#111111]">Client navigation demo</p>
          <Suspense
            fallback={
              <div className="rounded-[4px] border border-gray-200 bg-[#fafbfc] px-4 py-3 text-sm text-[#6b7078]">
                Reading the browser URL...
              </div>
            }
          >
            <NavigationApiDemo />
          </Suspense>
        </div>

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">Server request values</p>
          <div className="mt-3 overflow-hidden rounded-[4px] border border-gray-200">
            <div className="grid gap-1 border-b border-gray-200 px-4 py-2 md:grid-cols-[0.8fr_1.8fr]">
              <p className="text-sm font-bold leading-5 text-[#111111]">searchParams.view</p>
              <p className="break-words font-mono text-xs leading-5 text-[#6b7078]">{requestInfo.view}</p>
            </div>
            <div className="grid gap-1 border-b border-gray-200 px-4 py-2 md:grid-cols-[0.8fr_1.8fr]">
              <p className="text-sm font-bold leading-5 text-[#111111]">Cookie: lesson-mode</p>
              <p className="break-words font-mono text-xs leading-5 text-[#6b7078]">{requestInfo.lessonMode}</p>
            </div>
            <div className="grid gap-1 px-4 py-2 md:grid-cols-[0.8fr_1.8fr]">
              <p className="text-sm font-bold leading-5 text-[#111111]">Header: user-agent</p>
              <p className="break-all font-mono text-xs leading-5 text-[#6b7078]">{requestInfo.userAgent}</p>
            </div>
          </div>
        </div>

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">Write a server cookie</p>
          <p className="mt-1 text-sm leading-[18px] text-[#8a8d91]">
            This Server Action writes an HTTP-only cookie, then redirect() sends the browser back to this lesson.
          </p>
          <form action={setLessonMode} className="mt-3 flex flex-wrap gap-2">
            <input name="view" type="hidden" value={requestInfo.view} />
            <button
              className="rounded-[4px] bg-[#3f5f9f] px-4 py-2 text-sm font-bold leading-5 text-white hover:bg-[#334f88]"
              name="mode"
              type="submit"
              value="standard"
            >
              Save standard mode
            </button>
            <button
              className="rounded-[4px] border border-gray-300 bg-white px-4 py-2 text-sm font-bold leading-5 text-[#111111] hover:bg-gray-50"
              name="mode"
              type="submit"
              value="focus"
            >
              Save focus mode
            </button>
          </form>
          {saved && (
            <p className="mt-2 text-sm font-bold leading-5 text-[#18794e]">
              The cookie was saved and read by the Server Component.
            </p>
          )}
        </div>

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">What just happened</p>
          <p className="mt-1 text-sm leading-[18px] text-[#8a8d91]">
            Client hooks changed and read the browser URL. Server APIs read the request, while the action wrote a cookie and redirected safely.
          </p>
        </div>

        <div className="px-6 py-3">
          <p className="mb-3 text-base font-bold leading-5 text-[#111111]">Code preview</p>
          <CodeBlock code={fullCode} />
        </div>
      </Card>
    </div>
  );
}
