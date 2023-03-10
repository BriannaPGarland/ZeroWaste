import React, { useState } from "react";
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
  Landing
} from "./Components";
import { Routes, Route } from "react-router-dom";
import { AuthorizeProvider } from "./Authorization/Authorize";
import SettingPage from "./Components/SettPage/SettPage";
import AccountPage from "./Components/AccountPage/AccountPage";
import AddRecipe from "./Components/Recipies/AddRecipe";

const App = () => {

  return (
    <AuthorizeProvider>
      <div className="app">
        <div className="navbar">
          < Navbar />
        </div>
        <div className="main">
          <div className="routes">
            <Routes>
              <Route exact path="/Home" element={<Home />}></Route>
              <Route exact path="/AddInv" element={<AddInv />}></Route>
              <Route exact path="/Analytics" element={<Analytics />}></Route>
              <Route exact path="/Donations" element={<Donations />}></Route>
              <Route exact path="/Login" element={<Login />}></Route>
              <Route exact path="/Recipies" element={<Recipies />}></Route>
              <Route exact path="/Signup" element={<Signup />}></Route>
              <Route exact path="/" element={<Landing />}></Route>
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
