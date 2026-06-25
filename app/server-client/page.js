import Nav from "@components/Nav";
import ServerClientLesson from "@components/ServerClientLesson";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#d9dde3] pb-8">
      <Nav />

      <main className="mx-auto w-full max-w-6xl px-6 py-6">
        <ServerClientLesson />
      </main>
    </div>
  );
}
