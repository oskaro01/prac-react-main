"use client";

import { useState } from "react";
import CodeBlock from "./CodeBlock";

const initialResult = {
  status: "Ready",
  data: {
    message: "Choose GET or POST to call the Route Handler.",
  },
};

export default function RouteHandlerTester() {
  const [result, setResult] = useState(initialResult);
  const [isLoading, setIsLoading] = useState(false);

  async function sendRequest(method) {
    setIsLoading(true);

    try {
      const options =
        method === "POST"
          ? {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ topic: "Next.js Route Handlers" }),
            }
          : undefined;

      const response = await fetch("/api/lesson-profile", options);
      const data = await response.json();

      setResult({ status: response.status, data });
    } catch {
      setResult({
        status: "Error",
        data: { message: "The API request could not be completed." },
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <button
          className="rounded-[4px] bg-[#3f5f9f] px-4 py-2 text-sm font-bold leading-5 text-white hover:bg-[#334f88] disabled:cursor-not-allowed disabled:opacity-60"
          disabled={isLoading}
          onClick={() => sendRequest("GET")}
          type="button"
        >
          Send GET
        </button>
        <button
          className="rounded-[4px] border border-gray-300 bg-white px-4 py-2 text-sm font-bold leading-5 text-[#111111] hover:bg-[#f5f6f7] disabled:cursor-not-allowed disabled:opacity-60"
          disabled={isLoading}
          onClick={() => sendRequest("POST")}
          type="button"
        >
          Send POST
        </button>
      </div>

      <div className="mt-3" aria-live="polite">
        <p className="mb-2 text-xs font-bold leading-4 text-[#6b7078]">
          {isLoading ? "Calling API..." : `Response status: ${result.status}`}
        </p>
        <CodeBlock code={JSON.stringify(result.data, null, 2)} />
      </div>
    </div>
  );
}
