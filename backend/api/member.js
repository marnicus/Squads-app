const express = require("express");
const Member = require("../config/models/Member");
const router = express.Router();

router.get("/test", (req, res) => res.send("Member route testing!"));

router.get("/allMembers", (res, req) => {
  // find all members
  Member.find()
    .select("-password")
    .then((members) => res.json(members))
    .catch((err) =>
      res.status(404).json({ error: "No Members found" })
    );
});

module.exports = router;
