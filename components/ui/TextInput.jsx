export default function TextInput({ help, id, label, ...props }) {
  return (
    <label className="ds-field" htmlFor={id}>
      <span className="ds-label">{label}</span>
      <input className="ds-input" id={id} {...props} />
      {help && <span className="ds-help">{help}</span>}
    </label>
  );
}
