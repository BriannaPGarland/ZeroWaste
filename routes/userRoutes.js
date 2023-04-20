const express = require("express");
const router = express.Router();
const User = require("../data/users");
const mongoose = require("mongoose");

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/:uid", async (req, res) => {
  try {
    const user = await User.findOne({ uid: req.params.uid });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { uid } = req.body;

    const existingUser = await User.findOne({ uid });

    if (existingUser) {
      console.log("User already exists with UID:", uid);
      return res.status(409).json({ message: "User already exists" });
    }

    const user = new User({
      email: req.body.email,
      uid,
    });

    await user.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating user" });
  }
});

module.exports = router;
