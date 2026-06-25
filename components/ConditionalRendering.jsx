"use client";

import { useState } from "react";
import { fullCode } from "../lib/conditionalRendering";
import Card from "./Card";
import CodeBlock from "./CodeBlock";
import LessonNotes from "./LessonNotes";

const starterTodos = [
  { id: 1, title: "Learn conditional rendering" },
  { id: 2, title: "Show different UI for different state" },
];

export default function ConditionalRendering() {
  const [todos, setTodos] = useState([]);
  const [showTip, setShowTip] = useState(true);

  function addStarterTodos() {
    setTodos(starterTodos);
  }

  function clearTodos() {
    setTodos([]);
  }

  return (
    <div className="flex justify-center">
      <Card>
        <div className="bg-[#f5f6f7] px-6 py-3">
          <p className="text-xs font-bold leading-4 text-[#3f5f9f]">Step 3</p>
          <h1 className="mt-1 text-base font-bold leading-5 text-[#111111]">
            Conditional rendering
          </h1>
          <p className="mt-2 text-sm leading-[18px] text-[#8a8d91]">
            Conditional rendering means showing different UI when the data changes.
          </p>
        </div>

        <LessonNotes
          notes={[
            {
              title: "What it does",
              body: "Conditional rendering lets one component show different screens for different state.",
            },
            {
              title: "Ternary",
              body: "Use ? : when you want either this UI or that UI.",
            },
            {
              title: "&&",
              body: "Use && when something should appear only when a condition is true.",
            },
          ]}
        />

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">Controls</p>
          <div className="mt-3 grid gap-2">
            <button
              className="rounded-[4px] bg-[#3f5f9f] px-4 py-2 text-sm font-bold leading-5 text-white hover:bg-[#35538d]"
              onClick={addStarterTodos}
            >
              Add sample todos
            </button>

            <button
              className="rounded-[4px] border border-gray-300 bg-white px-4 py-2 text-sm font-bold leading-5 text-[#111111] hover:bg-gray-50"
              onClick={clearTodos}
            >
              Clear
            </button>

            <button
              className="rounded-[4px] border border-gray-300 bg-white px-4 py-2 text-sm font-bold leading-5 text-[#111111] hover:bg-gray-50"
              onClick={() => setShowTip(!showTip)}
            >
              Toggle tip
            </button>
          </div>
        </div>

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">Result</p>
          {todos.length === 0 ? (
            <p className="mt-1 text-sm leading-[18px] text-[#8a8d91]">
              No todos yet. Click "Add sample todos" to show the list.
            </p>
          ) : (
            <ul className="mt-3 divide-y divide-gray-200 rounded-[4px] border border-gray-200">
              {todos.map((todo) => (
                <li className="px-4 py-2 text-base font-bold leading-5 text-[#111111]" key={todo.id}>
                  {todo.title}
                </li>
              ))}
            </ul>
          )}
        </div>

        {todos.length > 0 && (
          <div className="px-6 py-3">
            <p className="text-base font-bold leading-5 text-[#111111]">Todo count</p>
            <p className="mt-1 text-sm leading-[18px] text-[#8a8d91]">
              You have {todos.length} todos.
            </p>
          </div>
        )}

        {showTip && (
          <div className="px-6 py-3">
            <p className="text-base font-bold leading-5 text-[#111111]">Tip</p>
            <p className="mt-1 text-sm leading-[18px] text-[#8a8d91]">
              Use a ternary for either/or UI. Use && for optional UI.
            </p>
          </div>
        )}

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">What just happened</p>
          <p className="mt-1 text-sm leading-[18px] text-[#8a8d91]">
            The empty message, list, count, and tip appear only when their conditions are true.
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
