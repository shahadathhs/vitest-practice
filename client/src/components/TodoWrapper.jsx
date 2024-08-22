import { useState } from "react";

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState("false");

  // Function to add a new todo
  const addTodo = (title, completed) => {
    const newTodo = {
      title,
      completed: completed === "true",
      userId: 1,
    };

    setTodos([...todos, newTodo]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo(title, completed);
      setTitle("");
      setCompleted("false");
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter a new todo"
        />
        <select
          value={completed}
          onChange={(e) => setCompleted(e.target.value)}
        >
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
        <br />
        <br />
        <button type="submit">Add Todo</button>
      </form>
      <br />
      <br />
      
      {todos.length > 0 ? (
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <span>{todo.title} - {todo.completed ? "Completed" : "Not Completed"}</span>
            </li>
          ))}
        </ul>
      ) : (
        <h1>No todos available.</h1>
      )}
    </div>
  );
};

export default TodoWrapper;
