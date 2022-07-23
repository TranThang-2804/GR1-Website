var mysql = require('mysql');

var con = mysql.createConnection({
    host: "127.0.0.1",
    port: 3060,
    database: "mysql",
    user: "root",
    password: "12345"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});