import "./CSS/Todo.css"
import { useEffect, useState } from "react";
import { useRef } from "react";
import TodoItems from "./TodoItems";

let count = 0;

export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);
  
  const add=()=>{
    setTodos([...todos, {no:count++, text:inputRef.current.value, display:""}]);
    inputRef.current.value = "";
    localStorage.setItem("todos_count", count)
  };

  useEffect(()=>{
    setTodos(JSON.parse(localStorage.getItem("todos")));
    count=localStorage.getItem("todos_count")
  },[]);
  
  useEffect(()=>{
    setTimeout(()=>{
      console.log(todos);
      localStorage.setItem("todos", JSON.stringify(todos));
    })
  }, [todos]);

  return (
    <div className="todo">
      <div className="todo-header">To-Do List</div>
      <div className="todo-add">
        <input ref={inputRef} type="text" placeholder="Add Your Task" className="todo-input"/>
        <div onClick={()=>{add()}} className="todo-add-btn">ADD</div>
       <div className="todo-list">
        {todos.map((todo, index)=>{
          return <TodoItems key={index} no={todo.no} display={todo.display} text={todo.text}/> 
          })}
       </div>
      </div>
      <div className="todo-list"></div>
    </div>
  )
}

export default Todo;