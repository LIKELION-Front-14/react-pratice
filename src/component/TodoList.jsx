import { useState, useRef, useEffect } from "react";
import styled from "styled-components";

import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

const Container = styled.div`
  width: 360px;
  border: 1px solid #ddd;
  border-radius: 16px;
  padding: 24px;
  background-color: #ffffff;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

function TodoList() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    console.log("todos 변경됨", todos);
  }, [todos]);

  const addTodo = () => {
    if (!text.trim()) return;

    setTodos((prev) => [
      ...prev,
      { id: Date.now(), text: text.trim(), done: false },
    ]);

    setText("");
    inputRef.current.focus();
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, done: !todo.done }
          : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <Container>
      <Title>Todo List</Title>

      <TodoInput
        text={text}
        setText={setText}
        addTodo={addTodo}
        inputRef={inputRef}
      />

      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
          />
        ))}
      </ul>
    </Container>
  );
}

export default TodoList;