import React, { useContext } from "react";
import "./Home.css";
import searchIcon from "./search.PNG";
import FoodCard from "./FoodCard.jsx";
import { Link } from "react-router-dom";
import RotObj from "./RotateObject.jsx";
import { AuthorizeContext } from "../../Authorization/Authorize";

const Home = () => {
  const { user } = useContext(AuthorizeContext);

  const handleClickScroll = () => {
    const element = document.getElementById("inv");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <section class="section">
        <div class="box-main">
          <div class="firstHalf">
			Restaurent Name To Be here
            <h1 class="title">{user.email}</h1>
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
      <section class="section">
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
      <section class="inventoryDisp">
        <FoodCard></FoodCard>
        <FoodCard></FoodCard>
        <FoodCard></FoodCard>
        <FoodCard></FoodCard>
        <FoodCard></FoodCard>
      </section>
      <section class="inventoryDisp">
        <FoodCard></FoodCard>
        <FoodCard></FoodCard>
        <FoodCard></FoodCard>
        <FoodCard></FoodCard>
        <FoodCard></FoodCard>
      </section>
      <section class="inventoryDisp">
        <FoodCard></FoodCard>
        <FoodCard></FoodCard>
        <FoodCard></FoodCard>
        <FoodCard></FoodCard>
        <FoodCard></FoodCard>
      </section>
      <footer className="footer">
        <p className="text-footer">
          Contact information and other footer stuff
        </p>
      </footer>
    </div>
  );
};

export default Home;
