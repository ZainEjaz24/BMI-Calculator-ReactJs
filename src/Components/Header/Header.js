import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Header.css";
import logo from "../../Assets/BMI Logo.png";

function Header() {
  const location = useLocation();

  const isActiveLink = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <div className="header-main-div">
      <div className="header-div">
        <div className="Logo">
          <NavLink to="/" exact>
            <img src={logo} alt="BMI Logo" />
          </NavLink>
        </div>
        <div className="nav-links">
          <nav>
            <NavLink to="/" exact className={isActiveLink("/")}>
              Home
            </NavLink>
            <NavLink to="/Calculate" className={isActiveLink("/Calculate")}>
              Calculate
            </NavLink>
            <NavLink to="/About" className={isActiveLink("/About")}>
              What is BMI?
            </NavLink>
            <NavLink to="/Feedback" className={isActiveLink("/Feedback")}>
              Feedback
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
