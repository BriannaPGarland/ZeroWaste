import React, { useContext,useEffect } from "react";
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
