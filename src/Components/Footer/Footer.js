import React from "react";
import "./Footer.css";
import logo from "../../Assets/BMI Logo.png";

function Footer() {
  return (
    <div className="footer">
      <div class="footerlogo">
        <a href="/">
          <img src={logo} />
        </a>
      </div>
      <div class="footer-content">© Copyright 2024 All rights Reserved</div>
    </div>
  );
}

export default Footer;
