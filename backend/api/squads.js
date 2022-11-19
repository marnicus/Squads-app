const { Router } = require("express");
const express = require("express");
const Squad = require("../config/models/Squads");
const router = express.Router();

router.get("/test", (req, res) => res.send("Squads route testing!"));

router.get("/:memberId", (req, res) => {
  const { memberId } = req.params;
  Squad.find({ "members._id": memberId })
    .then((squads) => res.json(squads))
    .catch((err) => res.status(404).json({ error: "No Squads found" }));
});

router.post("/", (req, res) => {
  const { id } = req.body;
  Squad.findById(id).then((squad) => {
    if (!squad) {
      Squad.create(req.body)
        .then((squad) => res.json({ msg: "Squad successfully created", squad }))
        .catch((err) =>
          res.status(400).json({ error: "Unable to create squad" })
        );
    }
  });
});

module.exports = router;
