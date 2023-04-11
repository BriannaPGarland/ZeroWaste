import "./Donate.css";

import React, { Component } from "react";

export default function shelterListItem(props) {
  const { name, numberTimesDonated } = props;

  return (
    <div className="donatePage">
      <div className="leftItem">
        <div className="CommunityTitle">{name}</div>

        <div className="donateStat">
          You have donated here {numberTimesDonated} times
        </div>
      </div>

      <button className="rightItem">DONATE</button>
    </div>
  );
}
