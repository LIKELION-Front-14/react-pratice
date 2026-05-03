import React, { useState, useEffect, useRef } from "react";

// 투두 리스트 상태 커스텀 훅으로 분리하여 적용
const useTodo = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    if (!text.trim()) return;
    setTodos((prev) => [
      ...prev, 
      { id: Date.now(), text, done: false }
    ]);

    setText("");

    // 투두 추가 후 포커스
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

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return { todos, addTodo, deleteTodo };
};

// 관심사(UI) 단위로 컴포넌트 분리 - 반복되는 태그들의 묶음
const TodoInput = ({ inputRef, text, onChange, onAdd }) => (
  <div className="todo-input-group">
    <input
      ref={inputRef}
      value={text}
      onChange={onChange}
      placeholder="할 일을 입력하세요"
      onKeyDown={(e) => e.key === "Enter" && onAdd()}
    />
    <button onClick={onAdd}>추가</button>
  </div>
);

// 관심사(UI) 단위로 컴포넌트 분리 - 반복되는 태그들의 묶음
const TodoItem = ({ todo, onDelete }) => (
  <li className="todo-item">
    <span>{todo.text}</span>
    <button onClick={() => onDelete(todo.id)}>삭제</button>
  </li>
);

// 메인 TodoList 
const TodoList = () => {
  const { todos, addTodo, deleteTodo } = useTodo();
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  // 투두가 추가될때마다 useEffect로 console.log 출력
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }

    console.log("투두가 추가되거나 페이지에 진입했습니다. 현재 개수:", todos.length);
  }, [todos]); 

  const handleAdd = () => {
    addTodo(inputValue);
    setInputValue("");
  };

  return (
    <div className="todo-container">
      <h1>My Todo List</h1>
      <TodoInput
        inputRef={inputRef}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onAdd={handleAdd}
         />
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDelete={deleteTodo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;