import React from "react";

const Child = ({ todos, handleComplete }) => {
  return (
    <>
      <h1>Child Component</h1>
      {todos &&
        todos.length > 0 &&
        todos.map((todo) => (
          <ul key={todo.id}>
            <li>
              <p>{todo.text}</p>

              {!todo.isCompleted && (
                <button onClick={() => handleComplete(todo.id)}>
                  Complete
                </button>
              )}
            </li>
          </ul>
        ))}
    </>
  );
};

export default Child;
