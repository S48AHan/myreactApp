import React, { useState } from "react";

export default function Child(props) {
  //   const count = 0;

  const [count, setCount] = useState(0);
  const handlePlus = () => {
    setCount((count) => count + 1);
  };

  const handleMinus = () => {
    setCount((count) => count - 1);
  };
  let data = count;
  props.onChildData(data);
  return (
    <div>
      <p>I am Child</p>
      <p>{props.data}</p>
      <h1>Count:{count}</h1>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>
    </div>
  );
}
