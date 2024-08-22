const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  city: String
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
