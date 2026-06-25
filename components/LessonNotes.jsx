export default function LessonNotes({ notes }) {
  return (
    <div className="lesson-notes grid gap-2 px-6 py-3 md:grid-cols-3">
      {notes.map((note) => (
        <div className="lesson-note rounded-[4px] border border-[#dfe3e8] bg-[#fafbfc] px-4 py-3" key={note.title}>
          <p className="lesson-note-title text-xs font-bold leading-4 text-[#111111]">{note.title}</p>
          <p className="lesson-note-body mt-1 text-xs leading-4 text-[#6b7078]">{note.body}</p>
        </div>
      ))}
    </div>
  );
}
