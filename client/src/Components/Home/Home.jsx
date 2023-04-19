import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import searchIcon from "./search.PNG";
import FoodCard from "./FoodCard.jsx";
import { Link } from "react-router-dom";
import RotObj from "./RotateObject.jsx";
import { AuthorizeContext } from "../../Authorization/Authorize";
import axios from "axios";
import { auth } from "../../Authorization/FirebaseConfig";

const Home = () => {
  const { user, setUser } = useContext(AuthorizeContext);
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        //console.log("User is signed in:", user);
      } else {
        //console.log("No user is signed in.");
        window.location.href = "/login";
      }
    });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3001/inventory")
      .then((response) => {
        //console.log(response.data);
        setInventory(response.data);
      })
      .catch((error) => {
        console.error("Error fetching inventory:", error);
      });
  }, []);

  const handleClickScroll = () => {
    const element = document.getElementById("inv");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const SignOutButton = () => {
    auth
      .signOut()
      .then(() => {
        console.log("User signed out successfully.");
        window.location.href = "/";
      })
      .catch((error) => {
        console.log("Error signing out:", error);
      });
  };

  return (
    <div className="HomePage">
      <section className="section">
        <div className="box-main">
          <div className="firstHalf">
            <h1 className="title">Applebees</h1>
          </div>
        </div>
      </section>
      <section>
        <RotObj></RotObj>
      </section>
      <div className="buttonSec">
        <button className="seeAll" onClick={handleClickScroll}>
          See All
        </button>
      </div>
      <section className="section">
        <div>
          <div className="searchSection">
            <input
              className="searchbar"
              type="text"
              placeholder="Search ..."
            ></input>
            <img className="searIcon" src={searchIcon}></img>
          </div>
        </div>
      </section>
      <div className="title" id="inv">
        Current Inventory
      </div>
      <div className="buttonSec">
        <Link className="addInvButt" to="/AddInv">
          Add Item To Inventory
        </Link>
      </div>

      <section className="inventoryDisp">
        {inventory.map((item) => (
          <FoodCard
            key={item._id}
            name={item.name}
            amount={item.quantity}
            units="lbs"
          />
        ))}
      </section>
    </div>
  );
};

export default Home;
