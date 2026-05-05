import Button from "./Button";

function TodoItem({ todo, onToggle, onRemove }) {
  return (
    <li className="todo-item">
      <span
        className={`todo-text ${todo.done ? "is-done" : ""}`}
        onClick={() => onToggle(todo.id)}
      >
        {todo.text}
      </span>
      <Button text="삭제" onAdd={() => onRemove(todo.id)} />
    </li>
  );
}

export default TodoItem;
