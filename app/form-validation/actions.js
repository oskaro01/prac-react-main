"use server";

function wait(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

function readText(formData, field) {
  const value = formData.get(field);
  return typeof value === "string" ? value.trim() : "";
}

export async function submitProfile(previousState, formData) {
  const name = readText(formData, "name");
  const email = readText(formData, "email");
  const password = readText(formData, "password");
  const errors = {};

  if (name.length < 2) {
    errors.name = "Name must contain at least 2 characters.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Enter a valid email address.";
  }

  if (password.length < 8) {
    errors.password = "Password must contain at least 8 characters.";
  }

  await wait(600);

  if (Object.keys(errors).length > 0) {
    return {
      errors,
      message: "Fix the highlighted fields and submit again.",
      resetKey: previousState?.resetKey || 0,
      status: "error",
      values: { email, name },
    };
  }

  return {
    errors: {},
    message: `Profile validated for ${name}.`,
    resetKey: (previousState?.resetKey || 0) + 1,
    status: "success",
    values: { email: "", name: "" },
  };
}

export async function saveOptimisticTask(label) {
  const cleanLabel = typeof label === "string" ? label.trim() : "";

  if (!cleanLabel) {
    throw new Error("Task text is required.");
  }

  await wait(800);

  return {
    id: `saved-${Date.now()}`,
    label: cleanLabel,
  };
}
