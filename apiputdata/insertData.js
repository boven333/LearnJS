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

app.post("/inserts", jsonParser, (req, res) => {
  const sql =
    "INSERT INTO `webapp`.`crud` (`username`, `email`) VALUES (?, ?);";

  // Get the request body
  const reqBody = {
    username: req.body.username,
    email: req.body.email,
  };

  connection.query(sql, [reqBody.username, reqBody.email], (err, results) => {
    if (err) {
      // หากเกิดข้อผิดพลาดในการเพิ่มข้อมูล
      console.error("Error inserting user:", err);
      res.status(500).json({ error: "Failed to insert user" });
    } else {
      // หากเพิ่มข้อมูลผู้ใช้สำเร็จ
      res.status(201).json({ message: "User added successfully" });
    }
  });
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
