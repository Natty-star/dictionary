const express = require("express");
const app = express();
const path = require("path");

const db = require("./word.js");

db.connect((err) => {
  if (err) throw err;
  console.log("MySql connected...");
});

app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public", "/dict.html"));
});

app.get("/word", (req, res) => {
  var inputWord = req.query.word;
  // console.log(req.params);
  // console.log(inputWord);
  var sql = `SELECT * FROM entries WHERE word = '${inputWord}'`;
  db.query(sql, (err, results) => {
    if (err) throw err;
    //console.log(results);
    res.send(results);
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running...");
});
