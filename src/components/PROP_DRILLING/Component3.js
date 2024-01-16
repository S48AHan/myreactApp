import React, { useContext } from "react";
import Component4 from "./Component4";
import { UseContext } from "./UseContext";
function Component3(props) {
  const { sData, cid } = props;
  console.log(sData.fname);
  console.log(sData.lname);
  console.log(cid);

  return (
    <div>
      <Component4 />
    </div>
  );
}

export default Component3;
