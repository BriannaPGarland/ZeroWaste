import React, { useState } from "react";
import "./AddInv.css";
import { Link } from "react-router-dom";
import axios from "axios";

const AddInv = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/inventory", {
        name,
        quantity,
      });
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
