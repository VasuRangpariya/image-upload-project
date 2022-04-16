var mysql = require("mysql");
var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
connection.connect((error) => {
  if (!error) {
    console.log("Connected to database");
  } else {
    connection.end();
  }
});
module.exports = connection;
