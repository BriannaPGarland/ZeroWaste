import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div class="footer">
      <div class="footer_container container">
        <h1 class="footer_title">ZeroWaste</h1>

        <ul class="footer_list">
          <li class="footer_link">
            <Link to="/">About US</Link>
          </li>
          <li class="footer_link">
            <Link to="/">Home</Link>
          </li>
          <li class="footer_link">
            <Link to="/Recipies">Recipies</Link>
          </li>
        </ul>
        <ul class="footer_social">
          <a
            href="https://github.com/BriannaPGarland/ZeroWaste"
            class="footer_social-link"
          >
            <i class="bx bxl-github"></i>
          </a>
        </ul>
        <span class="footer__copy">&#169; ZeroWaste. All rigths reserved</span>
      </div>
    </div>
  );
};

export default Footer;
