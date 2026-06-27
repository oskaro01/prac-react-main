const tones = {
  neutral: "ds-badge ds-badge-neutral",
  success: "ds-badge ds-badge-success",
  danger: "ds-badge ds-badge-danger",
};

export default function Badge({ children, tone = "neutral" }) {
  return <span className={tones[tone] || tones.neutral}>{children}</span>;
}
