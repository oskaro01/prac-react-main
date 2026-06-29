import "./globals.css";
import { getSiteUrl } from "../lib/siteUrl";

const siteUrl = getSiteUrl();

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "React to Next.js Lessons",
    template: "%s | React to Next.js Lessons",
  },
  description: "Compact React and Next.js lessons from fundamentals to production readiness.",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "React to Next.js Lessons",
    description: "A compact roadmap for mastering React and Next.js.",
    type: "website",
    url: "/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
