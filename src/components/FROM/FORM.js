import React, { useState } from "react";
import style from "./form.module.css";

export default function FORM() {
  // const [name, setname] = useState("");
  // const [email, setemail] = useState("");
  // const [password, setpassword] = useState("");
  const [user, setuser] = useState({ name: "", email: "", password: "" });

  // const { name, email, password } = user;
  // const handleName = (name) => {
  //   setuser({ name: name.target.value, email, password });
  // };

  // const handleEmail = (email) => {
  //   setuser({ name, email: email.target.value, password });
  // };

  // const handlePassword = (password) => {
  //   setuser({ name, email, password: password.target.value });
  // };

  const handleFields = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  const handleForm = (e) => {
    console.log("submitted");

    console.log(user);
    e.preventDefault();
  };

  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={handleForm}>
        <div className={style.formGroup}>
          <lable>Name: </lable>
          <input
            type="text"
            name="name"
            onChange={handleFields}
            // value={name}
            required
          ></input>
        </div>

        <div className={style.formGroup}>
          <lable>Email: </lable>
          <input
            type="email"
            name="email"
            // value={email}
            onChange={handleFields}
            required
          ></input>
        </div>

        <div className={style.formGroup}>
          <lable>Password: </lable>
          <input
            type="password"
            name="password"
            // value={password}
            onChange={handleFields}
            required
          ></input>
        </div>
        <button className={style.button} type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
