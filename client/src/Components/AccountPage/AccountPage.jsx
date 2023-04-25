import React, { useContext,useEffect } from "react";
import "./AccountPage.css";
import { AuthorizeContext } from "../../Authorization/Authorize";
import { auth } from "../../Authorization/FirebaseConfig";
import Landing from "../LandingPage/LandingPage";
import { useNavigate } from "react-router-dom";


const AccountPage = () => {

  
  const { user } = useContext(AuthorizeContext);
const navigate =  useNavigate();
useEffect(()=>{
  if (!user) {

    navigate("/")

  }


}, [])
  const nameAcc="Brianna Garland"
  const emailAcc="bgarland@stevens.edu"
  const numAcc="908-343-4281"
  const locAcc="Hoboken,NJ"
  const resAcc="Applebees"
  const numDonAcc="180"
  return (
    <div className="accountPage">
      <h1 class="title">Account</h1>
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
        <input className="accIN" value={nameAcc} ></input>
        <input className="accIN" type="email" value={emailAcc}></input>
        <input className="accIN" type="tel" value={numAcc}></input>
        <input className="accIN" value={locAcc}></input>
        <input className="accIN" value={resAcc}></input>
        <input className="accIN" type ="number" value ={numDonAcc}></input>
       </div>
      </div>
    </div>
  );
};

export default AccountPage;
