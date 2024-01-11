import React from "react";
import Column from "./Column";
function Table() {
  return (
    <table>
      <tr>
        <Column name={"Saber Ahmed"} age={24} />
      </tr>
      <tr>
        <Column name={"Sean Rahman"} age={26} />
      </tr>
    </table>
  );
}

export default Table;
