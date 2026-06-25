"use client";

import { useState } from "react";
import { fullCode } from "../lib/listkey";
import Card from "./Card";
import CodeBlock from "./CodeBlock";
import LessonNotes from "./LessonNotes";

export default function ListKeys() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo() {
    const cleanText = text.trim();

    if (!cleanText) return;

    const newTodo = {
      id: Date.now(),
      title: cleanText,
    };

    setTodos([...todos, newTodo]);
    setText("");
  }

  return (
    <div className="flex justify-center">
      <Card>
        <div className="bg-[#f5f6f7] px-6 py-3">
          <p className="text-xs font-bold leading-4 text-[#3f5f9f]">Step 2</p>
          <h1 className="mt-1 text-base font-bold leading-5 text-[#111111]">Lists & keys</h1>
          <p className="mt-2 text-sm leading-[18px] text-[#8a8d91]">
            Store many items in an array, use map to show them, and give each item a key.
          </p>
        </div>

        <LessonNotes
          notes={[
            {
              title: "What it does",
              body: "The todos array keeps many items in one state value.",
            },
            {
              title: "Why map",
              body: "map loops through the array and returns one list row for each todo.",
            },
            {
              title: "Why key",
              body: "key helps React know which row is which when the list changes.",
            },
          ]}
        />

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">Add a todo</p>
          <div className="mt-3 flex flex-col gap-2 sm:flex-row">
            <input
              className="box-border block w-full min-w-0 flex-1 rounded-[4px] border border-gray-300 px-4 py-2 text-sm leading-5 outline-none focus:border-[#3f5f9f]"
              placeholder="Write here"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />

            <button
              className="shrink-0 rounded-[4px] bg-[#3f5f9f] px-4 py-2 text-sm font-bold leading-5 text-white hover:bg-[#35538d]"
              onClick={addTodo}
            >
              Add
            </button>
          </div>
        </div>

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">Todo list</p>
          {todos.length === 0 ? (
            <p className="mt-1 text-sm leading-[18px] text-[#8a8d91]">No todos yet.</p>
          ) : (
            <ul className="mt-3 divide-y divide-gray-200 rounded-md border border-gray-200">
              {todos.map((todo) => (
                <li className="px-4 py-2 text-base font-bold leading-5 text-[#111111]" key={todo.id}>
                  {todo.title}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">What just happened</p>
          <p className="mt-1 text-sm leading-[18px] text-[#8a8d91]">
            todos is an array. map turns every todo into a list item. key helps React track each row.
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
