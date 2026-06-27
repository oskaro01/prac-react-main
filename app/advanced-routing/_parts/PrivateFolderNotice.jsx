export default function PrivateFolderNotice() {
  return (
    <div className="rounded-[4px] border border-gray-200 bg-[#fafbfc] px-4 py-3">
      <p className="text-sm font-bold leading-5 text-[#111111]">Private component loaded</p>
      <p className="mt-1 text-xs leading-4 text-[#6b7078]">
        This component lives in _parts. Next.js allows imports from it but never creates an /_parts route.
      </p>
    </div>
  );
}
