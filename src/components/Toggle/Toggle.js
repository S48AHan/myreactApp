import React, { useState } from "react";

export default function Toggle() {
  const [toggle, setToggle] = useState(true);

  return (
    <div style={{ margin: "1rem", backgroundColor: "pink", padding: "1rem" }}>
      {toggle && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          iusto labore ipsam velit obcaecati ipsa explicabo neque id fuga
          voluptates qui voluptatum delectus dignissimos aliquid reprehenderit,
          quisquam aliquam minima nihil!
        </p>
      )}
      <div style={{ textAlign: "center" }}>
        <button
          style={{ margin: "5px" }}
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {toggle ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
}
