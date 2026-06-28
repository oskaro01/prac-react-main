"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function signInDemo(formData) {
  const requestedRole = formData.get("role");
  const role = requestedRole === "admin" ? "admin" : "student";

  cookies().set("demo-session", role, {
    httpOnly: true,
    maxAge: 60 * 60,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });

  redirect("/auth/dashboard");
}

export async function signOutDemo() {
  cookies().delete("demo-session");
  redirect("/auth");
}
