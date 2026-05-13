/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import Button from "./Button";

const TodoItemWrapper = styled.li`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(226, 232, 240, 0.85);

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(251, 146, 60, 0.28);
    box-shadow: 0 18px 28px rgba(148, 163, 184, 0.16);
  }
`;

const TodoText = styled.span`
  font-size: 16px;
  flex: 1;
  min-width: 0;
  cursor: pointer;
  font-weight: 600;
  color: #0f172a;
  word-break: break-word;
  transition: color 0.2s ease, opacity 0.2s ease;
  text-decoration: ${(props)=> props.done ? "line-through" : "none"};
  color: ${(props) => (props.done ? "#999" : "#333")};
  opacity: ${(props) => (props.done ? 0.5 : 1)};
`;

const DeleteButton = styled.button`
  flex-shrink: 0;
  height: 44px;
  padding: 0 16px;
  border-radius: 14px;
  background: linear-gradient(135deg, #1e293b 0%, #475569 100%);
  box-shadow: 0 10px 20px rgba(15, 23, 42, 0.18);
  color: #fff;
`;

function TodoItem({ todo, onToggle, onRemove }) {
  return (
    <TodoItemWrapper>
      <TodoText done={todo.done} onClick={() => onToggle(todo.id)}>
        {todo.text}
      </TodoText>
      <DeleteButton onClick={() => onRemove(todo.id)}>삭제</DeleteButton>
    </TodoItemWrapper>
  );
}

export default TodoItem;
