// step 3: state access useContext hook

import React, { useContext } from "react";
import { UseContext } from "./UseContext";

function Component4() {
  const { data, text } = useContext(UseContext);
  return (
    <div>
      <p>{text}</p>
      <p>ID: {data.id} </p>

      <p>Name:{data.name} </p>
    </div>
  );
}

export default Component4;
