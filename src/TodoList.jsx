import { useState } from "react";
import "./TodoList.css";

export default function TodoList() {
    let [todos, setTodos] = useState(["Add Tasks below!"]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        if (newTodo.trim() === "") return; // prevent empty tasks
        setTodos([...todos, newTodo]);
        setNewTodo("");
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    return (
        <div className="todo-app">
            <div className="input-row">
                <input
                    type="text"
                    value={newTodo}
                    placeholder="Add a task"
                    onChange={updateTodoValue}
                />
                <button onClick={addNewTask}>Add Task</button>
            </div>

            <hr />

            <h4>To-Do List</h4>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    );
}
