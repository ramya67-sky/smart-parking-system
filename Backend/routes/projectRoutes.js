const express = require("express");
const router = express.Router();

// Step 4: Project Description Route
router.get("/project-description", (req, res) => {
  res.json({
    message: "This is a Smart Parking System backend. It includes user authentication, admin access, slot management, and MongoDB connection."
  });
});

// Step 5: Project Status Route
router.get("/project-status", (req, res) => {
  res.json({
    status: "Milestone 1 completed",
    completed: [
      "Express setup",
      "Routing",
      "Controllers",
      "MongoDB connection",
      "User Registration + Login",
      "Password Hashing",
      "JWT verification",
      "Role-based access"
    ]
  });
});

module.exports = router;