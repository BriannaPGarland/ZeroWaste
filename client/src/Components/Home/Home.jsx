import React, { useContext,useEffect } from "react";
import "./Home.css";
import searchIcon from "./search.PNG";
import FoodCard from "./FoodCard.jsx";
import { Link } from "react-router-dom";
import RotObj from "./RotateObject.jsx";
import { AuthorizeContext } from "../../Authorization/Authorize";
import { auth } from "../../Authorization/FirebaseConfig";
const Home = () => {
  const { user,setUser } = useContext(AuthorizeContext);


  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        console.log('User is signed in:', user);
      } else {
        // No user is signed in.
        console.log('No user is signed in.');
        window.location.href = '/login';
      }
    });
  }, []); // empty dependency array to run only once on mount

  const handleClickScroll = () => {
    const element = document.getElementById("inv");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const SignOutButton = () => {
    auth.signOut()
    .then(() => {
      // Sign-out successful.
      console.log('User signed out successfully.');
      window.location.href = '/';
      
    })
    .catch((error) => {
     // window.location.href = '/';
      // An error happened.
      console.log('Error signing out:', error);
    });

    // alert(window.localStorage.getItem('loginKey'));
    // setUser(null)
    //   window.localStorage.removeItem('loginKey');
    //   if(window.localStorage.getItem('loginKey')== null || window.localStorage.getItem('loginKey')==""){
    //     window.location.href = '/';}
    // window.location.href = '/';
    // Navigate("/")
  }

  return (
    <div>
      <button onClick={SignOutButton}>Logout</button>
      <section class="section">
        <div class="box-main">
          {/* <div class="firstHalf">
            <h1 class="title">{user.email}</h1>
          </div> */}
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
