"use server";

import { redirect } from "next/navigation";

export async function submitLearningGoal(formData) {
  const value = formData.get("goal");
  const goal = typeof value === "string" ? value.trim() : "";

  if (!goal) {
    redirect("/server-actions?status=empty");
  }

  const searchParams = new URLSearchParams({ goal: goal.slice(0, 80) });
  redirect(`/server-actions?${searchParams.toString()}`);
}
