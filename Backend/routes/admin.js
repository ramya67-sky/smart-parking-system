const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");

router.get("/dashboard", auth, (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Admins only" });
  }

  res.json({ message: "Welcome Admin Dashboard" });
});

module.exports = router;