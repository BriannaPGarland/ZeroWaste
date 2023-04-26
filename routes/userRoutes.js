const express = require("express");
const router = express.Router();
const User = require("../data/users");
const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// router.get("/:id", async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     res.json(user);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// });

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

router.post("/addUserToDb", async (req, res) => {
  const { name, email, phone, accountType, restaurantName, uid, address } =
    req.body;

  try {
    const newUser = new User({
      name,
      email,
      phone,
      accountType,
      restaurantName,
      uid,
      address,
    });
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// DELETE user by UID
router.delete("/:uid", async (req, res) => {
  const uid = req.params.uid;

  try {
    // Delete user from MongoDB
    const user = await User.findOne({ uid: uid });
    if (user) {
      await User.deleteOne({ uid: uid });
      res.status(204).send({ message: "User deleted successfully" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
