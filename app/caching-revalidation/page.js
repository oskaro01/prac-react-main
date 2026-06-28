import CachingRevalidationLesson from "@components/CachingRevalidationLesson";
import Nav from "@components/Nav";
import { getCachedRecord } from "../../lib/cacheDemoData";
import { readSourceRecord } from "../../lib/cacheDemoStore";

export const dynamic = "force-dynamic";

export default async function Page({ searchParams = {} }) {
  const [sourceRecord, cachedRecord] = await Promise.all([
    readSourceRecord(),
    getCachedRecord(),
  ]);

  return (
    <div className="min-h-screen bg-[#d9dde3] pb-8">
      <Nav />

      <main className="mx-auto w-full max-w-6xl px-6 py-6">
        <CachingRevalidationLesson
          cachedRecord={cachedRecord}
          result={typeof searchParams.result === "string" ? searchParams.result : ""}
          sourceRecord={sourceRecord}
        />
      </main>
    </div>
  );
}
