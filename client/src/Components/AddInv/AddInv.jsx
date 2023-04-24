import React, { useState, useEffect, useContext } from "react";
import "./AddInv.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { AuthorizeContext } from "../../Authorization/Authorize";
import { auth } from "../../Authorization/FirebaseConfig";
import Landing from "../LandingPage/LandingPage";

const AddInv = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

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


  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const token = await auth.currentUser.getIdToken(); 
      const response = await axios.post(
        "http://localhost:3001/inventory",
        {
          name,
          quantity,
          uid: auth.currentUser.uid,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        }
      );
      console.log("Item saved successfully!", response.data);
    } catch (error) {
      console.error("Error saving item:", error);
    }
  };

  return (
    <div className="addInvPage">
      <div className="title">Add Inventory Item</div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="invInput"
          placeholder="Name of Item"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="number"
          className="invInput"
          placeholder="Quantity"
          value={quantity}
          onChange={(event) => setQuantity(event.target.value)}
        />

        <button type="submit" className="saveInvButt">
          Save Item
        </button>
        <Link className="cancelInvButt" to="/Home">
          Cancel
        </Link>
      </form>
    </div>
  );
};

export default AddInv;
