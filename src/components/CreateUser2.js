import React from "react";
import classes from "./login.Module.css";
import { useRef } from "react";
import { loginActions } from "./Store/login-Slice";
import { useDispatch } from "react-redux";

const CreateUser2 = () => {
  // const alert = "";
  var name = useRef();
  var email = useRef();
  var password = useRef();
  var cnfrm_password = useRef();
  const addtoo = useDispatch();
  const CreateuserHandler = (e) => {
    e.preventDefault();

    if (password.current.value.length >= 8) {
      if (password.current.value === cnfrm_password.current.value) {
        var new1 = {
          name: name.current.value,
          email: email.current.value,
          password: password.current.value,
          role: "user",
        };

        addtoo(loginActions.addtoLogin(new1));
        localStorage.setItem("isloggedin", JSON.stringify(new1));
      } else {
        const txt = "Re-try";
        document.getElementById("error1").innerHTML = txt;
      }
    } else {
      const txt = "Password should contain 8 characters";
      document.getElementById("error").innerHTML = txt;
    }
  };

  return (
    <div>
      <div className="login-container">
        {/* <div className={`login-container ${classes.login_container}`}> */}
        <form className={`login-form ${classes.login_form}`}>
          <div className="login-form-content">
            <h3 className="login-form-title">Sign Up</h3>
            <div className="form-group mt-3">
              <label>Full Name</label>
              <input
                required
                type="text"
                className="form-control mt-1"
                placeholder="Enter name"
                ref={name}
              />
              <div className="form-group mt-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Enter email"
                  ref={email}
                  required
                />
              </div>
              <div className="form-group mt-3">
                <label aria-required>Password</label>
                <span className={classes.spanerror} id="error"></span>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter password"
                  ref={password}
                  required
                  // onChange={pswrlenChck}
                />
              </div>
              <div className="form-group mt-3">
                <label> Confirm Password </label>
                <span className={classes.spanerror} id="error1"></span>
              </div>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Confirm Password"
                ref={cnfrm_password}
                required
              />

              <div className="d-grid gap-2 mt-3">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={CreateuserHandler}
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default CreateUser2;
