import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const demoUsers = {
  student: {
    email: "learner@example.com",
    id: "demo-student",
    internalAuditId: "private-student-record",
    name: "Next.js Learner",
    role: "student",
  },
  admin: {
    email: "admin@example.com",
    id: "demo-admin",
    internalAuditId: "private-admin-record",
    name: "Demo Administrator",
    role: "admin",
  },
};

function toUserDTO(user) {
  return {
    id: user.id,
    name: user.name,
    role: user.role,
  };
}

export async function getDemoSession() {
  const role = cookies().get("demo-session")?.value;
  const user = demoUsers[role];

  return user ? toUserDTO(user) : null;
}

export async function verifyDemoSession() {
  const user = await getDemoSession();

  if (!user) {
    redirect("/auth?message=signin");
  }

  return user;
}

export async function requireDemoAdmin() {
  const user = await verifyDemoSession();

  if (user.role !== "admin") {
    redirect("/auth/dashboard?message=forbidden");
  }

  return user;
}
