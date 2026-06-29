import { ImageResponse } from "next/og";

export const alt = "Metadata and SEO lesson preview";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#f5f6f7",
          border: "24px solid #3f5f9f",
          color: "#111111",
          display: "flex",
          flexDirection: "column",
          fontFamily: "Arial, sans-serif",
          height: "100%",
          justifyContent: "center",
          padding: 64,
          width: "100%",
        }}
      >
        <div style={{ color: "#3f5f9f", fontSize: 36, fontWeight: 700 }}>Step 23</div>
        <div style={{ fontSize: 76, fontWeight: 700, marginTop: 18 }}>Metadata and SEO</div>
        <div style={{ color: "#6b7078", fontSize: 32, marginTop: 24 }}>
          metadata, Open Graph, robots, and sitemap
        </div>
      </div>
    ),
    size,
  );
}
