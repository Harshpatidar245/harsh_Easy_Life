const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  service: {
    type: String, // Can be 'customer' or 'service-provider'
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
