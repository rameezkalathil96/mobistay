import React, { useEffect, useState } from "react";
import classes from "./nav.module.css";
import { ImLocation2 } from "react-icons/im";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";

const Nav = () => {
  const [logstate, setlogstate] = useState(
    JSON.parse(localStorage.getItem("isloggedin"))
  );

  const navigatelogin = useNavigate();

  function login() {
    navigatelogin("/Login");
    console.log(loginState);
  }
  const loginState = localStorage.getItem("isloggedin");
  function logout() {
    localStorage.clear("isloggedin");
    console.log(loginState);
    setlogstate(localStorage.getItem("isloggedin"));
  }

  return (
    <>
      <div>
        <nav className={`navbar ${classes.Nav}`}>
          <div className="container">
            <div>
              {/* <Link to="/" className={classes.Link}> */}
              <h3 className={classes.navLogo}>
                <span className={classes.mobi}>
                  <b>
                    Mobi
                    <ImLocation2 />
                  </b>
                </span>
                <span className={classes.stay}>
                  <b>stay</b>
                </span>
              </h3>
              {/* </Link> */}
            </div>
          </div>
          {logstate ? (
            <div>
              Hi,{logstate[0].name}&nbsp;&nbsp;
              {/* <FaRegUser /> */}
              <BiLogOut />
              <span className={classes.login} onClick={logout}>
                Logout
              </span>
            </div>
          ) : (
            <div className={classes.usericon}>
              <FaUserCircle />
              <span className={classes.login} onClick={login}>
                Login/Signup
              </span>
            </div>
          )}
          &nbsp;&nbsp;&nbsp;&nbsp;
        </nav>
      </div>
    </>
  );
};

export default Nav;
