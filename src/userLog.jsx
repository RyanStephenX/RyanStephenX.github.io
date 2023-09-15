import React, { useState } from "react";
import "./css/userLog.css";
import { Login } from "./components/Application/userLogin/userLogin";
import { Register } from "./components/Application/userLogin/userRegister";

function UserLogin() {
  const [currentform, setCurrentForm] = useState("Login");
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };
  return (
    <>
      <div className="userlog">
        {currentform === "Login" ? (
          <Login onFormSwitch={toggleForm} />
        ) : (
          <Register onFormSwitch={toggleForm} />
        )}
      </div>
    </>
  );
}

export default UserLogin;
