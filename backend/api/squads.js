const { Router } = require("express");
const express = require("express");
const Member = require("../config/models/Member");
const Squad = require("../config/models/Squads");
const ObjectId = require('mongodb').ObjectId;
const router = express.Router();

router.get("/test", (req, res) => res.send("Squads route testing!"));

router.get("/:memberId", (req, res) => {
  const { memberId } = req.params;
  Squad.find({ "members._id": memberId })
    .then((squads) => res.json(squads))
    .catch((err) => res.status(404).json({ error: "No Squads found" }));
});

router.post("/", (req, res) => {
  const { name, members } = req.body;
  console.log("Looking for squads " + name);
  Squad.find({ name: name }).then(async (squad) => {
    console.log(`Check out the squad is alive ${squad}`);
    if (!Array.isArray(squad) || !squad.length) {
      // array does not exist, is not an array, or is empty
      // ⇒ do not attempt to process array

      const getObjectIds = members.map((member) => ObjectId(member));
      console.log(`Looking for members by objectId ${JSON.stringify(getObjectIds)}`);
      const getMemberData = await Member.find({ _id: { $in: getObjectIds } });
      console.log('Looking for members')
      console.log(getMemberData);
      const newSquad = {
        name,
        members: getMemberData
      }
      Squad.create(newSquad)
        .then((squad) => res.json({ msg: "Squad successfully created", squad }))
        .catch((err) =>
          res.status(400).json({ error: "Unable to create squad" })
        );
    }





  });
});

module.exports = router;
