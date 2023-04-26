import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
//import  CC  from "./CC"
import CarouselComponent from "./CarouselComponent";

const Landing = () => {
  return (
    <div className="landing">
    
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
          <div>
           < CarouselComponent/>
          </div>

          <div className="AboutUs">
            <div className="abtUsTitle">
              About Us
            </div>
            <div className="abtContent">
             Every year restaurants throw away millions of pounds of perfectly viable food why the hunger crisis around the country and the world continues to grow. 
            </div>
            <div className="abtContent">
            There have been other attempts on this issue such as ToGood2Go but this does not bring the food directly to those who need it! 
            </div>
            <div className="abtContent">
            Our product attempts to solve this problem by allowing restaurants to track their inventory in the most hands off way possible and alerts the user when items are about to expire so they know when and what to donate! 
            </div>
            <div className="AboutUs">
            <div className="abtUsTitle">
              How Our Product Works
            </div>
            <div className="abtContent">
             Restaurants use this product to track their inventory intake and enter their recpies. From there the rest is in our hands. This software product automatically notifies users of upcoming expirations, low inventory, potential donations and more. It will automatically calculate inventory every 12 hours so you dont have to! 
            </div>
           
          </div>
          </div>
        </div>
        </div>
      </div>
  );
};

export default Landing;
