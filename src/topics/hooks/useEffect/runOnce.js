import React, { useEffect, useState } from "react";

function RunOnce() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/api/todos")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTodos(data)
      });
  }, []); // empty array to run once, used for API calls

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h3>Use Effect Run Once</h3>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
      <p>Use effect called only once even though state updates: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default RunOnce;
