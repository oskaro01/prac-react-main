import { fullCode, zodCode } from "../lib/formValidation";
import Card from "./Card";
import CodeBlock from "./CodeBlock";
import LessonNotes from "./LessonNotes";
import OptimisticTaskDemo from "./OptimisticTaskDemo";
import ValidatedForm from "./ValidatedForm";

const validationLayers = [
  {
    layer: "HTML",
    example: "required, type=email, minLength",
    job: "Fast browser feedback.",
  },
  {
    layer: "Server",
    example: "Validate inside the Server Action",
    job: "The trusted security boundary.",
  },
  {
    layer: "Schema",
    example: "Zod safeParse()",
    job: "Reusable rules and structured errors.",
  },
];

export default function FormValidationLesson() {
  return (
    <div className="flex justify-center">
      <Card>
        <div className="bg-[#f5f6f7] px-6 py-3">
          <p className="text-xs font-bold leading-4 text-[#3f5f9f]">Step 17</p>
          <h1 className="mt-1 text-base font-bold leading-5 text-[#111111]">Advanced forms and validation</h1>
          <p className="mt-2 text-sm leading-[18px] text-[#8a8d91]">
            Reliable forms validate on the server, return expected errors, show pending work, and update the UI quickly.
          </p>
        </div>

        <LessonNotes
          notes={[
            {
              title: "Expected errors",
              body: "Return validation errors as data instead of throwing exceptions for normal user mistakes.",
            },
            {
              title: "Action state",
              body: "Next.js 14 uses useFormState. Newer React versions use useActionState for the same job.",
            },
            {
              title: "Optimistic UI",
              body: "useOptimistic shows the expected result immediately while the server finishes saving.",
            },
          ]}
        />

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">Three validation layers</p>
          <div className="mt-3 overflow-hidden rounded-[4px] border border-gray-200">
            {validationLayers.map((item) => (
              <div
                className="grid gap-1 border-b border-gray-200 px-4 py-2 last:border-b-0 md:grid-cols-[0.6fr_1.4fr_1fr]"
                key={item.layer}
              >
                <p className="text-sm font-bold leading-5 text-[#111111]">{item.layer}</p>
                <p className="font-mono text-xs leading-5 text-[#3f5f9f]">{item.example}</p>
                <p className="text-sm leading-[18px] text-[#8a8d91]">{item.job}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="px-6 py-3">
          <p className="mb-3 text-base font-bold leading-5 text-[#111111]">Server validation demo</p>
          <ValidatedForm />
        </div>

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">Zod schema pattern</p>
          <p className="mt-1 text-sm leading-[18px] text-[#8a8d91]">
            The running demo uses dependency-free checks. In a production app, Zod can express the same rules as a reusable schema.
          </p>
          <div className="mt-3">
            <CodeBlock code={zodCode} />
          </div>
        </div>

        <div className="px-6 py-3">
          <p className="mb-3 text-base font-bold leading-5 text-[#111111]">Optimistic UI demo</p>
          <OptimisticTaskDemo />
        </div>

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">What just happened</p>
          <p className="mt-1 text-sm leading-[18px] text-[#8a8d91]">
            The Server Action returned field errors through useFormState, useFormStatus exposed pending work, and useOptimistic displayed a temporary result before the save completed.
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
