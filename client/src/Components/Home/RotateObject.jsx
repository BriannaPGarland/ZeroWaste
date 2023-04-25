import React, { useState, useEffect } from "react";
import "./Home.css";
import arrow from "./Arrow.png";
import FoodCard from "./FoodCard.jsx";
import { auth } from "../../Authorization/FirebaseConfig";

const RotObj = () => {
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
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
  }, []);

  const handleArrowClick = (increment) => {
    setFocusedIndex((prevIndex) => {
      let newIndex = prevIndex + increment;
      if (newIndex < 0) {
        newIndex = inventory.length - 1;
      } else if (newIndex >= inventory.length) {
        newIndex = 0;
      }
      return newIndex;
    });
  };

  const focusStyle = {
    transform: "scale(1.1)",
    transition: "all 0.5s ease-in-out",
  };
  const defaultStyle = {
    transform: "scale(1)",
    transition: "all 0.5s ease-in-out",
  };

  return (
    <div className="rotateObj">
      <img
        className="leftArrow"
        src={arrow}
        alt=""
        onClick={() => handleArrowClick(-1)}
      ></img>




      {inventory.map((item, index) => (
        <div
          key={index}
          className="spefic"
          style={focusedIndex === index ? focusStyle : defaultStyle}
        >
          <FoodCard key={item.id} name={item.name} quantity={item.quantity} />
        </div>
      ))}



        
      <img
        className="rightArrow"
        src={arrow}
        alt=""
        onClick={() => handleArrowClick(1)}
      ></img>
    </div>
  );
};

export default RotObj;
