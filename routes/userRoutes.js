const express = require("express");
const router = express.Router();
const User = require("../data/users");

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const user = new User({
      //username: req.body.username,
      email: req.body.email,
      uid: req.body.uid,
    });
    console.log(req)
    await user.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Error creating user" });
  }
});

module.exports = router;
