const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  passwordHash: { type: String },
  photoURL: { type: String },
  bio: { type: String },
  coverPhotoURL: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", UserSchema);
