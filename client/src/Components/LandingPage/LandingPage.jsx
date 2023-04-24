import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
//import  CC  from "./CC"
import CarouselComponent from "./CarouselComponent";

const Landing = () => {
  return (
    <div className="landing">
    <div>
        < CarouselComponent/>
      </div>
      <div className="landing-content">
        <h1 className="Landtitle">Welcome!</h1>
        <p className="Landtxt">to</p>
        <div className="logoImg"></div>
        <div className="buttonSecLand">
          <Link className="SignUpButt" to="/Signup">
            Sign Up For Free
          </Link>
          <Link className="LGINButt" to="/Login">
            Login
          </Link>
        </div>
        </div>
      </div>
  );
};

export default Landing;
