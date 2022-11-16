const express = require("express");
const Login = require("../config/models/Login");
const router = express.Router();

router.post('/login', (req, res) => {
    Login.find()
})
