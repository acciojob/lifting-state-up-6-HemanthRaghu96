import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", isCompleted: false },
    { id: 2, text: "Build a React app", isCompleted: false },
    { id: 3, text: "Deploy the React app", isCompleted: false },
  ]);
  const handleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: true } : todo
    );
    setTodos(updatedTodos);
  };
  return (
    <>
      <h1>Parent Component</h1>
    
      <Child
        todos={todos}
        handleComplete={handleComplete}
      />
    </>
  );
};

export default Parent;
