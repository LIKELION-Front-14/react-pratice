import { useEffect, useRef, useState } from "react";

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

  useEffect(() => {
    //컴포넌트 마운트 시 입력창 포커스
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input
        ref={inputRef}
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyDown={e => e.key === "Enter" && addTodo()}
        placeholder="할 일을 입력하세요"
      />
      <button onClick={addTodo}>추가</button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span
              onClick={() => toggleTodo(todo.id)}
              style={{
                textDecoration: todo.done ? "line-through" : "none",
                cursor: "pointer"
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => removeTodo(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;