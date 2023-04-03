import React from 'react'
import "./Donate.css";
import MapComponent from "./Map.js"
import shelterItem from "./shelterListItem.js";
const Donations = () => {



    
  return (
    <div>
      <h1 class="title">
            Donations
      </h1>
      <div className="leftColumn">
        <div className="DonTitle">
            Communities in Need
        </div> 
        <div className="underline">
        </div>
        <div className="listed">
          <shelterItem></shelterItem>
        </div>
          
        </div>
      <div className="mapzone">
        <MapComponent></MapComponent>
      </div>
   
     
      

    </div>
  )
}

export default Donations
