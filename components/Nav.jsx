import Link from "next/link";

const links = [
  { href: "/", label: "Step 1: useState" },
  { href: "/listkeys", label: "Step 2: Lists & keys" },
  { href: "/conditional", label: "Step 3: Conditional rendering" },
  { href: "/props", label: "Step 4: Components & props" },
  { href: "/api-fetch", label: "Step 5: useEffect + API" },
  { href: "/app-router", label: "Step 6: App Router" },
  { href: "/server-client", label: "Step 7: Server vs Client" },
  { href: "/data-fetching", label: "Step 8: Server Data" },
  { href: "/dynamic-routes", label: "Step 9: Dynamic Routes" },
  { href: "/route-states", label: "Step 10: Route States" },
  { href: "/route-handlers", label: "Step 11: Route Handlers" },
  { href: "/server-actions", label: "Step 12: Server Actions" },
  { href: "/design-system", label: "Step 13: Design System" },
  { href: "/typescript", label: "Step 14: TypeScript" },
  { href: "/advanced-routing", label: "Step 15: Advanced Routing" },
  { href: "/navigation-apis", label: "Step 16: Navigation APIs" },
  { href: "/form-validation", label: "Step 17: Form Validation" },
  { href: "/database-crud", label: "Step 18: Database CRUD" },
  { href: "/caching-revalidation", label: "Step 19: Caching" },
  { href: "/streaming-suspense", label: "Step 20: Streaming" },
  { href: "/auth", label: "Step 21: Auth" },
  { href: "/middleware-lab", label: "Step 22: Middleware / Proxy" },
];

export default function Nav() {
  return (
    <header className="border-b border-[#c9ccd1] bg-white">
      <div className="mx-auto flex min-h-[68px] w-full max-w-6xl items-center justify-between gap-6 px-6">
        <Link href="/" className="shrink-0 text-xl font-bold text-[#111111]">
          React Lite
        </Link>

        <nav className="flex flex-wrap items-center justify-end gap-1">
          {links.map((link) => (
            <Link
              className="rounded-[3px] px-3 py-2 text-sm font-bold leading-5 text-[#111111] hover:bg-[#f5f6f7] hover:text-[#3f5f9f]"
              href={link.href}
              key={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="bg-[#3f5f9f]">
        <div className="mx-auto max-w-6xl px-6 py-3 text-xl font-medium leading-6 text-white">
          React to Next.js Lessons
        </div>
      </div>
    </header>
  );
}
