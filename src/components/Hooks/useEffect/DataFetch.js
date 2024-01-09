import React, { useEffect, useState } from "react";
// https://jsonplaceholder.typicode.com/todos

function DataFetch() {
  const [todos, settodos] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        settodos(data);
        // console.log(todos);
      });
  }, []);

  return (
    <div>
      {todos &&
        todos.map((todo, index) => {
          return <p key={index}>{todo.title}</p>;
        })}
    </div>
  );
}

export default DataFetch;
