var sql = require('../config/database.js');

var Purchase = function(purchase){
    this.id = purchase.id;
    this.full_name = purchase.full_name;
    this.email = purchase.email;
    this.item = purchase.item;
    this.quantity = purchase.quantity;
    this.price = price;
};

Purchase.getAllPurchase = function (result) {
    sql.query("SELECT * from purchases", function (err, res) {
            if(err) {
                console.log("error: ", err);
                result(null, err);
            } else {
                result(null, res);
            }
        });   
};

Purchase.getAllItems = function (result) {
    sql.query("SELECT DISTINCT item from purchases", function (err, res) {
            if(err) {
                console.log("error: ", err);
                result(null, err);
            } else {
                result(null, res);
            }
        });   
};

module.exports= Purchase;