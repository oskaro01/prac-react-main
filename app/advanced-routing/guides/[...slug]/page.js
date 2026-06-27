import Link from "next/link";
import Badge from "@components/ui/Badge";
import Card from "@components/Card";

export default function GuidePage({ params }) {
  const segments = params.slug || [];

  return (
    <div className="flex justify-center">
      <Card>
        <div className="bg-[#f5f6f7] px-6 py-3">
          <p className="text-xs font-bold leading-4 text-[#3f5f9f]">Catch-all route demo</p>
          <h1 className="mt-1 text-base font-bold leading-5 text-[#111111]">[...slug] captured the URL</h1>
          <p className="mt-2 text-sm leading-[18px] text-[#8a8d91]">
            Catch-all parameters are arrays because they can contain more than one URL segment.
          </p>
        </div>

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">params.slug</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {segments.map((segment) => (
              <Badge key={segment}>{segment}</Badge>
            ))}
          </div>
          <p className="mt-3 font-mono text-xs leading-5 text-[#6b7078]">
            [{segments.map((segment) => `"${segment}"`).join(", ")}]
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
