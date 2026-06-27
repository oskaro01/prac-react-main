import Nav from "@components/Nav";
import ServerActionsLesson from "@components/ServerActionsLesson";

export default function Page({ searchParams = {} }) {
  const submittedGoal = typeof searchParams.goal === "string" ? searchParams.goal : "";
  const hasEmptyError = searchParams.status === "empty";

  return (
    <div className="min-h-screen bg-[#d9dde3] pb-8">
      <Nav />

      <main className="mx-auto w-full max-w-6xl px-6 py-6">
        <ServerActionsLesson
          hasEmptyError={hasEmptyError}
          submittedGoal={submittedGoal}
        />
      </main>
    </div>
  );
}
