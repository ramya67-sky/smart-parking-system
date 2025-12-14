require("dotenv").config();   // Load .env FIRST

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin");
const projectRoutes = require("./routes/projectRoutes");
//const companyRoutes = require("./routes/company");
//const slotRoutes = require("./routes/slotRoutes");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api", projectRoutes);
//app.use("/api/company", companyRoutes);
//app.use("/api/slots", slotRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Smart Parking Backend Running...");
});

// ⭐ Load ENV Variables
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

console.log("👉 USING MONGO URI:", process.env.MONGO_URI);

// ⭐ Connect to MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
    app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err);
  });