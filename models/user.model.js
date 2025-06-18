const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // YAHI SCHEMA HAI
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  age: {
    type: Number,
    min: 18
  }
});

module.exports = mongoose.model('User', userSchema);