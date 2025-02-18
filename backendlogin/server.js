const express = require('express');
const connectDB = require('./db');
const authRoutes = require('./routes/auth');
require('dotenv').config(); // To load the environment variables

const app = express();

// Connect to database
connectDB();

// Middleware to parse JSON requests
app.use(express.json());

// Use routes for auth
app.use('/api/auth', authRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Server is up and running');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
