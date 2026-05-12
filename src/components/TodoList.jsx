/** @jsxImportSource @emotion/react */
import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import TodoItem1 from "./TodoItem";



const Container = styled.div`
  width: 350px;
  margin: 40px auto;
  font-family: sans-serif;
`;

const ListWrapper = styled.ul`
  list-style: none;
  padding: 0;
`;

function TodoList() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  const addTodo = () => {
    if (!text.trim()) return;

    setTodos(prev => [
      ...prev,
      { id: Date.now(), text, done: false }
    ]);
    setText("");
    inputRef.current.focus();
  };

  const toggleTodo = (id) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id
          ? { ...todo, done: !todo.done }
          : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <Container>
      <div className="flex gap-2 mb-5">
        <input
          ref={inputRef}
          value={text}
          onChange={e => setText(e.target.value)}
          onKeyDown={e => e.key === "Enter" && addTodo()}
          placeholder="할 일을 입력하세요"
          className="flex-1 p-2.5 border border-gray-300 rounded"
        />
        <button 
          onClick={addTodo}
          className="px-3.75 py-2.5 bg-blue-600 text-white rounded cursor-pointer hover:bg-blue-900"
        >
          추가
        </button>
      </div>
      <ListWrapper>
        {todos.map(todo => (
          <TodoItem1  
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
          />
        ))}
      </ListWrapper>
    </Container>
  );
}

export default TodoList;