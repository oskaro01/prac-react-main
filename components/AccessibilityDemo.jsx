export default function AccessibilityDemo() {
  return (
    <section aria-labelledby="accessibility-demo-heading" className="rounded-[4px] border border-gray-200 bg-[#fafbfc] px-4 py-3">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 id="accessibility-demo-heading" className="text-base font-bold leading-5 text-[#111111]">
            Accessible settings example
          </h2>
          <p className="mt-1 text-sm leading-[18px] text-[#8a8d91]">
            Labels, fieldsets, focus states, semantic buttons, and helpful text make the UI usable without a mouse.
          </p>
        </div>
        <a className="text-sm font-bold leading-5 text-[#3f5f9f] hover:underline focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-[#3f5f9f]" href="#accessibility-checklist">
          Skip to checklist
        </a>
      </div>

      <form className="mt-3 grid gap-3">
        <label className="ds-field">
          <span className="ds-label">Project name</span>
          <input className="ds-input" defaultValue="Next mastery dashboard" aria-describedby="project-name-help" />
          <span className="ds-help" id="project-name-help">
            This input has a visible label and helper text.
          </span>
        </label>

        <fieldset className="rounded-[4px] border border-gray-200 px-3 py-2">
          <legend className="px-1 text-xs font-bold leading-4 text-[#111111]">Notification level</legend>
          <div className="mt-2 flex flex-wrap gap-3">
            <label className="flex items-center gap-2 text-sm leading-5 text-[#111111]">
              <input defaultChecked name="notification" type="radio" />
              Important only
            </label>
            <label className="flex items-center gap-2 text-sm leading-5 text-[#111111]">
              <input name="notification" type="radio" />
              Everything
            </label>
          </div>
        </fieldset>

        <button className="ds-button ds-button-primary w-fit" type="button">
          Save settings
        </button>
      </form>
    </section>
  );
}
