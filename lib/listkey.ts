export const fullCode = `

"use client";

import { useState } from "react";

export default function ListKeys() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo() {
    const cleanText = text.trim();

    if (!cleanText) return;

    const newTodo = {
      id: Date.now(),
      title: cleanText,
    };

    setTodos([...todos, newTodo]);
    setText("");
  }

  return (
    <div>
      <h1>Todo App</h1>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

`;
