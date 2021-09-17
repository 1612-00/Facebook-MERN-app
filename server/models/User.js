const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      min: 3,
      max: 20,
      required: true,
    },
    email: {
      type: String,
      max: 50,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      min: 8,
      required: true,
    },
    profilePicture: {
      type: String,
      default: "",
    },
    coverPicture: {
      type: String,
      default: "",
    },
    followers: {
      type: Array,
      default: [],
    },
    followings: {
      type: Array,
      default: [],
    },
    desc: {
      type: String,
      max: 50,
      default: "",
    },
    lives: {
      type: String,
      max: 50,
      default: "",
    },
    from: {
      type: String,
      max: 50,
      default: "",
    },
    relationship: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
