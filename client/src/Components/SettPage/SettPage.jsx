import React from "react";
import './SettPage.css'
const SettingPage = () => {
  return (
    <div className="SettingsPage">
      <h1 class="title">Settings</h1>
      <div className="SetContent">
        Notifications
        <div className="notifications">
          <div className="leftNot">
            <div className="item">Email Notifications:</div>
            <div className="item">Phone Notifications:</div>
          </div>
          <div className="rightNot">
            <label class="switch">
              <input type="checkbox"></input>
              <span class="slider round"></span>
            </label>
           
            <label class="switch">
              <input type="checkbox"></input>
              <span class="slider round"></span>
            </label>
          </div>
        </div>
        
      </div>
      <div className="SetContent">
        Inventory
        <div className="notifications">
          <div className="leftNot">
            <div className="item">Update inventory # times a day:</div>
            <div className="item">Days to be notified prior 2 expiration:</div>
          </div>
          <div className="rightNot">
              <input type="number"className="settIn"value="1"></input>
              <input type="number"className="settIn"value="2"></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingPage;
