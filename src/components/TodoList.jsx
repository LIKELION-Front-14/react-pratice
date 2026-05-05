import { useState, useRef, useEffect } from "react";
import TodoItem from "./TodoItem"; 

function TodoList( ) {
  const [ text, setText ] = useState("");
  const [ todos, setTodos ] = useState([ ]); 

  const inputRef = useRef(null);

  const addTodo = ( ) => {
    if (!text.trim( )) return;

    setTodos(prev => [
      ...prev,
      { id: Date.now( ), text, done: false }
    ]);
    setText("");

    if (inputRef.current) {
      inputRef.current.focus( );
    }
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

  useEffect( ( ) => {
    if (inputRef.current) {
      inputRef.current.focus( );
    }
  }, [ ] );

  useEffect( ( ) => {
    if (todos.length > 0) {
      console.log("투두가 추가됐습니다.");
    }
  }, [ todos ] ); 

  return (
    <div>
      <input
        ref={ inputRef }
        value={ text }
        onChange={ e => setText(e.target.value) }
        onKeyDown={ e => e.key === "Enter" && addTodo( ) }
        placeholder="할 일을 입력하세요"
      />
      <button onClick={ addTodo }>추가</button>

      <ul>
        { todos.map(todo => (
          <TodoItem
            key={ todo.id }
            todo={ todo }
            onToggle={ toggleTodo }
            onRemove={ removeTodo }
          />
        )) }
      </ul>
    </div>
  );
}

export default TodoList;