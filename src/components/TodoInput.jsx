import { useState, useEffect, useRef } from "react";

//  useTodo Hook 

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

//  Components 

const TodoInput = ({ inputRef, text, onChange, onAdd }) => (
  <div className="flex gap-2 mb-6">
    <input
      ref={inputRef}
      value={text}
      onChange={onChange}
      placeholder="할 일을 입력하세요"
      onKeyDown={(e) => e.key === "Enter" && onAdd()}
      className="
        flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm outline-none
        focus:border-violet-500 focus:ring-2 focus:ring-violet-200
        transition-all
      "
    />
    <button
      onClick={onAdd}
      className="
        px-4 py-2 bg-violet-600 text-white text-sm font-medium rounded-lg
        hover:bg-violet-700 hover:scale-105 active:scale-95
        transition-all
      "
      >
      추가
    </button>
  </div>
);

// done prop → 조건부 클래스로 취소선 + 글자색 처리
const TodoItem = ({ todo, onToggle, onDelete }) => (
  <li
    className="
      flex items-center justify-between px-4 py-3
      bg-gray-50 rounded-lg
      hover:bg-gray-100 transition-colors
      group
    "
  >
    <span
      onClick={() => onToggle(todo.id)}
      className={`
        text-sm cursor-pointer transition-all select-none
        ${todo.done
          ? "line-through text-gray-400"
          : "text-gray-800 hover:text-violet-600"
        }
      `}
    >
      {todo.text}
    </span>
    <button
      onClick={() => onDelete(todo.id)}
      className="
        px-3 py-1 text-xs
        text-red-500 border border-red-400 rounded-md
        hover:bg-red-500 hover:text-white
        transition-all
        opacity-0 group-hover:opacity-100
      "
    >
      삭제
    </button>
  </li>
);

//  Main 

const TodoList = () => {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodo();
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
    console.log("현재 투두 개수:", todos.length);
  }, [todos]);

  const handleAdd = () => {
    addTodo(inputValue);
    setInputValue("");
    inputRef.current?.focus();
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-md p-8">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        My Todo List
      </h1>
      <TodoInput
        inputRef={inputRef}
        text={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onAdd={handleAdd}
      />
      <ul className="flex flex-col gap-2">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;