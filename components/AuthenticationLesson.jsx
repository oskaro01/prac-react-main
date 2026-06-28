import Link from "next/link";
import { signInDemo, signOutDemo } from "../app/auth/actions";
import { fullCode } from "../lib/authenticationAuthorization";
import Badge from "./ui/Badge";
import Card from "./Card";
import CodeBlock from "./CodeBlock";
import LessonNotes from "./LessonNotes";

const authParts = [
  {
    part: "Authentication",
    question: "Who are you?",
    example: "Password, passkey, or OAuth login",
  },
  {
    part: "Session",
    question: "How are you remembered?",
    example: "Encrypted cookie or database session",
  },
  {
    part: "Authorization",
    question: "What may you do?",
    example: "Student, editor, or admin permissions",
  },
];

const requestFlow = [
  "Validate credentials on the server.",
  "Create a secure session and HTTP-only cookie.",
  "Verify the session inside the data access layer.",
  "Check authorization again for every sensitive action.",
  "Return only safe fields through a DTO.",
];

export default function AuthenticationLesson({ message, user }) {
  return (
    <div className="flex justify-center">
      <Card>
        <div className="bg-[#f5f6f7] px-6 py-3">
          <p className="text-xs font-bold leading-4 text-[#3f5f9f]">Step 21</p>
          <h1 className="mt-1 text-base font-bold leading-5 text-[#111111]">Authentication and authorization</h1>
          <p className="mt-2 text-sm leading-[18px] text-[#8a8d91]">
            Identify the user, remember their session, and verify what they are allowed to access.
          </p>
        </div>

        <LessonNotes
          notes={[
            {
              title: "Use an auth library",
              body: "Production login needs secure password, OAuth, session, refresh, and attack-protection logic.",
            },
            {
              title: "Centralize checks",
              body: "A data access layer keeps session and authorization rules consistent across the app.",
            },
            {
              title: "Protect every entry",
              body: "Pages, Server Actions, and Route Handlers must each verify permission on the server.",
            },
          ]}
        />

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">Three different responsibilities</p>
          <div className="mt-3 overflow-hidden rounded-[4px] border border-gray-200">
            {authParts.map((item) => (
              <div
                className="grid gap-1 border-b border-gray-200 px-4 py-2 last:border-b-0 md:grid-cols-[0.9fr_0.9fr_1.4fr]"
                key={item.part}
              >
                <p className="text-sm font-bold leading-5 text-[#111111]">{item.part}</p>
                <p className="text-sm leading-[18px] text-[#3f5f9f]">{item.question}</p>
                <p className="text-sm leading-[18px] text-[#8a8d91]">{item.example}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">Protected request flow</p>
          <ol className="mt-2 grid gap-1">
            {requestFlow.map((item, index) => (
              <li className="text-sm leading-[18px] text-[#8a8d91]" key={item}>
                <span className="font-bold text-[#111111]">{index + 1}.</span> {item}
              </li>
            ))}
          </ol>
        </div>

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">Try the protected routes</p>
          <p className="mt-1 text-sm leading-[18px] text-[#8a8d91]">
            Choose a demo role. The Server Action writes an HTTP-only cookie and the dashboard DAL reads it.
          </p>

          {message === "signin" && (
            <p className="mt-2 text-sm font-bold leading-5 text-red-700">Sign in before opening that protected page.</p>
          )}

          {user ? (
            <div className="mt-3 rounded-[4px] border border-[#b8c6df] bg-[#f5f7fb] px-4 py-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <p className="text-sm font-bold leading-5 text-[#111111]">{user.name}</p>
                  <p className="mt-1 font-mono text-xs leading-4 text-[#6b7078]">Safe DTO: id, name, role</p>
                </div>
                <Badge tone={user.role === "admin" ? "success" : "neutral"}>{user.role}</Badge>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <Link
                  className="rounded-[4px] bg-[#3f5f9f] px-4 py-2 text-sm font-bold leading-5 text-white hover:bg-[#334f88]"
                  href="/auth/dashboard"
                >
                  Open dashboard
                </Link>
                <form action={signOutDemo}>
                  <button
                    className="rounded-[4px] border border-gray-300 bg-white px-4 py-2 text-sm font-bold leading-5 text-[#111111] hover:bg-gray-50"
                    type="submit"
                  >
                    Sign out
                  </button>
                </form>
              </div>
            </div>
          ) : (
            <div className="mt-3 flex flex-wrap gap-2">
              <form action={signInDemo}>
                <button
                  className="rounded-[4px] bg-[#3f5f9f] px-4 py-2 text-sm font-bold leading-5 text-white hover:bg-[#334f88]"
                  name="role"
                  type="submit"
                  value="student"
                >
                  Sign in as student
                </button>
              </form>
              <form action={signInDemo}>
                <button
                  className="rounded-[4px] border border-gray-300 bg-white px-4 py-2 text-sm font-bold leading-5 text-[#111111] hover:bg-gray-50"
                  name="role"
                  type="submit"
                  value="admin"
                >
                  Sign in as admin
                </button>
              </form>
            </div>
          )}
        </div>

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">Security warning about this demo</p>
          <p className="mt-1 text-sm leading-[18px] text-[#8a8d91]">
            The demo cookie contains an unsigned role and does not prove identity. HTTP-only blocks browser JavaScript access, but production sessions must be signed, encrypted, or database-backed by a trusted auth library.
          </p>
        </div>

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">What just happened</p>
          <p className="mt-1 text-sm leading-[18px] text-[#8a8d91]">
            The Server Action created a mock session cookie. Protected pages called the DAL, role checks controlled admin access, and the DTO excluded internal user fields.
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
