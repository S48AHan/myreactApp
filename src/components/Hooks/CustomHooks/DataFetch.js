import React, { useEffect, useState } from "react";
// https://jsonplaceholder.typicode.com/todos

const loadingMsg = <p>Component is Loading..</p>;

function DataFetch() {
  const [todos, settodos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  // const errorMsg = ;
  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => {
          if (!response.ok) {
            throw Error("Fetching is not Okay!");
          } else {
            return response.json();
          }
        })
        .then((data) => {
          settodos(data);
          setIsLoading(false);
          setError(null);
          // console.log(todos);
        })
        .catch((error) => {
          setError(error.message);
          setIsLoading(false);
        });
    }, 2000);
  }, []);

  const todosElement =
    todos &&
    todos.map((todo, index) => {
      return (
        <p key={index}>
          {todo.id}. {todo.title}
        </p>
      );
    });
  return (
    <div>
      <h1>Todos:</h1>
      {error && <p>{error}</p>}
      {isLoading && loadingMsg}
      {todosElement}
    </div>
  );
}

export default DataFetch;
