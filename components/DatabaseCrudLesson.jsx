import {
  createProject,
  deleteProject,
  resetProjects,
  updateProject,
} from "../app/database-crud/actions";
import { fullCode, schemaCode } from "../lib/databaseCrud";
import Badge from "./ui/Badge";
import Card from "./Card";
import CodeBlock from "./CodeBlock";
import CrudSubmitButton from "./CrudSubmitButton";
import LessonNotes from "./LessonNotes";

const operations = [
  { letter: "C", operation: "Create", sql: "INSERT", next: "Server Action form" },
  { letter: "R", operation: "Read", sql: "SELECT", next: "Async Server Component" },
  { letter: "U", operation: "Update", sql: "UPDATE", next: "Server Action + id" },
  { letter: "D", operation: "Delete", sql: "DELETE", next: "Server Action + id" },
];

export default function DatabaseCrudLesson({ projects }) {
  return (
    <div className="flex justify-center">
      <Card>
        <div className="bg-[#f5f6f7] px-6 py-3">
          <p className="text-xs font-bold leading-4 text-[#3f5f9f]">Step 18</p>
          <h1 className="mt-1 text-base font-bold leading-5 text-[#111111]">Database and complete CRUD</h1>
          <p className="mt-2 text-sm leading-[18px] text-[#8a8d91]">
            CRUD is the complete data cycle: create, read, update, and delete database records.
          </p>
        </div>

        <LessonNotes
          notes={[
            {
              title: "Schema and migrations",
              body: "A schema defines tables and relationships. Migrations safely version every schema change.",
            },
            {
              title: "Server data layer",
              body: "Server Components can call a database or repository directly without exposing credentials.",
            },
            {
              title: "Refresh after writes",
              body: "Server Actions mutate records, then revalidatePath refreshes the affected page data.",
            },
          ]}
        />

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">The four CRUD operations</p>
          <div className="mt-3 overflow-hidden rounded-[4px] border border-gray-200">
            {operations.map((item) => (
              <div
                className="grid gap-1 border-b border-gray-200 px-4 py-2 last:border-b-0 md:grid-cols-[0.3fr_0.8fr_0.7fr_1.4fr]"
                key={item.letter}
              >
                <p className="font-mono text-xs font-bold leading-5 text-[#3f5f9f]">{item.letter}</p>
                <p className="text-sm font-bold leading-5 text-[#111111]">{item.operation}</p>
                <p className="font-mono text-xs leading-5 text-[#6b7078]">{item.sql}</p>
                <p className="text-sm leading-[18px] text-[#8a8d91]">{item.next}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="px-6 py-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-base font-bold leading-5 text-[#111111]">Create a project</p>
            <form action={resetProjects}>
              <CrudSubmitButton label="Reset demo" pendingLabel="Resetting..." variant="secondary" />
            </form>
          </div>

          <form action={createProject} className="mt-3 grid gap-2 md:grid-cols-[minmax(0,1fr)_180px_auto]">
            <input
              className="min-w-0 rounded-[4px] border border-gray-300 px-4 py-2 text-sm leading-5 outline-none focus:border-[#3f5f9f]"
              maxLength={60}
              name="name"
              placeholder="Project name"
              required
            />
            <select
              className="rounded-[4px] border border-gray-300 bg-white px-3 py-2 text-sm leading-5 text-[#111111] outline-none focus:border-[#3f5f9f]"
              defaultValue="Education"
              name="category"
            >
              <option>Education</option>
              <option>Commerce</option>
              <option>Personal</option>
            </select>
            <CrudSubmitButton label="Create project" pendingLabel="Creating..." />
          </form>
        </div>

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">Read, update, and delete</p>

          {projects.length === 0 ? (
            <p className="mt-2 text-sm leading-[18px] text-[#8a8d91]">No projects remain. Create one or reset the demo.</p>
          ) : (
            <ul className="mt-3 divide-y divide-gray-200 rounded-[4px] border border-gray-200">
              {projects.map((project) => (
                <li className="px-4 py-3" key={project.id}>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-sm font-bold leading-5 text-[#111111]">{project.name}</p>
                      <Badge tone={project.status === "complete" ? "success" : "neutral"}>{project.status}</Badge>
                    </div>
                    <span className="font-mono text-xs leading-4 text-[#6b7078]">{project.id}</span>
                  </div>

                  <form
                    action={updateProject}
                    className="mt-3 grid gap-2 md:grid-cols-[minmax(0,1fr)_150px_130px_auto]"
                  >
                    <input name="id" type="hidden" value={project.id} />
                    <input
                      className="min-w-0 rounded-[4px] border border-gray-300 px-3 py-2 text-sm leading-5 outline-none focus:border-[#3f5f9f]"
                      defaultValue={project.name}
                      maxLength={60}
                      name="name"
                      required
                    />
                    <select
                      className="rounded-[4px] border border-gray-300 bg-white px-3 py-2 text-sm leading-5 outline-none focus:border-[#3f5f9f]"
                      defaultValue={project.category}
                      name="category"
                    >
                      <option>Education</option>
                      <option>Commerce</option>
                      <option>Personal</option>
                    </select>
                    <select
                      className="rounded-[4px] border border-gray-300 bg-white px-3 py-2 text-sm leading-5 outline-none focus:border-[#3f5f9f]"
                      defaultValue={project.status}
                      name="status"
                    >
                      <option value="planned">Planned</option>
                      <option value="active">Active</option>
                      <option value="complete">Complete</option>
                    </select>
                    <CrudSubmitButton label="Update" pendingLabel="Updating..." variant="secondary" />
                  </form>

                  <form action={deleteProject} className="mt-2 flex justify-end">
                    <input name="id" type="hidden" value={project.id} />
                    <CrudSubmitButton label="Delete" pendingLabel="Deleting..." variant="danger" />
                  </form>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">Important demo limitation</p>
          <p className="mt-1 text-sm leading-[18px] text-[#8a8d91]">
            This lesson stores records in server memory so it works without installing a database package. Memory resets when the server restarts and is not suitable for production or multiple server instances.
          </p>
        </div>

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">Production PostgreSQL schema</p>
          <p className="mt-1 text-sm leading-[18px] text-[#8a8d91]">
            owner_id creates a one-to-many relationship: one user can own many projects.
          </p>
          <div className="mt-3">
            <CodeBlock code={schemaCode} />
          </div>
        </div>

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">What just happened</p>
          <p className="mt-1 text-sm leading-[18px] text-[#8a8d91]">
            The page read records through a server repository. Forms called Server Actions to mutate them, and revalidatePath requested fresh rendered data.
          </p>
        </div>

        <div className="px-6 py-3">
          <p className="mb-3 text-base font-bold leading-5 text-[#111111]">Production code preview</p>
          <CodeBlock code={fullCode} />
        </div>
      </Card>
    </div>
  );
}
