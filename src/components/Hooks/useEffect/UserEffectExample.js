import React, { useEffect, useState } from "react";

const UserEffectExample = () => {
  const [count, setCount] = useState(0);
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    //calls with first render
    console.log("UseEffect");
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      {console.log(isLoading)}
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
        disabled={count === 5 ? true : false}
      >
        +
      </button>
      <button
        onClick={() => {
          setisLoading(!isLoading);
        }}
      >
        isLoading
      </button>
    </div>
  );
};

export default UserEffectExample;
