import React from 'react'
import "./LandingPage.css";
import { Link } from "react-router-dom";
//import  CC  from "./CC"
import CarouselComponent from './CarouselComponent';

const Landing = () => {
  return (
<<<<<<< HEAD
    <div className="landing">
    <div style={{height:"15em"}}>
      < CarouselComponent/>
=======
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
      
>>>>>>> eb777ea5dbf272db65607b858ca75071d3752790
    </div>
    <div className="landing-content">
      <h1 className="title">Welcome!</h1>
      <p className="Landtxt">to</p>
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
  </div>
  )
}

export default Landing