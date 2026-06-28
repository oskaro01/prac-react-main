export const waterfallCode = `
const profile = await getProfile();
const posts = await getPosts();
`;

export const parallelCode = `
const [profile, posts] = await Promise.all([
  getProfile(),
  getPosts(),
]);
`;

export const fullCode = `
import { Suspense } from "react";

export default function DashboardPage() {
  return (
    <main>
      <h1>Dashboard</h1>

      <Suspense fallback={<MetricsSkeleton />}>
        <MetricsPanel />
      </Suspense>

      <Suspense fallback={<ActivitySkeleton />}>
        <ActivityPanel />
      </Suspense>
    </main>
  );
}

async function MetricsPanel() {
  const metrics = await getMetrics();
  return <p>{metrics.completed} completed</p>;
}

async function ParallelPanel() {
  const [course, tasks] = await Promise.all([
    getCourse(),
    getTasks(),
  ]);

  return <p>{course.name}: {tasks.length} tasks</p>;
}
`;
