export function getSiteUrl() {
  const fallback = "http://localhost:3000";
  const value = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!value) {
    return fallback;
  }

  const withProtocol = /^https?:\/\//.test(value)
    ? value
    : value.startsWith("localhost") || value.startsWith("127.")
      ? `http://${value}`
      : `https://${value}`;

  try {
    return new URL(withProtocol).origin;
  } catch {
    return fallback;
  }
}
