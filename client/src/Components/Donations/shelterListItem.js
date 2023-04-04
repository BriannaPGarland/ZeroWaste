import "./Donate.css";

import React, { Component } from "react";

export default function shelterListItem(props) {
  const { name, numberTimesDonated } = props;

  return (
   <div>
      <div className="CommunityTitle">
        {name}
      </div>

      <div className="donateStat"> 
        {numberTimesDonated}
      </div>
      <button>
        DONATE
      </button>
   </div>
  
  );
}