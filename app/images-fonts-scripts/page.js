import Image from "next/image";
import Script from "next/script";
import LessonRouteShell from "@components/LessonRouteShell";
import NextMasteryLesson from "@components/NextMasteryLesson";
import { imagesFontsScriptsLesson } from "../../lib/masteryLessons";

export const metadata = {
  title: "Step 24: Images, Fonts, and Scripts",
  description: "Learn next/image, next/font, responsive images, layout shift prevention, and next/script loading.",
};

export default function Page() {
  return (
    <LessonRouteShell>
      <NextMasteryLesson lesson={imagesFontsScriptsLesson}>
        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">Live optimized image and script demo</p>
          <p className="mt-1 text-sm leading-[18px] text-[#8a8d91]">
            The preview below uses next/image with fixed dimensions and sizes. The small script loads after interaction.
          </p>
          <div className="mt-3 overflow-hidden rounded-[4px] border border-gray-200 bg-[#fafbfc]">
            <Image
              alt="Compact dashboard preview for the image optimization lesson"
              className="h-auto w-full"
              height={360}
              priority
              sizes="(max-width: 768px) 100vw, 900px"
              src="/lesson-dashboard.svg"
              width={900}
            />
          </div>
          <Script id="step-24-script-demo" strategy="afterInteractive">
            {`window.__step24ScriptLoaded = true;`}
          </Script>
        </div>
      </NextMasteryLesson>
    </LessonRouteShell>
  );
}
