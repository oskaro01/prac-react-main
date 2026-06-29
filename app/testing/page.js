import LessonRouteShell from "@components/LessonRouteShell";
import NextMasteryLesson from "@components/NextMasteryLesson";
import { testingLesson } from "../../lib/masteryLessons";

export const metadata = {
  title: "Step 26: Testing",
  description: "Learn unit, component, and Playwright browser testing for Next.js apps.",
};

export default function Page() {
  return (
    <LessonRouteShell>
      <NextMasteryLesson lesson={testingLesson}>
        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">Example files added</p>
          <p className="mt-1 text-sm leading-[18px] text-[#8a8d91]">
            See tests/step26 for starter examples. They are examples only because this project has no test dependencies installed yet.
          </p>
        </div>
      </NextMasteryLesson>
    </LessonRouteShell>
  );
}
