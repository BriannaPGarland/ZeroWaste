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
  const { user } = useContext(AuthorizeContext);
  const [inventory, setInventory] = useState([]);
  const [userData, setUserData] = useState(null);

  const [focusedIndex, setFocusedIndex] = useState(-1);
  const focusStyle = {
    transform: "scale(1.1)",
    transition: "all 0.5s ease-in-out",
  };
  const defaultStyle = {
    transform: "scale(1)",
    transition: "all 0.5s ease-in-out",
  };


  useEffect(() => {
    if (user != null) {
      var uid = user.uid;
      //console.log(uid);
      axios
        .get(`http://localhost:3001/inventory/${uid}`)
        .then((response) => {
          //console.log("getInventory", response);
          setInventory(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error fetching inventory:", error);
        });

      axios
        .get(`http://localhost:3001/user/${uid}`)
        .then((response) => {
          //console.log(response.data.name)
          setUserData(response.data);
          console.log("userData", userData);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
    fetchInventory();
  }, []);

  const fetchInventory = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        const uid = user.uid;
        const response = await fetch(
          `http://localhost:3001/inventory/${uid}`
        );
        const data = await response.json();
        setInventory(data);
      }
    } catch (err) {
      console.error(err);
    }
  };
  fetchInventory(); 

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

  if (!user) {
    return <Landing />;
  }

  return (
    <div className="HomePage">
      <section className="section">
        <div className="box-main">
          <div className="firstHalf">
            <div>
            </div>
              <h1 className="title">{userData?.restaurantName}</h1> 
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
      {inventory.map((item, index) => (
        <div
          key={index}
          className="spefic"
          style={focusedIndex === index ? focusStyle : defaultStyle}
        >
          <FoodCard key={item.id} name={item.name} quantity={item.quantity} />
        </div>
      ))}
      </section>
    </div>
  );
};

export default Home;
