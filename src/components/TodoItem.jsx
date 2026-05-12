/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const TodoItems = styled.li`
  display: flex;
  justify-content: space-between; 
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eee;
`;

const ItemButton = styled.button`
  padding: 5px 10px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #a71d2a;
  }
`;

const TodoText = styled.span`
  cursor: pointer;
  text-decoration: ${({ done }) => (done ? "line-through" : "none")};
`;

function TodoItem({ todo, toggleTodo, removeTodo }) {
  return (
    <TodoItems>
      <TodoText
        done={todo.done}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.text}
      </TodoText>
      <ItemButton onClick={() => removeTodo(todo.id)}>삭제</ItemButton>
    </TodoItems>
  );
}

export default TodoItem;