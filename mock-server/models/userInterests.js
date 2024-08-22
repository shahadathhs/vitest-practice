const mongoose = require("mongoose");

const userInterestsSchema = new mongoose.Schema({
  name: String,
  hobbies: [String],
  favorite_movie: String,
  favorite_book: String,
  favorite_music_genre: String
}, { collection: 'userInterests' });

const UserInterests = mongoose.model('UserInterests', userInterestsSchema);

module.exports = UserInterests;
