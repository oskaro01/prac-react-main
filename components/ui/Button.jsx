const variants = {
  primary: "ds-button ds-button-primary",
  secondary: "ds-button ds-button-secondary",
  danger: "ds-button ds-button-danger",
};

export default function Button({ children, className = "", variant = "primary", ...props }) {
  const variantClass = variants[variant] || variants.primary;

  return (
    <button className={`${variantClass} ${className}`.trim()} {...props}>
      {children}
    </button>
  );
}
