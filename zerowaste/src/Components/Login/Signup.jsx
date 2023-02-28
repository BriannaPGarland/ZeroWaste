import React, { useState } from "react";
import {
  Link,
  useLocation,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import { AuthorizeContext } from "../../Authorization/Authorize";
import { useContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Authorization/FirebaseConfig";
import Home from "../Home/Home";

const Signup = () => {
  const { user } = useContext(AuthorizeContext);
  const [accCreationMessage, SetAccCreationMessage] = useState("");
  const homePage = useNavigate();

  const handleSubmit = async (e) => {
    console.log(e);
    try {
      e.preventDefault();
      const { email, password } = e.target.elements;
      const userObject = await createUserWithEmailAndPassword(
        auth,
        email.value,
        password.value
      );
      console.log(userObject);
      window.localStorage.setItem("user", JSON.stringify(userObject.user));
      SetAccCreationMessage("Account created sucessfully");
      setTimeout(() => {
        homePage("/Home");
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="loginpage">
      <div className="cover">
        <h1 className="title">Create Account</h1>
        <h3>SIGN IN TO CONTINUE</h3>
        <form onSubmit={handleSubmit}>
          <input
            className="lgInput"
            type="text"
            placeholder="First & Last Name"
            id="First & Last Name"
          />
          <input
            className="lgInput"
            type="text"
            placeholder="email"
            id="email"
            name="email"
            value="siddhantkumar052@gmail.com"
          />
          <input
            className="lgInput"
            type="password"
            placeholder="password"
            id="password"
            name="password"
          />

          <div class="dropdown">
            <button class="dropdown">Select Account Type</button>
            <div class="dropdown-content">
              <a>Restaurant</a>
              <a>Community Of Need</a>
            </div>
          </div>

          <input
            className="lgInput"
            type="text"
            placeholder="Restaurant Name"
          />

          <button className="login-btn" to="/Home">
            Create account
          </button>
        </form>

        <div className="alt-login">
          <div className="facebook"></div>
          <div className="google"></div>
        </div>

        <Link to="/Signup">
          <div className="signup">Create a new account</div>
        </Link>
        <span>{accCreationMessage}</span>
      </div>
    </div>
  );
};

export default Signup;
