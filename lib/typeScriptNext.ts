export const typeErrorCode = `
type User = {
  name: string;
  age: number;
};

const user: User = {
  name: "Amina",
  age: "twenty", // Error: string is not a number
};
`;

export const fullCode = `
// A reusable data type
type Product = {
  id: number;
  name: string;
  inStock: boolean;
  tags: string[];
  description?: string;
  status: "draft" | "published";
};

// Typed component props
type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article>
      <h2>{product.name}</h2>
      <p>{product.inStock ? "In stock" : "Unavailable"}</p>
    </article>
  );
}

// Typed server data
async function getProducts(): Promise<Product[]> {
  const response = await fetch("https://example.com/products");

  if (!response.ok) {
    throw new Error("Could not load products.");
  }

  return response.json();
}

// Next.js 14 dynamic route params
type ProductPageProps = {
  params: { id: string };
};

export default function ProductPage({ params }: ProductPageProps) {
  return <p>Product id: {params.id}</p>;
}
`;
