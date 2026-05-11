// eslint-disable-next-line react/prop-types
export default function TodoInput({ inputRef, text, setText, addTodo }) {
  return (
    <div className="flex gap-2 mb-5">
      <input
        ref={ inputRef }
        value={ text }
        onChange={ e => setText(e.target.value) }
        onKeyDown={ e => e.key === "Enter" && addTodo( ) }
        placeholder="할 일을 입력하세요"
        className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
      />
      <button 
        onClick={ addTodo }
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition-all duration-300"
      >
        추가
      </button>
    </div>
  );
}