import { fullCode, typeErrorCode } from "../lib/typeScriptNext";
import Badge from "./ui/Badge";
import Card from "./Card";
import CodeBlock from "./CodeBlock";
import LessonNotes from "./LessonNotes";

const basicTypes = [
  { type: "string", example: 'name: "Amina"', use: "Text values" },
  { type: "number", example: "lessons: 14", use: "Numbers" },
  { type: "boolean", example: "isReady: true", use: "Yes or no" },
  { type: "string[]", example: '["React", "Next.js"]', use: "List of strings" },
  { type: "optional", example: "bio?: string", use: "Value may be missing" },
  { type: "union", example: 'level: "new" | "ready"', use: "Limited choices" },
];

const nextTypes = [
  {
    place: "Component props",
    example: "type CardProps = { title: string }",
    reason: "Prevents missing or incorrect props.",
  },
  {
    place: "API data",
    example: "Promise<Product[]>",
    reason: "Documents the data your UI expects.",
  },
  {
    place: "Dynamic routes",
    example: "params: { id: string }",
    reason: "Describes values received from the URL.",
  },
  {
    place: "Forms",
    example: "FormDataEntryValue | null",
    reason: "Forces you to handle missing form values.",
  },
];

const learner = {
  name: "Next.js Learner",
  goal: "Build reliable full-stack applications",
  level: "Learning",
};

export default function TypeScriptLesson() {
  return (
    <div className="flex justify-center">
      <Card>
        <div className="bg-[#f5f6f7] px-6 py-3">
          <p className="text-xs font-bold leading-4 text-[#3f5f9f]">Step 14</p>
          <h1 className="mt-1 text-base font-bold leading-5 text-[#111111]">TypeScript with Next.js</h1>
          <p className="mt-2 text-sm leading-[18px] text-[#8a8d91]">
            TypeScript describes the shape of your data and catches mistakes before users encounter them.
          </p>
        </div>

        <LessonNotes
          notes={[
            {
              title: "Compile-time safety",
              body: "TypeScript reports incorrect values in your editor or build before the code runs.",
            },
            {
              title: "Type inference",
              body: "TypeScript often understands simple values automatically, so not everything needs a written type.",
            },
            {
              title: "Runtime warning",
              body: "Types disappear after compilation. External API and form data still need runtime validation.",
            },
          ]}
        />

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">Common TypeScript types</p>
          <div className="mt-3 overflow-hidden rounded-[4px] border border-gray-200">
            {basicTypes.map((item) => (
              <div
                className="grid gap-1 border-b border-gray-200 px-4 py-2 last:border-b-0 md:grid-cols-[0.6fr_1.2fr_1fr]"
                key={item.type}
              >
                <p className="font-mono text-xs font-bold leading-5 text-[#3f5f9f]">{item.type}</p>
                <p className="font-mono text-xs leading-5 text-[#111111]">{item.example}</p>
                <p className="text-sm leading-[18px] text-[#8a8d91]">{item.use}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">A typed data shape</p>
          <div className="mt-3 rounded-[4px] border border-gray-200 bg-[#fafbfc] px-4 py-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <p className="text-sm font-bold leading-5 text-[#111111]">{learner.name}</p>
                <p className="mt-1 text-xs leading-4 text-[#6b7078]">{learner.goal}</p>
              </div>
              <Badge>{learner.level}</Badge>
            </div>
            <p className="mt-3 font-mono text-xs leading-5 text-[#3f5f9f]">
              type Learner = {`{ name: string; goal: string; level: "Learning" | "Ready" }`}
            </p>
          </div>
        </div>

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">Where Next.js needs types</p>
          <div className="mt-3 overflow-hidden rounded-[4px] border border-gray-200">
            {nextTypes.map((item) => (
              <div
                className="grid gap-1 border-b border-gray-200 px-4 py-2 last:border-b-0 md:grid-cols-[0.8fr_1.2fr_1.2fr]"
                key={item.place}
              >
                <p className="text-sm font-bold leading-5 text-[#111111]">{item.place}</p>
                <p className="font-mono text-xs leading-5 text-[#3f5f9f]">{item.example}</p>
                <p className="text-sm leading-[18px] text-[#8a8d91]">{item.reason}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">Type error example</p>
          <p className="mt-1 text-sm leading-[18px] text-[#8a8d91]">
            The age field expects a number, so TypeScript marks the string as an error before the application runs.
          </p>
          <div className="mt-3">
            <CodeBlock code={typeErrorCode} />
          </div>
        </div>

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">File extensions</p>
          <p className="mt-1 text-sm leading-[18px] text-[#8a8d91]">
            Use .ts for TypeScript without JSX and .tsx for React components containing JSX. tsconfig.json controls the project rules.
          </p>
        </div>

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">What just happened</p>
          <p className="mt-1 text-sm leading-[18px] text-[#8a8d91]">
            Types created a contract for props, route values, and fetched data. Your editor can now warn you when code breaks that contract.
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
