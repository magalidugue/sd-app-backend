const express = require("express");
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mysql = require("mysql");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "SDVITRAIL",
  socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
});

connection.connect((err) => {
  if (err) {
    console.log("Erreur de connection : " + err);
    return;
  }
  console.log("Connexion réussi à la bdd");
});

app.get("/", (_req, res) => {
  res.send("Sébastien");
});

app.listen(PORT, () => {
  console.log(`le serveur est lancé sur le port : ${PORT}`);
});

module.exports = app;
