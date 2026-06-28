"use server";

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import {
  incrementSourceRecord,
  resetSourceRecord,
} from "../../lib/cacheDemoStore";

export async function updateWithoutRevalidation() {
  await incrementSourceRecord();
  redirect("/caching-revalidation?result=stale");
}

export async function updateWithRevalidation() {
  await incrementSourceRecord();
  revalidateTag("step19-record");
  redirect("/caching-revalidation?result=fresh");
}

export async function resetCacheDemo() {
  await resetSourceRecord();
  revalidateTag("step19-record");
  redirect("/caching-revalidation?result=reset");
}
