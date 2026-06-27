import { fullCode } from "../lib/routeHandlers";
import Card from "./Card";
import CodeBlock from "./CodeBlock";
import LessonNotes from "./LessonNotes";
import RouteHandlerTester from "./RouteHandlerTester";

const methods = [
  {
    method: "GET",
    purpose: "Read or return data.",
    example: "Load products or users.",
  },
  {
    method: "POST",
    purpose: "Receive and create data.",
    example: "Create a message or order.",
  },
];

export default function RouteHandlersLesson() {
  return (
    <div className="flex justify-center">
      <Card>
        <div className="bg-[#f5f6f7] px-6 py-3">
          <p className="text-xs font-bold leading-4 text-[#3f5f9f]">Step 11</p>
          <h1 className="mt-1 text-base font-bold leading-5 text-[#111111]">Route Handlers</h1>
          <p className="mt-2 text-sm leading-[18px] text-[#8a8d91]">
            A route.js file creates a backend API endpoint inside your Next.js application.
          </p>
        </div>

        <LessonNotes
          notes={[
            {
              title: "The route.js file",
              body: "app/api/lesson-profile/route.js becomes the /api/lesson-profile endpoint.",
            },
            {
              title: "HTTP methods",
              body: "Export functions named GET, POST, PUT, PATCH, or DELETE to handle requests.",
            },
            {
              title: "JSON response",
              body: "Response.json() sends structured data and an HTTP status back to the caller.",
            },
          ]}
        />

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">GET compared with POST</p>
          <div className="mt-3 overflow-hidden rounded-[4px] border border-gray-200">
            {methods.map((item) => (
              <div
                className="grid gap-1 border-b border-gray-200 px-4 py-2 last:border-b-0 md:grid-cols-[0.5fr_1fr_1.3fr]"
                key={item.method}
              >
                <p className="font-mono text-xs font-bold leading-5 text-[#3f5f9f]">{item.method}</p>
                <p className="text-sm leading-[18px] text-[#111111]">{item.purpose}</p>
                <p className="text-sm leading-[18px] text-[#8a8d91]">{item.example}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="px-6 py-3">
          <p className="mb-3 text-base font-bold leading-5 text-[#111111]">Try the local API</p>
          <RouteHandlerTester />
        </div>

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">What just happened</p>
          <p className="mt-1 text-sm leading-[18px] text-[#8a8d91]">
            The browser called /api/lesson-profile. Next.js selected GET or POST, ran that function on the server, and returned JSON.
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
