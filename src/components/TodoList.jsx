import { useState, useEffect } from "react";
import "./Todo.css";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

function TodoList() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (!text.trim()) return;

    setTodos(prev => [
      ...prev,
      { id: Date.now(), text, done: false }
    ]);
    setText("");
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

  useEffect(()=>{
    console.log("Todo추가:" , {todos}, [todos]);
  }) 

  return (
    <>
        <div className="todo-container">
            <h1>나의 할일</h1>
            <TodoInput text={text} setText={setText} onAdd={addTodo} />
            <ul className="todo-list">
                {todos.map(todo => (
                <TodoItem 
                key={todo.id} 
                todo={todo} 
                onToggle={toggleTodo} 
                onRemove={removeTodo} 
                />
                ))}
            </ul>
        </div>
    </>
  );
}

export default TodoList;