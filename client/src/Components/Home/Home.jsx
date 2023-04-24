import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import searchIcon from "./search.PNG";
import FoodCard from "./FoodCard.jsx";
import { Link } from "react-router-dom";
import RotObj from "./RotateObject.jsx";
import { AuthorizeContext } from "../../Authorization/Authorize";
import axios from "axios";
import { auth } from "../../Authorization/FirebaseConfig";
import Landing from "../LandingPage/LandingPage";

const Home = () => {
  const { user, setUser } = useContext(AuthorizeContext);
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/inventory")
      .then((response) => {
        console.log(response.data);
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

  // const SignOutButton = () => {
  //   auth
  //     .signOut()
  //     .then(() => {
  //       console.log("User signed out successfully.");
  //       window.location.href = "/";
  //     })
  //     .catch((error) => {
  //       console.log("Error signing out:", error);
  //     });
  // };

  useEffect(() => {
    // alert(localStorage.getItem("user"));
    auth.onAuthStateChanged((user) => {
     
      if (user) {
        // User is signed in.
       // alert('User is signed in:'+ user)
        console.log('User is signed in:', user);
      //   const user = jwt(); // decode your token here
       localStorage.setItem('user', user.uid);
      } else {
        // No user is signed in.
        //alert('No user is signed in.')
        console.log('No user is signed in.');
       // window.location.href = '/login';
      }
    });
  }, []);

  if (!user) {
    return <Landing />;
  }

  return (
    <div className="HomePage">
      <section className="section">
        <div className="box-main">
          <div className="firstHalf">
            <h1 className="title">{user.email}</h1>
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
            <img className="searIcon" src={searchIcon} alt=""></img>
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
