export default function Button({ label, onClick, type = "button", className }) {
  return (
    <button type = {type} onClick={onClick} className={className}>
      {label}
    </button>
  );
}