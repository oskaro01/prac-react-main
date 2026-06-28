import DatabaseCrudLesson from "@components/DatabaseCrudLesson";
import Nav from "@components/Nav";
import { listProjects } from "../../lib/demoProjectStore";

export const dynamic = "force-dynamic";

export default async function Page() {
  const projects = await listProjects();

  return (
    <div className="min-h-screen bg-[#d9dde3] pb-8">
      <Nav />

      <main className="mx-auto w-full max-w-6xl px-6 py-6">
        <DatabaseCrudLesson projects={projects} />
      </main>
    </div>
  );
}
