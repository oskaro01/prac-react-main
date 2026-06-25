export const fullCode = `

"use client";

import { useState } from "react";

const starterTodos = [
  { id: 1, title: "Learn conditional rendering" },
  { id: 2, title: "Show different UI for different state" },
];

export default function ConditionalRendering() {
  const [todos, setTodos] = useState([]);
  const [showTip, setShowTip] = useState(true);

  return (
    <div>
      <button onClick={() => setTodos(starterTodos)}>
        Add sample todos
      </button>

      <button onClick={() => setTodos([])}>
        Clear
      </button>

      <button onClick={() => setShowTip(!showTip)}>
        Toggle tip
      </button>

      {todos.length === 0 ? (
        <p>No todos yet.</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      )}

      {todos.length > 0 && (
        <p>You have {todos.length} todos.</p>
      )}

      {showTip && (
        <p>This tip only shows when showTip is true.</p>
      )}
    </div>
  );
}

`;
