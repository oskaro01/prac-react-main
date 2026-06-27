import { cookies, headers } from "next/headers";
import Nav from "@components/Nav";
import NavigationApisLesson from "@components/NavigationApisLesson";

export default function Page({ searchParams = {} }) {
  const cookieStore = cookies();
  const headersList = headers();
  const view = searchParams.view === "grid" ? "grid" : "list";
  const userAgent = headersList.get("user-agent") || "Unknown";

  const requestInfo = {
    lessonMode: cookieStore.get("lesson-mode")?.value || "not set",
    userAgent: userAgent.length > 100 ? `${userAgent.slice(0, 100)}...` : userAgent,
    view,
  };

  return (
    <div className="min-h-screen bg-[#d9dde3] pb-8">
      <Nav />

      <main className="mx-auto w-full max-w-6xl px-6 py-6">
        <NavigationApisLesson requestInfo={requestInfo} saved={searchParams.saved === "1"} />
      </main>
    </div>
  );
}
