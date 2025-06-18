// MongoDB connection (using mongoose)
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydb', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
});
console.log("Database connected!");