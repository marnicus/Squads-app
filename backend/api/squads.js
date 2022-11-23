const { Router } = require("express");
const express = require("express");
const Chat = require("../config/models/Chat");
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
      const getMemberData = await Member.find({ _id: { $in: getObjectIds } });
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

router.get('/squadmessages/:squadId', (req, res) => {
  const { squadId } = req.params;
  console.log(squadId);
  Chat.findOne({ squadId: squadId }).then((data) => {
    res.json({ results: data })
  }).catch((err) => res.status(500).json({ error: "Not messages found", results: [] }))
})

router.post('/post', (req, res) => {
  const {
    squadId,
    _id,
    type,
    text,
    createdAt,
    member
  } = req.body;

  Chat.findOne({ squadId }).then((room) => {
    if (room) {
      const addMessage = {
        _id,
        type,
        text,
        member,
        createdAt
      }
      room.messages.push({ addMessage });
      room.save();
      res.json({ posted: true })
    }
    if (!room) {
      const newMessage = {
        squadId,
        messages: [{
          _id,
          type,
          text,
          member,
          createdAt
        }]

      };

      Chat.create(newMessage).then((room) => {
        if (room) res.json({ posted: true })
      }).catch((err) => {
        res.status(500).json({ error: `Post not saved: ${err}`, posted: false })
      })
    }
  }).catch((error) => {
    res.status(500).json({ error: "No Squad found", posted: false })
  })

})

module.exports = router;
