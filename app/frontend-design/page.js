import FrontendDesignDemo from "@components/FrontendDesignDemo";
import LessonRouteShell from "@components/LessonRouteShell";
import NextMasteryLesson from "@components/NextMasteryLesson";
import { frontendDesignLesson } from "../../lib/masteryLessons";

export const metadata = {
  title: "Step 32: Frontend Design Blueprint",
  description: "Learn the compact old Facebook-inspired UI recipe used across this project.",
};

export default function Page() {
  return (
    <LessonRouteShell>
      <NextMasteryLesson lesson={frontendDesignLesson}>
        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">Live pattern sample</p>
          <p className="mt-1 text-sm leading-[18px] text-[#8a8d91]">
            This is the same visual language used throughout the lessons: small type, clear dividers, compact rows, and no decorative noise.
          </p>
          <div className="mt-3">
            <FrontendDesignDemo />
          </div>
        </div>
      </NextMasteryLesson>
    </LessonRouteShell>
  );
}
