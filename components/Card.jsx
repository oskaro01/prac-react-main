export default function Card({ children }) {
  return (
    <section className="lesson-card w-full max-w-5xl divide-y divide-[#e5e5e5] overflow-hidden rounded-[4px] border border-[#c9ccd1] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.14)]">
      {children}
    </section>
  );
}
