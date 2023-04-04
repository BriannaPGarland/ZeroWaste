require("dotenv").config();
const express = require("express");
const routes = require("./routes/routes");
const app = express();
app.use(express.json());
var cors = require("cors");
app.use(cors());

const mongoose = require("mongoose");
const database = mongoose.connection;
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));

app.use("/", routes);

app.listen(3001, () => {
  console.log(`Server is listening on http://localhost:${3001}`);
});
