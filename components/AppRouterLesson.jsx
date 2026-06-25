import { fullCode } from "../lib/appRouter";
import Card from "./Card";
import CodeBlock from "./CodeBlock";
import LessonNotes from "./LessonNotes";

const routes = [
  {
    file: "app/page.js",
    url: "/",
    meaning: "The home page.",
  },
  {
    file: "app/about/page.js",
    url: "/about",
    meaning: "A normal page route.",
  },
  {
    file: "app/products/page.js",
    url: "/products",
    meaning: "A page inside a folder.",
  },
  {
    file: "app/products/[id]/page.js",
    url: "/products/12",
    meaning: "A dynamic page. The id changes.",
  },
];

export default function AppRouterLesson() {
  return (
    <div className="flex justify-center">
      <Card>
        <div className="bg-[#f5f6f7] px-6 py-3">
          <p className="text-xs font-bold leading-4 text-[#3f5f9f]">Step 6</p>
          <h1 className="mt-1 text-base font-bold leading-5 text-[#111111]">
            Next.js App Router
          </h1>
          <p className="mt-2 text-sm leading-[18px] text-[#8a8d91]">
            In Next.js, folders inside app become website routes.
          </p>
        </div>

        <LessonNotes
          notes={[
            {
              title: "Big idea",
              body: "A page.js file tells Next.js, this folder should be a URL people can visit.",
            },
            {
              title: "Why it matters",
              body: "You build pages by creating folders instead of manually setting up a router.",
            },
            {
              title: "Watch this",
              body: "Nested folders become nested URLs, and [id] means the URL value can change.",
            },
          ]}
        />

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">Folder to URL map</p>
          <div className="mt-3 overflow-hidden rounded-[4px] border border-gray-200">
            {routes.map((route) => (
              <div className="grid gap-1 border-b border-gray-200 px-4 py-2 last:border-b-0 md:grid-cols-[1.2fr_0.7fr_1.4fr]" key={route.file}>
                <p className="font-mono text-xs leading-5 text-[#111111]">{route.file}</p>
                <p className="font-mono text-xs leading-5 text-[#3f5f9f]">{route.url}</p>
                <p className="text-sm leading-[18px] text-[#8a8d91]">{route.meaning}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">What just happened</p>
          <p className="mt-1 text-sm leading-[18px] text-[#8a8d91]">
            Next.js reads the app folder and creates routes for you. Link is used to move between those routes without a full page reload.
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
