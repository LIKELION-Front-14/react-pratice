export default function TodoInput({ text, setText, onAdd }) {
  return (
    <div className="todo-input-wrapper">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onAdd()}
        placeholder="할 일을 입력하세요"
      />
      <button onClick={onAdd}>추가</button>
    </div>
  );
}