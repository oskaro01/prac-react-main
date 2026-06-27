export const fullCode = `
// File: app/api/products/route.js
export async function GET() {
  return Response.json({
    products: ["Lamp", "Notebook"]
  });
}

export async function POST(request) {
  const body = await request.json();

  if (!body.name) {
    return Response.json(
      { error: "Name is required." },
      { status: 400 }
    );
  }

  return Response.json(
    { message: "Product received.", product: body },
    { status: 201 }
  );
}
`;
