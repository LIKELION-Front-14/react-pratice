import { useEffect, useRef, useState } from "react";
import TodoItem from "./TodoItem";
import TodoAddBar from "./TodoAddBar";

function TodoList() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const inputRef = useRef();

  const addTodo = () => {
    if (!text.trim()) return;

    setTodos((prev) => [...prev, { id: Date.now(), text, done: false }]);
    setText("");
    inputRef.current.focus();
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    inputRef.current.focus();
  }, [todos]);

  return (
    <div className="todo-card">
      <div className="todo-addbar">
        <TodoAddBar
          value={text}
          inputRef={inputRef}
          onChange={(e) => setText(e.target.value)}
          onAdd={addTodo}
        />
      </div>

      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onRemove={removeTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
