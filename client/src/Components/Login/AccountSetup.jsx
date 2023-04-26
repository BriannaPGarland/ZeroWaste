import React, { useState, useEffect, useContext } from "react";
import {
  Link,
  useLocation,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import { AuthorizeContext } from "../../Authorization/Authorize";
import Modal from "react-modal";
import axios from "axios";
import Home from "../Home/Home";

const AccountSetup = () => {
  const { user } = useContext(AuthorizeContext);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all required fields are filled out
    const { name, email, phone, accountType, restaurantName, address } =
      e.target.elements;
    if (
      !name.value ||
      !email.value ||
      !accountType.value ||
      !phone.value ||
      !restaurantName.value ||
      !address.value
    ) {
      setErrorMessage("Please fill out all required fields.");
      return;
    }

    // Create a data object with the form values and user ID
    const data = {
      name: name.value,
      email: email.value,
      accountType: accountType.value,
      restaurantName: restaurantName.value,
      uid: user.uid,
      phone: phone.value,
      address: address.value,
    };

    // Make a POST request to your backend API to save the data to MongoDB
    try {
      const response = await axios.post(
        "http://localhost:3001/user/addUserToDb",
        data
      );
      console.log(response.data);
      // Navigate to the next page after successful POST request
      navigate("/Home");
    } catch (error) {
      console.error(error);
      setErrorMessage("Failed to save data.");
    }
  };

  return (
    <div className="loginpage">
      <div className="signcover">
        <h1 className="title">Account Setup</h1>

        <form className="loginbox" onSubmit={handleSubmit}>
          <input
            className="lgInput"
            type="text"
            placeholder="First & Last Name"
            id="name"
            name="name"
          />
          <input
            className="lgInput"
            type="text"
            placeholder="email"
            id="email"
            name="email"
            defaultValue={user.email}
          />
          <input
            className="lgInput"
            type="number"
            placeholder="phone"
            id="phone"
            name="phone"
          />

          <div className="dropdownbox">
            <select className="dropdownsgn" id="accountType" name="accountType">
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
          />
          <input
            className="lgInput"
            type="text"
            placeholder="address"
            id="address"
            name="address"
          />

          <button className="login-btn" type="submit">
            Continue
          </button>
        </form>
        {errorMessage && <div>{errorMessage}</div>}
      </div>
    </div>
  );
};

export default AccountSetup;
