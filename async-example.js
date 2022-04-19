var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "amoldb123",
  database: "temp"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM students", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
  console.log('Connected...');
});
console.log('This is how node js executes on single thread.');