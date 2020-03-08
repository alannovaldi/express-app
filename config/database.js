// DB Connection
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "express-app"
});

con.connect(function (err){
    if(err){
        console.log('Could not connect to the database. Exiting now...', err);
        process.exit();
    };
});

module.exports = con;