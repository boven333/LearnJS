const express = require("express");
const cors = require("cors");
const port = 3004;
const mysql = require("mysql2");
const app = express(); //app server

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "mydb",
  password: "root",
});
connection.connect((err) =>{
  if(!connection){
    console.log({msg : "Connected failed", err});
  } else {
    console.log({msg : "Connected"});
  }
})

app.get("/users", cors(), (req, res) => {
  const sql = "SELECT * FROM webapp.crud";
  connection.query(sql, function (err, results, fields) {
    console.log(results); // results contains rows returned by server
    res.send(results)
  }, []);
});


app.get("/test", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
