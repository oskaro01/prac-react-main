import LessonRouteShell from "@components/LessonRouteShell";
import NextMasteryLesson from "@components/NextMasteryLesson";
import { environmentSecurityLesson } from "../../lib/masteryLessons";

export const metadata = {
  title: "Step 25: Environment Variables and Security",
  description: "Learn secrets, NEXT_PUBLIC variables, validation, authorization, CSP, security headers, and safe server data.",
};

export default function Page() {
  const publicSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || "not set";
  const secretStatus = process.env.DATABASE_URL ? "DATABASE_URL exists on the server" : "DATABASE_URL is not set";

  return (
    <LessonRouteShell>
      <NextMasteryLesson lesson={environmentSecurityLesson}>
        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">Environment visibility demo</p>
          <div className="mt-3 overflow-hidden rounded-[4px] border border-gray-200">
            <div className="grid gap-1 border-b border-gray-200 px-4 py-2 md:grid-cols-[0.8fr_1.7fr]">
              <p className="font-mono text-xs font-bold leading-5 text-[#3f5f9f]">NEXT_PUBLIC_SITE_URL</p>
              <p className="break-words text-sm leading-[18px] text-[#111111]">{publicSiteUrl}</p>
            </div>
            <div className="grid gap-1 px-4 py-2 md:grid-cols-[0.8fr_1.7fr]">
              <p className="font-mono text-xs font-bold leading-5 text-[#3f5f9f]">DATABASE_URL</p>
              <p className="text-sm leading-[18px] text-[#8a8d91]">{secretStatus}. The value is not printed.</p>
            </div>
          </div>
        </div>
      </NextMasteryLesson>
    </LessonRouteShell>
  );
}
