import React from "react";
import Component3 from "./Component3";

function Component2() {
  const myData = { fname: "saber", lname: "Ahmed" };
  return (
    <div>
      <Component3 sData={myData} cid={69} />
    </div>
  );
}

export default Component2;
