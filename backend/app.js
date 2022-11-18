const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const bodyParser = require('body-parser');
const app = express();
const authRouter = require('./api/auth');
const memberRouter = require('./api/member');
const squadsRouter = require('./api/squads')
connectDB();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => res.send("Hello world!"));

app.use("/api/auth", authRouter);
app.use('/api/member', memberRouter);
app.use('/api/squads', squadsRouter);


const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
