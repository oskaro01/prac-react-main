import Link from "next/link";
import LessonRouteShell from "@components/LessonRouteShell";
import NextMasteryLesson from "@components/NextMasteryLesson";
import { metadataSeoLesson } from "../../lib/masteryLessons";

export async function generateMetadata() {
  return {
    title: "Step 23: Metadata and SEO",
    description: "Learn metadata, generateMetadata, favicons, Open Graph images, robots.txt, and sitemap.xml in Next.js.",
    alternates: {
      canonical: "/metadata-seo",
    },
    openGraph: {
      title: "Step 23: Metadata and SEO",
      description: "Next.js metadata and SEO lesson.",
      url: "/metadata-seo",
      images: [
        {
          url: "/metadata-seo/opengraph-image",
          width: 1200,
          height: 630,
          alt: "Metadata and SEO lesson preview",
        },
      ],
    },
  };
}

export default function Page() {
  return (
    <LessonRouteShell>
      <NextMasteryLesson lesson={metadataSeoLesson}>
        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">Real file-convention routes in this app</p>
          <div className="mt-3 grid gap-2 md:grid-cols-3">
            <Link className="rounded-[4px] border border-gray-200 bg-white px-4 py-3 text-sm font-bold leading-5 text-[#3f5f9f] hover:bg-[#f5f6f7]" href="/robots.txt">
              Open robots.txt
            </Link>
            <Link className="rounded-[4px] border border-gray-200 bg-white px-4 py-3 text-sm font-bold leading-5 text-[#3f5f9f] hover:bg-[#f5f6f7]" href="/sitemap.xml">
              Open sitemap.xml
            </Link>
            <Link className="rounded-[4px] border border-gray-200 bg-white px-4 py-3 text-sm font-bold leading-5 text-[#3f5f9f] hover:bg-[#f5f6f7]" href="/metadata-seo/opengraph-image">
              Open OG image
            </Link>
          </div>
        </div>
      </NextMasteryLesson>
    </LessonRouteShell>
  );
}
