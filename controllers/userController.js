const User = require('../models/user.model');

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch(err) {
    res.status(500).send(err.message);
  }
};

// Create new user
exports.createUser = async (req, res) => {
  try {
    const user = new User({ 
      name: req.body.name,
      email: req.body.email,
      age: req.body.age
    });
    
    // Schema validation automatically happens here
    await user.save();
    
    res.status(201).json({
      message: "User created successfully!",
      user: user
    });
  } catch(err) {
    // Different error types
    if (err.name === 'ValidationError') {
      return res.status(400).json({
        error: 'Validation Error',
        details: err.message
      });
    }
    res.status(500).json({
      error: 'Server Error',
      details: err.message
    });
  }
};