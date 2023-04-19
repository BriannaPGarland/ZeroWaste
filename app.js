require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const mongoString = process.env.MONGO_URI;
const routes = require("./routes/index");
const app = express();

mongoose.connect(mongoString);
const database = mongoose.connection;

app.use(express.json());
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));

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
