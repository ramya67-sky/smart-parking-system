const express = require("express");
const router = express.Router();
const Slot = require("../models/slotModel");
 
// CREATE a parking slot (Thunder Client)
router.post("/create", async (req, res) => {
  try {
    const slot = new Slot(req.body);
    await slot.save();
    res.status(201).json({ message: "Slot created", slot });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET all parking slots
router.get("/all", async (req, res) => {
    try {
        const slots = await Slot.find();
        res.json({ slots });
    } catch (err) {
        res.status(500).json({ message: "Error fetching slots" });
    }
});
 
module.exports = router;