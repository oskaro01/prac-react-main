"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function setLessonMode(formData) {
  const requestedMode = formData.get("mode");
  const requestedView = formData.get("view");
  const mode = requestedMode === "focus" ? "focus" : "standard";
  const view = requestedView === "grid" ? "grid" : "list";

  cookies().set("lesson-mode", mode, {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
    sameSite: "lax",
  });

  redirect(`/navigation-apis?view=${view}&saved=1`);
}
