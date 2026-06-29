"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function signInMiddlewareDemo(formData) {
  const requestedRole = formData.get("role");
  const role = requestedRole === "admin" ? "admin" : "student";

  cookies().set("demo-session", role, {
    httpOnly: true,
    maxAge: 60 * 60,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });

  redirect("/middleware-lab?message=signed-in");
}

export async function signOutMiddlewareDemo() {
  cookies().delete("demo-session");
  redirect("/middleware-lab?message=signed-out");
}
