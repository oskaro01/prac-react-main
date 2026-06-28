"use client";

import { useOptimistic, useRef, useState } from "react";
import { saveOptimisticTask } from "../app/form-validation/actions";

const startingTasks = [
  { id: "task-1", label: "Learn Server Actions", pending: false },
];

export default function OptimisticTaskDemo() {
  const [tasks, setTasks] = useState(startingTasks);
  const [error, setError] = useState("");
  const formRef = useRef(null);
  const [optimisticTasks, addOptimisticTask] = useOptimistic(
    tasks,
    (currentTasks, newTask) => [...currentTasks, newTask],
  );

  async function addTask(formData) {
    const value = formData.get("task");
    const label = typeof value === "string" ? value.trim() : "";

    if (!label) {
      setError("Enter a task first.");
      return;
    }

    setError("");
    addOptimisticTask({
      id: `pending-${Date.now()}`,
      label,
      pending: true,
    });
    formRef.current?.reset();

    try {
      const savedTask = await saveOptimisticTask(label);
      setTasks((currentTasks) => [
        ...currentTasks,
        { ...savedTask, pending: false },
      ]);
    } catch {
      setError("The task could not be saved.");
    }
  }

  return (
    <div>
      <form action={addTask} className="flex flex-col gap-2 sm:flex-row" ref={formRef}>
        <input
          className="min-w-0 flex-1 rounded-[4px] border border-gray-300 px-4 py-2 text-sm leading-5 outline-none focus:border-[#3f5f9f]"
          name="task"
          placeholder="Example: validate a signup form"
        />
        <button
          className="shrink-0 rounded-[4px] bg-[#3f5f9f] px-4 py-2 text-sm font-bold leading-5 text-white hover:bg-[#334f88]"
          type="submit"
        >
          Add task
        </button>
      </form>

      {error && <p className="mt-2 text-xs leading-4 text-red-700">{error}</p>}

      <ul className="mt-3 divide-y divide-gray-200 rounded-[4px] border border-gray-200" aria-live="polite">
        {optimisticTasks.map((task) => (
          <li className="flex items-center justify-between gap-3 px-4 py-2" key={task.id}>
            <span className="text-sm leading-[18px] text-[#111111]">{task.label}</span>
            <span className={`text-xs font-bold leading-4 ${task.pending ? "text-[#8a6d1d]" : "text-[#18794e]"}`}>
              {task.pending ? "Sending..." : "Saved"}
            </span>
          </li>
        ))}
      </ul>

      <p className="mt-2 text-xs leading-4 text-[#6b7078]">
        This demo waits briefly so you can see the optimistic item. It resets when the page refreshes because no database is connected yet.
      </p>
    </div>
  );
}
