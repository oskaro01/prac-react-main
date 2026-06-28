export const fullCode = `
// lib/dal.ts
import "server-only";
import { cache } from "react";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

export const verifySession = cache(async () => {
  const session = await auth();

  if (!session?.user?.id) {
    redirect("/login");
  }

  return {
    userId: session.user.id,
    role: session.user.role,
  };
});

export async function requireAdmin() {
  const session = await verifySession();

  if (session.role !== "admin") {
    redirect("/dashboard");
  }

  return session;
}

// Return a safe DTO, not the complete database row.
export async function getCurrentUserDTO() {
  const session = await verifySession();
  const user = await db.user.findUnique({
    where: { id: session.userId },
  });

  return {
    id: user.id,
    name: user.name,
    role: user.role,
  };
}

// Check authorization again inside every mutation.
"use server";

export async function deleteUser(formData) {
  await requireAdmin();
  await db.user.delete({
    where: { id: formData.get("userId") },
  });
}
`;
