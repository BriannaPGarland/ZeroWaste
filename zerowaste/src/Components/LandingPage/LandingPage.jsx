import React from 'react'
import "./LandingPage.css";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div class="landing">
        <h1 class="title">
            Welcome!
        </h1>
        <p class="Landtxt">to</p>
        <div className="logoImg"></div>
        <div className="buttonSec">
            <Link className="SignUpButt" to="/Signup">
            Sign Up For Free 
            </Link>
        </div>
        <div className="buttonSec">
                <Link className="LGINButt" to="/Login">
               Login
                </Link>
        </div>
      
    </div>
  )
}

export default Landing