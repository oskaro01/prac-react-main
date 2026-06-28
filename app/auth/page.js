import AuthenticationLesson from "@components/AuthenticationLesson";
import { getDemoSession } from "../../lib/demoAuth";

export const dynamic = "force-dynamic";

export default async function Page({ searchParams = {} }) {
  const user = await getDemoSession();

  return (
    <AuthenticationLesson
      message={typeof searchParams.message === "string" ? searchParams.message : ""}
      user={user}
    />
  );
}
