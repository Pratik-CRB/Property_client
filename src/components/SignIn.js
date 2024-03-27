import React, { useState } from "react";
import "./SignIn.css";
import { useNavigate } from "react-router-dom";


export const SignIn = () => {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const submitData = (e) => {
    e.preventDefault();
    fetch("https://property-server-x6yz.onrender.com/SignUp/SignIn", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form)
    }).then((data)=> data.json())
    .then((response) => {
      if (response.message == "success"){
        alert(response.message);
        navigate('/Body')
      }
      else if (response.message == "user not found.\nKindly create a user using SignUp"){
        alert(response.message);
        navigate('/SignUp')
      }else{
        alert(response.message);
      }
      
    })
    
  };

  return (
    <div className="SignIn">
      <div className="container-sign-in">
        <div>
          <p className="logo">LOGO</p>
          <p id="cred">Enter your credential to access your account</p>
        </div>
        <form
          className="form-signin"
          onSubmit={submitData}
        >
          <input
            name="UserId"
            placeholder="User ID"
            onChange={(e) => setForm({ ...form, UserId: e.target.value })}
            className="userID"
            required
          ></input>
          <input
            name="Password"
            type="password"
            placeholder="Password"
            onChange={(e) => setForm({ ...form, Password: e.target.value })}
            className="passIP"
            required
          ></input>
          <button type="submit" id="btn-signin">
            Sign In
          </button>
        </form>
      </div>
      <div className="signUp">
        <p>Don't have an account?</p>
        <p>
          <a href="/SignUp">
            <span>Sign Up</span>
          </a>
        </p>
      </div>
    </div>
  );
};


