const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const userRoutes = require("./routes/routes"); // Correctly import your routes

const app = express();

// Enable CORS for all routes
app.use(cors({
  origin: "http://localhost:3000", // Allow requests from your frontend (port 3000)
}));

// Middleware to parse JSON requests
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/Easy_Life", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch((error) => console.error("MongoDB connection error:", error));

// Define API routes
app.use("/api", userRoutes); // Use the routes defined in your routes.js

// Start the server on port 5000
app.listen(5000, () => console.log("Server running on port 5000"));
