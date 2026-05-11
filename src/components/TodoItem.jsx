import styled from "@emotion/styled";

const ItemWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eee;
  margin-bottom: 5px;
`;

const TodoText = styled.span`
  cursor: pointer;
  text-decoration: ${ props => (props.done ? "line-through" : "none") };
  color: ${ props => (props.done ? "#aaa" : "#000") };
  font-size: 16px;
`;

const DeleteButton = styled.button`
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #cc0000;
  }
`;

export default function TodoItem({ todo, onToggle, onRemove }) {
  return (
    <ItemWrapper>
      <TodoText done={ todo.done } onClick={ ( ) => onToggle(todo.id) }>
        { todo.text }
      </TodoText>
      <DeleteButton onClick={ ( ) => onRemove(todo.id) }>삭제</DeleteButton>
    </ItemWrapper>
  );
}