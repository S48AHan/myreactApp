import React, { useRef } from "react";

function UserForm() {
  const userNameRef = useRef();
  const userPassRef = useRef();
  const handleSubmit = (event) => {
    const uname = userNameRef.current.value;
    const upass = userPassRef.current.value;
    event.preventDefault();
    console.log({ uname, upass });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>UserName:</label>
        <input type="text" id="userName" ref={userNameRef}></input>
      </div>
      <div>
        <label>Password:</label>
        <input type="password" id="password" ref={userPassRef}></input>
      </div>
      <button type="submit">Register</button>
    </form>
  );
}

export default UserForm;
