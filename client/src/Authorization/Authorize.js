import { auth } from "./FirebaseConfig";
import React, { useState, useEffect } from "react";
import axios from "axios";

const AuthorizeContext = React.createContext();

const AuthorizeProvider = (props) => {
  const [user, setUser] = useState(null);
  const [isNewUser, setIsNewUser] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);

      // if (user && isNewUser) {
      //   axios
      //     .post("http://localhost:3001/user", {
      //       name: user.name,
      //       email: user.email,
      //       uid: user.uid,
      //       accountType: "",
      //       address: "",
      //       phone: "5516896845",
      //       restaurantName: "",
      //     })
      //     .then((response) => {
      //       console.log("User data saved to MongoDB:", response.data);
      //       setIsNewUser(false);
      //     })
      //     .catch((error) => {
      //       console.error("Error saving user data to MongoDB:", error);
      //     });
      // }
    });
  }, [isNewUser]);

  return (
    <AuthorizeContext.Provider value={{ user, setUser }}>
      {props.children}
    </AuthorizeContext.Provider>
  );
};

export { AuthorizeContext, AuthorizeProvider };
