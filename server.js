const express = require('express');

// create express app
const app = express();

// DB Connection
// var mysql = require('mysql');
// var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "express-app"
// });

// con.connect(function (err){
//     if(err){
//         console.log('Could not connect to the database. Exiting now...', err);
//         process.exit();
//     };
// });

app.set('view engine','jade');

var purchaseController = require('./controller.js');
app.get('/', (req, res) => {
    purchaseController.index(req, res);
});
app.get('/reverse', (req, res) => {
    purchaseController.reverse(req, res);
});

// require('./routes/purchase.routes.js')(app);

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});