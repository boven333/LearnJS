const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const app = express(); //app server

require('dotenv').config();
const PORT = process.env.PORT
const HOST = process.env.DB_HOST
const USER = process.env.DB_USER
const PASSWORD = process.env.DB_PASSWORD
const DATABASE = process.env.DB_NAME
const TABLE = process.env.DB_TABLE

const connection = mysql.createConnection({
  host: HOST,
  user: USER,
  database: DATABASE,
  password: PASSWORD,
});
connection.connect((err) =>{
  if(!connection){
    console.log({msg : "Connected failed", err});
  } else {
    console.log({msg : "Connected"});
  };
});

app.get("/users", cors(), (req, res) => {
  const sql = TABLE;
  connection.execute(sql, function (err, results, fields) {
    if (err) {
      console.error("Error getting user:", err);
      res.status(500).json({ error: "Failed to getting user" });
    } else {
      res.status(201).json({ message: "Get Users successfully" });
    }
  }, []);
});


app.get("/test", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
