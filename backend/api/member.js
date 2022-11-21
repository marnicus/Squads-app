const express = require("express");
const Member = require("../config/models/Member");
const router = express.Router();

router.get("/test", (req, res) => res.send("Member route testing!"));

router.get("/allMembers", (req, res) => {
  // find all members
  Member.find()
    .select("-password")
    .then((members) => res.json(members))
    .catch((err) =>
      res.status(400).json({ error: 'No members found', members: [] })
    );
});

module.exports = router;
