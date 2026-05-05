function Button({ text, onAdd }) {
  return (
    <button className="todo-button" onClick={onAdd}>
      {text}
    </button>
  );
}

export default Button;
