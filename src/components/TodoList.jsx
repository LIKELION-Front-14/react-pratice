import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem"; 
import TodoInput from "./TodoInput";

const Container = styled.div`
  max-width: 400px;
  margin: 50px auto;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
`;

const ListWrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export default function TodoList( ) {
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
    <Container>
      <Title>My Todo List</Title>
      
      <TodoInput 
        inputRef={ inputRef }
        text={ text }
        setText={ setText }
        addTodo={ addTodo }
      />

      <ListWrapper>
        { todos.map(todo => (
          <TodoItem
            key={ todo.id }
            todo={ todo }
            onToggle={ toggleTodo }
            onRemove={ removeTodo }
          />
        )) }
      </ListWrapper>
    </Container>
  );
}