const express = require("express");
const bcrypt = require("bcryptjs");
const Member = require("../config/models/Member");
const Join = require("../config/models/Join");
const router = express.Router();

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  Member.findOne({ email: email }).then((member) => {
    bcrypt.compare(password, member.password, function (err, result) {
      // result == true
      if (result) {
        res.json({ result: true, member });
      }

      if (!result) {
        res.json({ result: false, member: null });
      }
    });
  });
});

router.post("/join", (req, res) => {
  const { id, firstName, lastName, email, password, profilePic } = req.body;

  bcrypt.hash(password, 5, function (err, hash) {
    if (err) {
      console.log(err);
      return res.status(400).json({ error: "Something went wrong try again" });
    }
    // Store hash in your password DB.
    const newMember = {
      id,
      firstName,
      lastName,
      email,
      password: hash,
      profilePic,
    };
    Member.create(newMember)
      .then((member) => res.json({ result: true, member }))
      .catch((err) => {
        console.log(err);
        res.status(400).json({ error: "Unable to add member", result: false });
      });
  });
});

module.exports = router;
