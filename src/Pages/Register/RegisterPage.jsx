import React from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div>
      <h1>Register Profile</h1>
      <p>Welcom to the registration page. Please enter your details below.</p>
      <form action="">
        <div className="input-box">
          <p>Full Name</p>
          <input type="text" placeholder="Enter Name" required />
        </div>
        <div className="input-box">
          <p>Email Adress</p>
          <input type="text" placeholder="Enter Email" required />
        </div>
        <div className="input-box">
          <p>Password</p>
          <input type="text" placeholder="Enter Password" required />
        </div>
        <div className="input-box">
          <p>Confirm Password</p>
          <input type="text" placeholder="Enter Password" required />
        </div>

        <button type="submit">Register</button>

        <button type="submit">Sign in with Google</button>

        <button type="submit">Sign in with Facebook</button>
      </form>
    </div>
  );
}

export default RegisterPage;
