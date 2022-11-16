const { Router } = require("express");
const express = require("express");
const Squad = require("../config/models/Squads");
const router = express.Router();

router.get("/test", (req, res) => res.send("Squads route testing!"));

router.get("/", (req, res) => {
  Squad.find()
    .then((squads) => res.json(squads))
    .catch((err) =>
      res.status(404).json({ nomembersfound: "No Squads found" })
    );
});

router.post("/", (req, res) => {
  Squad.create(req.body)
    .then((sqaud) => res.json({ msg: "Squad successfully created" }))
    .catch((err) => res.status(400).json({ error: "Unable to create squad" }));
});

module.exports = router;
