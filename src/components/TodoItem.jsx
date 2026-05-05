function TodoItem({ todo, onToggle, onRemove }) {
  return (
    <li>
      <span
        onClick={ ( ) => onToggle(todo.id) }
        style={ {
          textDecoration: todo.done ? "line-through" : "none",
          cursor: "pointer"
        } }
      >
        { todo.text }
      </span>
      <button onClick={ ( ) => onRemove(todo.id) }>삭제</button>
    </li>
  );
}

export default TodoItem;