const express = require("express");
const router = express.Router();
const Model = require("../data/model");

router.post("/post", async (req, res) => {
  const data = new Model({
    recipe: req.body.recipe,
    ingridients: req.body.ingridients,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/getAll", async (req, res) => {
  try {
    const allData = await Model.find();
    res.status(200).json(allData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/getOne/:id", async (req, res) => {
  try {
    const data = await Model.findById(req.params.id);
    if (!data) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.patch("/update/:id", (req, res) => {
  res.send("Update recepie by ID");
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const deletedData = await Model.findByIdAndDelete(req.params.id);
    if (!deletedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json({ message: "Data deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
