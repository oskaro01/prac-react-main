export const fullCode = `
app/
  advanced-routing/
    layout.js
    page.js
    (examples)/
      route-group/page.js
    _parts/
      PrivateFolderNotice.jsx
    guides/
      [...slug]/page.js
    @modal/
      default.js
      (.)details/[id]/page.js
    details/
      [id]/page.js

// Catch-all route
export default function GuidePage({ params }) {
  return <p>{params.slug.join(" / ")}</p>;
}

// Parallel slot inside layout.js
export default function Layout({ children, modal }) {
  return (
    <>
      {children}
      {modal}
    </>
  );
}

// @modal/default.js
export default function Default() {
  return null;
}
`;
