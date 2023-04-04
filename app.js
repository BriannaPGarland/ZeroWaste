require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const mongoString = "mongodb+srv://Admin:vXtZ9j7tYBhjYIhM@zerowaste.ylulala.mongodb.net/test?retryWrites=true&w=majority";
const routes = require("./routes/routes");
const app = express();
mongoose.connect(mongoString);
const database = mongoose.connection;
app.use(express.json());
var cors = require("cors");
app.use(cors());

app.use("/api", routes);

app.listen(3001, () => {
  console.log(`Server Started at ${3001}`);
});
// app.listen(3000, () => {
//   console.log(`Server UI at ${3000}`);
// });

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

app.use(express.json());
