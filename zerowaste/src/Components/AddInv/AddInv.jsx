import React from 'react'
import './AddInv.css';
import { Link } from 'react-router-dom';
import testData from '../Home/testData';


// const addInvFunc = () => {
//   var fs = require("fs");
//   var text = fs.readFileSync("./testData.js");
//   var textByLine = text.split("\n")
//   console.log(textByLine)
// };



const AddInv = () => {
  return (
    <div className="addInvPage">
			<div className="title">
        Add Inventory Item
      </div>
			
      <input type="text" className="invInput" placeholder="Name of Item"></input>
      <input type="text" className="invInput" placeholder="Units"></input>
      <input type="text" className="invInput" placeholder="Number of Units"></input>

      <Link className="saveInvButt" to="/Home"  >
          			Save Item
      </Link>
    </div>
  )
}

export default AddInv
