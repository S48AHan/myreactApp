import React from "react";

function Card1(props) {
  //   const { info } = props;
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.desc}</p>
    </div>
  );
}
export default Card1;
