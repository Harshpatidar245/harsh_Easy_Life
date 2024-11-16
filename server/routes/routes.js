const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user"); // Correctly import your user model
const router = express.Router();

// Register Route
router.post("/register", async (req, res) => {
  try {
    const { name, email, phone, password, service } = req.body;

    // Check if user already exists by email
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new User({
      name,
      email,
      phone,
      password: hashedPassword,
      service,
    });

    // Save the user to the database
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error during registration:", error); // Log the error details to the console
    res.status(500).json({ error: "Registration failed. Please try again later." });
  }
});

// Login Route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    // Verify password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, "SECRET_KEY", {
      expiresIn: "1d",
    });

    res.json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint to fetch user details
router.get("/getUserData", async (req, res) => {
  try {
    // Assuming you use JWT for authentication
    const token = req.header("Authorization");
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const decoded = jwt.verify(token, "SECRET_KEY"); // Verify JWT token
    const userId = decoded.userId;

    // Fetch user details from the database, including only required fields
    const user = await User.findById(userId).select('name email phone service'); // Select specific fields

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Send the selected user data as a response
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
