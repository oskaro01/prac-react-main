import Link from "next/link";
import { fullCode } from "../lib/routeStates";
import Card from "./Card";
import CodeBlock from "./CodeBlock";
import LessonNotes from "./LessonNotes";

const routeFiles = [
  {
    file: "loading.js",
    appears: "While a page is waiting",
    job: "Shows an immediate loading screen.",
  },
  {
    file: "error.js",
    appears: "When a page throws an error",
    job: "Shows a safe error screen with retry.",
  },
  {
    file: "not-found.js",
    appears: "When content does not exist",
    job: "Shows a useful 404-style screen.",
  },
];

const demos = [
  {
    href: "/route-states/slow",
    title: "Loading demo",
    body: "Waits briefly so loading.js has time to appear.",
  },
  {
    href: "/route-states/error-demo",
    title: "Error demo",
    body: "Throws an error so error.js takes over.",
  },
  {
    href: "/route-states/missing",
    title: "Not found demo",
    body: "Calls notFound() to show not-found.js.",
  },
];

export default function RouteStatesLesson() {
  return (
    <div className="flex justify-center">
      <Card>
        <div className="bg-[#f5f6f7] px-6 py-3">
          <p className="text-xs font-bold leading-4 text-[#3f5f9f]">Step 10</p>
          <h1 className="mt-1 text-base font-bold leading-5 text-[#111111]">
            Loading, error, and not found
          </h1>
          <p className="mt-2 text-sm leading-[18px] text-[#8a8d91]">
            Next.js uses special files to handle waiting, failures, and missing content.
          </p>
        </div>

        <LessonNotes
          notes={[
            {
              title: "Automatic loading",
              body: "Next.js shows loading.js while the page inside that route segment is waiting.",
            },
            {
              title: "Safe errors",
              body: "error.js catches a rendering error so the whole application does not become unusable.",
            },
            {
              title: "Missing content",
              body: "Call notFound() when a requested product, post, or user does not exist.",
            },
          ]}
        />

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">Three special files</p>
          <div className="mt-3 overflow-hidden rounded-[4px] border border-gray-200">
            {routeFiles.map((item) => (
              <div
                className="grid gap-1 border-b border-gray-200 px-4 py-2 last:border-b-0 md:grid-cols-[0.7fr_1.2fr_1.3fr]"
                key={item.file}
              >
                <p className="font-mono text-xs font-bold leading-5 text-[#3f5f9f]">{item.file}</p>
                <p className="text-sm leading-[18px] text-[#111111]">{item.appears}</p>
                <p className="text-sm leading-[18px] text-[#8a8d91]">{item.job}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">Try each route state</p>
          <div className="mt-3 grid gap-2 md:grid-cols-3">
            {demos.map((demo) => (
              <Link
                className="block rounded-[4px] border border-gray-200 bg-[#fafbfc] px-4 py-3 hover:border-[#3f5f9f] hover:bg-[#f5f6f7]"
                href={demo.href}
                key={demo.href}
              >
                <span className="block text-sm font-bold leading-5 text-[#111111]">{demo.title}</span>
                <span className="mt-1 block text-xs leading-4 text-[#6b7078]">{demo.body}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">What just happened</p>
          <p className="mt-1 text-sm leading-[18px] text-[#8a8d91]">
            These files belong to the route-states folder, so they protect that route and its child routes automatically.
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
