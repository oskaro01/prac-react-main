"use client";

import { useFormState } from "react-dom";
import { submitProfile } from "../app/form-validation/actions";
import ValidationSubmitButton from "./ValidationSubmitButton";

const initialState = {
  errors: {},
  message: "",
  resetKey: 0,
  status: "idle",
  values: { email: "", name: "" },
};

export default function ValidatedForm() {
  const [state, formAction] = useFormState(submitProfile, initialState);

  return (
    <form action={formAction} className="grid gap-3" key={state.resetKey} noValidate>
      <div>
        <label className="block text-xs font-bold leading-4 text-[#111111]" htmlFor="validation-name">
          Name
        </label>
        <input
          aria-describedby={state.errors.name ? "validation-name-error" : undefined}
          aria-invalid={Boolean(state.errors.name)}
          className="mt-1 rounded-[4px] border border-gray-300 px-4 py-2 text-sm leading-5 outline-none focus:border-[#3f5f9f] aria-[invalid=true]:border-red-600"
          defaultValue={state.values.name}
          id="validation-name"
          name="name"
          placeholder="Your name"
        />
        {state.errors.name && (
          <p className="mt-1 text-xs leading-4 text-red-700" id="validation-name-error">
            {state.errors.name}
          </p>
        )}
      </div>

      <div>
        <label className="block text-xs font-bold leading-4 text-[#111111]" htmlFor="validation-email">
          Email
        </label>
        <input
          aria-describedby={state.errors.email ? "validation-email-error" : undefined}
          aria-invalid={Boolean(state.errors.email)}
          className="mt-1 rounded-[4px] border border-gray-300 px-4 py-2 text-sm leading-5 outline-none focus:border-[#3f5f9f] aria-[invalid=true]:border-red-600"
          defaultValue={state.values.email}
          id="validation-email"
          name="email"
          placeholder="you@example.com"
          type="email"
        />
        {state.errors.email && (
          <p className="mt-1 text-xs leading-4 text-red-700" id="validation-email-error">
            {state.errors.email}
          </p>
        )}
      </div>

      <div>
        <label className="block text-xs font-bold leading-4 text-[#111111]" htmlFor="validation-password">
          Password
        </label>
        <input
          aria-describedby={state.errors.password ? "validation-password-error" : undefined}
          aria-invalid={Boolean(state.errors.password)}
          className="mt-1 rounded-[4px] border border-gray-300 px-4 py-2 text-sm leading-5 outline-none focus:border-[#3f5f9f] aria-[invalid=true]:border-red-600"
          id="validation-password"
          name="password"
          placeholder="At least 8 characters"
          type="password"
        />
        {state.errors.password && (
          <p className="mt-1 text-xs leading-4 text-red-700" id="validation-password-error">
            {state.errors.password}
          </p>
        )}
      </div>

      <div>
        <ValidationSubmitButton />
      </div>

      {state.message && (
        <p
          aria-live="polite"
          className={`text-sm font-bold leading-5 ${state.status === "success" ? "text-[#18794e]" : "text-red-700"}`}
        >
          {state.message}
        </p>
      )}
    </form>
  );
}
