import React, { useContext, useEffect, useState } from "react";
import "./AccountPage.css";
import { AuthorizeContext } from "../../Authorization/Authorize";
import { auth } from "../../Authorization/FirebaseConfig";
import Landing from "../LandingPage/LandingPage";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../serverController";

const AccountPage = () => {
  const [userData, setUserData] = useState(null);

  const { user } = useContext(AuthorizeContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    if (user != null) {
      var uid = user.uid;
      console.log(uid);

      axios
        .get(`${BASE_URL}/user/${uid}`)
        .then((response) => {
          setUserData(response.data);
          console.log(userData);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, []);

  return (
    <div className="accountPage">
      <h1 className="title">Account</h1>
      <div className="Content">
        <div className="leftAcc">
          <div className="accItem">Name:</div>
          <div className="accItem">Email:</div>
          <div className="accItem">Phone Number:</div>
          <div className="accItem">Location:</div>
          <div className="accItem">Restaurant Name:</div>
          <div className="accItem">Number of Times Donated:</div>
        </div>
        <div className="rightAcc">
          <input className="accIN" value={userData?.name}></input>
          <input className="accIN" type="email" value={userData?.email}></input>
          <input className="accIN" type="tel" value={userData?.phone}></input>
          <input className="accIN" value={userData?.address}></input>
          <input className="accIN" value={userData?.restaurantName}></input>
          <input
            className="accIN"
            type="number"
            value={userData?.numDonations}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
