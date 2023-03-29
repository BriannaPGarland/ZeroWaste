import React, { useState } from "react";
import "./AddInv.css";
import { Link } from "react-router-dom";
import mongoose from "mongoose";

// Define a schema for the inventory items
const invSchema = new mongoose.Schema({
  name: String,
  units: String,
  numberOfUnits: Number,
});

const InvItem = mongoose.model("InvItem", invSchema);

const AddInv = () => {
  const [name, setName] = useState("");
  const [units, setUnits] = useState("");
  const [numberOfUnits, setNumberOfUnits] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newItem = new InvItem({
      name: name,
      units: units,
      numberOfUnits: numberOfUnits,
    });

    newItem
      .save()
      .then(() => {
        console.log("Item saved successfully!");
      })
      .catch((error) => {
        console.error("Error saving item:", error);
      });
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
          type="text"
          className="invInput"
          placeholder="Units"
          value={units}
          onChange={(event) => setUnits(event.target.value)}
        />
        <input
          type="text"
          className="invInput"
          placeholder="Number of Units"
          value={numberOfUnits}
          onChange={(event) => setNumberOfUnits(event.target.value)}
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
