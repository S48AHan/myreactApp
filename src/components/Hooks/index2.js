import React, { useState } from "react";

export default function HooksRFC() {
  const [count, setCount] = useState(14);

  const Increament = () => {
    setCount(count + 1);
  };

  const Decreament = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={Increament} disabled={count === 5 ? true : false}>
        Increament
      </button>
      <button onClick={Decreament} disabled={count === 0 ? true : false}>
        Decreament
      </button>
    </div>
  );
}
