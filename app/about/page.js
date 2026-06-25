import Nav from "../../components/Nav";
import Card from "../../components/Card";

export default function About() {
  return (
    <div className="min-h-screen bg-[#d9dde3] pb-8">
      <Nav />

      <main className="mx-auto w-full max-w-6xl px-6 py-6">
        <Card>
          <div className="bg-[#f5f6f7] px-6 py-3">
            <h1 className="text-base font-bold leading-5 text-[#111111]">About</h1>
          </div>

          <div className="px-6 py-3">
            <p className="text-base font-bold leading-5 text-[#111111]">Practice app</p>
            <p className="mt-1 text-sm leading-[18px] text-[#8a8d91]">
              This is a simple React and Next.js learning app.
            </p>
          </div>
        </Card>
      </main>
    </div>
  );
}
