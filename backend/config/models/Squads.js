const mongoose = require("mongoose");

const SquadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  members: [{
    _id: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      required: true,
    },
  }],
});

module.exports = Squad = mongoose.model("squad", SquadSchema);
