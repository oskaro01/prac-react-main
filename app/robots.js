import { getSiteUrl } from "../lib/siteUrl";

const siteUrl = getSiteUrl();

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/auth/admin"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
