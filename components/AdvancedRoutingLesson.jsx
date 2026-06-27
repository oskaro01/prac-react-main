import Link from "next/link";
import { fullCode } from "../lib/advancedRouting";
import Card from "./Card";
import CodeBlock from "./CodeBlock";
import LessonNotes from "./LessonNotes";

const conventions = [
  {
    folder: "(group)",
    purpose: "Organizes routes without changing the URL.",
    example: "(shop)/products -> /products",
  },
  {
    folder: "_folder",
    purpose: "Keeps files private from the router.",
    example: "_parts/Button.jsx has no URL",
  },
  {
    folder: "[...slug]",
    purpose: "Captures multiple URL segments as an array.",
    example: "/guides/app/router",
  },
  {
    folder: "@modal",
    purpose: "Creates a parallel UI slot inside a layout.",
    example: "Render page and modal together",
  },
  {
    folder: "(.)details",
    purpose: "Intercepts a sibling route during soft navigation.",
    example: "Open a URL-backed modal",
  },
];

const demos = [
  {
    href: "/advanced-routing/route-group",
    title: "Route group + private folder",
    body: "The (examples) folder is omitted from the URL.",
  },
  {
    href: "/advanced-routing/guides/app-router/layouts",
    title: "Catch-all route",
    body: "The slug becomes an array of three segments.",
  },
  {
    href: "/advanced-routing/details/42",
    title: "Intercepted modal",
    body: "Click here for a modal, then refresh for a full page.",
  },
];

export default function AdvancedRoutingLesson() {
  return (
    <div className="flex justify-center">
      <Card>
        <div className="bg-[#f5f6f7] px-6 py-3">
          <p className="text-xs font-bold leading-4 text-[#3f5f9f]">Step 15</p>
          <h1 className="mt-1 text-base font-bold leading-5 text-[#111111]">Advanced App Router</h1>
          <p className="mt-2 text-sm leading-[18px] text-[#8a8d91]">
            Advanced route conventions organize large apps and create layouts, catch-all pages, and URL-backed modals.
          </p>
        </div>

        <LessonNotes
          notes={[
            {
              title: "Nested layouts",
              body: "A child layout wraps every page below it while the root layout remains active.",
            },
            {
              title: "Route organization",
              body: "Route groups and private folders organize code without adding unwanted URL segments.",
            },
            {
              title: "Parallel UI",
              body: "Parallel and intercepted routes can display a shareable route inside a modal slot.",
            },
          ]}
        />

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">Advanced folder conventions</p>
          <div className="mt-3 overflow-hidden rounded-[4px] border border-gray-200">
            {conventions.map((item) => (
              <div
                className="grid gap-1 border-b border-gray-200 px-4 py-2 last:border-b-0 md:grid-cols-[0.7fr_1.4fr_1.2fr]"
                key={item.folder}
              >
                <p className="font-mono text-xs font-bold leading-5 text-[#3f5f9f]">{item.folder}</p>
                <p className="text-sm leading-[18px] text-[#111111]">{item.purpose}</p>
                <p className="font-mono text-xs leading-5 text-[#6b7078]">{item.example}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">Nested layout chain</p>
          <div className="mt-3 grid gap-2 md:grid-cols-3">
            <div className="rounded-[4px] border border-gray-200 bg-[#fafbfc] px-4 py-3">
              <p className="font-mono text-xs font-bold leading-4 text-[#3f5f9f]">app/layout.js</p>
              <p className="mt-1 text-xs leading-4 text-[#6b7078]">Wraps the entire application.</p>
            </div>
            <div className="rounded-[4px] border border-gray-200 bg-[#fafbfc] px-4 py-3">
              <p className="font-mono text-xs font-bold leading-4 text-[#3f5f9f]">advanced-routing/layout.js</p>
              <p className="mt-1 text-xs leading-4 text-[#6b7078]">Adds the shared nav, label, and modal slot.</p>
            </div>
            <div className="rounded-[4px] border border-gray-200 bg-[#fafbfc] px-4 py-3">
              <p className="font-mono text-xs font-bold leading-4 text-[#3f5f9f]">page.js</p>
              <p className="mt-1 text-xs leading-4 text-[#6b7078]">Supplies the content inside both layouts.</p>
            </div>
          </div>
        </div>

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">Try the routing examples</p>
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
            Next.js used folder names as routing instructions. Some changed matching behavior, while route groups, private folders, and slots stayed out of the visible URL.
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
