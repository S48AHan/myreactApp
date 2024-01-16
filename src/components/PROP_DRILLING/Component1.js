import React, { useState } from "react";
import Component2 from "./Component2";
import { UseContext } from "./UseContext";

function Component1() {
  const [data, setData] = useState({ id: 104, name: "Saber Ahmed" });
  const [text, setText] = useState("Sakib Khan");
  return (
    // step 2: wrap childs with context provider
    <UseContext.Provider value={{ data, text }}>
      <Component2 />
    </UseContext.Provider>
  );
}

export default Component1;
