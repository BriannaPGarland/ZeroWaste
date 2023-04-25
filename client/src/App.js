import React, { useState, useEffect } from "react";
import "./App.css";
import {
  Navbar,
  Analytics,
  Donations,
  Home,
  Login,
  Recipies,
  Signup,
  AddInv,
  Landing,
} from "./Components";
import { Routes, Route, useNavigate } from "react-router-dom";
import { AuthorizeProvider } from "./Authorization/Authorize";
import SettingPage from "./Components/SettPage/SettPage";
import AccountPage from "./Components/AccountPage/AccountPage";
import AddRecipe from "./Components/Recipies/AddRecipe";

import axios from "axios";
import { auth } from "./Authorization/FirebaseConfig";

const App = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const [loginToken, setLoginToken] = useState(null);

  const getToken = () => {
    const tokenString = localStorage.getItem("user");
    if (tokenString !== undefined && tokenString != null) {
      const userToken = JSON.parse(tokenString);
      return userToken;
    } else {
      return null;
    }
    // const userToken = JSON.parse(tokenString);
    // return userToken;
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/");
      }
    });

    var loginResult = getToken();
    if (loginResult != null) {
      setLoginToken(loginResult);
    } else {
      //TODO : clear existing stuff from browser storage
    }
  }, []);

  // if (!loginToken) {
  //   return (
  //     <div>

  //       <Landing />
  //     </div>
  //   );
  // }

  const checkToken = () => {
    if (!getToken()) {
      setLoginToken(null);
    }
  };

  return (
    <AuthorizeProvider>
      <div className="app">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main">
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/AddInv" element={<AddInv />}></Route>
              <Route exact path="/Analytics" element={<Analytics />}></Route>
              <Route exact path="/Donations" element={<Donations />}></Route>
              <Route exact path="/Login" element={<Login />}></Route>
              <Route exact path="/Recipies" element={<Recipies />}></Route>
              <Route exact path="/Signup" element={<Signup />}></Route>
              {/* <Route exact path="/" element={<Landing />}></Route> */}
              <Route exact path="/Settings" element={<SettingPage />}></Route>
              <Route exact path="/Account" element={<AccountPage />}></Route>
              <Route exact path="/AddRecipe" element={<AddRecipe />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </AuthorizeProvider>
  );
};

export default App;
