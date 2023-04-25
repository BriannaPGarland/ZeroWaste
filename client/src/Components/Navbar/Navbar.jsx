import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import profIcon from "./Icon.png";
import { auth } from "../../Authorization/FirebaseConfig";

const Navbar = () => {
  // const { setUser } = useContext(AuthorizeContext);
  
  const SignOutButton = () => {
    auth.signOut()
    .then(() => {
      // Sign-out successful.
      localStorage.clear('user');
      console.log('User signed out successfully.');
      window.location.href = '/';
      
    })
    .catch((error) => {
     // window.location.href = '/';
      // An error happened.
      console.log('Error signing out:', error);
    });

  }
  
  // const SignOutButton = () => {
  //   // alert(window.localStorage.getItem('user'));
  //   window.localStorage.removeItem("user");
  //   setUser(null);
  //   if (
  //     window.localStorage.getItem("user") == null ||
  //     window.localStorage.getItem("user") === ""
  //   ) {
  //     window.location.href = "/";
  //   }
  // };

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
