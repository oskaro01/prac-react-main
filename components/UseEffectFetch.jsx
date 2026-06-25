"use client";

import { useEffect, useState } from "react";
import { fullCode } from "../lib/useEffectFetch";
import Card from "./Card";
import CodeBlock from "./CodeBlock";
import LessonNotes from "./LessonNotes";

export default function UseEffectFetch() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadUsers() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
          throw new Error("Could not load users.");
        }

        const data = await response.json();
        setUsers(data.slice(0, 5));
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    loadUsers();
  }, []);

  return (
    <div className="flex justify-center">
      <Card>
        <div className="bg-[#f5f6f7] px-6 py-3">
          <p className="text-xs font-bold leading-4 text-[#3f5f9f]">Step 5</p>
          <h1 className="mt-1 text-base font-bold leading-5 text-[#111111]">
            useEffect + API fetching
          </h1>
          <p className="mt-2 text-sm leading-[18px] text-[#8a8d91]">
            useEffect runs after render. Here it fetches users from an API once.
          </p>
        </div>

        <LessonNotes
          notes={[
            {
              title: "What it does",
              body: "useEffect runs code after React has shown the component on the screen.",
            },
            {
              title: "Why fetch here",
              body: "API data arrives later, so the page first shows loading, then shows the users.",
            },
            {
              title: "Watch this",
              body: "isLoading, error, and users decide which part of the UI appears.",
            },
          ]}
        />

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">API result</p>

          {isLoading && (
            <p className="mt-1 text-sm leading-[18px] text-[#8a8d91]">Loading users...</p>
          )}

          {error && (
            <p className="mt-1 text-sm leading-5 text-red-700">{error}</p>
          )}

          {!isLoading && !error && (
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
            useEffect runs once because the dependency array is empty. fetch asks the API for data.
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
