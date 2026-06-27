const skills = ["Route Handlers", "GET requests", "POST requests"];

export async function GET() {
  return Response.json({
    ok: true,
    message: "The GET Route Handler is working.",
    skills,
  });
}

export async function POST(request) {
  let body;

  try {
    body = await request.json();
  } catch {
    return Response.json(
      { ok: false, message: "The request body must be valid JSON." },
      { status: 400 },
    );
  }

  const topic = typeof body.topic === "string" ? body.topic.trim() : "";

  if (!topic) {
    return Response.json(
      { ok: false, message: "A topic is required." },
      { status: 400 },
    );
  }

  return Response.json(
    {
      ok: true,
      message: "The POST Route Handler received your data.",
      topic,
    },
    { status: 201 },
  );
}
