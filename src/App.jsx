import { useState } from "react";
import "../src/styles.css";
import { NewList } from "./NewList";

const App = () => {
  const [todoName, setTodoName] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo() {
    if (todoName === "") return;

    setTodos((currnetTodos) => {
      return [
        ...currnetTodos,
        { name: todoName, id: crypto.randomUUID(), completed: false },
      ];
    });
    setTodoName("");
  }

  function toggleComplete(id, checked) {
    setTodos((currnetTodos) =>
      currnetTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: checked };
        }
        return todo;
      })
    );
  }

  function deletion(id) {
    setTodos((currTodos) => {
      return currTodos.filter((todo) => todo.id !== id);
    });
  }
  return (
    <>
      <ul id="list">
        {todos.map((todo) => {
          return (
            <NewList
              key={todo.id}
              name={todo.name}
              id={todo.id}
              completed={todo.completed}
              toggleComplete={toggleComplete}
              deletion={deletion}
            />
          );
        })}
      </ul>
      <div id="new-todo-form">
        <label htmlFor="todo-input">New Todo</label>
        <input
          type="text"
          id="todo-input"
          onChange={(e) => setTodoName(e.target.value)}
          value={todoName}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
    </>
  );
};

export default App;
