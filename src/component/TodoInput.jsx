function TodoInput({text, setText, addTodo,inputRef}) {
    return (
        <div className="todo-input">
            <input 
            ref={inputRef}
            value={text} 
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTodo()}
            placeholder="할 일을 입력하세요"
            />
            <button onClick={addTodo}>추가</button>
        </div>
    );
}
export default TodoInput;