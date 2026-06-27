import { fullCode } from "../lib/designSystem";
import Card from "./Card";
import CodeBlock from "./CodeBlock";
import DesignSystemDemo from "./DesignSystemDemo";
import LessonNotes from "./LessonNotes";

const colors = [
  { name: "Brand", hex: "#3F5F9F" },
  { name: "Text", hex: "#111111" },
  { name: "Muted", hex: "#6B7078" },
  { name: "Canvas", hex: "#D9DDE3" },
  { name: "Success", hex: "#18794E" },
  { name: "Danger", hex: "#B42318" },
];

const spacing = [4, 8, 12, 16, 24];

const typeStyles = [
  { name: "Heading", example: "Important section", details: "16px / 20px / bold" },
  { name: "Body", example: "Readable supporting information.", details: "14px / 18px / regular" },
  { name: "Label", example: "SMALL LABEL", details: "12px / 16px / bold" },
];

export default function DesignSystemLesson() {
  return (
    <div className="flex justify-center">
      <Card>
        <div className="bg-[#f5f6f7] px-6 py-3">
          <p className="text-xs font-bold leading-4 text-[#3f5f9f]">Step 13</p>
          <h1 className="mt-1 text-base font-bold leading-5 text-[#111111]">Build a design system</h1>
          <p className="mt-2 text-sm leading-[18px] text-[#8a8d91]">
            A design system turns repeated visual decisions into reusable tokens and components.
          </p>
        </div>

        <LessonNotes
          notes={[
            {
              title: "Design tokens",
              body: "Store colors, spacing, typography, and radius as named reusable decisions.",
            },
            {
              title: "UI components",
              body: "Build Button, TextInput, and Badge once, then reuse them everywhere.",
            },
            {
              title: "Interaction states",
              body: "A complete component includes hover, focus, disabled, success, and error states.",
            },
          ]}
        />

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">Color tokens</p>
          <div className="mt-3 grid gap-2 sm:grid-cols-2 md:grid-cols-3">
            {colors.map((color) => (
              <div className="flex items-center gap-3" key={color.name}>
                <span
                  className="h-8 w-8 shrink-0 rounded-[4px] border border-black/15"
                  style={{ backgroundColor: color.hex }}
                />
                <span>
                  <span className="block text-sm font-bold leading-5 text-[#111111]">{color.name}</span>
                  <span className="block font-mono text-xs leading-4 text-[#6b7078]">{color.hex}</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">Spacing scale</p>
          <div className="mt-3 grid gap-2">
            {spacing.map((value) => (
              <div className="grid grid-cols-[42px_1fr] items-center gap-3" key={value}>
                <span className="font-mono text-xs leading-4 text-[#6b7078]">{value}px</span>
                <span
                  className="block h-2 rounded-[2px] bg-[#3f5f9f]"
                  style={{ width: `${value * 4}px` }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">Typography scale</p>
          <div className="mt-3 overflow-hidden rounded-[4px] border border-gray-200">
            {typeStyles.map((type) => (
              <div
                className="grid gap-1 border-b border-gray-200 px-4 py-2 last:border-b-0 md:grid-cols-[0.6fr_1.3fr_1fr]"
                key={type.name}
              >
                <p className="text-sm font-bold leading-5 text-[#111111]">{type.name}</p>
                <p className="text-sm leading-[18px] text-[#111111]">{type.example}</p>
                <p className="font-mono text-xs leading-5 text-[#6b7078]">{type.details}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="px-6 py-3">
          <p className="mb-3 text-base font-bold leading-5 text-[#111111]">Reusable component demo</p>
          <DesignSystemDemo />
        </div>

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">What just happened</p>
          <p className="mt-1 text-sm leading-[18px] text-[#8a8d91]">
            The demo uses shared Button, TextInput, and Badge components. Changing one component updates every place that uses it.
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
