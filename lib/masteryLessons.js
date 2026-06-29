export const metadataSeoLesson = {
  step: "Step 23",
  title: "Metadata and SEO",
  intro: "Use metadata, generated metadata, favicons, Open Graph images, robots.txt, and sitemap.xml so pages can be understood by browsers, search engines, and social previews.",
  notes: [
    {
      title: "Start in layout",
      body: "Put default title, description, icons, and metadataBase in the root layout.",
    },
    {
      title: "Override per route",
      body: "Use generateMetadata when the title or preview depends on route data.",
    },
    {
      title: "Add file routes",
      body: "robots.js, sitemap.js, icon files, and Open Graph image routes are special Next conventions.",
    },
  ],
  tableTitle: "SEO building blocks",
  tableRows: [
    {
      label: "metadata",
      detail: "Static SEO values exported from a layout or page.",
      example: "title, description, icons",
    },
    {
      label: "generateMetadata",
      detail: "Async metadata for pages that depend on params or fetched data.",
      example: "Product title by id",
    },
    {
      label: "opengraph-image",
      detail: "A generated social preview image for link sharing.",
      example: "1200 x 630 PNG",
    },
    {
      label: "robots/sitemap",
      detail: "Search crawler rules and a discoverable route list.",
      example: "/robots.txt, /sitemap.xml",
    },
  ],
  sections: [
    {
      title: "What to remember",
      items: [
        "Every important route needs a clear title and description.",
        "metadataBase should match the final deployed domain.",
        "Do not index private dashboards, admin pages, or user-specific data.",
        "Open Graph images should be readable when shared in chats and social feeds.",
      ],
    },
  ],
  code: `// app/layout.js
export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "React to Next.js Lessons",
    template: "%s | React to Next.js Lessons",
  },
  description: "Compact lessons for mastering React and Next.js.",
  icons: {
    icon: "/icon.svg",
  },
};

// app/products/[id]/page.js
export async function generateMetadata({ params }) {
  const product = await getProduct(params.id);

  return {
    title: product.name,
    description: product.summary,
    alternates: {
      canonical: \`/products/\${product.id}\`,
    },
  };
}`,
};

export const imagesFontsScriptsLesson = {
  step: "Step 24",
  title: "Images, fonts, and scripts",
  intro: "Use next/image to prevent layout shift, next/font to control font loading, and next/script to load third-party scripts deliberately.",
  notes: [
    {
      title: "Image dimensions",
      body: "Always give images stable width, height, sizes, or fill constraints.",
    },
    {
      title: "Font loading",
      body: "next/font self-hosts fonts and helps avoid hidden text and layout shifts.",
    },
    {
      title: "Script strategy",
      body: "Use afterInteractive, lazyOnload, or worker strategy based on urgency.",
    },
  ],
  tableTitle: "Optimization choices",
  tableRows: [
    {
      label: "next/image",
      detail: "Optimizes local and configured remote images.",
      example: "sizes, priority, alt",
    },
    {
      label: "next/font",
      detail: "Loads fonts with predictable CSS and no external browser request.",
      example: "Inter from next/font/google",
    },
    {
      label: "next/script",
      detail: "Controls when third-party JavaScript loads.",
      example: "analytics afterInteractive",
    },
  ],
  sections: [
    {
      title: "Production checklist",
      items: [
        "Use priority only for the image that is truly above the fold.",
        "Write useful alt text or empty alt text for decorative images.",
        "Avoid loading chat widgets, ads, or trackers before the page becomes interactive.",
        "Keep fonts limited to the weights you actually use.",
      ],
    },
  ],
  code: `import Image from "next/image";
import Script from "next/script";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function Page() {
  return (
    <main className={inter.className}>
      <Image
        src="/dashboard-preview.png"
        width={960}
        height={540}
        sizes="(max-width: 768px) 100vw, 960px"
        alt="Dashboard preview"
        priority
      />
      <Script src="https://example.com/analytics.js" strategy="afterInteractive" />
    </main>
  );
}`,
};

export const environmentSecurityLesson = {
  step: "Step 25",
  title: "Environment variables and security",
  intro: "Keep secrets on the server, expose only safe NEXT_PUBLIC values, validate inputs, authorize every sensitive action, and send safe response headers.",
  notes: [
    {
      title: "Secrets stay server-side",
      body: "Never read database URLs, API secrets, or tokens in Client Components.",
    },
    {
      title: "Public means public",
      body: "Anything prefixed NEXT_PUBLIC_ is bundled for the browser.",
    },
    {
      title: "Trust the server",
      body: "Client checks help UX, but real validation and authorization belong on the server.",
    },
  ],
  tableTitle: "Security habits",
  tableRows: [
    {
      label: "process.env.SECRET",
      detail: "Server-only secret for actions, route handlers, and server components.",
      example: "DATABASE_URL",
    },
    {
      label: "NEXT_PUBLIC_",
      detail: "Safe browser-visible value, never a token.",
      example: "NEXT_PUBLIC_SITE_URL",
    },
    {
      label: "validation",
      detail: "Parse and reject bad input before writing data.",
      example: "schema.safeParse",
    },
    {
      label: "authorization",
      detail: "Check the current user can perform the action.",
      example: "requireAdmin()",
    },
    {
      label: "headers",
      detail: "Reduce browser attack surface.",
      example: "CSP, nosniff",
    },
  ],
  sections: [
    {
      title: "Server data leak checklist",
      items: [
        "Do not pass raw database rows to Client Components.",
        "Return DTOs with only the fields the UI needs.",
        "Do not log tokens, cookies, passwords, or private user data.",
        "Re-check authorization inside Server Actions and Route Handlers.",
      ],
    },
  ],
  code: `// Server-only helper
export function getRequiredEnv(name) {
  const value = process.env[name];

  if (!value) {
    throw new Error(\`Missing environment variable: \${name}\`);
  }

  return value;
}

// next.config.js security header example
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Content-Security-Policy", value: "default-src 'self'; img-src 'self' data:;" },
        ],
      },
    ];
  },
};`,
};

export const testingLesson = {
  step: "Step 26",
  title: "Testing",
  intro: "Use unit tests for small logic, component tests for UI behavior, and Playwright for real browser flows across routes.",
  notes: [
    {
      title: "Unit tests",
      body: "Fast checks for pure functions, validation, formatting, and permissions.",
    },
    {
      title: "Component tests",
      body: "Render components and test what users can see or do.",
    },
    {
      title: "Browser flows",
      body: "Playwright catches routing, forms, cookies, loading states, and responsive issues.",
    },
  ],
  tableTitle: "Test layers",
  tableRows: [
    {
      label: "unit",
      detail: "Smallest logic pieces with no browser.",
      example: "formatPrice(), validateForm()",
    },
    {
      label: "component",
      detail: "Render UI and assert accessible output.",
      example: "Testing Library",
    },
    {
      label: "e2e",
      detail: "Open the real app in a browser.",
      example: "Playwright",
    },
  ],
  sections: [
    {
      title: "What to test first",
      items: [
        "Authentication and authorization redirects.",
        "Server Actions that create, update, or delete data.",
        "Forms with validation errors and success states.",
        "Critical navigation flows on desktop and mobile.",
      ],
    },
  ],
  code: `// package.json scripts after installing test tools
{
  "scripts": {
    "test": "vitest",
    "test:e2e": "playwright test"
  }
}

// Playwright flow idea
test("student cannot open admin page", async ({ page }) => {
  await page.goto("/auth");
  await page.getByRole("button", { name: "Sign in as student" }).click();
  await page.goto("/auth/admin");
  await expect(page).toHaveURL(/message=forbidden/);
});`,
};

export const performanceMonitoringLesson = {
  step: "Step 27",
  title: "Performance and monitoring",
  intro: "Measure Core Web Vitals, reduce Client Components, lazy-load heavy UI, track logs, and watch production behavior instead of guessing.",
  notes: [
    {
      title: "Measure first",
      body: "Use Web Vitals and real user monitoring before optimizing blindly.",
    },
    {
      title: "Ship less JS",
      body: "Keep Server Components as the default and move client code to small leaves.",
    },
    {
      title: "Observe production",
      body: "Add logs, health checks, and instrumentation for failures users actually hit.",
    },
  ],
  tableTitle: "Performance targets",
  tableRows: [
    {
      label: "LCP",
      detail: "Largest Contentful Paint: main content should appear quickly.",
      example: "Optimize hero image/data",
    },
    {
      label: "INP",
      detail: "Interaction to Next Paint: UI should respond to input.",
      example: "Reduce client JS",
    },
    {
      label: "CLS",
      detail: "Cumulative Layout Shift: page should not jump around.",
      example: "Image dimensions",
    },
    {
      label: "bundle",
      detail: "Track what JavaScript reaches the browser.",
      example: "Dynamic import heavy UI",
    },
  ],
  sections: [
    {
      title: "Monitoring checklist",
      items: [
        "Report Web Vitals to analytics.",
        "Log Route Handler and Server Action failures with useful context.",
        "Add a lightweight health endpoint for deployment checks.",
        "Watch slow data sources and cache hit rates.",
      ],
    },
  ],
  code: `"use client";

import { useReportWebVitals } from "next/web-vitals";

export default function WebVitals() {
  useReportWebVitals((metric) => {
    sendToAnalytics(metric);
  });

  return null;
}`,
};

export const accessibilityResponsiveLesson = {
  step: "Step 28",
  title: "Accessibility and responsive design",
  intro: "Build interfaces that work with keyboard navigation, screen readers, responsive layouts, readable contrast, and clear focus states.",
  notes: [
    {
      title: "Semantic HTML",
      body: "Use real buttons, links, headings, labels, lists, and landmarks.",
    },
    {
      title: "Keyboard first",
      body: "Every control should be reachable and usable without a mouse.",
    },
    {
      title: "Responsive by default",
      body: "Use stable layouts that adapt without text overlap or horizontal scrolling.",
    },
  ],
  tableTitle: "Accessibility checks",
  tableRows: [
    {
      label: "labels",
      detail: "Inputs need visible labels or accessible names.",
      example: "label htmlFor",
    },
    {
      label: "focus",
      detail: "Keyboard users need a visible current target.",
      example: ":focus-visible",
    },
    {
      label: "contrast",
      detail: "Text and controls need enough color contrast.",
      example: "dark text on light UI",
    },
    {
      label: "responsive",
      detail: "Text, buttons, and grids must fit small screens.",
      example: "grid -> one column",
    },
  ],
  sections: [
    {
      title: "Design review checklist",
      items: [
        "Tab through the full page from top to bottom.",
        "Use headings in a sensible order.",
        "Check mobile, tablet, and desktop widths.",
        "Never rely on color alone to show an error or success state.",
      ],
    },
  ],
  code: `<label htmlFor="email">Email</label>
<input
  id="email"
  name="email"
  type="email"
  aria-describedby="email-help"
/>
<p id="email-help">Use the email connected to your account.</p>`,
};

export const deploymentCiLesson = {
  step: "Step 29",
  title: "Deployment and CI/CD",
  intro: "Production readiness means repeatable builds, environment configuration, preview deployments, logs, health checks, and rollback plans.",
  notes: [
    {
      title: "Build locally",
      body: "npm run build catches many server/client and route problems before deployment.",
    },
    {
      title: "Separate envs",
      body: "Use different secrets for local, preview, staging, and production.",
    },
    {
      title: "Rollback plan",
      body: "Know how to restore the last healthy version before production breaks.",
    },
  ],
  tableTitle: "Deployment pieces",
  tableRows: [
    {
      label: "build",
      detail: "Compile and validate the app.",
      example: "npm run build",
    },
    {
      label: "preview",
      detail: "Deploy every pull request for review.",
      example: "Vercel preview",
    },
    {
      label: "logs",
      detail: "Inspect runtime errors and slow requests.",
      example: "Platform logs",
    },
    {
      label: "health",
      detail: "Expose a small endpoint for uptime checks.",
      example: "/api/health",
    },
  ],
  sections: [
    {
      title: "Before production",
      items: [
        "Set all required environment variables in the hosting platform.",
        "Run build and tests in CI.",
        "Check metadata, robots, sitemap, and social images.",
        "Confirm database migrations and rollback instructions.",
      ],
    },
  ],
  code: `name: Next.js CI

on:
  pull_request:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build`,
};

export const upgradingNextLesson = {
  step: "Step 30",
  title: "Upgrading Next.js",
  intro: "Upgrade deliberately: read the guide, run codemods, check breaking changes, test routes, and migrate Middleware to Proxy when moving to Next 16.",
  notes: [
    {
      title: "Read first",
      body: "Version guides explain breaking changes and the order of migrations.",
    },
    {
      title: "Use codemods",
      body: "Codemods handle mechanical changes, but you still review the diff.",
    },
    {
      title: "Test deeply",
      body: "Upgrades touch routing, caching, rendering, and React behavior.",
    },
  ],
  tableTitle: "Upgrade map",
  tableRows: [
    {
      label: "React",
      detail: "Next major versions often require a supported React version.",
      example: "React 19 for Next 16",
    },
    {
      label: "Proxy",
      detail: "Next 16 renames middleware.js to proxy.js.",
      example: "export function proxy",
    },
    {
      label: "caching",
      detail: "New cache APIs can change how data is reused.",
      example: "Cache Components",
    },
    {
      label: "Turbopack",
      detail: "Build tooling changes can expose old assumptions.",
      example: "Check plugins",
    },
  ],
  sections: [
    {
      title: "Upgrade checklist",
      items: [
        "Commit before upgrading so the diff is clean.",
        "Upgrade Next, React, and related packages together as the guide says.",
        "Run official codemods, then review every changed file.",
        "Test auth, middleware/proxy, caching, images, metadata, and deployment.",
      ],
    },
  ],
  code: `# Example only. Do not run until you decide to upgrade.
npm install next@latest react@latest react-dom@latest
npx @next/codemod@latest middleware-to-proxy .

// Next 16 proxy.js shape
import { NextResponse } from "next/server";

export function proxy(request) {
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};`,
};

export const productionCapstoneLesson = {
  step: "Step 31",
  title: "Production capstone project",
  intro: "Build one real app that combines routing, auth, database CRUD, validation, caching, tests, security, accessibility, SEO, monitoring, and deployment.",
  notes: [
    {
      title: "One real product",
      body: "Mastery comes from connecting the pieces in a complete app.",
    },
    {
      title: "Production rules",
      body: "Treat auth, data, errors, testing, and deployment like real user-facing work.",
    },
    {
      title: "Portfolio ready",
      body: "The final project should be clean enough to show and explain.",
    },
  ],
  tableTitle: "Capstone options",
  tableRows: [
    {
      label: "dashboard",
      detail: "Users manage projects, tasks, metrics, and settings.",
      example: "SaaS admin",
    },
    {
      label: "ecommerce",
      detail: "Products, cart, checkout-style flow, admin CRUD, search.",
      example: "Storefront",
    },
    {
      label: "content app",
      detail: "Authors, posts, categories, comments, moderation.",
      example: "CMS",
    },
  ],
  sections: [
    {
      title: "Must-have features",
      items: [
        "Authentication with protected routes and role-based authorization.",
        "Database CRUD with validation, optimistic UI where useful, and safe DTOs.",
        "Search, filtering, sorting, pagination, loading, error, and not-found states.",
        "Caching and revalidation for shared data.",
        "Metadata, sitemap, Open Graph image, responsive design, and accessibility.",
        "Unit/component tests plus at least three Playwright flows.",
        "Production deployment with env vars, logs, health check, and rollback notes.",
      ],
    },
    {
      title: "Build milestones",
      items: [
        "Milestone 1: data model, routes, layouts, and design system.",
        "Milestone 2: auth, permissions, CRUD, and forms.",
        "Milestone 3: search, pagination, caching, and streaming.",
        "Milestone 4: SEO, accessibility, performance, tests, and deployment.",
      ],
    },
  ],
  code: `// Suggested capstone route map
app/
  (marketing)/
    page.js
  dashboard/
    layout.js
    page.js
    projects/
      page.js
      [id]/page.js
  api/
    health/route.js
  sitemap.js
  robots.js
  opengraph-image.js`,
};

export const frontendDesignLesson = {
  step: "Step 32",
  title: "Frontend design blueprint",
  intro: "This is the exact compact old Facebook-inspired UI recipe used in this project: quiet layout, dense readable rows, sharp borders, small radius, and strong content hierarchy.",
  notes: [
    {
      title: "Compact first",
      body: "Use small type, tight line heights, and 8-12px spacing so information feels useful instead of stretched.",
    },
    {
      title: "Borders guide the eye",
      body: "Prefer white panels, gray dividers, and subtle shadows over big decorative cards.",
    },
    {
      title: "Rows beat posters",
      body: "For learning apps and dashboards, use rows, tables, forms, and panels instead of hero sections.",
    },
  ],
  tableTitle: "Exact visual tokens",
  tableRows: [
    {
      label: "page",
      detail: "Soft gray app background with centered max-width content.",
      example: "#d9dde3, max-w-6xl",
    },
    {
      label: "brand",
      detail: "Muted Facebook-like blue for bars, links, and primary buttons.",
      example: "#3f5f9f",
    },
    {
      label: "surface",
      detail: "White cards with light gray borders and tiny shadow.",
      example: "#ffffff, #c9ccd1",
    },
    {
      label: "type",
      detail: "Roboto or Helvetica-style sans font with compact sizes.",
      example: "12, 14, 16, 20px",
    },
    {
      label: "radius",
      detail: "Small radius keeps the UI old-school and utilitarian.",
      example: "3-4px",
    },
    {
      label: "spacing",
      detail: "Use a small scale and repeat it everywhere.",
      example: "4, 8, 12, 16, 24px",
    },
  ],
  sections: [
    {
      title: "Build order I follow",
      items: [
        "Start with the page shell: gray background, white top nav, blue title bar, max-width content.",
        "Add one main white lesson card with 4px radius, #c9ccd1 border, and a subtle 0 1px 2px shadow.",
        "Split the card into sections using borders instead of large margins.",
        "Use a gray header strip inside the card for the step number, title, and short description.",
        "Use 16px bold section titles, 14px muted body text, 12px labels, and line heights around 16-20px.",
        "Use rows and grid columns for explanations, then collapse to one column on mobile.",
        "Use blue only for primary action, links, active state, and step labels.",
        "Use form inputs with border-box sizing, 36px height, 4px radius, and 8px vertical padding.",
      ],
    },
    {
      title: "Rules that make it feel like this project",
      items: [
        "No giant hero sections for tool pages.",
        "No gradients, bokeh blobs, floating decoration, or oversized rounded cards.",
        "No huge vertical gaps between rows.",
        "Do not nest cards inside cards unless the inner piece is a repeated item or tool sample.",
        "Keep text close to the thing it explains, but never touching the border.",
        "Use dividers for structure and whitespace for breathing room.",
        "Make every row scanable: short label, direct explanation, compact example.",
      ],
    },
    {
      title: "When to change the style",
      items: [
        "Use this style for dashboards, admin panels, settings pages, learning tools, and data-heavy apps.",
        "Use a more visual style for portfolios, brands, games, restaurants, products, or landing pages.",
        "Even when the colors change, keep the spacing system and component discipline.",
      ],
    },
  ],
  code: `// Page shell
<div className="min-h-screen bg-[#d9dde3] pb-8">
  <header className="border-b border-[#c9ccd1] bg-white">
    <div className="mx-auto flex min-h-[68px] max-w-6xl items-center px-6">
      <Link className="text-xl font-bold text-[#111111]" href="/">React Lite</Link>
    </div>
    <div className="bg-[#3f5f9f]">
      <div className="mx-auto max-w-6xl px-6 py-3 text-xl font-medium leading-6 text-white">
        React to Next.js Lessons
      </div>
    </div>
  </header>

  <main className="mx-auto max-w-6xl px-6 py-6">
    <section className="overflow-hidden rounded-[4px] border border-[#c9ccd1] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.14)]">
      <div className="bg-[#f5f6f7] px-6 py-3">
        <p className="text-xs font-bold leading-4 text-[#3f5f9f]">Step label</p>
        <h1 className="mt-1 text-base font-bold leading-5 text-[#111111]">Title</h1>
        <p className="mt-2 text-sm leading-[18px] text-[#8a8d91]">Short description.</p>
      </div>
      <div className="border-t border-[#e5e5e5] px-6 py-3">
        <p className="text-base font-bold leading-5 text-[#111111]">Section title</p>
        <p className="mt-1 text-sm leading-[18px] text-[#8a8d91]">Section body text.</p>
      </div>
    </section>
  </main>
</div>

// Core CSS idea
:root {
  --ds-brand: #3f5f9f;
  --ds-text: #111111;
  --ds-muted: #6b7078;
  --ds-border: #d1d5db;
  --ds-radius: 4px;
}`,
};
