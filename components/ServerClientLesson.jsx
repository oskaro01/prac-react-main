import { fullCode } from "../lib/serverClient";
import Card from "./Card";
import ClientClickDemo from "./ClientClickDemo";
import CodeBlock from "./CodeBlock";
import LessonNotes from "./LessonNotes";

const rules = [
  {
    type: "Server component",
    use: "Pages, layouts, fetching data, preparing content.",
    clue: "No useState, no onClick, no browser APIs.",
  },
  {
    type: "Client component",
    use: "Buttons, inputs, menus, tabs, animations.",
    clue: 'Needs "use client" at the top of the file.',
  },
];

export default function ServerClientLesson() {
  return (
    <div className="flex justify-center">
      <Card>
        <div className="bg-[#f5f6f7] px-6 py-3">
          <p className="text-xs font-bold leading-4 text-[#3f5f9f]">Step 7</p>
          <h1 className="mt-1 text-base font-bold leading-5 text-[#111111]">
            Server vs Client components
          </h1>
          <p className="mt-2 text-sm leading-[18px] text-[#8a8d91]">
            In Next.js, components are server components unless you choose client.
          </p>
        </div>

        <LessonNotes
          notes={[
            {
              title: "Default rule",
              body: "A normal component in the app router runs on the server first.",
            },
            {
              title: "Client rule",
              body: 'Use "use client" only when the component needs hooks or browser interaction.',
            },
            {
              title: "Best habit",
              body: "Keep big pages server-side and move only interactive parts into small client components.",
            },
          ]}
        />

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">When to use each one</p>
          <div className="mt-3 overflow-hidden rounded-[4px] border border-gray-200">
            {rules.map((rule) => (
              <div className="grid gap-1 border-b border-gray-200 px-4 py-2 last:border-b-0 md:grid-cols-[0.8fr_1.3fr_1.2fr]" key={rule.type}>
                <p className="text-sm font-bold leading-5 text-[#111111]">{rule.type}</p>
                <p className="text-sm leading-[18px] text-[#8a8d91]">{rule.use}</p>
                <p className="text-sm leading-[18px] text-[#8a8d91]">{rule.clue}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="px-6 py-3">
          <ClientClickDemo />
        </div>

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">What just happened</p>
          <p className="mt-1 text-sm leading-[18px] text-[#8a8d91]">
            This lesson page is a server component. Only the click counter is a client component because it needs state and a button click.
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
