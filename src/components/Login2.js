import React, { useState } from "react";
import classes from "./login.module.css";
import { useRef } from "react";
import { loginActions } from "../store/login-Slice";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

const Login2 = () => {
  const[create1,setcreate1]=useState();
  const navigate=useNavigate();
  var email = useRef();
  var password = useRef();
  const dispatch = useDispatch();
  const log = useSelector((state) => state.login.login);
  // console.log(log);
  const submitHandler = (e) => {
    e.preventDefault();
    const login = log.filter(
      (item) =>
        item.email == email.current.value &&
        item.password == password.current.value
    );
    if (login.length == 1) {
      dispatch(loginActions.loginto(login));
      localStorage.setItem("isloggedin", JSON.stringify(login));
      navigate("/")
    }
    if (login.length == 0) {
      console.log("no");
    }
    //  const localstorage = JSON.parse(localStorage.getItem("isloggedin"));
    //  console.log("get", localstorage);  
    
  };
  function create(){
setcreate1(true)
  }
  return (
  //  {create1?<CreateUser2/>}
    // <div className="login-container">
    <div className={`login-container ${classes.login_container}`}>
      <form className={`login-form ${classes.login_form}`}>
        <div className="login-form-content">
          <h3 className="login-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              ref={email}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              ref={password}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={submitHandler}
            >
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Dont have an account?
            <span style={{color:"blue"}} onClick={create}> Sign up</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login2;
