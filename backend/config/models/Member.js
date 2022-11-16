const mongoose = require("mongoose");

const MemberSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePic: {
    type: String,
    required: true,
  },
});

module.exports = Member = mongoose.model("member", MemberSchema);
