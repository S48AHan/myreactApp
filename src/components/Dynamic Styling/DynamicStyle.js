import React, { useState, useEffect } from "react";
import "../../App.css";
function DynamicStyle() {
  const [error, setError] = useState(false);
  const [inputText, setInputText] = useState("");
  const [validText, setValidText] = useState(true);
  //   let error = false;
  const handleError = () => {
    setError(!error);
  };

  useEffect(() => {
    // console.log("Use Effect");
    if (inputText.length <= 2) {
      setValidText(false);
    } else {
      setValidText(true);
    }
  }, [inputText]);

  const handleInput = (e) => {
    // console.log("useState");
    setInputText(e.target.value);
  };
  return (
    <div className="App">
      <h1
        style={{
          textAlign: "center",
          color: error ? "red" : "green",
          backgroundColor: error ? "black" : "white",
        }}
      >
        Welcome
      </h1>

      {/* {console.log("In the Component")} */}

      <div style={{ textAlign: "center", padding: "10px" }}>
        <button onClick={handleError}>Change Nav Bar</button>
      </div>
      <div style={{ textAlign: "center" }}>
        {/* inline css */}
        {/* <input
          onChange={handleInput}
          style={{ backgroundColor: validText ? "green" : "red" }}
        ></input> */}

        {/* file based css */}
        <input
          onChange={handleInput}
          className={`${validText ? "valid" : "invalid"}`}
        ></input>
      </div>
      <div style={{ textAlign: "center" }}>{inputText}</div>
    </div>
  );
}

export default DynamicStyle;
