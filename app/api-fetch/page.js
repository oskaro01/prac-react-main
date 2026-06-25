import Nav from "@components/Nav";
import UseEffectFetch from "@components/UseEffectFetch";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#d9dde3] pb-8">
      <Nav />

      <main className="mx-auto w-full max-w-6xl px-6 py-6">
        <UseEffectFetch />
      </main>
    </div>
  );
}
