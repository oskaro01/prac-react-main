import Card from "@components/Card";

export default function Loading() {
  return (
    <div className="flex justify-center">
      <Card>
        <div className="bg-[#f5f6f7] px-6 py-3">
          <p className="text-xs font-bold leading-4 text-[#3f5f9f]">Step 10 demo</p>
          <h1 className="mt-1 text-base font-bold leading-5 text-[#111111]">Loading route...</h1>
        </div>

        <div className="px-6 py-3">
          <p className="animate-pulse text-sm leading-[18px] text-[#8a8d91]">
            Next.js is waiting for the page and showing loading.js for now.
          </p>
        </div>
      </Card>
    </div>
  );
}
