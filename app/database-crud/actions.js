"use server";

import { revalidatePath } from "next/cache";
import {
  deleteProjectById,
  insertProject,
  resetProjectStore,
  updateProjectById,
} from "../../lib/demoProjectStore";

const categories = new Set(["Education", "Commerce", "Personal"]);
const statuses = new Set(["planned", "active", "complete"]);

function readText(formData, field) {
  const value = formData.get(field);
  return typeof value === "string" ? value.trim() : "";
}

export async function createProject(formData) {
  const name = readText(formData, "name");
  const requestedCategory = readText(formData, "category");

  if (!name) {
    return;
  }

  await insertProject({
    category: categories.has(requestedCategory) ? requestedCategory : "Personal",
    name: name.slice(0, 60),
    status: "planned",
  });

  revalidatePath("/database-crud");
}

export async function updateProject(formData) {
  const id = readText(formData, "id");
  const name = readText(formData, "name");
  const requestedCategory = readText(formData, "category");
  const requestedStatus = readText(formData, "status");

  if (!id || !name) {
    return;
  }

  await updateProjectById(id, {
    category: categories.has(requestedCategory) ? requestedCategory : "Personal",
    name: name.slice(0, 60),
    status: statuses.has(requestedStatus) ? requestedStatus : "planned",
  });

  revalidatePath("/database-crud");
}

export async function deleteProject(formData) {
  const id = readText(formData, "id");

  if (!id) {
    return;
  }

  await deleteProjectById(id);
  revalidatePath("/database-crud");
}

export async function resetProjects() {
  await resetProjectStore();
  revalidatePath("/database-crud");
}
