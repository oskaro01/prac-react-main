import Nav from "@components/Nav";

export default function AdvancedRoutingLayout({ children, modal }) {
  return (
    <div className="min-h-screen bg-[#d9dde3] pb-8">
      <Nav />

      <div className="border-b border-[#c9ccd1] bg-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-2 text-xs font-bold leading-4 text-[#6b7078]">
          Shared nested layout: /advanced-routing
        </div>
      </div>

      <main className="mx-auto w-full max-w-6xl px-6 py-6">{children}</main>
      {modal}
    </div>
  );
}
