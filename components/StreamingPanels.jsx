import Badge from "./ui/Badge";
import {
  getCourseSummary,
  getLessonMetrics,
  getRecentActivity,
  getTaskSummary,
} from "../lib/streamingDemoData";

export function StreamingPanelFallback({ label }) {
  return (
    <div className="min-h-[148px] rounded-[4px] border border-gray-200 bg-[#fafbfc] px-4 py-3">
      <p className="text-xs font-bold leading-4 text-[#6b7078]">{label}</p>
      <div className="mt-3 grid animate-pulse gap-2">
        <span className="block h-4 w-2/3 rounded-[2px] bg-gray-200" />
        <span className="block h-4 w-full rounded-[2px] bg-gray-200" />
        <span className="block h-4 w-4/5 rounded-[2px] bg-gray-200" />
      </div>
    </div>
  );
}

export async function MetricsPanel() {
  const metrics = await getLessonMetrics();

  return (
    <div className="min-h-[148px] rounded-[4px] border border-[#b8c6df] bg-[#f5f7fb] px-4 py-3">
      <p className="text-xs font-bold leading-4 text-[#3f5f9f]">Metrics loaded after 0.9s</p>
      <div className="mt-3 grid grid-cols-3 gap-2">
        <div>
          <p className="text-xl font-bold leading-6 text-[#111111]">{metrics.completed}</p>
          <p className="mt-1 text-xs leading-4 text-[#6b7078]">Completed</p>
        </div>
        <div>
          <p className="text-xl font-bold leading-6 text-[#111111]">{metrics.current}</p>
          <p className="mt-1 text-xs leading-4 text-[#6b7078]">Current</p>
        </div>
        <div>
          <p className="text-xl font-bold leading-6 text-[#111111]">{metrics.remaining}</p>
          <p className="mt-1 text-xs leading-4 text-[#6b7078]">Remaining</p>
        </div>
      </div>
    </div>
  );
}

export async function ActivityPanel() {
  const activity = await getRecentActivity();

  return (
    <div className="min-h-[148px] rounded-[4px] border border-[#a7d7c5] bg-[#f0faf6] px-4 py-3">
      <p className="text-xs font-bold leading-4 text-[#18794e]">Activity loaded after 1.9s</p>
      <ul className="mt-2 grid gap-1">
        {activity.map((item) => (
          <li className="text-sm leading-[18px] text-[#111111]" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function ParallelDataPanel() {
  const startedAt = Date.now();
  const [course, tasks] = await Promise.all([
    getCourseSummary(),
    getTaskSummary(),
  ]);
  const elapsed = Date.now() - startedAt;

  return (
    <div className="min-h-[148px] rounded-[4px] border border-gray-200 bg-[#fafbfc] px-4 py-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-xs font-bold leading-4 text-[#6b7078]">Parallel Promise.all result</p>
        <Badge tone="success">about {(elapsed / 1000).toFixed(1)}s</Badge>
      </div>
      <p className="mt-3 text-sm font-bold leading-5 text-[#111111]">{course.title}</p>
      <p className="mt-1 text-xs leading-4 text-[#6b7078]">
        {course.totalSteps} total steps, {tasks.open} remaining, current focus: {tasks.priority}.
      </p>
      <p className="mt-2 text-xs leading-4 text-[#6b7078]">
        The 0.7s and 1.3s requests started together, so the total follows the slower request instead of adding both times.
      </p>
    </div>
  );
}
