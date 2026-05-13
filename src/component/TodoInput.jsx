function TodoInput({ text, setText, addTodo, inputRef }) {
  return (
    <div className="flex gap-2 mb-4">
      <input
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.nativeEvent.isComposing || e.keyCode === 229) return;
          if (e.key === "Enter") addTodo();
        }}
        placeholder="할 일을 입력하세요"
        className="flex-1 rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
      />

      <button
        onClick={addTodo}
        className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        추가
      </button>
    </div>
  );
}

export default TodoInput;