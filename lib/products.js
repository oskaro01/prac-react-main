export const products = [
  {
    id: "1",
    name: "Focus Desk Lamp",
    category: "Workspace",
    description: "A compact lamp for a clean and comfortable desk setup.",
  },
  {
    id: "2",
    name: "Daily Notebook",
    category: "Planning",
    description: "A simple notebook for tasks, ideas, and daily learning notes.",
  },
  {
    id: "3",
    name: "Travel Bottle",
    category: "Everyday",
    description: "A lightweight bottle designed for work, study, and travel.",
  },
];

export function getProduct(id) {
  return products.find((product) => product.id === id);
}
