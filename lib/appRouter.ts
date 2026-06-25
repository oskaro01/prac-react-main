export const fullCode = `
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <h1>Home page</h1>
      <Link href="/about">Go to about</Link>
    </main>
  );
}

// App Router examples:
// app/page.js -> /
// app/about/page.js -> /about
// app/products/page.js -> /products
// app/products/[id]/page.js -> /products/12
`;
