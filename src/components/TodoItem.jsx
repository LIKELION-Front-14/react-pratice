export default function TodoItem({ todo, onToggle, onRemove }) {
  return (
    <li className="todo-item">
      <span
        className={`todo-text ${todo.done ? "done" : ""}`}
        onClick={() => onToggle(todo.id)}
      >
        {todo.text}
      </span>
      <button className="delete-btn" onClick={() => onRemove(todo.id)}>삭제</button>
    </li>
  );
}