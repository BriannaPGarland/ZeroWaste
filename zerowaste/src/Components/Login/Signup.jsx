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
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all required fields are filled out
    const { name, email, password, accountType } = e.target.elements;
    if (!name.value || !email.value || !password.value || !accountType.value) {
      alert("Please fill out all required fields.");
      return;
    }

    try {
      const userObject = await createUserWithEmailAndPassword(
        auth,
        email.value,
        password.value
      );
      console.log(userObject);
      window.localStorage.setItem("user", JSON.stringify(userObject.user));
      SetAccCreationMessage("Account created successfully");
      setTimeout(() => {
        navigate("/Login");
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
        <form className="loginbox" onSubmit={handleSubmit}>
          <input
            className="lgInput"
            type="text"
            placeholder="First & Last Name"
            id="name"
            name="name"
            //value={"test1 value"}
          />
          <input
            className="lgInput"
            type="text"
            placeholder="email"
            id="email"
            name="email"
            //value={""}
          />
          <input
            className="lgInput"
            type="password"
            placeholder="password"
            id="password"
            name="password"
            //value=""
          />

          <div className="dropdown">
            <select className="dropdown" id="accountType" name="accountType">
              <option value="">Select Account Type</option>
              <option value="restaurant">Restaurant</option>
              <option value="communityOfNeed">Community Of Need</option>
            </select>
          </div>

          <input
            className="lgInput"
            type="text"
            placeholder="Restaurant Name"
            id="restaurantName"
            name="restaurantName"
            //value={"Artichoke"}
          />

          <button className="login-btn" type="submit">
            Create account
          </button>
        </form>

        <div className="alt-login">
          <div className="facebook"></div>
          <div className="google"></div>
        </div>

        <span>{accCreationMessage}</span>
      </div>
    </div>
  );
};

export default Signup;
