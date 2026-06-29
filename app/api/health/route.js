export function GET() {
  return Response.json(
    {
      ok: true,
      service: "react-to-nextjs-lessons",
      checkedAt: new Date().toISOString(),
    },
    {
      headers: {
        "Cache-Control": "no-store",
      },
    },
  );
}
