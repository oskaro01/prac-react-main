export const fullCode = `
// app/dashboard/loading.js
export default function Loading() {
  return <p>Loading dashboard...</p>;
}

// app/dashboard/error.js
"use client";

export default function Error({ reset }) {
  return (
    <div>
      <p>Something went wrong.</p>
      <button onClick={reset}>Try again</button>
    </div>
  );
}

// app/dashboard/not-found.js
export default function NotFound() {
  return <p>Dashboard item not found.</p>;
}

// Use this inside a page when data is missing:
import { notFound } from "next/navigation";

if (!item) {
  notFound();
}
`;
