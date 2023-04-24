import React, { useContext,useEffect } from "react";
import "./Donate.css";
import MapComponent from "./Map.js"
import ShelterListItem from "./shelterListItem.js";
import FoodDonate from "./FoodDonate.js";
import testDonateData from './testDonateData';
import { AuthorizeContext } from "../../Authorization/Authorize";
import { auth } from "../../Authorization/FirebaseConfig";
import Landing from "../LandingPage/LandingPage";


const Donations = () => {

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
    <div className="DonPage">
      <h1 class="title">
            Donations
      </h1>
      <div className="topSection">
        <div className="leftColumn">
          <div className="DonTitle">
              Communities in Need
          </div> 
          <div className="underline">
          </div>
          <div className="listed">
            {testDonateData.map(shelter => (
                  <ShelterListItem
                    key={shelter.name}
                    name={shelter.name}
                    numberTimesDonated={shelter.numberTimesDonated}

                  />
                ))}
        </div>
        <div className="rightFood">
          <div className="DonTitle">
              Food To Expire
          </div> 
          <div className="underline">
          </div>
            <FoodDonate className="toBeDonate"
                name={"Flour"}
                amount={"10"}
                units={"lbs"}>
            </FoodDonate>
            <FoodDonate className="toBeDonate"
                name={"Sugar"}
                amount={"2"}
                units={"lbs"}>
            </FoodDonate>
            <FoodDonate className="toBeDonate"
                name={"Baking Soda"}
                amount={"1"}
                units={"lbs"}>
            </FoodDonate>
        </div>
    </div>  
  </div>
      <div className="mapzone">
        <MapComponent></MapComponent>
      </div>
      <div className="filler"></div>
    </div>
  )
}

export default Donations
