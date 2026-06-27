export const fullCode = `
/* Design tokens */
:root {
  --color-brand: #3f5f9f;
  --color-text: #111111;
  --color-muted: #6b7078;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --radius-control: 4px;
}

// components/ui/Button.jsx
const variants = {
  primary: "ds-button ds-button-primary",
  secondary: "ds-button ds-button-secondary",
};

export default function Button({
  children,
  variant = "primary",
  ...props
}) {
  return (
    <button className={variants[variant]} {...props}>
      {children}
    </button>
  );
}

// Reuse it anywhere:
<Button>Save project</Button>
<Button variant="secondary">Cancel</Button>
`;
