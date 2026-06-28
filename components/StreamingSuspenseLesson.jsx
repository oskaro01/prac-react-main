import { Suspense } from "react";
import {
  fullCode,
  parallelCode,
  waterfallCode,
} from "../lib/streamingSuspense";
import Card from "./Card";
import CodeBlock from "./CodeBlock";
import LessonNotes from "./LessonNotes";
import StreamingReplayButton from "./StreamingReplayButton";
import {
  ActivityPanel,
  MetricsPanel,
  ParallelDataPanel,
  StreamingPanelFallback,
} from "./StreamingPanels";

const concepts = [
  {
    concept: "Suspense",
    job: "Defines which UI can wait independently.",
    result: "Shows fallback content for that section.",
  },
  {
    concept: "Streaming",
    job: "Sends completed HTML in smaller chunks.",
    result: "The user sees useful UI sooner.",
  },
  {
    concept: "Promise.all",
    job: "Starts independent requests together.",
    result: "Avoids accidental request waterfalls.",
  },
];

export default function StreamingSuspenseLesson() {
  return (
    <div className="flex justify-center">
      <Card>
        <div className="bg-[#f5f6f7] px-6 py-3">
          <p className="text-xs font-bold leading-4 text-[#3f5f9f]">Step 20</p>
          <h1 className="mt-1 text-base font-bold leading-5 text-[#111111]">Suspense, streaming, and parallel data</h1>
          <p className="mt-2 text-sm leading-[18px] text-[#8a8d91]">
            Stream slow sections independently and start unrelated data requests at the same time.
          </p>
        </div>

        <LessonNotes
          notes={[
            {
              title: "Send the shell first",
              body: "Static headings, navigation, and controls can render before slow server data finishes.",
            },
            {
              title: "Place boundaries well",
              body: "Group UI that should appear together instead of wrapping every tiny component separately.",
            },
            {
              title: "Respect dependencies",
              body: "Parallelize independent requests. Keep sequential fetching when request two needs request one.",
            },
          ]}
        />

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">Three connected ideas</p>
          <div className="mt-3 overflow-hidden rounded-[4px] border border-gray-200">
            {concepts.map((item) => (
              <div
                className="grid gap-1 border-b border-gray-200 px-4 py-2 last:border-b-0 md:grid-cols-[0.7fr_1.3fr_1.3fr]"
                key={item.concept}
              >
                <p className="font-mono text-xs font-bold leading-5 text-[#3f5f9f]">{item.concept}</p>
                <p className="text-sm leading-[18px] text-[#111111]">{item.job}</p>
                <p className="text-sm leading-[18px] text-[#8a8d91]">{item.result}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="px-6 py-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <p className="text-base font-bold leading-5 text-[#111111]">Live streamed Server Components</p>
              <p className="mt-1 text-sm leading-[18px] text-[#8a8d91]">
                Three requests begin without blocking this heading or one another.
              </p>
            </div>
            <StreamingReplayButton />
          </div>

          <div className="mt-3 grid gap-2 md:grid-cols-2">
            <Suspense fallback={<StreamingPanelFallback label="Loading metrics..." />}>
              <MetricsPanel />
            </Suspense>
            <Suspense fallback={<StreamingPanelFallback label="Loading recent activity..." />}>
              <ActivityPanel />
            </Suspense>
          </div>

          <div className="mt-2">
            <Suspense fallback={<StreamingPanelFallback label="Loading parallel data..." />}>
              <ParallelDataPanel />
            </Suspense>
          </div>
        </div>

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">Waterfall compared with parallel</p>
          <div className="mt-3 grid gap-2 md:grid-cols-2">
            <div>
              <p className="mb-2 text-xs font-bold leading-4 text-red-700">Sequential: times are added</p>
              <CodeBlock code={waterfallCode} />
            </div>
            <div>
              <p className="mb-2 text-xs font-bold leading-4 text-[#18794e]">Parallel: slower request sets the time</p>
              <CodeBlock code={parallelCode} />
            </div>
          </div>
        </div>

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">What just happened</p>
          <p className="mt-1 text-sm leading-[18px] text-[#8a8d91]">
            The page sent its ready content first. Each Suspense fallback was replaced when its async Server Component finished, while Promise.all prevented independent requests from running one after another.
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
