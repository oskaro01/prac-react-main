"use client";

import { useState } from "react";
import { fullCode } from "../lib/useState";
import Card from "./Card";
import CodeBlock from "./CodeBlock";
import LessonNotes from "./LessonNotes";

export default function UseState() {
  const [text, setText] = useState("");

  return (
    <div className="flex justify-center">
      <Card>
        <div className="bg-[#f5f6f7] px-6 py-3">
          <p className="text-xs font-bold leading-4 text-[#3f5f9f]">Step 1</p>
          <h1 className="mt-1 text-base font-bold leading-5 text-[#111111]">
            Basic component + useState
          </h1>
          <p className="mt-2 text-sm leading-[18px] text-[#8a8d91]">
            State is data React remembers. When state changes, the UI updates.
          </p>
        </div>

        <LessonNotes
          notes={[
            {
              title: "What it does",
              body: "useState gives the component a value it can remember between renders.",
            },
            {
              title: "Why it matters",
              body: "Without state, typing in the input would not update the text shown below.",
            },
            {
              title: "Watch this",
              body: "Every key press calls setText, then React redraws the paragraph with the new value.",
            },
          ]}
        />

        <div className="px-6 py-3">
          <label htmlFor="todo-text" className="block text-base font-bold leading-5 text-[#111111]">
            Type something
          </label>
          <input
            id="todo-text"
            className="mt-3 box-border block w-full max-w-full rounded-[4px] border border-gray-300 px-4 py-2 text-sm leading-5 outline-none focus:border-[#3f5f9f]"
            placeholder="Example: learn React"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">You typed</p>
          <p className="mt-1 text-sm leading-[18px] text-[#8a8d91]">{text || "nothing yet"}</p>
        </div>

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">What just happened</p>
          <p className="mt-1 text-sm leading-[18px] text-[#8a8d91]">
            useState stores the text. The input shows the current state. onChange updates it every time you type.
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
