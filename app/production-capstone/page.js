import LessonRouteShell from "@components/LessonRouteShell";
import NextMasteryLesson from "@components/NextMasteryLesson";
import { productionCapstoneLesson } from "../../lib/masteryLessons";

export const metadata = {
  title: "Step 31: Production Capstone Project",
  description: "Plan a real dashboard or ecommerce application with auth, CRUD, search, caching, tests, security, and deployment.",
};

export default function Page() {
  return (
    <LessonRouteShell>
      <NextMasteryLesson lesson={productionCapstoneLesson} />
    </LessonRouteShell>
  );
}
