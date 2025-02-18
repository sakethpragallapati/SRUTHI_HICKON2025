const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Ensure your User model is correct

// Register route
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  const newUser = new User({ name, email, password });
  await newUser.save();
  res.json({ message: "Account created successfully!" });
});

// Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user || user.password !== password) {
    return res.status(400).json({ message: "Invalid email or password" });
  }

  res.json({ message: "Login successful!" });
});

module.exports = router;
