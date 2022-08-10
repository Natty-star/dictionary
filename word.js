var mysql = require("mysql");

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "entries",
});

module.exports = db;

// db.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");
//   con.query("SELECT * FROM entries LIMIT 5", function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });
