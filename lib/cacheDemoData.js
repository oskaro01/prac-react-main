import { unstable_cache } from "next/cache";
import { readSourceRecord } from "./cacheDemoStore";

export const getCachedRecord = unstable_cache(
  async () => readSourceRecord(),
  ["step19-record"],
  {
    revalidate: 3600,
    tags: ["step19-record"],
  },
);
