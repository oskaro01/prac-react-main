import Link from "next/link";
import Card from "@components/Card";

export default function DetailPage({ params }) {
  return (
    <div className="flex justify-center">
      <Card>
        <div className="bg-[#f5f6f7] px-6 py-3">
          <p className="text-xs font-bold leading-4 text-[#3f5f9f]">Full route</p>
          <h1 className="mt-1 text-base font-bold leading-5 text-[#111111]">Detail #{params.id}</h1>
          <p className="mt-2 text-sm leading-[18px] text-[#8a8d91]">
            This is the normal page rendered after opening the URL directly or refreshing it.
          </p>
        </div>

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">Why the view changed</p>
          <p className="mt-1 text-sm leading-[18px] text-[#8a8d91]">
            Interception happens during client navigation. A direct request renders this complete page instead.
          </p>
        </div>

        <div className="px-6 py-3">
          <Link className="text-sm font-bold leading-5 text-[#3f5f9f] hover:underline" href="/advanced-routing">
            Back to Step 15
          </Link>
        </div>
      </Card>
    </div>
  );
}
