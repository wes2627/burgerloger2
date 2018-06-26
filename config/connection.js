//{
  //  "development": {
   //   "username": "root",
   //   "password": "Steve2627!",
   //   "database": "burgers_db",
    //  "host": "127.0.0.1",
    //  "dialect": "mysql"
   // },
   // "test": {
    //  "use_env_variable": "JAWSDB_URL",
    //  "dialect": "mysql"
   // },
   // "production": {
   //   "use_env_variable": "JAWSDB_URL",
   //   "dialect": "mysql"
   // }
 // }

 var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Steve2627!",
  database: "burgers_db"
});


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


module.exports = connection;