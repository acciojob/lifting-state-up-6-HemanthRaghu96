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
              <div style={{ display: "flex" }}>
                <p>{todo.text}</p>
                {!todo.isCompleted ? (
                  <button onClick={() => handleComplete(todo.id)}>
                    Complete
                  </button>
                ) : null}
              </div>
            </li>
          </ul>
        ))}
    </>
  );
};

export default Child;
