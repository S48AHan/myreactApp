import React, { useEffect, useState } from "react";
import useFetch from "./useFetch";
// https://jsonplaceholder.typicode.com/todos

function DataFetch() {
  const { data, isLoading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );
  const loadingMsg = <p>Component is Loading..</p>;
  const errorMsg = <p>{error}</p>;
  const todosElement =
    data &&
    data.map((todo, index) => {
      return (
        <p key={index}>
          {todo.id}. {todo.title}
        </p>
      );
    });
  return (
    <div>
      <h1>Todos:</h1>
      {error && errorMsg}
      {isLoading && loadingMsg}
      {todosElement}
    </div>
  );
}

export default DataFetch;
