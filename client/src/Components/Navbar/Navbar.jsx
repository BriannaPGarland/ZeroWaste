import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import profIcon from "./Icon.png";
import { auth } from "../../Authorization/FirebaseConfig";
import { AuthorizeContext } from "../../Authorization/Authorize";

const Navbar = () => {
  const { user } = useContext(AuthorizeContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
    }
  }, []);

  const SignOutButton = () => {
    auth
      .signOut()
      .then(() => {
        // Sign-out successful.
        localStorage.clear("user");
        console.log("User signed out successfully.");
        window.location.href = "/";
      })
      .catch((error) => {
        // window.location.href = '/';
        // An error happened.
        console.log("Error signing out:", error);
      });
  };

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
          {user != null ? (
            <li>
              <Link to="/">Home</Link>
            </li>
          ) : (
            <div />
          )}

          {user != null ? (
            <li>
              <Link to="/Donations">Donations</Link>
            </li>
          ) : (
            <div />
          )}

          {user != null ? (
            <li>
              <Link to="/Recipies">Recipies</Link>
            </li>
          ) : (
            <div />
          )}

          {/* <li>
            <Link to="/Recipies">Recipies</Link>
          </li> */}

          {user != null ? (
            <li>
              <Link to="/Analytics">Analytics</Link>
            </li>
          ) : (
            <div />
          )}
        </ul>

        {user != null ? (
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
        ) : (
          <div />
        )}
      </nav>
    </div>
  );
};

export default Navbar;
