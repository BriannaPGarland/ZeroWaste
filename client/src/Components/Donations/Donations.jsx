import React from 'react'
import "./Donate.css";
import MapComponent from "./Map.js"
import googleMapStyles from "./GoogleMapStyle.js"
const Donations = () => {



    
  return (
    <div>
      <h1 class="title">
            Donations
      </h1>
      <div className="mapzone">
        <MapComponent></MapComponent>
      </div>
   
     
      

    </div>
  )
}

export default Donations
