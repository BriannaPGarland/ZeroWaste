import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
//import { useHistory } from 'react-router-dom';
import "./Navbar.css";
import profIcon from "./Icon.png";
import { AuthorizeContext } from "../../Authorization/Authorize";
import { auth } from "../../Authorization/FirebaseConfig";

const Navbar = () => {
  const { setUser } = useContext(AuthorizeContext);
  const { user } = useContext(AuthorizeContext);

  // useEffect(() => {
  //   //alert(localStorage.getItem(user));
  //   auth.onAuthStateChanged((user) => {

  //     if (user) {
  //       // User is signed in.
  //       console.log('User is signed in:', user);
  //     } else {
  //       // No user is signed in.
  //       console.log('No user is signed in.');
  //       window.location.href = '/login';
  //     }
  //   });
  // }, []);

  const SignOutButton = () => {
    auth
      .signOut()
      .then(() => {
        // Sign-out successful.
        localStorage.setItem("user", null);
        console.log("User signed out successfully.");
        window.location.href = "/";
      })
      .catch((error) => {
        // window.location.href = '/';
        // An error happened.
        console.log("Error signing out:", error);
      });

    // alert(window.localStorage.getItem('loginKey'));
    // setUser(null)
    //   window.localStorage.removeItem('loginKey');
    //   if(window.localStorage.getItem('loginKey')== null || window.localStorage.getItem('loginKey')==""){
    //     window.location.href = '/';}
    // window.location.href = '/';
    // Navigate("/")
  };

  return (
    <div>
      <nav class="navbar background">
        <div class="logo">
          <Link to="/">
            <img src="zWlogo.png" alt="" />
          </Link>
        </div>

        <ul class="nav-list">
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Donations">Donations</Link>
          </li>
          <li>
            <Link to="/Recipies">Recipies</Link>
          </li>
          <li>
            <Link to="/Analytics">Analytics</Link>
          </li>
        </ul>
        <div class="dropdown">
          <button class="dropbtnNav">
            <image className="profIcon" src={profIcon}></image>
          </button>
          <div class="dropdown-content">
            <a>
              {" "}
              <Link to="/Account">Account</Link>
            </a>
            <a>
              {" "}
              <Link to="/Settings">Settings</Link>
            </a>
            <button onClick={SignOutButton}> Sign Out</button>
            {/* <a onClick={SignOutButton}> Sign Out</a> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
