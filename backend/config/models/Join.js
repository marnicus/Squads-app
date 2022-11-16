const mongoose = require("mongoose");

const JoinSchema = mongoose.Schema({
  id: {
    type: String,
    require: true,
  },
  fullName: {
    type: String,
    require: true,
  },
  profilePic: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

module.exports = Join = mongoose.model("join", JoinSchema);
