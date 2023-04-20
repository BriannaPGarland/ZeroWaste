const express = require("express");
const router = express.Router();
const Inventory = require("../data/inventory");

router.get("/", async (req, res) => {
  try {
    const uid = req.query.uid;
    const inventory = await Inventory.find({});
    res.json(inventory);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:uid", async (req, res) => {
  try {
    const uid = req.params.uid;
    const inventory = await Inventory.find({ uid });
    res.json(inventory);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  const inventory = new Inventory({
    name: req.body.name,
    quantity: req.body.quantity,
    uid: req.body.uid,
  });

  try {
    const newInventory = await inventory.save();
    res.status(201).json(newInventory);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: err.message });
  }
});

router.get("/:id", getInventory, (req, res) => {
  res.json(res.inventory);
});

router.delete("/:id", async (req, res) => {
  try {
    const inventory = await Inventory.deleteOne({ _id: req.params.id });
    res.status(200).json(inventory);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

async function getInventory(req, res, next) {
  let inventory;
  try {
    inventory = await Inventory.findById(req.params.id);
    if (inventory === null) {
      return res.status(404).json({ message: "Inventory item not found" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.inventory = inventory;
  next();
}

module.exports = router;
