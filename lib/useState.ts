export const fullCode = `

"use client";

import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");

  return (
    <div>
      <h1>Todo App</h1>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p>You typed: {text}</p>
    </div>
  );
}

`;
