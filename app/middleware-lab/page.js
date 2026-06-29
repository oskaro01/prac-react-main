import { headers } from "next/headers";
import MiddlewareLesson from "@components/MiddlewareLesson";
import { getDemoSession } from "../../lib/demoAuth";

export const dynamic = "force-dynamic";

export default async function Page({ searchParams = {} }) {
  const user = await getDemoSession();
  const requestHeaders = headers();

  return (
    <MiddlewareLesson
      message={typeof searchParams.message === "string" ? searchParams.message : ""}
      middlewarePath={requestHeaders.get("x-step-22-path") || "not detected"}
      middlewareTime={requestHeaders.get("x-step-22-time") || "not detected"}
      user={user}
    />
  );
}
