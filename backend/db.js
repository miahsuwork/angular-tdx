var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "mia",
  password: "mia",
  database: "senior_angular_lab",
});

module.exports = connection;
