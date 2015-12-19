var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

module.exports.dbconnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123",
    database: "chat"
  });

