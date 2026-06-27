export const fullCode = `
// File: app/products/[id]/page.js
import { notFound } from "next/navigation";

const products = [
  { id: "1", name: "Desk Lamp" },
  { id: "2", name: "Notebook" },
];

export default function ProductPage({ params }) {
  const product = products.find(
    (item) => item.id === params.id
  );

  if (!product) {
    notFound();
  }

  return (
    <main>
      <h1>{product.name}</h1>
      <p>Product id: {params.id}</p>
    </main>
  );
}

// /products/1 gives params.id === "1"
// /products/2 gives params.id === "2"
`;
