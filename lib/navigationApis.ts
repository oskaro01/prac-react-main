export const fullCode = `
// Client navigation component
"use client";

import {
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

export function ViewControls() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function showGrid() {
    const params = new URLSearchParams(searchParams);
    params.set("view", "grid");
    router.push(pathname + "?" + params.toString());
  }

  return <button onClick={showGrid}>Grid view</button>;
}

// Next.js 14 Server Component
import { cookies, headers } from "next/headers";

export default function Page({ searchParams }) {
  const mode = cookies().get("lesson-mode")?.value;
  const userAgent = headers().get("user-agent");

  return <p>{searchParams.view || mode || userAgent}</p>;
}

// Server Action
"use server";

import { redirect } from "next/navigation";

export async function saveMode(formData) {
  cookies().set("lesson-mode", formData.get("mode"));
  redirect("/navigation-apis");
}
`;
