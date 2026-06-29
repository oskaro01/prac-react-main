import LessonRouteShell from "@components/LessonRouteShell";
import NextMasteryLesson from "@components/NextMasteryLesson";
import { upgradingNextLesson } from "../../lib/masteryLessons";

export const metadata = {
  title: "Step 30: Upgrading Next.js",
  description: "Learn codemods, breaking changes, React upgrades, Cache Components, Turbopack, and Middleware to Proxy migration.",
};

export default function Page() {
  return (
    <LessonRouteShell>
      <NextMasteryLesson lesson={upgradingNextLesson} />
    </LessonRouteShell>
  );
}
