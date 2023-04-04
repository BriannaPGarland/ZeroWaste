import React from 'react'
import "./Donate.css";
import MapComponent from "./Map.js"
import shelterItem from "./shelterListItem.js";
import testDonateData from './testDonateData';
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
          {testDonateData.map(shelter => (
                <shelterItem
                  key={shelter.name}
                  name={shelter.name}
                  numberTimesDonated={shelter.numberTimesDonated}

                />
              ))}
        </div>
        <div className="listed">
          {testDonateData.map(shelter => (
                <shelterItem
                  key={shelter.name}
                  name={shelter.name}
                  numberTimesDonated={shelter.numberTimesDonated}

                />
              ))}
        </div>
          
        </div>
      <div className="mapzone">
        <MapComponent></MapComponent>
      </div>
   
     
      

    </div>
  )
}

export default Donations
