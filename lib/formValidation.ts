export const zodCode = `
import { z } from "zod";

const ProfileSchema = z.object({
  name: z.string().trim().min(2, "Name is too short."),
  email: z.string().email("Enter a valid email."),
  password: z.string().min(8, "Use at least 8 characters."),
});

const result = ProfileSchema.safeParse({
  name: formData.get("name"),
  email: formData.get("email"),
  password: formData.get("password"),
});

if (!result.success) {
  return {
    errors: result.error.flatten().fieldErrors,
  };
}
`;

export const fullCode = `
// actions.js
"use server";

export async function submitProfile(previousState, formData) {
  const name = formData.get("name")?.trim();
  const errors = {};

  if (!name || name.length < 2) {
    errors.name = "Name must contain 2 characters.";
  }

  if (Object.keys(errors).length > 0) {
    return { errors, message: "Fix the form." };
  }

  return { errors: {}, message: "Profile is valid." };
}

// ValidatedForm.jsx - Next.js 14 / React 18
"use client";

import { useFormState } from "react-dom";
import { submitProfile } from "./actions";

const initialState = { errors: {}, message: "" };

export default function ValidatedForm() {
  const [state, formAction] = useFormState(
    submitProfile,
    initialState
  );

  return (
    <form action={formAction}>
      <input name="name" />
      {state.errors.name && <p>{state.errors.name}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}
`;
