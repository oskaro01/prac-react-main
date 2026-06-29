import Link from "next/link";
import LessonRouteShell from "@components/LessonRouteShell";
import NextMasteryLesson from "@components/NextMasteryLesson";
import { deploymentCiLesson } from "../../lib/masteryLessons";

export const metadata = {
  title: "Step 29: Deployment and CI/CD",
  description: "Learn production builds, environment variables, Vercel, Node.js, Docker, preview deployments, logs, and rollbacks.",
};

export default function Page() {
  return (
    <LessonRouteShell>
      <NextMasteryLesson lesson={deploymentCiLesson}>
        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">Health check route</p>
          <p className="mt-1 text-sm leading-[18px] text-[#8a8d91]">
            Deployment platforms and uptime monitors often call a tiny endpoint to confirm the app is alive.
          </p>
          <Link className="mt-3 inline-block rounded-[4px] border border-gray-200 bg-white px-4 py-2 text-sm font-bold leading-5 text-[#3f5f9f] hover:bg-[#f5f6f7]" href="/api/health">
            Open /api/health
          </Link>
        </div>
      </NextMasteryLesson>
    </LessonRouteShell>
  );
}
