import { useState,  } from "react";
import styled from "styled-components";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

// Styled-components 정의
const TodoContainer = styled.div`
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h1 {
    text-align: center;
    color: #333;
  }
`;

const TodoListUl = styled.ul`
  list-style: none;
  padding: 0;
`;

function TodoList() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (!text.trim()) return;
    setTodos(prev => [...prev, { id: Date.now(), text, done: false }]);
    setText("");
  };

  const toggleTodo = (id) => {
    setTodos(prev => prev.map(todo => 
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  };

  const removeTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  return (
    <TodoContainer>
      <h1>나의 할일</h1>
      <TodoInput text={text} setText={setText} onAdd={addTodo} />
      <TodoListUl>
        {todos.map(todo => (
          <TodoItem 
            key={todo.id} 
            todo={todo} 
            onToggle={toggleTodo} 
            onRemove={removeTodo} 
          />
        ))}
      </TodoListUl>
    </TodoContainer>
  );
}

export default TodoList;