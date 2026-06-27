import Link from "next/link";
import { fullCode } from "../lib/dynamicRoutes";
import { products } from "../lib/products";
import Card from "./Card";
import CodeBlock from "./CodeBlock";
import LessonNotes from "./LessonNotes";

const examples = [
  {
    file: "app/products/[id]/page.js",
    url: "/products/1",
    value: 'params.id is "1"',
  },
  {
    file: "app/products/[id]/page.js",
    url: "/products/2",
    value: 'params.id is "2"',
  },
];

export default function DynamicRoutesLesson() {
  return (
    <div className="flex justify-center">
      <Card>
        <div className="bg-[#f5f6f7] px-6 py-3">
          <p className="text-xs font-bold leading-4 text-[#3f5f9f]">Step 9</p>
          <h1 className="mt-1 text-base font-bold leading-5 text-[#111111]">Dynamic routes</h1>
          <p className="mt-2 text-sm leading-[18px] text-[#8a8d91]">
            One [id] folder can create a separate page for every product, post, or user.
          </p>
        </div>

        <LessonNotes
          notes={[
            {
              title: "Square brackets",
              body: "[id] means this part of the URL is a value that can change.",
            },
            {
              title: "The params object",
              body: "Next.js puts the URL value inside params, such as params.id.",
            },
            {
              title: "Why it matters",
              body: "You use one page file instead of creating a new file for every product.",
            },
          ]}
        />

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">How the URL becomes data</p>
          <div className="mt-3 overflow-hidden rounded-[4px] border border-gray-200">
            {examples.map((example) => (
              <div
                className="grid gap-1 border-b border-gray-200 px-4 py-2 last:border-b-0 md:grid-cols-[1.4fr_0.8fr_1fr]"
                key={example.url}
              >
                <p className="font-mono text-xs leading-5 text-[#111111]">{example.file}</p>
                <p className="font-mono text-xs leading-5 text-[#3f5f9f]">{example.url}</p>
                <p className="text-sm leading-[18px] text-[#8a8d91]">{example.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">Open the dynamic pages</p>
          <div className="mt-3 grid gap-2 md:grid-cols-3">
            {products.map((product) => (
              <Link
                className="block rounded-[4px] border border-gray-200 bg-[#fafbfc] px-4 py-3 hover:border-[#3f5f9f] hover:bg-[#f5f6f7]"
                href={`/products/${product.id}`}
                key={product.id}
              >
                <span className="block text-sm font-bold leading-5 text-[#111111]">{product.name}</span>
                <span className="mt-1 block text-xs leading-4 text-[#6b7078]">
                  Open /products/{product.id}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">What just happened</p>
          <p className="mt-1 text-sm leading-[18px] text-[#8a8d91]">
            Every link opens the same [id]/page.js file. The value in params.id decides which product the page displays.
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
