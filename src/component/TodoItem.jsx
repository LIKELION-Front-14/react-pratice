import styled from "@emotion/styled";

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
  padding: 10px;
  border-radius: 10px;
  background-color: #f8f8f8;
`;

const TodoText = styled.span`
  cursor: pointer;
  text-decoration: ${(props) => (props.done ? "line-through" : "none")};
  opacity: ${(props) => (props.done ? 0.5 : 1)};
  color: ${(props) => (props.done ? "gray" : "black")};
`;

const DeleteButton = styled.button`
  border: none;
  background-color: #ff5c5c;
  color: white;
  padding: 6px 10px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #e14b4b;
  }
`;

function TodoItem({ todo, toggleTodo, removeTodo }) {
  return (
    <Item>
      <TodoText
        done={todo.done}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.text}
      </TodoText>

      <DeleteButton onClick={() => removeTodo(todo.id)}>
        삭제
      </DeleteButton>
    </Item>
  );
}

export default TodoItem;