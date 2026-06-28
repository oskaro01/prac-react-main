const initialProjects = [
  {
    id: "project-1",
    name: "Learning Dashboard",
    category: "Education",
    status: "active",
  },
  {
    id: "project-2",
    name: "Product Catalog",
    category: "Commerce",
    status: "planned",
  },
];

const storeKey = "__reactLiteProjectStore";

function copyProjects(projects) {
  return projects.map((project) => ({ ...project }));
}

function getStore() {
  if (!globalThis[storeKey]) {
    globalThis[storeKey] = {
      projects: copyProjects(initialProjects),
    };
  }

  return globalThis[storeKey];
}

export async function listProjects() {
  return copyProjects(getStore().projects);
}

export async function insertProject(project) {
  getStore().projects.unshift({
    id: `project-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    ...project,
  });
}

export async function updateProjectById(id, updates) {
  const store = getStore();
  const index = store.projects.findIndex((project) => project.id === id);

  if (index === -1) {
    return false;
  }

  store.projects[index] = {
    ...store.projects[index],
    ...updates,
  };

  return true;
}

export async function deleteProjectById(id) {
  const store = getStore();
  store.projects = store.projects.filter((project) => project.id !== id);
}

export async function resetProjectStore() {
  getStore().projects = copyProjects(initialProjects);
}
