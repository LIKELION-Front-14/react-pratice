function TodoItem({todo, toggleTodo, removeTodo}){
    return (
        <li className="todo-item">
            <span
              onClick={() => toggleTodo(todo.id)}
              className={todo.done ? "done" : ""}
            >
                {todo.text}    
            </span>
            <button onClick={() =>removeTodo(todo.id)}>삭제</button>
        </li>
    )
}
export default TodoItem;