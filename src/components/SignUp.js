import React, { useState } from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const [form , setForm] = useState({})
  const navigate = useNavigate()

  const submitData = (e)=> {
    e.preventDefault()
    fetch("https://property-server-x6yz.onrender.com/SignUp/addUser",{
      method : "POST",
      headers : {
        "Accept" : "application/json",
        "Content-Type" : "application/json"
      },
      body : JSON.stringify(form)
    }).then((data)=> data.json())
    .then((response)=> {
      alert(response.message);
      navigate('/SignIn')
    })

  }

  return (
    <div className="SignUp">
      <div className="container-sign-up">
        <div>
          <p className="logo">LOGO</p>
          <p id="cred">Create New Account</p>
        </div>
        <form className="form-SignUp" onSubmit={submitData} action="" method="GET">
          <input
            name="UserId"
            placeholder="Mail ID"
            onChange={(e) => setForm({...form, UserId:e.target.value})}
            className="MailId"
            required
          ></input>
          <input
            name="Password"
            type="password"
            placeholder="Password"
            onChange={(e) => setForm({...form,Password:e.target.value})}
            className="passIP"
            required
          ></input>
          <input
            name="ConfirmPassword"
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setForm({...form,ConfirmPassword:e.target.value})}
            className="cnfpassIP"
            required
          ></input>
          <button type="submit" id="btn-SignUp" onClick={submitData}>Sign Up</button>
        </form>
      </div>
      <div className="signUp-signIn">
            <a href="/SignIn">
              <span>Sign In</span>
            </a>
        </div>
    </div>
  );
};


