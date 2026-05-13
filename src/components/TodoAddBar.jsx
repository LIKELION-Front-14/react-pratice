import Button from "./Button";
import Input from "./Input";

function TodoAddBar({ value, inputRef, onChange, onAdd }) {
  return (
    <div className="flex gap-2 p-2 bg-gray-50 rounded-lg">
      <Input
        className="flex-1 px-4 py-2 border border-gray-300 rounded 
                   focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent 
                   transition-all"
        value={value}
        inputRef={inputRef}
        onChange={onChange}
        onAdd={onAdd}
        placeholder="할 일을 입력하세요."
      />
      <div className="hover:scale-105 active:scale-95 transition-transform">
        <Button 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          text="추가" 
          onAdd={onAdd} 
        />
      </div>
    </div>
  );
}

export default TodoAddBar;