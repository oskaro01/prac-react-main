import Badge from "./ui/Badge";
import Button from "./ui/Button";

const rows = [
  {
    label: "Primary action",
    value: "Blue filled button, 36px minimum height",
  },
  {
    label: "Secondary action",
    value: "White button with gray border",
  },
  {
    label: "Information rows",
    value: "Compact borders, 8px vertical rhythm",
  },
];

export default function FrontendDesignDemo() {
  return (
    <div className="rounded-[4px] border border-[#c9ccd1] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.12)]">
      <div className="border-b border-[#e5e5e5] bg-[#f5f6f7] px-4 py-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-xs font-bold leading-4 text-[#3f5f9f]">Design sample</p>
            <h2 className="mt-1 text-base font-bold leading-5 text-[#111111]">Account settings</h2>
            <p className="mt-1 text-sm leading-[18px] text-[#8a8d91]">
              Compact, bordered, readable, and built from rows.
            </p>
          </div>
          <Badge tone="success">active</Badge>
        </div>
      </div>

      <div className="divide-y divide-[#e5e5e5]">
        {rows.map((row) => (
          <div className="grid gap-1 px-4 py-2 md:grid-cols-[0.8fr_1.7fr]" key={row.label}>
            <p className="text-sm font-bold leading-5 text-[#111111]">{row.label}</p>
            <p className="text-sm leading-[18px] text-[#6b7078]">{row.value}</p>
          </div>
        ))}
      </div>

      <div className="border-t border-[#e5e5e5] px-4 py-3">
        <label className="ds-field">
          <span className="ds-label">Display name</span>
          <input className="ds-input" defaultValue="Next.js Learner" />
          <span className="ds-help">Inputs always stay inside the card with border-box sizing.</span>
        </label>
        <div className="mt-3 flex flex-wrap gap-2">
          <Button type="button">Save changes</Button>
          <Button type="button" variant="secondary">
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}
