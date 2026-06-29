import { getSiteUrl } from "../lib/siteUrl";

const siteUrl = getSiteUrl();

const routes = [
  "",
  "/listkeys",
  "/conditional",
  "/props",
  "/api-fetch",
  "/app-router",
  "/server-client",
  "/data-fetching",
  "/dynamic-routes",
  "/route-states",
  "/route-handlers",
  "/server-actions",
  "/design-system",
  "/typescript",
  "/advanced-routing",
  "/navigation-apis",
  "/form-validation",
  "/database-crud",
  "/caching-revalidation",
  "/streaming-suspense",
  "/auth",
  "/middleware-lab",
  "/metadata-seo",
  "/images-fonts-scripts",
  "/environment-security",
  "/testing",
  "/performance-monitoring",
  "/accessibility-responsive",
  "/deployment-ci",
  "/upgrading-next",
  "/production-capstone",
  "/frontend-design",
];

export default function sitemap() {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}
