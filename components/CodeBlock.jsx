export default function CodeBlock({ code }) {
  return (
    <div
      className="overflow-x-auto rounded-[4px] px-4 py-3 font-mono text-xs leading-5"
      style={{ backgroundColor: "#111827", color: "#f9fafb" }}
    >
      <pre className="whitespace-pre-wrap" style={{ color: "#f9fafb" }}>
        {code}
      </pre>
    </div>
  );
}
