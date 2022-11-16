const mongoose = require("mongoose");
const Member = require("./Member");

const SquadSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  members: [Member],
});

module.exports = Squad = mongoose.model("squad", SquadSchema);
