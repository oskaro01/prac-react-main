export const fullCode = `
// components/ServerClientLesson.jsx
import ClientClickDemo from "./ClientClickDemo";

export default function ServerClientLesson() {
  return (
    <>
      <p>This page can stay as a server component.</p>
      <ClientClickDemo />
    </>
  );
}

// components/ClientClickDemo.jsx
"use client";

import { useState } from "react";

export default function ClientClickDemo() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}
`;
