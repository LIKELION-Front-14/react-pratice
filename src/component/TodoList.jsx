import { useState, useRef, useEffect} from "react";

import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
function TodoList() {
    const [text,setText] = useState(""); //할 일 적을 때
    const [todos, setTodos] = useState([]); //할 일 리스트로 받게

    const inputRef = useRef(null);

    useEffect(() => {inputRef.current.focus();},[]);

    useEffect(() => {
        console.log("todos 변경됨",todos)
    },[todos]);

    const addTodo = () => {
        if(!text.trim()) return; // text가 빈 문자열이면 !false = true 돼서 조건 만족돼서 종료

        setTodos(prev => [...prev,{id : Date.now(),text,done: false} // 기존 할 일 + 새로운 일 추가
        ]);
        setText(""); // 입력 창 비워주기 위해서

        inputRef.current.focus();
    };

    const toggleTodo = (id) => {  // 특정 id를 가진 Todo의 done 값을 반대로 바꾸는 함수
        setTodos(prev => // 새로운 배열 생성
            prev.map(todo => //todos 배열 하나씩 돌기
                todo.id === id
                ? { ...todo, done: !todo.done} //... todo(객체 복사) 조건 맞으면 기존 todo 복사하고 ,done만 반대로
                : todo
            )
        )
    };
    const removeTodo = (id) => {
        setTodos(prev => prev.filter(todo => todo.id !== id)); //클릭한 id말고 다른 건 다 남겨라

    };
    return (
      <div className="todo-container">
        <h1>Todo List</h1>

        <TodoInput
        text ={text}
        setText = {setText}
        addTodo={addTodo}
        inputRef={inputRef}
        />

        <ul>
            {todos.map((todo) => (
                <TodoItem
                key ={todo.id}
                todo={todo}
                toggleTodo={toggleTodo}
                removeTodo={removeTodo}/>
            ))}
        </ul>
      </div>
    );
}

export default TodoList;