export default function TodoInput({ text, setText, onAdd }) {
  return (
    <div className="flex gap-2 mb-4">
      <input
        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onAdd()}
        placeholder="할 일을 입력하세요"
      />
      <button 
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 active:scale-95 transition-transform"
        onClick={onAdd}
      >
        추가
      </button>
    </div>
  );
}