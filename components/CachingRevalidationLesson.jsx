import {
  resetCacheDemo,
  updateWithRevalidation,
  updateWithoutRevalidation,
} from "../app/caching-revalidation/actions";
import { fullCode } from "../lib/cachingRevalidation";
import CacheActionButton from "./CacheActionButton";
import Card from "./Card";
import CodeBlock from "./CodeBlock";
import LessonNotes from "./LessonNotes";

const fetchModes = [
  {
    setting: 'cache: "force-cache"',
    behavior: "Reuse the response until it is invalidated.",
    use: "Shared data that changes rarely.",
  },
  {
    setting: 'cache: "no-store"',
    behavior: "Fetch fresh data for every request.",
    use: "Private or rapidly changing data.",
  },
  {
    setting: "next: { revalidate: 60 }",
    behavior: "Reuse data, then refresh after 60 seconds.",
    use: "Catalogs, articles, and dashboards.",
  },
  {
    setting: 'next: { tags: ["products"] }',
    behavior: "Give cached data a name for invalidation.",
    use: "Refresh related data after a mutation.",
  },
];

const resultMessages = {
  stale: "The source changed without invalidating its cache tag.",
  fresh: "The source changed and revalidateTag expired the cached result.",
  reset: "The source and tagged cache were reset.",
};

export default function CachingRevalidationLesson({ cachedRecord, result, sourceRecord }) {
  const isStale = sourceRecord.value !== cachedRecord.value;

  return (
    <div className="flex justify-center">
      <Card>
        <div className="bg-[#f5f6f7] px-6 py-3">
          <p className="text-xs font-bold leading-4 text-[#3f5f9f]">Step 19</p>
          <h1 className="mt-1 text-base font-bold leading-5 text-[#111111]">Caching and revalidation</h1>
          <p className="mt-2 text-sm leading-[18px] text-[#8a8d91]">
            Caching makes repeated reads faster. Revalidation decides when cached data becomes fresh again.
          </p>
        </div>

        <LessonNotes
          notes={[
            {
              title: "Cache deliberately",
              body: "Cache shared data you can safely reuse, not private or request-specific information.",
            },
            {
              title: "Time or event",
              body: "Refresh data after a time interval or immediately after a create, update, or delete event.",
            },
            {
              title: "Path or tag",
              body: "revalidatePath targets a route. revalidateTag targets every cached read carrying that tag.",
            },
          ]}
        />

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">Next.js 14 fetch controls</p>
          <div className="mt-3 overflow-hidden rounded-[4px] border border-gray-200">
            {fetchModes.map((item) => (
              <div
                className="grid gap-1 border-b border-gray-200 px-4 py-2 last:border-b-0 md:grid-cols-[1.1fr_1.5fr_1.2fr]"
                key={item.setting}
              >
                <p className="break-words font-mono text-xs font-bold leading-5 text-[#3f5f9f]">{item.setting}</p>
                <p className="text-sm leading-[18px] text-[#111111]">{item.behavior}</p>
                <p className="text-sm leading-[18px] text-[#8a8d91]">{item.use}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">Live cache experiment</p>
          <p className="mt-1 text-sm leading-[18px] text-[#8a8d91]">
            The source is read directly. The cached value comes through unstable_cache with the step19-record tag.
          </p>

          <div className="mt-3 grid gap-2 md:grid-cols-2">
            <div className="rounded-[4px] border border-gray-200 bg-[#fafbfc] px-4 py-3">
              <p className="text-xs font-bold leading-4 text-[#6b7078]">Direct source</p>
              <p className="mt-2 text-2xl font-bold leading-7 text-[#111111]">{sourceRecord.value}</p>
              <p className="mt-1 break-words font-mono text-xs leading-4 text-[#6b7078]">{sourceRecord.updatedAt}</p>
            </div>
            <div className={`rounded-[4px] border px-4 py-3 ${isStale ? "border-[#e1bd69] bg-[#fffaf0]" : "border-[#a7d7c5] bg-[#f0faf6]"}`}>
              <p className="text-xs font-bold leading-4 text-[#6b7078]">Cached result</p>
              <p className="mt-2 text-2xl font-bold leading-7 text-[#111111]">{cachedRecord.value}</p>
              <p className="mt-1 break-words font-mono text-xs leading-4 text-[#6b7078]">{cachedRecord.updatedAt}</p>
              <p className={`mt-2 text-xs font-bold leading-4 ${isStale ? "text-[#8a6d1d]" : "text-[#18794e]"}`}>
                {isStale ? "Stale: cache does not match source" : "Fresh: cache matches source"}
              </p>
            </div>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            <form action={updateWithoutRevalidation}>
              <CacheActionButton label="Update source only" pendingLabel="Updating..." variant="secondary" />
            </form>
            <form action={updateWithRevalidation}>
              <CacheActionButton label="Update + revalidate tag" pendingLabel="Revalidating..." />
            </form>
            <form action={resetCacheDemo}>
              <CacheActionButton label="Reset demo" pendingLabel="Resetting..." variant="secondary" />
            </form>
          </div>

          {resultMessages[result] && (
            <p className="mt-2 text-sm font-bold leading-5 text-[#3f5f9f]">{resultMessages[result]}</p>
          )}
        </div>

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">Path compared with tag</p>
          <div className="mt-3 overflow-hidden rounded-[4px] border border-gray-200">
            <div className="grid gap-1 border-b border-gray-200 px-4 py-2 md:grid-cols-[0.8fr_1.7fr]">
              <p className="font-mono text-xs font-bold leading-5 text-[#3f5f9f]">revalidatePath</p>
              <p className="text-sm leading-[18px] text-[#8a8d91]">Refresh cached data used by a specific page or layout.</p>
            </div>
            <div className="grid gap-1 px-4 py-2 md:grid-cols-[0.8fr_1.7fr]">
              <p className="font-mono text-xs font-bold leading-5 text-[#3f5f9f]">revalidateTag</p>
              <p className="text-sm leading-[18px] text-[#8a8d91]">Refresh matching data wherever that tag is used.</p>
            </div>
          </div>
        </div>

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">Version and development note</p>
          <p className="mt-1 text-sm leading-[18px] text-[#8a8d91]">
            This project uses the Next.js 14 cache model. Development mode can bypass or refresh caches more aggressively. Next.js 16 replaces unstable_cache with Cache Components and the use cache directive.
          </p>
        </div>

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">What just happened</p>
          <p className="mt-1 text-sm leading-[18px] text-[#8a8d91]">
            unstable_cache reused a database-style read. Updating the source did not automatically expire it, but revalidateTag marked the tagged result for fresh data.
          </p>
        </div>

        <div className="px-6 py-3">
          <p className="mb-3 text-base font-bold leading-5 text-[#111111]">Code preview</p>
          <CodeBlock code={fullCode} />
        </div>
      </Card>
    </div>
  );
}
