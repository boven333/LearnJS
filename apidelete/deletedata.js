const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
var jsonParser = bodyParser.json();

// require .env
require("dotenv").config();
const PORT = process.env.PORT;
const HOST = process.env.DB_HOST;
const USER = process.env.DB_USER;
const PASSWORD = process.env.DB_PASSWORD;
const DATABASE = process.env.DB_NAME;
const TABLE = process.env.DB_TABLE;

const connection = mysql.createConnection({
  host: HOST,
  user: USER,
  database: DATABASE,
  password: PASSWORD,
});
connection.connect((err) => {
  if (!connection) {
    console.log({ msg: "Connected failed", err });
  } else {
    console.log({ msg: "Connected" });
  }
});

app.delete("/delete", jsonParser, (req, res) => {
  const sql = TABLE
  // Get the request body
  const reqBody = {
    id: req.body.id
  };

  connection.execute(sql, [reqBody.id], (err, results) => {
    if (err) {
      console.error("Error deleting user:", err);
      res.status(500).json({ error: "Failed to delete user" });
    } else {
      res.status(201).json({ message: "User has Deleted!" });
    }
  });
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
