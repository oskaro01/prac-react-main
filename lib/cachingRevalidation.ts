export const fullCode = `
// Cache a database or ORM function in Next.js 14
import { unstable_cache } from "next/cache";

export const getCachedProducts = unstable_cache(
  async () => db.product.findMany(),
  ["products"],
  {
    revalidate: 3600,
    tags: ["products"],
  }
);

// Fetch caching choices
await fetch(url, { cache: "force-cache" });
await fetch(url, { cache: "no-store" });
await fetch(url, { next: { revalidate: 60 } });
await fetch(url, { next: { tags: ["products"] } });

// Revalidate after a mutation
"use server";

import {
  revalidatePath,
  revalidateTag,
} from "next/cache";

export async function updateProduct(id, data) {
  await db.product.update({ where: { id }, data });

  revalidateTag("products");
  revalidatePath("/products");
}
`;
