import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { useIsAuthenticated, useSignOut } from "react-auth-kit";

const NavBar = () => {
  const isAuthenticated = useIsAuthenticated();
  const signOut = useSignOut();

  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (isAuthenticated()) {
    } else {
    }
    // setIsLogin()
  }, []);

  // on logout
  // signOut()

  const isLoginOrLogout = () => {};

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-dark nav-align">
        <div className="container ">
          <Link className="text-white navbar-brand" to="/">
            <h4>Questionaire</h4>
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="text-white nav-link active " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="text-white nav-link active" to="/Projects">
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link className="text-white nav-link active" to="/Contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <Link to={"/"}>
            <span onClick={isLoginOrLogout} className="is-login">
              {isLogin ? "Log-out" : "Login"}
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
