import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./css/loginUser.css";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <label htmlFor="email">email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
          <label htmlFor="password">password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <button className="button-33" type="submit">
            Log in
          </button>
          <a
            className="register-link"
            onClick={() => props.onFormSwitch("Register")}
          >
            Don't have an account? Register here.
          </a>
          <div className="backButton">
            <li>
              <Link to="/">Back</Link>
            </li>
          </div>
        </div>
      </form>
    </>
  );
};
