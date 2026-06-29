import LessonRouteShell from "@components/LessonRouteShell";
import NextMasteryLesson from "@components/NextMasteryLesson";
import WebVitalsReporter from "@components/WebVitalsReporter";
import { performanceMonitoringLesson } from "../../lib/masteryLessons";

export const metadata = {
  title: "Step 27: Performance and Monitoring",
  description: "Learn Core Web Vitals, bundle size, Client Component reduction, lazy loading, logging, and instrumentation.",
};

export default function Page() {
  return (
    <LessonRouteShell>
      <NextMasteryLesson lesson={performanceMonitoringLesson}>
        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">Live Web Vitals reporter</p>
          <div className="mt-2 rounded-[4px] border border-gray-200 bg-[#fafbfc] px-4 py-3">
            <WebVitalsReporter />
          </div>
        </div>
      </NextMasteryLesson>
    </LessonRouteShell>
  );
}
