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
const DELETE_TABLE = process.env.DB_DELETE_TABLE
const INSERT_TABLE = process.env.DB_INSERT_TABLE
const SELECT_TABLE = process.env.DB_GET_TABLE

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

// Get all users
app.get("/users", cors(), (req, res) => {
  const sql = DB_GET_TABLE;
  connection.execute(sql, function (err, results, fields) {
    if (err) {
      console.error("Error getting user:", err);
      res.status(500).json({ error: "Failed to getting user" });
    } else {
      res.status(201).json({ message: "Get Users successfully" });
    }
  }, []);
});

// ------------------------------------------------------------------------------


// Insert table;
app.post("/insert", jsonParser, (req, res) => {
  const sql = INSERT_TABLE

  // Get the request body
  const reqBody = {
    username: req.body.username,
    email: req.body.email,
  };

  connection.execute(sql, [reqBody.username, reqBody.email], (err, results) => {
    if (err) {
      console.error("Error inserting user:", err);
      res.status(500).json({ error: "Failed to insert user" });
    } else {
      res.status(201).json({ message: "User added successfully" });
    }
  });
});
// ------------------------------------------------------------------------------

// Updata table
app.delete("/delete", jsonParser, (req, res) => {
  const sql = DELETE_TABLE 
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
// ------------------------------------------------------------------------------

// Delete table;
app.delete("/delete", jsonParser, (req, res) => {
  const sql = DELETE_TABLE 
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


app.get("/test", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
