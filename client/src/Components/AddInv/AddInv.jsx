import React, { useState, useEffect, useContext } from "react";
import "./AddInv.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthorizeContext } from "../../Authorization/Authorize";
import { auth } from "../../Authorization/FirebaseConfig";
import Landing from "../LandingPage/LandingPage";
import { BASE_URL } from "../../serverController";

const AddInv = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [date, setDate] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const { user } = useContext(AuthorizeContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const token = await auth.currentUser.getIdToken();
      const response = await axios.post(
        `${BASE_URL}/inventory`,
        {
          name,
          quantity,
          date,
          uid: auth.currentUser.uid,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setName("");
      setQuantity("");
      setDate("");
      setAlertMessage("Item saved successfully!");
      console.log("Item saved successfully!", response.data);
    } catch (error) {
      console.error("Error saving item:", error);
      setAlertMessage("Error saving item");
    }
  };

  return (
    <div className="addInvPage">
      <div className="title">Add Inventory Item</div>

      {alertMessage && <div className="alert">{alertMessage}</div>}

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
        <input
          type="date"
          className="invInput"
          placeholder="Date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />

        <button type="submit" className="saveInvButt">
          Save Item
        </button>
        <Link className="cancelInvButt" to="/">
          Cancel
        </Link>
      </form>
    </div>
  );
};

export default AddInv;
