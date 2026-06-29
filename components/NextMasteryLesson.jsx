import Card from "./Card";
import CodeBlock from "./CodeBlock";
import LessonNotes from "./LessonNotes";

export default function NextMasteryLesson({ children, lesson }) {
  return (
    <div className="flex justify-center">
      <Card>
        <div className="bg-[#f5f6f7] px-6 py-3">
          <p className="text-xs font-bold leading-4 text-[#3f5f9f]">{lesson.step}</p>
          <h1 className="mt-1 text-base font-bold leading-5 text-[#111111]">{lesson.title}</h1>
          <p className="mt-2 text-sm leading-[18px] text-[#8a8d91]">{lesson.intro}</p>
        </div>

        <LessonNotes notes={lesson.notes} />

        {lesson.tableRows && (
          <div className="px-6 py-3">
            <p className="text-base font-bold leading-5 text-[#111111]">{lesson.tableTitle}</p>
            <div className="mt-3 overflow-hidden rounded-[4px] border border-gray-200">
              {lesson.tableRows.map((row) => (
                <div
                  className="grid gap-1 border-b border-gray-200 px-4 py-2 last:border-b-0 md:grid-cols-[0.8fr_1.5fr_1.2fr]"
                  key={row.label}
                >
                  <p className="font-mono text-xs font-bold leading-5 text-[#3f5f9f]">{row.label}</p>
                  <p className="text-sm leading-[18px] text-[#111111]">{row.detail}</p>
                  <p className="text-sm leading-[18px] text-[#8a8d91]">{row.example}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {children}

        {lesson.sections?.map((section) => (
          <div className="px-6 py-3" key={section.title}>
            <p className="text-base font-bold leading-5 text-[#111111]">{section.title}</p>
            {section.body && <p className="mt-1 text-sm leading-[18px] text-[#8a8d91]">{section.body}</p>}
            {section.items && (
              <ul className="mt-2 grid gap-1">
                {section.items.map((item) => (
                  <li className="text-sm leading-[18px] text-[#8a8d91]" key={item}>
                    <span className="font-bold text-[#111111]">-</span> {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {lesson.code && (
          <div className="px-6 py-3">
            <p className="mb-3 text-base font-bold leading-5 text-[#111111]">Code preview</p>
            <CodeBlock code={lesson.code} />
          </div>
        )}
      </Card>
    </div>
  );
}
