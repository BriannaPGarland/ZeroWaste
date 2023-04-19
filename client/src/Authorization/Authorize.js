import { auth } from "./FirebaseConfig";
import React, { useState, useEffect } from "react";
import axios from "axios";

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

      if (user) {
        axios
          .get(`http://localhost:3001/user/${user.uid}`)
          .then((response) => {
            if (!response.data) {
              axios
                .post("http://localhost:3001/user", {
                  //username: user.displayName,
                  email: user.email,
                  uid: user.uid,
                })
                .then((response) => {
                  console.log("User data saved to MongoDB:", response.data);
                })
                .catch((error) => {
                  console.error("Error saving user data to MongoDB:", error);
                });
            } else {
              console.log("User already exists in MongoDB");
            }
          })
          .catch((error) => {
            console.error("Error checking user data in MongoDB:", error);
          });
      }
    });
  }, []);

  return (
    <AuthorizeContext.Provider value={{ user, setUser }}>
      {props.children}
    </AuthorizeContext.Provider>
  );
};

export { AuthorizeContext, AuthorizeProvider };
