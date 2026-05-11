/** @jsxImportSource @emotion/react */ //무조건 1번 라인
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useState, useEffect, useRef } from "react";

const useTodo = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    if (!text.trim()) return;
    setTodos((prev) => [
      ...prev,
      { id: Date.now(), text, done: false },
    ]);
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return { todos, addTodo, toggleTodo, deleteTodo };
};

// Emotion Styled Components 

const Container = styled.div`
  max-width: 480px;
  margin: 40px auto;
  padding: 32px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);

  h1 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 24px;
    color: #222;
  }
`;

const InputGroup = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;

  input {
    flex: 1;
    padding: 10px 14px;
    border: 1.5px solid #ddd;
    border-radius: 8px;
    font-size: 14px;
    outline: none;
    transition: border-color 0.2s;

    &:focus {
      border-color: #6a11cb;
    }
  }
`;

const AddButton = styled.button`
  padding: 10px 18px;
  background: #6a11cb;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #2575fc;
    transform: scale(1.05);
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ItemWrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: #f8f8f8;
  border-radius: 8px;
  transition: background 0.15s;

  &:hover {
    background: #f0f0f0;
  }
`;

const DeleteBtn = styled.button`
  padding: 5px 12px;
  background: transparent;
  color: #e24b4a;
  border: 1.5px solid #e24b4a;
  border-radius: 6px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #e24b4a;
    color: white;
  }
`;

// done 값에 따라 취소선 + 글자 투명도를 css 함수로 처리
const itemTextStyle = (done) => css`
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
  color: ${done ? "rgba(0, 0, 0, 0.35)" : "rgba(0, 0, 0, 0.85)"};
  text-decoration: ${done ? "line-through" : "none"};
`;

//  Components 

const TodoInput = ({ inputRef, text, onChange, onAdd }) => (
  <InputGroup>
    <input
      ref={inputRef}
      value={text}
      onChange={onChange}
      placeholder="할 일을 입력하세요"
      onKeyDown={(e) => e.key === "Enter" && onAdd()}
    />
    <AddButton onClick={onAdd}>추가</AddButton>
  </InputGroup>
);

const TodoItem = ({ todo, onToggle, onDelete }) => (
  <ItemWrapper>
    <span
      css={itemTextStyle(todo.done)}
      onClick={() => onToggle(todo.id)}
    >
      {todo.text}
    </span>
    <DeleteBtn onClick={() => onDelete(todo.id)}>삭제</DeleteBtn>
  </ItemWrapper>
);

// Main 

const TodoList = () => {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodo();
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    console.log("현재 투두 개수:", todos.length);
  }, [todos]);

  // ✅ BUG FIX: setInputValue + focus를 handleAdd에서 처리
  const handleAdd = () => {
    addTodo(inputValue);
    setInputValue("");
    inputRef.current?.focus();
  };

  return (
    <Container>
      <h1>My Todo List</h1>
      <TodoInput
        inputRef={inputRef}
        text={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onAdd={handleAdd}
      />
      <List>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        ))}
      </List>
    </Container>
  );
};

export default TodoList;