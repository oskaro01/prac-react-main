"use client";

import { useState } from "react";
import Badge from "./ui/Badge";
import Button from "./ui/Button";
import TextInput from "./ui/TextInput";

const defaultName = "Next.js Dashboard";

export default function DesignSystemDemo() {
  const [projectName, setProjectName] = useState(defaultName);
  const [status, setStatus] = useState("Draft");

  const badgeTone = status === "Saved" ? "success" : status === "Needs a name" ? "danger" : "neutral";

  function saveProject() {
    setStatus(projectName.trim() ? "Saved" : "Needs a name");
  }

  function resetProject() {
    setProjectName(defaultName);
    setStatus("Draft");
  }

  function clearProject() {
    setProjectName("");
    setStatus("Draft");
  }

  return (
    <div className="rounded-[4px] border border-gray-200 bg-[#fafbfc] px-4 py-3">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-bold leading-5 text-[#111111]">Project editor</p>
        <Badge tone={badgeTone}>{status}</Badge>
      </div>

      <div className="mt-3">
        <TextInput
          help="Use a short, clear name that explains what you are building."
          id="design-project-name"
          label="Project name"
          onChange={(event) => {
            setProjectName(event.target.value);
            setStatus("Draft");
          }}
          placeholder="Enter a project name"
          value={projectName}
        />
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        <Button onClick={saveProject} type="button">Save project</Button>
        <Button onClick={resetProject} type="button" variant="secondary">Reset</Button>
        <Button onClick={clearProject} type="button" variant="danger">Clear</Button>
      </div>

      <p className="mt-2 text-xs leading-4 text-[#6b7078]" aria-live="polite">
        {status === "Saved" ? `Saved as ${projectName}.` : "Changes remain local until you save."}
      </p>
    </div>
  );
}
