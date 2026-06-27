import { fullCode } from "../lib/serverDataFetching";
import Card from "./Card";
import CodeBlock from "./CodeBlock";
import LessonNotes from "./LessonNotes";

async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Could not load users.");
  }

  const users = await response.json();
  return users.slice(0, 5);
}

const comparison = [
  {
    method: "Step 5: Client fetch",
    flow: "Page loads first, then the browser fetches the data.",
    code: "useEffect + useState",
  },
  {
    method: "Step 8: Server fetch",
    flow: "The server fetches first, then sends the ready page.",
    code: "async + await fetch",
  },
];

export default async function ServerDataFetching() {
  let users = [];
  let error = "";

  try {
    users = await getUsers();
  } catch (fetchError) {
    error = fetchError instanceof Error ? fetchError.message : "Could not load users.";
  }

  return (
    <div className="flex justify-center">
      <Card>
        <div className="bg-[#f5f6f7] px-6 py-3">
          <p className="text-xs font-bold leading-4 text-[#3f5f9f]">Step 8</p>
          <h1 className="mt-1 text-base font-bold leading-5 text-[#111111]">
            Data fetching in a Server Component
          </h1>
          <p className="mt-2 text-sm leading-[18px] text-[#8a8d91]">
            Next.js can fetch data on the server before sending the page to the browser.
          </p>
        </div>

        <LessonNotes
          notes={[
            {
              title: "Async component",
              body: "The component is async, so it can wait for fetch before returning its JSX.",
            },
            {
              title: "No React hooks",
              body: "There is no useEffect, useState, or use client because the fetch runs on the server.",
            },
            {
              title: "Fresh data",
              body: "cache: no-store tells Next.js to request fresh data each time this page is opened.",
            },
          ]}
        />

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">Step 5 compared with Step 8</p>
          <div className="mt-3 overflow-hidden rounded-[4px] border border-gray-200">
            {comparison.map((item) => (
              <div
                className="grid gap-1 border-b border-gray-200 px-4 py-2 last:border-b-0 md:grid-cols-[0.9fr_1.5fr_0.8fr]"
                key={item.method}
              >
                <p className="text-sm font-bold leading-5 text-[#111111]">{item.method}</p>
                <p className="text-sm leading-[18px] text-[#8a8d91]">{item.flow}</p>
                <p className="font-mono text-xs leading-5 text-[#3f5f9f]">{item.code}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">Server API result</p>

          {error ? (
            <p className="mt-2 text-sm leading-5 text-red-700">{error}</p>
          ) : (
            <ul className="mt-3 divide-y divide-gray-200 rounded-[4px] border border-gray-200">
              {users.map((user) => (
                <li className="px-4 py-2" key={user.id}>
                  <p className="text-base font-bold leading-5 text-[#111111]">{user.name}</p>
                  <p className="mt-1 text-sm leading-[18px] text-[#8a8d91]">{user.email}</p>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">What just happened</p>
          <p className="mt-1 text-sm leading-[18px] text-[#8a8d91]">
            Next.js ran getUsers on the server, waited for the response, and rendered the user list into the page before the browser received it.
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
