import AccessibilityDemo from "@components/AccessibilityDemo";
import LessonRouteShell from "@components/LessonRouteShell";
import NextMasteryLesson from "@components/NextMasteryLesson";
import { accessibilityResponsiveLesson } from "../../lib/masteryLessons";

export const metadata = {
  title: "Step 28: Accessibility and Responsive Design",
  description: "Learn keyboard navigation, semantic HTML, focus states, screen readers, responsive layouts, and contrast.",
};

export default function Page() {
  return (
    <LessonRouteShell>
      <NextMasteryLesson lesson={accessibilityResponsiveLesson}>
        <div className="px-6 py-3">
          <AccessibilityDemo />
        </div>
        <div className="px-6 py-3" id="accessibility-checklist">
          <p className="text-base font-bold leading-5 text-[#111111]">Manual accessibility pass</p>
          <p className="mt-1 text-sm leading-[18px] text-[#8a8d91]">
            Use Tab, Shift+Tab, Enter, Space, zoom, and a narrow viewport. The page should remain usable without overlapping text.
          </p>
        </div>
      </NextMasteryLesson>
    </LessonRouteShell>
  );
}
