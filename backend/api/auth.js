const { joinPaths } = require("@remix-run/router");
const express = require("express");
const Member = require("../config/models/Member");
const Join = require('../config/models/Join');
const router = express.Router();

router.post('/login', (req, res) => {
    const { email, password } = req.body;
    Member.findOne({ email: email }).then((member) => {
        bcrypt.compare(password, member.password, function (err, result) {
            // result == true
            if (result) {
                res.json({ result: true });
            }

            if (!result) {
                res.json({ result: false });
            }
        });
    })
});

router.post('/join', (req, res) => {
    const { fullName, email, password, profilePic } = req.body;
    bcrypt.hash(password, saltRounds, function (err, hash) {
        // Store hash in your password DB.
        const newMember = {
            fullName,
            email,
            password: hash,
            profilePic,
        }
        Member.create(newMember).then((member) => res.json({ result: true }))
            .catch((err) => res.status(400).json({ error: "Unable to add this book", result: false }));
    });

})
