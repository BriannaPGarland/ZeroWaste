import React, { useContext } from "react";
import "./Home.css";
import searchIcon from "./search.PNG";
import FoodCard from "./FoodCard.jsx";
import { Link } from "react-router-dom";
import RotObj from "./RotateObject.jsx";
import { AuthorizeContext } from "../../Authorization/Authorize";
import testData from "./testData";

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
            <h1 class="title">Applebees</h1>
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
      </div >

      



      <section class="inventoryDisp">
        {testData.map(ingredient => (
          <FoodCard
            key={ingredient.name}
            name={ingredient.name}
            exp ={ingredient.expiration}
            amount = {ingredient.amount}
            units = {ingredient.units}

          />
        ))}
      </section>
      
     
    </div>
  );
};

export default Home;
