import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./TodoList.css";

export default function TodoList() {
  let [todos, setTodos] = useState([
    { task: "Sample Task", id: uuidv4(), isdone: false },
  ]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    if (newTodo.trim() === "") return;
    setTodos((prevtodos) => [
      ...prevtodos,
      { task: newTodo, id: uuidv4(), isdone: false },
    ]);
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  let upperCaseAll = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => ({
        ...todo,
        task: todo.task.toUpperCase(),
      }))
    );
  };

  let UppercaseOne = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, task: todo.task.toUpperCase() } : todo
      )
    );
  };

  let markAsDone = (id) =>
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isdone: !todo.isdone } : todo
      )
    );

  return (
    <div className="todo-app">
      <div className="input-row">
        <input
          type="text"
          value={newTodo}
          placeholder="Add a task..."
          onChange={updateTodoValue}
        />
        <button onClick={addNewTask}>Add Task</button>
      </div>

      <hr />
      <h4>To Do List</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.isdone ? "completed" : ""}>
            <span>{todo.task}</span>
            <div className="actions">
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              <button onClick={() => UppercaseOne(todo.id)}>Capitalize</button>
              <button onClick={() => markAsDone(todo.id)}>
                {todo.isdone ? "Not-Done" : "Done"}
              </button>
            </div>
          </li>
        ))}
      </ul>

      {todos.length > 0 && (
        <button className="capitalize-all" onClick={upperCaseAll}>
          Capitalize All
        </button>
      )}
    </div>
  );
}
