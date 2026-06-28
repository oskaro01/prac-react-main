export const schemaCode = `
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email TEXT UNIQUE NOT NULL
);

CREATE TABLE projects (
  id UUID PRIMARY KEY,
  owner_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('planned', 'active', 'complete')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX projects_owner_id_idx ON projects(owner_id);
`;

export const fullCode = `
// data/projects.ts - example ORM repository
export async function listProjects(userId) {
  return db.project.findMany({
    where: { ownerId: userId },
    orderBy: { createdAt: "desc" },
  });
}

// actions.ts
"use server";

import { revalidatePath } from "next/cache";

export async function createProject(formData) {
  const name = formData.get("name")?.trim();

  if (!name) return;

  await db.project.create({
    data: {
      name,
      status: "planned",
      ownerId: currentUser.id,
    },
  });

  revalidatePath("/projects");
}

export async function updateProject(id, data) {
  await db.project.update({ where: { id }, data });
  revalidatePath("/projects");
}

export async function deleteProject(id) {
  await db.project.delete({ where: { id } });
  revalidatePath("/projects");
}
`;
