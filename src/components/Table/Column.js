import React from "react";

const Column = (props) => {
  const { name, age } = props;
  return (
    <>
      <td>{name}</td>
      <td> {age}</td>
    </>
  );
};

export default Column;
