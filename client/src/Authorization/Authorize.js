import { auth } from "./FirebaseConfig";
import React, { useState, useEffect } from "react";

const AuthorizeContext = React.createContext();

const AuthorizeProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log("onAuthStateChanged", user);
      setUser(user);
      let data3 = {
        userdata: user,
      };
      localStorage.setItem(
        process.env.REACT_APP_LOCALHOST_KEY,
        JSON.stringify(data3)
      );
    });
  }, []);

  return (
    <AuthorizeContext.Provider value={{ user,setUser }}>
      {props.children}
    </AuthorizeContext.Provider>
  );
};

export { AuthorizeContext, AuthorizeProvider };
