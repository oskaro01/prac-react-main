export const fullCode = `
// File: app/goals/actions.js
"use server";

import { redirect } from "next/navigation";

export async function createGoal(formData) {
  const goal = formData.get("goal")?.trim();

  if (!goal) {
    redirect("/goals?error=empty");
  }

  // A real app could save the goal to a database here.
  redirect("/goals?success=true");
}

// File: app/goals/page.js
import { createGoal } from "./actions";

export default function GoalsPage() {
  return (
    <form action={createGoal}>
      <input name="goal" required />
      <button type="submit">Create goal</button>
    </form>
  );
}
`;
