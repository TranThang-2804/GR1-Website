var mysql = require('mysql2');

var con = mysql.createConnection({
    host: 'localhost',
    port: 3360,
    database: 'mydb',
    user: 'root',
    password: '12345'
});

var result = con.query(
    'SELECT * FROM books',
    function(err, result, fields) {
        console.log(result);
        console.log(fields);
    }
);