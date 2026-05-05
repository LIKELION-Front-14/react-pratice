function Input({ value, inputRef, placeholder, onChange, onAdd }) {
  return (
    <input
      className="todo-input"
      value={value}
      ref={inputRef}
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={(e) => e.key === "Enter" && onAdd()}
    />
  );
}

export default Input;
