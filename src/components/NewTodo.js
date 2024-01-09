import React from "react";

export default function NewTodo(props) {
  const s = "saber";
  props.onNewTodo(s);
  return <div>NewTodo</div>;
}
