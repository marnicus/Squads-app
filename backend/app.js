const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const app = express();

connectDB();

app.use(cors());

app.get("/", (req, res) => res.send("Hello world!"));

app.post("/createMember", (req, res) => {});

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
