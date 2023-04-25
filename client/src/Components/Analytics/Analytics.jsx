import React, { useContext,useEffect } from "react";
import { AuthorizeContext } from "../../Authorization/Authorize";
import { auth } from "../../Authorization/FirebaseConfig";
import Landing from "../LandingPage/LandingPage";

const Analytics = () => {

  const { user } = useContext(AuthorizeContext);




  if (!user) {
    return <Landing />;
  }


  return (
    <div>
      <h1 class="title">
					Analytics
			</h1>
    </div>
  )
}

export default Analytics
