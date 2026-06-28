function wait(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

export async function getLessonMetrics() {
  await wait(900);

  return {
    completed: 19,
    current: 20,
    remaining: 11,
  };
}

export async function getRecentActivity() {
  await wait(1900);

  return [
    "Built a tagged cache demo",
    "Completed database CRUD",
    "Added server-side form validation",
  ];
}

export async function getCourseSummary() {
  await wait(700);
  return { title: "Next.js Mastery", totalSteps: 31 };
}

export async function getTaskSummary() {
  await wait(1300);
  return { open: 11, priority: "Streaming" };
}
