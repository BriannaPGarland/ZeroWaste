require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const mongoString = process.env.MONGO_URI;
const routes = require("./routes/routes");
const app = express();
mongoose.connect(mongoString);
const database = mongoose.connection;
app.use(express.json());
var cors = require("cors");
app.use(cors());

app.use("/", routes);

app.listen(3001, () => {
  console.log(`Server Started at http://localhost:${3001}`);
});

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

app.use(express.json());
