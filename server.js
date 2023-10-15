const express = require('express');
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");


const PORT = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Sébastien");
});

app.listen(PORT, () => {
  console.log(`le serveur est lancé sur le port : ${PORT}`);
});

module.exports = app;
