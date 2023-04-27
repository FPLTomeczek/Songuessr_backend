const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  spotify_id: {
    type: String,
    required: [true],
  },
});

module.exports = mongoose.model("User", UserSchema);
