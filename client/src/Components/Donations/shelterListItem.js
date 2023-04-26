import "./Donate.css";

import React, { Component } from "react";

import Modal from "react-modal";

export default function shelterListItem(props) {
  const { name, numberTimesDonated } = props;

  const text="";

  const handleDonateClick = () =>{ 

      document.getElementById('donBut').innerHTML = "Email Sent!";
    
  };

  return (
    <div className="donatePage">
      <div className="leftItem">
        <div className="CommunityTitle">{name}</div>

        <div className="donateStat">
          You have donated here {numberTimesDonated} times
        </div>
      </div>

      <button  className="rightItem"onClick={handleDonateClick}>DONATE</button>
      <div className="notif" id='donBut'> </div>
    </div>
  );
}
