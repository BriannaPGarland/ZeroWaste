import React, { useContext,useEffect } from "react";
import { AuthorizeContext } from "../../Authorization/Authorize";
import { auth } from "../../Authorization/FirebaseConfig";
import Landing from "../LandingPage/LandingPage";
import './SettPage.css'


const SettingPage = () => {

  const { user } = useContext(AuthorizeContext);


  useEffect(() => {
    // alert(localStorage.getItem("user"));
    auth.onAuthStateChanged((user) => {
     
      if (user) {
        // User is signed in.
       // alert('User is signed in:'+ user)
        console.log('User is signed in:', user);
      //   const user = jwt(); // decode your token here
       localStorage.setItem('user', user.uid);
      } else {
        // No user is signed in.
        //alert('No user is signed in.')
        console.log('No user is signed in.');
       // window.location.href = '/login';
      }
    });
  }, []);

  if (!user) {
    return <Landing />;
  }

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
