import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import TodoAddBar from "./TodoAddBar";

const TodoCard = styled.div`
  width: min(100%, 720px);
  padding: 28px;
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.7);
  box-shadow:
    0 24px 60px rgba(148, 163, 184, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(18px);
`;

const TodoAddBarWrapper = styled.div`
  margin-bottom: 22px;
`;

const TodoListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

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
    <TodoCard>
      <TodoAddBarWrapper>
        <TodoAddBar
          value={text}
          inputRef={inputRef}
          onChange={(e) => setText(e.target.value)}
          onAdd={addTodo}
        />
      </TodoAddBarWrapper>

      <TodoListWrapper>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onRemove={removeTodo}
          />
        ))}
      </TodoListWrapper>
    </TodoCard>
  );
}

export default TodoList;
