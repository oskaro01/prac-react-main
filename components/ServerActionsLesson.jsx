import { submitLearningGoal } from "../app/server-actions/actions";
import { fullCode } from "../lib/serverActions";
import Card from "./Card";
import CodeBlock from "./CodeBlock";
import LessonNotes from "./LessonNotes";
import ServerActionSubmitButton from "./ServerActionSubmitButton";

const flow = [
  "The browser sends the form.",
  "The Server Action receives FormData.",
  "The server validates the value.",
  "The page redirects with the result.",
];

export default function ServerActionsLesson({ hasEmptyError, submittedGoal }) {
  return (
    <div className="flex justify-center">
      <Card>
        <div className="bg-[#f5f6f7] px-6 py-3">
          <p className="text-xs font-bold leading-4 text-[#3f5f9f]">Step 12</p>
          <h1 className="mt-1 text-base font-bold leading-5 text-[#111111]">Forms and Server Actions</h1>
          <p className="mt-2 text-sm leading-[18px] text-[#8a8d91]">
            A form can call a server function directly without creating a separate API endpoint.
          </p>
        </div>

        <LessonNotes
          notes={[
            {
              title: "The action prop",
              body: "form action={submitLearningGoal} connects the form to the server function.",
            },
            {
              title: "FormData",
              body: "The Server Action reads submitted inputs with formData.get and validates them.",
            },
            {
              title: "Real applications",
              body: "After validation, an action can write to a database and revalidate the updated page.",
            },
          ]}
        />

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">Submit a learning goal</p>
          <form action={submitLearningGoal} className="mt-3 flex flex-col gap-2 sm:flex-row">
            <input
              className="box-border block w-full min-w-0 flex-1 rounded-[4px] border border-gray-300 px-4 py-2 text-sm leading-5 outline-none focus:border-[#3f5f9f]"
              defaultValue={submittedGoal}
              maxLength={80}
              name="goal"
              placeholder="Example: Build a Next.js dashboard"
              required
            />
            <ServerActionSubmitButton />
          </form>

          {hasEmptyError && (
            <p className="mt-2 text-sm leading-5 text-red-700">Please enter a learning goal.</p>
          )}

          {submittedGoal && (
            <div className="mt-3 rounded-[4px] border border-[#b8c6df] bg-[#f5f7fb] px-4 py-3">
              <p className="text-xs font-bold leading-4 text-[#3f5f9f]">Server result</p>
              <p className="mt-1 text-sm leading-[18px] text-[#111111]">
                The server received: {submittedGoal}
              </p>
            </div>
          )}
        </div>

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">Request flow</p>
          <ol className="mt-2 grid gap-1 md:grid-cols-4">
            {flow.map((item, index) => (
              <li className="text-sm leading-[18px] text-[#8a8d91]" key={item}>
                <span className="font-bold text-[#111111]">{index + 1}.</span> {item}
              </li>
            ))}
          </ol>
        </div>

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">What just happened</p>
          <p className="mt-1 text-sm leading-[18px] text-[#8a8d91]">
            The form sent FormData to submitLearningGoal on the server. The action validated it and redirected back with the result.
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
