const mongoose = require("mongoose");

const topScores = new mongoose.Schema({
  score: {
    type: Number,
    default: null,
  },
  title: {
    type: String,
    default: "",
  },
  img: {
    type: String,
    default: "",
  },
});

const UserSchema = new mongoose.Schema({
  spotify_id: {
    type: String,
    required: [true],
  },
  topScores: [topScores],
});

module.exports = mongoose.model("User", UserSchema);
