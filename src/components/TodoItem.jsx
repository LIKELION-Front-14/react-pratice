import { css } from "@emotion/react";

export default function TodoItem({ todo, onToggle, onRemove }) {
  // Emotion 스타일 정의
  const itemStyle = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #eee;
  `;

  const textStyle = css`
    cursor: pointer;
    flex-grow: 1;
    /* 완료 상태(done)에 따른 동적 스타일 */
    text-decoration: ${todo.done ? "line-through" : "none"};
    color: ${todo.done ? "#aaa" : "#333"};
    opacity: ${todo.done ? 0.6 : 1};
  `;

  const deleteBtnStyle = css`
    background-color: #ff4d4f;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      background-color: #ff7875;
    }
  `;

  return (
    <li css={itemStyle}>
      <span css={textStyle} onClick={() => onToggle(todo.id)}>
        {todo.text}
      </span>
      <button css={deleteBtnStyle} onClick={() => onRemove(todo.id)}>
        삭제
      </button>
    </li>
  );
}