import Link from "next/link";
import { notFound } from "next/navigation";
import Card from "@components/Card";
import Nav from "@components/Nav";
import { getProduct } from "../../../lib/products";

export default function ProductPage({ params }) {
  const product = getProduct(params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#d9dde3] pb-8">
      <Nav />

      <main className="mx-auto w-full max-w-6xl px-6 py-6">
        <div className="flex justify-center">
          <Card>
            <div className="bg-[#f5f6f7] px-6 py-3">
              <p className="text-xs font-bold leading-4 text-[#3f5f9f]">Dynamic product page</p>
              <h1 className="mt-1 text-base font-bold leading-5 text-[#111111]">{product.name}</h1>
              <p className="mt-2 text-sm leading-[18px] text-[#8a8d91]">{product.description}</p>
            </div>

            <div className="px-6 py-3">
              <p className="text-base font-bold leading-5 text-[#111111]">URL information</p>
              <p className="mt-1 text-sm leading-[18px] text-[#8a8d91]">
                params.id is "{params.id}", so Next.js selected {product.name}.
              </p>
            </div>

            <div className="px-6 py-3">
              <p className="text-base font-bold leading-5 text-[#111111]">Category</p>
              <p className="mt-1 text-sm leading-[18px] text-[#8a8d91]">{product.category}</p>
            </div>

            <div className="px-6 py-3">
              <Link className="text-sm font-bold leading-5 text-[#3f5f9f] hover:underline" href="/dynamic-routes">
                Back to Step 9
              </Link>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
